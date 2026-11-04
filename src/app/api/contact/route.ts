import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

import { contactSchema } from '@/lib/validations/contact';
import {
  createAcknowledgementEmail,
  createAdminEmail,
} from '@/lib/email/contact-emails';

// export const runtime = 'nodejs';

// const resend = new Resend(process.env.RESEND_API_KEY);

// const redis = Redis.fromEnv();

// const ratelimit = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(5, '10 m'),
//   prefix: 'mcade:contact',
//   analytics: true,
// });

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const expectedOrigin = request.nextUrl.origin;
    const origin = request.headers.get('origin');

    if (origin && origin !== expectedOrigin) {
      return NextResponse.json(
        { message: 'Invalid request origin.' },
        { status: 403 },
      );
    }

    const contentType = request.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { message: 'Unsupported content type.' },
        { status: 415 },
      );
    }

    const contentLength = Number(request.headers.get('content-length') || 0);

    if (contentLength > 20_000) {
      return NextResponse.json(
        { message: 'Request is too large.' },
        { status: 413 },
      );
    }

    const body: unknown = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: 'Please check the information you submitted.',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = result.data;

    // Silently accept honeypot submissions without sending email.
    if (data.website) {
      return NextResponse.json({
        message: 'Your enquiry has been received.',
      });
    }

    const ip = getClientIp(request);

    const redis = Redis.fromEnv();

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 m'),
      prefix: 'mcade:contact',
      analytics: true,
    });

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          message:
            'Too many enquiries have been submitted. Please try again later.',
        },
        { status: 429 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // const { success } = await ratelimit.limit(ip);

    // if (!success) {
    //   return NextResponse.json(
    //     {
    //       message:
    //         'Too many enquiries have been submitted. Please try again later.',
    //     },
    //     { status: 429 },
    //   );
    // }

    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !from || !to) {
      console.error('Contact email configuration is incomplete.');

      return NextResponse.json(
        { message: 'The enquiry service is temporarily unavailable.' },
        { status: 503 },
      );
    }

    const adminEmail = createAdminEmail(data);

    const { data: adminResult, error: adminError } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: adminEmail.subject,
      html: adminEmail.html,
    });

    if (adminError || !adminResult?.id) {
      console.error('Admin enquiry email failed:', adminError);

      return NextResponse.json(
        { message: "We couldn't send your enquiry. Please try again." },
        { status: 502 },
      );
    }

    const acknowledgement = createAcknowledgementEmail(data);

    const { error: acknowledgementError } = await resend.emails.send({
      from,
      to: data.email,
      subject: acknowledgement.subject,
      html: acknowledgement.html,
    });

    if (acknowledgementError) {
      // The main enquiry was already delivered. Don't report the whole
      // submission as failed or encourage the visitor to submit again.
      console.error('Acknowledgement email failed:', acknowledgementError);
    }

    return NextResponse.json({
      message: 'Your enquiry has been received.',
    });
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}

import type { ContactFormData } from '@/lib/validations/contact';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function createAdminEmail(data: ContactFormData) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const company = escapeHtml(data.company || 'Not provided');
  const service = escapeHtml(data.service || 'Not specified');
  const budget = escapeHtml(data.budget || 'Not specified');
  const message = escapeHtml(data.message).replace(/\n/g, '<br />');

  return {
    subject: `New project enquiry from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; color: #1f2937;">
        <div style="background: #07182e; padding: 28px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">
            New project enquiry
          </h1>
          <p style="color: #a7fff3; margin-bottom: 0;">
            McAde Software website
          </p>
        </div>

        <div style="padding: 28px; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 12px 12px;">
          <h2 style="font-size: 17px;">Contact details</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Estimated budget:</strong> ${budget}</p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <h2 style="font-size: 17px;">Project details</h2>
          <p style="line-height: 1.8;">${message}</p>
        </div>
      </div>
    `,
  };
}

export function createAcknowledgementEmail(data: ContactFormData) {
  const name = escapeHtml(data.name);

  return {
    subject: "We've received your enquiry | McAde Software",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #1f2937;">
        <div style="background: #07182e; padding: 28px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 23px;">
            Thank you for reaching out.
          </h1>
          <p style="color: #a7fff3; margin-bottom: 0;">
            McAde Software
          </p>
        </div>

        <div style="padding: 28px; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 12px 12px;">
          <p>Hello ${name},</p>

          <p style="line-height: 1.8;">
            Thank you for contacting McAde Software. We've successfully
            received your enquiry and appreciate you taking the time to
            tell us about your project.
          </p>

          <p style="line-height: 1.8;">
            We'll review the details and get back to you within
            1–2 business days.
          </p>

          <p style="line-height: 1.8;">
            We look forward to exploring how technology can move
            your business forward.
          </p>

          <p style="margin-top: 28px;">
            Best regards,<br />
            <strong>McAde Software</strong><br />
            Technology That Moves Business Forward.
          </p>
        </div>
      </div>
    `,
  };
}

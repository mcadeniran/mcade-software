
import type {Metadata} from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | McAde Software",
  description:
    "Have a project in mind? Contact McAde Software to discuss web development, mobile applications, backend systems and custom software solutions.",
  openGraph: {
    title: "Contact McAde Software",
    description:
      "Tell us about your project and discover how the right technology can move your business forward.",
  },
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    description: "Reach out to discuss your project.",
    value: "hello@mcadesoftware.com",
    href: "mailto:hello@mcadesoftware.com",
  },
  {
    icon: MessageCircle,
    title: "Project enquiries",
    description: "Have an idea or a business challenge?",
    value: "Use the enquiry form",
    href: "#enquiry-form",
  },
  {
    icon: Clock3,
    title: "Response time",
    description: "We aim to respond to enquiries promptly.",
    value: "Within 1–2 business days",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="dark-section relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-130 w-130 rounded-full bg-mcade-teal/10 blur-[130px]"
        />

        <div className="container-mcade pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-mcade-teal/30 bg-mcade-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mcade-teal">
              <span className="h-2 w-2 rounded-full bg-mcade-teal" />
              Contact McAde Software
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-7xl">
              {"Let's"} talk about what you want to{" "}
              <span className="gradient-text">build.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Whether you have a detailed project brief or just an early idea,
              {"we'd"} love to hear about it. Tell us what {"you're"} thinking, and
              {"let's"} explore the possibilities.
            </p>

            <Link
              href="#enquiry-form"
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-mcade-teal transition hover:text-mcade-teal-hover"
            >
              Start your enquiry
              <ArrowDownRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact details and form */}
      <section
        id="enquiry-form"
        className="dark-section scroll-mt-24 pb-24"
      >
        <div className="container-mcade">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <aside>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mcade-teal">
                Get in touch
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Tell us a little about your next big idea.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Share your goals, the challenges {"you're"} facing or the solution
                {"you're"} hoping to create. {"We'll"} take it from there.
              </p>

              <div className="mt-10 space-y-7">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-mcade-teal">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/50">
                          {item.description}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-mcade-teal transition hover:text-mcade-teal-hover"
                          >
                            {item.value}
                            <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <p className="mt-2 text-sm font-semibold text-white/80">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-white/3 p-6">
                <p className="text-sm font-semibold text-white">
                  Not sure which service you need?
                </p>
                <p className="mt-2 text-sm leading-7 text-white/55">
                  {"That's"} completely fine. Tell us about the problem, and we can
                  help you explore an appropriate technical direction.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mcade-teal hover:text-mcade-teal-hover"
                >
                  Explore our services
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </aside>

            <div className="gradient-border rounded-3xl bg-mcade-card/60 p-6 sm:p-9 lg:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Send us an enquiry
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  Fields marked with an asterisk are required. The more detail
                  you share, the better we can understand your needs.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="light-section section-padding">
        <div className="container-mcade text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Your next step starts here
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-mcade-navy sm:text-4xl">
            Every great solution starts with a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-mcade-graphite/70">
            {"Let's"} turn your ideas into something useful, purposeful and
            built to last.
          </p>

          <a
            href="mailto:hello@mcadesoftware.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-mcade-navy px-7 py-4 text-sm font-bold text-white transition hover:bg-mcade-navy-light"
          >
            Email McAde Software
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

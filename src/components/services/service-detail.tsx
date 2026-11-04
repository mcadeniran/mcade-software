
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {Reveal} from "@/components/shared/reveal";
import {SectionHeading} from "@/components/shared/section-heading";

type Service = (typeof import("@/data/services").services)[number];

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({
  service,
}: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#07182E] py-24 text-white lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-137.5 w-137.5 rounded-full bg-[#06C7B7]/10 blur-[130px]"
        />

        <div className="container-mcade relative">
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#06C7B7]"
          >
            <ArrowRight
              size={16}
              className="rotate-180"
            />
            All Services
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#06C7B7]/20 bg-[#06C7B7]/10 text-[#06C7B7]">
                  <Icon size={30} />
                </div>

                <p className="text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
                  MCADE SOFTWARE SERVICES
                </p>

                <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                  {service.title}
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                  {service.introduction}
                </p>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] transition-colors hover:bg-[#00DCC5]"
                >
                  Discuss Your Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-wider text-[#06C7B7] uppercase">
                  OUR APPROACH
                </p>

                <h2 className="mt-5 text-2xl font-semibold">
                  Technology designed around your goals.
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-400">
                  {service.longDescription}
                </p>

                <div className="mt-8 space-y-4">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-[#06C7B7]"
                      />

                      <span className="text-sm text-slate-200">
                        {benefit.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="light-section section-padding">
        <div className="container-mcade">
          <SectionHeading
            eyebrow="WHAT WE DELIVER"
            title="Solutions That Make a Difference."
            description={service.longDescription}
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={index * 0.07}
                >
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06C7B7]/10 text-[#078F86]">
                      <BenefitIcon size={23} />
                    </div>

                    <h3 className="mt-6 font-semibold text-[#082B55]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section section-padding">
        <div className="container-mcade">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Clear Path From Idea to Delivery."
            description="Every engagement follows a structured approach tailored to the project's requirements."
            theme="dark"
          />

          <div className="mx-auto mt-16 max-w-3xl space-y-5">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <div className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/3 p-5">
                  <span className="font-mono text-sm text-[#06C7B7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-medium text-slate-200">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="light-section section-padding">
        <div className="container-mcade">
          <SectionHeading
            eyebrow="OUR TECHNOLOGY STACK"
            title="Built With the Right Tools."
            description="We select technologies according to the needs, complexity and long-term objectives of each project."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#082B55]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="light-section section-padding">
        <div className="container-mcade max-w-4xl">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions."
            description="Some common questions about this service."
          />

          <div className="mt-12 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#082B55]">
                  {faq.question}

                  <span className="text-xl text-[#078F86] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section">
        <div className="container-mcade py-20 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {"Let's"} Build Something Meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us what you have in mind. {"Let's"} explore
            how McAde can help bring your ideas to life.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] hover:bg-[#00DCC5]"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

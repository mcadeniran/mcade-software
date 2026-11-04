
import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {Reveal} from "@/components/shared/reveal";
import {SectionHeading} from "@/components/shared/section-heading";
import {services} from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore mobile application development, web development, backend engineering and custom software services from McAde Software.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#07182E] py-24 text-white lg:py-32">
        <div className="container-mcade">
          <p className="text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
            OUR SERVICES
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Technology Solutions for{" "}
            <span className="gradient-text">
              Real Business Challenges.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We combine engineering expertise and
            modern technologies to create digital
            solutions that help businesses move forward.
          </p>
        </div>
      </section>

      <section className="light-section section-padding">
        <div className="container-mcade">
          <SectionHeading
            eyebrow="WHAT WE OFFER"
            title="How We Can Help."
            description="Explore our services and discover how we can support your next digital project."
            align="left"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.slug}
                  delay={index * 0.06}
                >
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[#06C7B7]/50 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06C7B7]/10 text-[#078F86]">
                      <Icon size={26} />
                    </div>

                    <h2 className="mt-7 text-xl font-semibold text-[#082B55]">
                      {service.title}
                    </h2>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#078F86]">
                      Learn More
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

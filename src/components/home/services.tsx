import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import {services} from "@/data/services";
import {SectionHeading} from "@/components/shared/section-heading";
import {Reveal} from "@/components/shared/reveal";

export function Services() {
  return (
    <section className="light-section section-padding">
      <div className="container-mcade">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Solutions Built Around Your Business."
          description="From mobile applications to custom business platforms, we engineer digital solutions designed to solve real problems and create lasting value."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.href}
                delay={index * 0.07}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#06C7B7]/40 hover:shadow-xl hover:shadow-[#082B55]/5"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06C7B7]/10 text-[#078F86] transition-colors group-hover:bg-[#06C7B7] group-hover:text-[#07182E]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#082B55]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#078F86]">
                    Explore Service

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";

import {Reveal} from "@/components/shared/reveal";
import {SectionHeading} from "@/components/shared/section-heading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, challenges and requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We define the architecture, user experience and project roadmap.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We engineer your solution using appropriate technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Deploy",
    description:
      "We test, refine and deliver your software solution.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Support & Improve",
    description:
      "We maintain and improve your product as your business evolves.",
    icon: RefreshCw,
  },
];

export function Process() {
  return (
    <section className="light-section section-padding">
      <div className="container-mcade">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="From Idea to Impact."
          description="A thoughtful and collaborative approach to building software that delivers real value."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={index * 0.07}
              >
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082B55] text-[#06C7B7]">
                      <Icon size={24} />
                    </div>

                    <span className="font-mono text-sm text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#082B55]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

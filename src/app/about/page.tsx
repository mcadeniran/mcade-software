
import type {Metadata} from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | McAde Software",
  description:
    "Discover McAde Software — a software development company building thoughtful digital products and technology solutions that move businesses forward.",
  openGraph: {
    title: "About Us | McAde Software",
    description:
      "We turn business challenges into thoughtful digital solutions. Technology that moves business forward.",
  },
};

const values = [
  {
    icon: Target,
    title: "Purposeful by design",
    description:
      "Every solution should solve a real problem. We focus on understanding the goal before deciding how to build.",
  },
  {
    icon: Layers3,
    title: "Built to scale",
    description:
      "We value clean architecture, maintainable code and thoughtful technical decisions that support long-term growth.",
  },
  {
    icon: Lightbulb,
    title: "Continuous innovation",
    description:
      "Technology evolves, and so do we. We explore better approaches and use the right tools to deliver meaningful results.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and ownership",
    description:
      "We care about the details—from the user experience to the underlying engineering—and take responsibility for the work we deliver.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Digital product development",
    description:
      "Websites, web applications and mobile applications designed around real business needs.",
  },
  {
    icon: Workflow,
    title: "Software engineering",
    description:
      "Backend systems, integrations and custom software that bring business processes together.",
  },
  {
    icon: Layers3,
    title: "Technical strategy",
    description:
      "Practical guidance on architecture, technology choices and building for the future.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, your users and the problem you're trying to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, choose an appropriate technical approach and establish clear priorities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test and refine the solution with attention to usability, performance and quality.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We help you move forward with a solution that can be maintained, improved and expanded.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="dark-section relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-130 w-130 rounded-full bg-mcade-teal/10 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-60 -left-40 -z-10 h-105 w-105 rounded-full bg-blue-500/10 blur-[120px]"
        />

        <div className="container-mcade section-padding">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-mcade-teal/30 bg-mcade-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mcade-teal">
              <span className="h-2 w-2 rounded-full bg-mcade-teal" />
              About McAde Software
            </span>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-7xl">
              We build technology that{" "}
              <span className="gradient-text">moves business forward.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              We believe great software is more than code. It is a practical
              solution to a meaningful problem, an opportunity to work smarter
              and a foundation for what comes next.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-mcade-teal px-7 py-4 text-sm font-bold text-mcade-navy transition hover:bg-mcade-teal-hover"
              >
                {"Let's"} work together
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-mcade-teal/60 hover:bg-white/5"
              >
                Explore our work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-mcade-teal">
                Our focus
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Meaningful solutions
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-mcade-teal">
                Our approach
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Thoughtful engineering
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-mcade-teal">
                Our promise
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Technology that delivers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our perspective */}
      <section className="light-section section-padding">
        <div className="container-mcade grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Why we exist
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-mcade-navy sm:text-4xl md:text-5xl">
              Good technology should make a real difference.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-mcade-graphite/75">
            <p>
              Businesses face challenges that require more than off-the-shelf
              answers. They need technology that fits their operations,
              supports their customers and adapts as their needs change.
            </p>
            <p>
              McAde Software exists to help bridge that gap. We bring together
              thoughtful design, modern engineering and practical problem
              solving to create digital solutions with a clear purpose.
            </p>
            <p>
              Whether it is a new digital product, a business application or a
              custom software system, our focus remains the same: build
              something useful, reliable and ready for what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="dark-section section-padding">
        <div className="container-mcade">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mcade-teal">
              What we do
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Turning ideas into working solutions.
            </h2>
            <p className="mt-5 leading-8 text-white/60">
              We combine product thinking and software engineering to help
              businesses solve problems and create better digital experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="gradient-border rounded-2xl bg-mcade-card/60 p-7 transition duration-300 hover:-translate-y-1 hover:bg-mcade-card"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-mcade-teal/10 text-mcade-teal">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="light-section section-padding">
        <div className="container-mcade">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              What guides us
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-mcade-navy sm:text-4xl">
              Principles behind every solution.
            </h2>
            <p className="mt-5 leading-8 text-mcade-graphite/70">
              The way we approach a project matters just as much as the final
              product.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mcade-navy text-mcade-teal">
                    <Icon size={22} />
                  </div>

                  <div>
                    <span className="text-xs font-semibold tracking-widest text-teal-700">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-mcade-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-mcade-graphite/70">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="dark-section section-padding">
        <div className="container-mcade">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mcade-teal">
              How we work
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A clear path from challenge to solution.
            </h2>
            <p className="mt-5 leading-8 text-white/60">
              Good outcomes start with a considered process. We keep the work
              focused, collaborative and grounded in your goals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.number}
                className="border-t border-white/15 pt-6"
              >
                <span className="text-sm font-bold tracking-widest text-mcade-teal">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="light-section section-padding">
        <div className="container-mcade">
          <div className="relative isolate overflow-hidden rounded-3xl bg-mcade-navy px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-mcade-teal/20 blur-[100px]"
            />

            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mcade-teal">
                Have a project in mind?
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {"Let's"} build something that moves your business forward.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Tell us what {"you're"} working on. {"Let's"} explore how the right
                technology can help you get there.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-mcade-teal px-7 py-4 text-sm font-bold text-mcade-navy transition hover:bg-mcade-teal-hover"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

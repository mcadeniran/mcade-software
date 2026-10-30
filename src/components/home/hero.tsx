
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
} from "lucide-react";

import {Reveal} from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07182E] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full bg-[#06C7B7]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-blue-500/10 blur-[130px]"
      />

      <div className="container-mcade relative grid min-h-170 items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#06C7B7]/20 bg-[#06C7B7]/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#06C7B7]" />

              <span className="text-xs font-semibold tracking-[0.16em] text-[#8CEFE4]">
                SOFTWARE DEVELOPMENT & TECHNOLOGY
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Technology That{" "}
              <span className="gradient-text">
                Moves Business Forward.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We design, build and deliver innovative
              software solutions that help businesses grow,
              operate smarter and achieve more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] transition-all hover:-translate-y-0.5 hover:bg-[#00DCC5]"
              >
                Start a Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition-colors hover:border-[#06C7B7]/50 hover:bg-white/5"
              >
                Explore Our Work

                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Code2 size={16} className="text-[#06C7B7]" />
                Engineering Excellence
              </span>

              <span className="flex items-center gap-2">
                <Layers3 size={16} className="text-[#06C7B7]" />
                Scalable Solutions
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#06C7B7]/10 blur-[100px]"
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <span className="text-xs text-slate-500">
                  mcade.software
                </span>
              </div>

              <div className="py-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">
                      DIGITAL SOLUTIONS
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                      Build {"what's"} next.
                    </h2>
                  </div>

                  <div className="rounded-xl bg-[#06C7B7]/10 p-3 text-[#06C7B7]">
                    <Layers3 size={26} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4">
                    <div className="rounded-xl bg-[#06C7B7]/10 p-3 text-[#06C7B7]">
                      <Smartphone size={22} />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Mobile Applications
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Powerful digital experiences
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-[#06C7B7]"
                    />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4">
                    <div className="rounded-xl bg-[#06C7B7]/10 p-3 text-[#06C7B7]">
                      <Code2 size={22} />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Web & Business Systems
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Modern and scalable platforms
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-[#06C7B7]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-slate-400">
                  ENGINEERED FOR {"WHAT'S"} NEXT
                </span>

                <span className="text-xs font-semibold text-[#06C7B7]">
                  McAde Software
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
}

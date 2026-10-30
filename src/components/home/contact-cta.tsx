
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import {Reveal} from "@/components/shared/reveal";

export function ContactCTA() {
  return (
    <section className="dark-section relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#06C7B7]/10 blur-[130px]"
      />

      <div className="container-mcade relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
              {"LET'S"} BUILD SOMETHING GREAT
            </p>

            <h2 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an Idea?
              <br />

              <span className="gradient-text">
                {"Let's"} Make It Happen.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether {"you're"} launching a startup, growing
              your business or exploring a new digital
              product, McAde is ready to help.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-7 py-4 font-semibold text-[#07182E] transition-all hover:-translate-y-0.5 hover:bg-[#00DCC5]"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import {projects} from "@/data/projects";
import {Reveal} from "@/components/shared/reveal";
import {SectionHeading} from "@/components/shared/section-heading";

export function Projects() {
  return (
    <section className="dark-section section-padding">
      <div className="container-mcade">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title="Real Solutions. Meaningful Impact."
          description="Explore selected digital products and software solutions we've helped bring to life."
          theme="dark"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.1}
            >
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3">
                <div className="relative aspect-16/10 overflow-hidden bg-[#102C49]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold tracking-wider text-[#06C7B7] uppercase">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#06C7B7] hover:text-[#00DCC5]">
                    View Project
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition-colors hover:border-[#06C7B7]/50 hover:bg-white/5"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

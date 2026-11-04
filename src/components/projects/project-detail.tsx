import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import type {Project} from "@/data/projects";
import {SectionHeading} from "@/components/shared/section-heading";
import {Reveal} from "@/components/shared/reveal";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({
  project,
}: ProjectDetailProps) {
  return (
    <>
      <section className="bg-[#07182E] py-24 text-white lg:py-32">
        <div className="container-mcade">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#06C7B7]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <Reveal>
            <p className="mt-14 text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
              {project.category}
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] hover:bg-[#00DCC5]"
              >
                Visit Live Project
                <ExternalLink size={17} />
              </a>

              <span className="inline-flex items-center rounded-xl border border-white/15 px-5 py-4 text-sm text-slate-300">
                {project.status === "live"
                  ? "Live Project"
                  : project.status === "development"
                    ? "In Development"
                    : "Concept Project"}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark-section pb-20">
        <div className="container-mcade">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[#102C49]">
            <Image
              src={project.image}
              alt={`${project.title} application showcase`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="light-section section-padding">
        <div className="container-mcade">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              <Reveal>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#078F86] uppercase">
                    PROJECT OVERVIEW
                  </p>

                  <h2 className="mt-4 text-3xl font-bold text-[#082B55]">
                    About the Project
                  </h2>

                  <p className="mt-6 leading-8 text-slate-600">
                    {project.overview}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold text-[#082B55]">
                    The Challenge
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    {project.challenge}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold text-[#082B55]">
                    The Solution
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="text-2xl font-bold text-[#082B55]">
                    Development Contributions
                  </h2>

                  <div className="mt-6 space-y-4">
                    {project.contributions.map(
                      (contribution) => (
                        <div
                          key={contribution}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            className="mt-1 shrink-0 text-[#078F86]"
                          />

                          <p className="text-sm leading-7 text-slate-600">
                            {contribution}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-semibold text-[#082B55]">
                Project Information
              </h3>

              <div className="mt-7">
                <p className="text-xs text-slate-400">
                  CATEGORY
                </p>

                <p className="mt-2 text-sm font-medium text-[#082B55]">
                  {project.category}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs text-slate-400">
                  STATUS
                </p>

                <p className="mt-2 text-sm font-medium text-[#082B55]">
                  {project.status === "live"
                    ? "Live"
                    : project.status === "development"
                      ? "In Development"
                      : "Concept"}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs text-slate-400">
                  TECHNOLOGIES
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#07182E] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0B2340]"
              >
                Visit Website
                <ArrowUpRight size={17} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="dark-section section-padding">
        <div className="container-mcade text-center">
          <SectionHeading
            eyebrow="YOUR NEXT PROJECT"
            title="Let's Create Something Exceptional."
            description="Have a project in mind? Let's discuss how McAde can help turn your idea into a digital solution."
            theme="dark"
          />

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] hover:bg-[#00DCC5]"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

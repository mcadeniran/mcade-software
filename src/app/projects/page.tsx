
"use client";

import {useMemo, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";

import {projects} from "@/data/projects";

const categories = [
  "All Projects",
  "Travel & Transportation",
  "E-commerce",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      <section className="bg-[#07182E] py-24 text-white lg:py-32">
        <div className="container-mcade">
          <p className="text-xs font-bold tracking-[0.2em] text-[#06C7B7] uppercase">
            OUR PORTFOLIO
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Ideas Engineered Into{" "}
            <span className="gradient-text">
              Digital Experiences.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Explore selected projects that demonstrate
            our approach to software development,
            problem-solving and digital innovation.
          </p>
        </div>
      </section>

      <section className="light-section section-padding">
        <div className="container-mcade">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${active
                    ? "bg-[#07182E] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#06C7B7]"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                >
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
                    <p className="text-xs font-bold tracking-wider text-[#078F86] uppercase">
                      {project.category}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-4">
                      <h2 className="text-2xl font-semibold text-[#082B55]">
                        {project.title}
                      </h2>

                      <ArrowUpRight
                        size={22}
                        className="shrink-0 text-[#078F86] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-12 text-center text-slate-500">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

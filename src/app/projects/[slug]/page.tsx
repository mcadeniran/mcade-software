
import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {ProjectDetail} from "@/components/projects/project-detail";
import {projects} from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {slug} = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} Project`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | McAde Software`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const {slug} = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
}

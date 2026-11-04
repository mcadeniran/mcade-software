import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {ServiceDetail} from "@/components/services/service-detail";
import {services} from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {slug} = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | McAde Software`,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const {slug} = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetail service={service} />
    </main>
  );
}

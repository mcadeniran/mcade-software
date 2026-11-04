import type { MetadataRoute } from 'next';

import { services } from '@/data/services';
import { projects } from '@/data/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mcadesoftware.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/projects',
    '/about',
    '/insights',
    '/contact',
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/services/') || route.startsWith('/projects/')
          ? 0.8
          : 0.7,
  }));
}

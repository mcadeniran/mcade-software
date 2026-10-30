export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'Kipgoo',
    category: 'Travel & Transportation',
    description:
      'A multi-service travel and transportation platform connecting users with mobility and travel services.',
    technologies: ['Next.js', 'Flutter', 'Firebase'],
    href: 'https://kipgoo.com',
    image: '/projects/kipgo.png',
    featured: true,
  },
  {
    title: 'Al-Fadlabi Perfume',
    category: 'E-commerce',
    description:
      'A modern online perfume storefront built to deliver an elegant shopping experience.',
    technologies: ['Next.js', 'PostgreSQL', 'Supabase'],
    href: 'https://www.alfadlabiperfume.com/en',
    image: '/projects/alfadlabi.png',
    featured: true,
  },
];

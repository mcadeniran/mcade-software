export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  websiteUrl: string;
  image: string;
  featured: boolean;
  status: 'live' | 'development' | 'concept';
};

export const projects: Project[] = [
  {
    slug: 'kipgoo',
    title: 'Kipgoo',
    category: 'Travel & Transportation',

    description:
      'A multi-service travel and transportation platform connecting users with mobility and travel services.',

    overview:
      'Kipgoo is a digital travel and transportation platform with a web application, mobile application and administrative systems.',

    challenge:
      'The platform requires multiple service areas to work together while providing users with accessible digital experiences and administrators with tools for managing operations.',

    solution:
      'A multi-platform solution combining a Next.js web application, Flutter mobile application and administrative dashboard. The web ecosystem uses server-side Next.js functionality, with Firebase supporting authentication and data-related services.',

    contributions: [
      'Web application development using Next.js',
      'Server-side functionality and application workflows',
      'Administrative dashboard development',
      'Mobile application development using Flutter',
      'Firebase integration',
    ],

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Flutter',
      'Dart',
      'Firebase',
      'Tailwind CSS',
    ],

    websiteUrl: 'https://kipgoo.com',
    image: '/projects/kipgo.png',
    featured: true,
    status: 'live',
  },

  {
    slug: 'al-fadlabi-perfume',
    title: 'Al-Fadlabi Perfume',
    category: 'E-commerce',

    description:
      'A modern online perfume storefront designed to provide customers with an elegant digital shopping experience.',

    overview:
      'Al-Fadlabi Perfume is a freelance e-commerce website project built to establish an online storefront for a perfume business.',

    challenge:
      'The business needed a dedicated online storefront that presents its perfume products through a modern and accessible shopping experience.',

    solution:
      'A Next.js-powered e-commerce website using PostgreSQL through Supabase for its data layer.',

    contributions: [
      'Freelance website development',
      'Frontend implementation using Next.js',
      'PostgreSQL database integration through Supabase',
      'Online storefront implementation',
    ],

    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],

    websiteUrl: 'https://www.alfadlabiperfume.com/en',

    image: '/projects/alfadlabi.png',
    featured: true,
    status: 'live',
  },
];

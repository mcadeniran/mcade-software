import {
  Smartphone,
  Monitor,
  Database,
  Workflow,
  Headset,
  Code2,
  ShieldCheck,
  Gauge,
  Layers3,
} from 'lucide-react';

export const services = [
  {
    slug: 'mobile-development',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Development',
    description:
      'We build intuitive, high-performance Android and iOS applications that deliver exceptional user experiences.',
    introduction:
      'Bring your ideas to life with powerful mobile applications designed around your users and business objectives.',
    longDescription:
      'From customer-facing applications to complex business platforms, we engineer mobile experiences that are reliable, scalable and built for real-world use.',
    href: '/services/mobile-development',
    icon: Smartphone,
    color: 'teal',
    benefits: [
      {
        title: 'Android & iOS Applications',
        description:
          'Build applications for the platforms your customers use every day.',
        icon: Smartphone,
      },
      {
        title: 'Cross-platform Development',
        description:
          'Deliver consistent experiences across multiple platforms with efficient development.',
        icon: Layers3,
      },
      {
        title: 'API & Backend Integration',
        description:
          'Connect mobile applications to secure APIs, databases and business systems.',
        icon: Database,
      },
      {
        title: 'Performance & Reliability',
        description:
          'Create responsive applications with careful attention to performance and stability.',
        icon: Gauge,
      },
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST APIs',
      'Provider',
      'GetX',
    ],
    process: [
      'Requirements and product discovery',
      'Application architecture and UI planning',
      'Mobile development and API integration',
      'Testing and quality assurance',
      'Store preparation and deployment',
      'Maintenance and improvements',
    ],
    faqs: [
      {
        question: 'Can you build applications for both Android and iOS?',
        answer:
          "Yes. We can develop cross-platform applications that support Android and iOS, depending on the project's requirements.",
      },
      {
        question: 'Can you integrate an existing backend?',
        answer:
          'Yes. We can integrate applications with existing APIs, authentication services, databases and third-party platforms.',
      },
      {
        question: 'Do you support application deployment?',
        answer:
          'Yes. We can assist with preparing applications for publication on the Google Play Store and Apple App Store.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    description:
      'Modern websites, web applications and e-commerce platforms engineered for performance and growth.',
    introduction:
      'Establish a powerful digital presence with modern websites and web applications designed to support your business.',
    longDescription:
      'We create responsive websites, interactive web applications and digital platforms that combine thoughtful design with reliable engineering.',
    href: '/services/web-development',
    icon: Monitor,
    color: 'teal',
    benefits: [
      {
        title: 'Business Websites',
        description:
          'Professional websites that communicate your value and help customers discover your business.',
        icon: Monitor,
      },
      {
        title: 'Web Applications',
        description:
          'Interactive platforms designed around complex workflows and business requirements.',
        icon: Code2,
      },
      {
        title: 'E-commerce Solutions',
        description:
          'Online storefronts and shopping experiences built around your products and customers.',
        icon: Workflow,
      },
      {
        title: 'SEO & Performance',
        description:
          'Search-friendly, responsive and performance-conscious web experiences.',
        icon: Gauge,
      },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Firebase',
    ],
    process: [
      'Discovery and requirements',
      'Website structure and visual design',
      'Frontend and backend development',
      'Content integration and optimisation',
      'Testing and deployment',
      'Ongoing improvements',
    ],
    faqs: [
      {
        question: 'Can you build a website for an existing business?',
        answer:
          'Yes. We can build a new website or improve an existing digital presence based on your business objectives.',
      },
      {
        question: 'Do you develop e-commerce websites?',
        answer:
          'Yes. We develop online storefronts and e-commerce platforms with product catalogues, shopping workflows and appropriate integrations.',
      },
      {
        question: 'Will my website work on mobile devices?',
        answer:
          'Yes. Responsive design is part of our development approach, ensuring websites adapt to mobile, tablet and desktop screens.',
      },
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend & API Engineering',
    shortTitle: 'Backend Engineering',
    description:
      'Reliable APIs, data systems and backend infrastructure that power secure and scalable applications.',
    introduction:
      'Build a dependable foundation for your digital products with backend systems engineered for performance and reliability.',
    longDescription:
      'We develop server-side functionality, application integrations and data-driven systems that power modern digital products.',
    href: '/services/backend-development',
    icon: Database,
    color: 'teal',
    benefits: [
      {
        title: 'API Development',
        description:
          'Build structured APIs that connect applications and external services.',
        icon: Code2,
      },
      {
        title: 'Database Architecture',
        description:
          'Organise application data with appropriate database structures and access patterns.',
        icon: Database,
      },
      {
        title: 'System Integration',
        description:
          'Connect third-party services and existing business applications.',
        icon: Workflow,
      },
      {
        title: 'Security & Reliability',
        description:
          'Implement appropriate validation, access controls and dependable server-side workflows.',
        icon: ShieldCheck,
      },
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Firebase',
      'Supabase',
      'REST APIs',
      'GraphQL',
    ],
    process: [
      'Backend requirements analysis',
      'Data modelling and architecture',
      'API and server-side development',
      'Integration and validation',
      'Testing and deployment',
      'Monitoring and maintenance',
    ],
    faqs: [
      {
        question: 'Can you build a backend for an existing application?',
        answer:
          'Yes. We can develop new backend services or integrate with an existing application architecture.',
      },
      {
        question: 'Do you work with existing databases?',
        answer:
          'Yes. We can work with suitable existing database systems or help plan a new data architecture.',
      },
      {
        question: 'Can you integrate third-party APIs?',
        answer:
          'Yes. We can integrate payment services, authentication providers and other external platforms where appropriate.',
      },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Solutions',
    shortTitle: 'Custom Software',
    description:
      'Purpose-built business applications, booking platforms and operational systems tailored to your needs.',
    introduction:
      'Your business processes deserve software designed around the way your organisation actually works.',
    longDescription:
      'We develop tailored software solutions that help organisations manage operations, streamline workflows and deliver better digital services.',
    href: '/services/custom-software',
    icon: Workflow,
    color: 'teal',
    benefits: [
      {
        title: 'Business Management Systems',
        description:
          'Digitise business operations and centralise important workflows.',
        icon: Layers3,
      },
      {
        title: 'Booking Platforms',
        description:
          'Build reservation and scheduling solutions for different business models.',
        icon: Workflow,
      },
      {
        title: 'Administrative Dashboards',
        description:
          'Manage users, operations and business information through organised interfaces.',
        icon: Monitor,
      },
      {
        title: 'Workflow Automation',
        description:
          'Reduce repetitive processes through appropriate software integrations and automation.',
        icon: Gauge,
      },
    ],
    technologies: [
      'Next.js',
      'Flutter',
      'TypeScript',
      'PostgreSQL',
      'Firebase',
      'REST APIs',
    ],
    process: [
      'Business process discovery',
      'Solution architecture',
      'Interface and workflow design',
      'Software development',
      'Testing and implementation',
      'Continuous improvement',
    ],
    faqs: [
      {
        question: 'Can you build software specifically for my business?',
        answer:
          'Yes. We begin by understanding your business processes and requirements before proposing an appropriate solution.',
      },
      {
        question: 'Can you build administrative dashboards?',
        answer:
          'Yes. We can develop dashboards for managing business operations, users, transactions and other application workflows.',
      },
      {
        question: 'Can the software grow with my business?',
        answer:
          'We consider maintainability, architecture and future requirements when designing custom software solutions.',
      },
    ],
  },
  {
    slug: 'consulting',
    title: 'Technology Consulting & Maintenance',
    shortTitle: 'Consulting & Maintenance',
    description:
      'Technical guidance, performance optimisation and ongoing software maintenance to keep your products moving.',
    introduction:
      'Make informed technology decisions and keep your existing digital products dependable.',
    longDescription:
      'We help businesses evaluate technology choices, improve existing applications and maintain software systems as their needs evolve.',
    href: '/services/consulting',
    icon: Headset,
    color: 'teal',
    benefits: [
      {
        title: 'Technical Consulting',
        description:
          'Get guidance on software architecture, technology selection and implementation strategies.',
        icon: Headset,
      },
      {
        title: 'Application Improvements',
        description:
          'Identify opportunities to improve existing software and development workflows.',
        icon: Gauge,
      },
      {
        title: 'Performance Optimisation',
        description:
          'Evaluate application performance and address technical bottlenecks.',
        icon: Code2,
      },
      {
        title: 'Ongoing Maintenance',
        description:
          'Keep software updated and maintainable through ongoing technical support.',
        icon: ShieldCheck,
      },
    ],
    technologies: [
      'Next.js',
      'Flutter',
      'TypeScript',
      'Firebase',
      'PostgreSQL',
      'Git',
    ],
    process: [
      'Technical assessment',
      'Identify priorities and risks',
      'Recommend improvements',
      'Implement agreed changes',
      'Validate and document',
      'Provide ongoing support',
    ],
    faqs: [
      {
        question: 'Can you maintain software developed by another team?',
        answer:
          'Yes. We can first review the existing architecture and codebase to understand its condition and maintenance requirements.',
      },
      {
        question: 'Can you help choose the right technology?',
        answer:
          'Yes. We can evaluate your requirements and recommend appropriate technologies and implementation approaches.',
      },
      {
        question: 'Do you provide ongoing technical support?',
        answer:
          'Yes. Support and maintenance arrangements can be discussed according to the needs and scope of each project.',
      },
    ],
  },
] as const;

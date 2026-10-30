import { Smartphone, Monitor, Database, Workflow, Headset } from 'lucide-react';

export const services = [
  {
    title: 'Mobile Application Development',
    description:
      'We build intuitive, high-performance Android and iOS applications that deliver exceptional user experiences.',
    href: '/services/mobile-development',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description:
      'Modern websites, web applications and e-commerce platforms engineered for performance and growth.',
    href: '/services/web-development',
    icon: Monitor,
  },
  {
    title: 'Backend & API Engineering',
    description:
      'Reliable APIs, data systems and backend infrastructure that power secure and scalable applications.',
    href: '/services/backend-development',
    icon: Database,
  },
  {
    title: 'Custom Software Solutions',
    description:
      'Purpose-built business applications, booking platforms and operational systems tailored to your needs.',
    href: '/services/custom-software',
    icon: Workflow,
  },
  {
    title: 'Consulting & Maintenance',
    description:
      'Technical guidance, performance optimisation and ongoing software maintenance to keep your products moving.',
    href: '/services/consulting',
    icon: Headset,
  },
] as const;

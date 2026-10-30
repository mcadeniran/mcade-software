import Link from "next/link";
import {cacheLife} from 'next/cache';
import {
  ArrowUpRight,
} from "lucide-react";
import {Icon} from "@iconify/react";

import {Logo} from "@/components/shared/logo";

const companyLinks = [
  {label: "About", href: "/about"},
  {label: "Projects", href: "/projects"},
  {label: "Insights", href: "/insights"},
  {label: "Contact", href: "/contact"},
];

async function getCurrentYear() {
  'use cache';
  cacheLife('max');
  return new Date().getFullYear();
}


const serviceLinks = [
  {
    label: "Mobile Development",
    href: "/services/mobile-development",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "Backend Engineering",
    href: "/services/backend-development",
  },
  {
    label: "Custom Software",
    href: "/services/custom-software",
  },
];

export async function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07182E] text-white">
      <div className="container-mcade py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" showTagline />

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              Technology That Moves Business Forward.
              We engineer digital solutions that help
              businesses grow and achieve more.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#06C7B7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-[#06C7B7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              {"Let's"} Connect
            </h3>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#06C7B7] hover:text-[#00DCC5]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-colors hover:border-[#06C7B7]/40 hover:text-[#06C7B7]"
              >
                {/* <Linkedin size={18} /> */}
                <Icon icon="fa-brands:linkedin-in" />
              </Link>

              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-colors hover:border-[#06C7B7]/40 hover:text-[#06C7B7]"
              >
                {/* <Github size={18} /> */}
                <Icon icon="fa-brands:github" />
              </Link>

              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-white/10 p-3 text-slate-400 transition-colors hover:border-[#06C7B7]/40 hover:text-[#06C7B7]"
              >
                {/* <Instagram size={18} /> */}
                <Icon icon="fa-brands:instagram" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {await getCurrentYear()} McAde Software.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Technology That Moves Business Forward.
          </p>
        </div>
      </div>
    </footer>
  );
}

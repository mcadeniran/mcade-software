
"use client";

import {useState} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {Logo} from "@/components/shared/logo";

const navigation = [
  {label: "Home", href: "/"},
  {label: "Services", href: "/services"},
  {label: "Projects", href: "/projects"},
  {label: "About", href: "/about"},
  {label: "Insights", href: "/insights"},
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07182E]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container-mcade flex h-19 items-center justify-between"
      >
        <Logo variant="light" />

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-[#06C7B7]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl bg-[#06C7B7] px-5 py-3 text-sm font-semibold text-[#07182E] transition-colors hover:bg-[#00DCC5] md:inline-flex"
        >
          {"Let's"} Talk
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={
            open ? "Close navigation" : "Open navigation"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#07182E] px-5 py-5 md:hidden"
        >
          <div className="container-mcade flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-slate-200 hover:text-[#06C7B7]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#06C7B7] px-5 py-3 font-semibold text-[#07182E]"
            >
              {"Let's"} Talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(26,26,36,0.07)] bg-[rgba(250,248,245,0.95)] backdrop-blur-2xl">
      <div className="container-page grid h-[86px] grid-cols-[44px_1fr_44px] items-center gap-3 lg:flex lg:justify-between lg:gap-4">
        <div className="hidden lg:block">
          <BrandLogo impact />
        </div>
        <div className="col-start-2 flex justify-center lg:hidden">
          <BrandLogo impact />
        </div>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : !link.href.includes("#") && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/quote" className="btn btn-primary min-h-10 px-4 py-2 text-sm">
            Get Quote
          </Link>
        </div>
        <button
          type="button"
          className="col-start-3 grid h-11 w-11 place-items-center rounded-lg border border-[var(--gray-100)] bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-5 bg-[var(--charcoal)] shadow-[0_7px_0_var(--charcoal),0_-7px_0_var(--charcoal)]" />
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--gray-100)] bg-[var(--warm-white)] lg:hidden">
          <nav className="container-page grid gap-2 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-lg px-3 py-3 font-extrabold transition hover:bg-[var(--orange-tint)] hover:text-[var(--orange)]" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/quote" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
              Get Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

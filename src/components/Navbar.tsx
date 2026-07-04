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
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <BrandLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = link.href !== "/" && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--gray-500)] transition hover:bg-[var(--orange-tint)] hover:text-[var(--orange)]"
                style={active ? { background: "var(--orange-tint)", color: "var(--orange)" } : undefined}
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
          className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--gray-100)] bg-white lg:hidden"
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
              <Link key={link.label} href={link.href} className="rounded-lg px-3 py-3 font-semibold" onClick={() => setOpen(false)}>
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

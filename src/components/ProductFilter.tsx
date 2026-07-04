"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { productGroups } from "@/lib/data";

const filters = [
  ["all", "All Products"],
  ["onboarding", "Employee Onboarding"],
  ["apparel", "Corporate Apparel"],
  ["office", "Office Essentials"],
  ["event", "Event Merch"],
  ["gifts", "Premium Gifts"],
  ["printing", "Printing"],
] as const;

export function ProductCatalogue() {
  const [active, setActive] = useState("all");
  const groups = productGroups.filter((group) => active === "all" || group.key === active);

  return (
    <>
      <div className="sticky top-[86px] z-30 overflow-hidden border-b border-[var(--gray-100)] bg-white/95 backdrop-blur-xl">
        <div className="container-page no-scrollbar flex gap-3 overflow-x-auto py-4">
          {filters.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className="shrink-0 rounded-full px-4 py-2 text-sm font-bold transition"
              style={active === key ? { background: "var(--charcoal)", color: "white" } : { background: "var(--gray-50)", color: "var(--gray-700)" }}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
          <select className="ml-auto hidden rounded-full border border-[var(--gray-100)] bg-white px-4 text-sm font-semibold text-[var(--gray-700)] md:block" aria-label="Sort products">
            <option>Sort by Procurement Fit</option>
            <option>Bulk Ready</option>
            <option>Fastest Delivery</option>
          </select>
        </div>
      </div>
      <section className="section-pad bg-[var(--warm-white)]">
        <div className="container-page grid gap-16">
          <div className="grid gap-4 rounded-lg border border-[var(--gray-100)] bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div>
              <span className="label">How ordering works</span>
              <p className="mt-2 text-sm leading-6 text-[var(--gray-500)] md:text-base">
                Pick products, open the quote form, share quantity, artwork, deadline, and delivery address. Dottee Plus sends a quote and artwork proof before production.
              </p>
            </div>
            <Link href="/quote" className="btn btn-primary px-8">
              Place Bulk Order
            </Link>
          </div>
          {active === "all" || active === "onboarding" ? <WelcomeFeature /> : null}
          {groups.map((group) => (
            <section key={group.key}>
              <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="font-mono-brand text-xs font-medium uppercase tracking-[0.14em]" style={{ color: group.color }}>
                    {group.number}
                  </span>
                  <h2 className="font-display mt-2 text-3xl font-extrabold md:text-4xl">{group.title}</h2>
                </div>
                <Link href="/quote" className="font-bold" style={{ color: group.color }}>
                  Request bulk quote -&gt;
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map(([name, spec, price, label], index) => (
                  <Link key={name} href="/quote" className="card overflow-hidden">
                    <div className="relative grid h-40 place-items-center bg-[linear-gradient(145deg,var(--orange-tint),var(--teal-tint))]">
                      {index === 0 ? (
                        <span className="absolute right-4 top-4 rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-bold text-white">POPULAR</span>
                      ) : null}
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-3xl font-black text-[var(--orange)]">{name.charAt(0)}</div>
                    </div>
                    <div className="p-5">
                      <span className="font-mono-brand text-[11px] uppercase tracking-[0.12em] text-[var(--teal-dark)]">{label}</span>
                      <h3 className="font-display mt-2 text-lg font-bold">{name}</h3>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--gray-500)]">{spec}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-[var(--gray-100)] pt-4 text-sm">
                        <strong className="font-display text-[var(--orange)]">{price}</strong>
                        <span className="font-semibold text-[var(--gray-500)]">Add to quote</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

function WelcomeFeature() {
  return (
    <div className="dot-grid grid gap-8 overflow-hidden rounded-[24px] bg-[var(--charcoal)] p-6 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10">
      <div>
        <span className="label text-[var(--teal)]">Featured employee welcome kit</span>
        <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
          Procurement-ready first-day kits.
        </h2>
        <p className="mt-5 max-w-xl leading-8 text-white/60">
          Bundle apparel, drinkware, stationery, ID accessories, inserts, and packaging into a cohesive employee onboarding experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Polo", "Bottle", "Notebook", "Pen", "ID accessories", "Mailer box"].map((chip) => (
            <span key={chip} className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold">
              {chip}
            </span>
          ))}
        </div>
        <div className="font-display mt-8 text-3xl font-extrabold text-[var(--orange)]">From Rs. 999/kit</div>
      </div>
      <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
        <Image
          src="/images/dottee-2026-welcome-kit.png"
          alt="Premium employee welcome kit with apparel, bottle, mug, notebook, pen, and lanyard"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

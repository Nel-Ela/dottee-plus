"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

const cropPositions = [
  "50% 50%",
  "18% 50%",
  "82% 48%",
  "50% 18%",
  "22% 82%",
  "78% 78%",
  "38% 58%",
] as const;

export function ProductCatalogue() {
  const [active, setActive] = useState("all");

  useEffect(() => {
    const sectionIds = productGroups.map((group) => `section-${group.key}`);
    const validKeys = new Set(productGroups.map((group) => group.key));

    const scrollToInitialHash = () => {
      const hashKey = window.location.hash.replace("#", "");
      if (!validKeys.has(hashKey)) return;

      const scrollToTarget = () => {
        const section = document.getElementById(`section-${hashKey}`);
        if (!section) return;

        setActive(hashKey);
        const top = section.getBoundingClientRect().top + window.scrollY - 150;
        window.scrollTo({ top, behavior: "auto" });
      };

      requestAnimationFrame(scrollToTarget);
      window.setTimeout(scrollToTarget, 250);
    };

    const updateActiveSection = () => {
      const start = document.getElementById("catalogue-start");
      if (start && start.getBoundingClientRect().top > 120) {
        setActive("all");
        return;
      }

      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .reverse()
        .find((section) => section!.getBoundingClientRect().top <= 170);

      if (current) {
        setActive(current.id.replace("section-", ""));
      }
    };

    updateActiveSection();
    scrollToInitialHash();
    const delayedHashScroll = window.setTimeout(scrollToInitialHash, 700);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", scrollToInitialHash);
    return () => {
      window.clearTimeout(delayedHashScroll);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", scrollToInitialHash);
    };
  }, []);

  const jumpToSection = (key: string) => {
    const targetId = key === "all" ? "catalogue-start" : `section-${key}`;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", key === "all" ? "/products" : `/products#${key}`);
    setActive(key);
  };

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
              onClick={() => jumpToSection(key)}
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
      <section id="catalogue-start" className="section-pad scroll-mt-36 bg-[var(--warm-white)]">
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
          <WelcomeFeature />
          {productGroups.map((group) => (
            <section key={group.key} id={`section-${group.key}`} className="scroll-mt-40">
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
                  <Link key={name} href="/quote" className="card group overflow-hidden">
                    <div className="relative h-48 overflow-hidden bg-[var(--gray-50)]">
                      <Image
                        src={group.image}
                        alt={`${name} for ${group.title}`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        style={{ objectPosition: cropPositions[index % cropPositions.length] }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,36,0)_42%,rgba(26,26,36,0.62)_100%)]" />
                      {index === 0 ? (
                        <span className="absolute right-4 top-4 rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-bold text-white">POPULAR</span>
                      ) : null}
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-xs font-black text-[var(--charcoal)] shadow-sm">
                        {label}
                      </span>
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
        <h2 className="font-display mt-3 text-2xl font-extrabold leading-tight md:text-4xl">
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

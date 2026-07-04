import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { BrandLogo, SectionHeading } from "@/components/ui/BrandLogo";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Dottee Plus, a corporate gifting and brand merchandise studio for welcome kits, apparel, event merchandise, and bulk delivery.",
};

const milestones = [
  ["Brief", "Understand the order", "We align on products, quantity, logo files, timeline, delivery city, and packaging needs."],
  ["Proof", "Mockup before print", "You review product colors, logo placement, print method, and kit contents before production."],
  ["Make", "Print and pack", "Orders move through sourcing, decoration, quality checks, packing, and dispatch coordination."],
  ["Ship", "Deliver with updates", "Bulk shipments and kit deliveries are coordinated with status visibility for your team."],
  ["Repeat", "Support reorder needs", "Approved specs make future team, event, and onboarding orders easier to repeat."],
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="dot-grid relative overflow-hidden bg-[var(--charcoal)] py-20 text-white md:py-28">
          <div className="absolute right-[-10%] top-[-20%] h-80 w-80 rounded-full bg-[rgba(255,92,26,0.32)] blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-[rgba(10,191,184,0.24)] blur-3xl" />
          <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="label text-[var(--teal)]">About Dottee Plus</span>
              <h1 className="font-display mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                Corporate gifting with <span className="text-[var(--orange)]">brand discipline</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                Dottee Plus turns welcome kits, corporate apparel, gifts, and event merchandise into organized brand programs with better product choices, cleaner mockups, careful printing, and dependable bulk-order execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Bulk Ready", "Artwork Proof", "Quality Check", "PAN-India"].map((stat, index) => (
                <div
                  key={stat}
                  className="float-card rounded-lg p-6"
                  style={{ background: index === 1 ? "var(--orange)" : index === 2 ? "var(--teal)" : "rgba(255,255,255,0.08)", animationDelay: `${index * 0.2}s` }}
                >
                  <strong className="font-display block text-2xl font-extrabold">{stat.split(" ")[0]}</strong>
                  <span className="text-sm font-semibold text-white/70">{stat.replace(stat.split(" ")[0], "").trim()}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--warm-white)]">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                label="Our mission"
                title="Make every branded product feel intentional."
                text="Companies remember how an order felt: the clarity of the quote, the quality of the mockup, the finish of the print, the way the kit arrives. We optimize all of it."
              />
              <div className="flex flex-wrap gap-3">
                {["48h Express", "4.9 Rating", "100% Satisfaction"].map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="dot-grid flex min-h-[280px] flex-col items-center justify-center rounded-lg bg-[var(--charcoal)] p-10 text-center text-white">
              <BrandLogo dark lockup="full" impact />
              <p className="mt-6 max-w-sm text-white/55">Premium merchandise for brands that care about details.</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--off-white)]">
          <div className="container-page">
            <SectionHeading label="Values" title="The standards behind every bulk order." center />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map(([title, text], index) => (
                <div key={title} className="card p-7" style={index === 1 ? { background: "var(--charcoal)", color: "white" } : index === 3 ? { background: "var(--orange)", color: "white" } : undefined}>
                  <div className="mb-5 grid h-13 w-13 place-items-center rounded-lg bg-[var(--orange-tint)] text-sm font-black text-[var(--orange)]">OK</div>
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7" style={index === 1 || index === 3 ? { color: "rgba(255,255,255,0.68)" } : { color: "var(--gray-500)" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--warm-white)]">
          <div className="container-page max-w-4xl">
            <SectionHeading label="Our journey" title="How we got here." center />
            <div className="relative ml-5 grid gap-10 border-l-2 border-[var(--orange)] pl-8">
              {milestones.map(([year, title, text]) => (
                <div key={year} className="relative">
                  <span className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-[var(--teal)] ring-4 ring-[var(--warm-white)]" />
                  <span className="font-mono-brand text-xs font-medium uppercase tracking-[0.14em] text-[var(--orange)]">{year}</span>
                  <h3 className="font-display mt-2 text-2xl font-bold">{title}</h3>
                  <p className="mt-2 leading-7 text-[var(--gray-500)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dot-grid bg-[var(--charcoal)] py-20 text-center text-white">
          <div className="container-page">
            <span className="label text-[var(--teal)]">Let&apos;s work together</span>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
              Your brand story starts with <span className="text-[var(--orange)]">one order.</span>
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/quote" className="btn btn-primary px-8">Get Free Quote</Link>
              <Link href="/products" className="btn btn-ghost-dark px-8">View Products</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

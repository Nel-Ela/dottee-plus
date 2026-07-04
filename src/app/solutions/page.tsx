import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/ui/BrandLogo";
import { categories, orderSteps, processSteps, useCases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Corporate Gifting Solutions",
  description:
    "Explore Dottee Plus solutions for welcome kits, custom apparel, events, office essentials, premium gifts, and branded packaging.",
};

const decisionCards = [
  ["For one event", "Fast attendee kits, badges, lanyards, booth gifts, staff tees, and delivery coordination."],
  ["For a team", "Department-wise apparel, onboarding kits, desk essentials, repeat specs, and artwork approval."],
  ["For clients", "Premium boxes, milestone gifts, festive hampers, packaging, inserts, and dispatch planning."],
];

export default function SolutionsPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="dot-grid relative overflow-hidden bg-[var(--charcoal)] py-20 text-white md:py-28">
          <div className="container-page grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-5 text-sm font-semibold text-white/45">
                <Link href="/">Home</Link> / Solutions
              </div>
              <span className="label text-[var(--teal)]">Choose by business moment</span>
              <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
                Branded merchandise programs, not loose product lists.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Plan the full requirement around your audience, quantity, deadline, logo placement, packaging, and delivery city before production starts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/products" className="btn btn-primary px-8">
                  View Products
                </Link>
                <Link href="/quote" className="btn btn-ghost-dark px-8">
                  Build Quote
                </Link>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
              <Image
                src="/images/dottee-2026-merch-program-hero.png"
                alt="Dottee Plus branded merchandise across apparel, mugs, bottles, caps, stickers, and gift packaging"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--warm-white)]">
          <div className="container-page">
            <SectionHeading
              label="Solution paths"
              title="Start from the use case. Then choose the products."
              text="Whether the buyer is an individual, a group, a school, a creator, or a company, Dottee Plus can turn logos, artwork, photos, or event ideas into production-ready merchandise."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {decisionCards.map(([title, text]) => (
                <Link key={title} href="/quote" className="card p-6">
                  <span className="label">Plan</span>
                  <h2 className="font-display mt-3 text-2xl font-extrabold">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{text}</p>
                  <span className="mt-6 inline-flex font-bold text-[var(--orange)]">Start brief -&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <SectionHeading
              label="What we build"
              title="Six practical solution families for custom merchandise."
              text="Each family can be ordered alone or combined into a complete brand program with mockups, printing, packing, and delivery."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categories.map(([name, desc, count, , image]) => (
                <Link key={name} href="/products" className="card overflow-hidden">
                  <div className="relative h-52 overflow-hidden bg-[var(--gray-50)]">
                    <Image
                      src={image}
                      alt={`${name} merchandise solution`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="label">{count}</span>
                    <h2 className="font-display mt-2 text-xl font-bold">{name}</h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">{desc}</p>
                    <span className="mt-4 inline-flex text-sm font-bold text-[var(--orange)]">See products -&gt;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--off-white)]">
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="label">Built for different buyers</span>
              <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                From one creator drop to a multi-location corporate rollout.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--gray-500)]">
                The same flow works for individuals, friend groups, clubs, colleges, event organizers, startups, HR teams, and procurement teams.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <Link key={item} href="/quote" className="card p-5">
                  <span className="font-mono-brand text-xs uppercase tracking-[0.14em] text-[var(--teal-dark)]">Audience</span>
                  <h3 className="font-display mt-2 text-xl font-bold">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                    Product mix, artwork, quantities, and delivery planned around the buyer’s exact moment.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--charcoal)] text-white">
          <div className="container-page">
            <SectionHeading
              label="Workflow"
              title="One clear procurement flow from browsing to order confirmation."
              text="Customers can place an order by choosing products, submitting a brief, approving the quote and artwork, then confirming production and delivery."
              center
            />
            <div className="grid gap-5 md:grid-cols-4">
              {orderSteps.map(([title, desc], index) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--orange)] font-display text-lg font-extrabold text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {processSteps.map(([title, desc], index) => (
                <div key={title} className="rounded-lg border border-white/10 p-5">
                  <span className="label text-[var(--teal)]">Production 0{index + 1}</span>
                  <h3 className="font-display mt-3 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

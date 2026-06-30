import Image from "next/image";
import Link from "next/link";
import { bestSellers, buyerQuestions, categories, printMethods, processSteps, proofPoints, useCases } from "@/lib/data";
import { SectionHeading } from "@/components/ui/BrandLogo";

const tone: Record<string, string> = {
  orange: "linear-gradient(145deg,var(--orange-tint),#ffd0b5)",
  teal: "linear-gradient(145deg,var(--teal-tint),#a8efec)",
  purple: "linear-gradient(145deg,var(--purple-tint),#c9a8f0)",
};

const industryBundles: Record<string, string[]> = {
  Technology: ["Welcome kit", "Hoodie", "Laptop sleeve", "Bottle", "Notebook", "Stickers", "Mouse pad"],
  Healthcare: ["Scrubs", "Lab coats", "ID cards", "Patient kits", "Bottles", "Staff uniforms"],
  Education: ["House T-shirts", "Sports jerseys", "Event tees", "Caps", "Certificates", "Bags"],
  Manufacturing: ["Safety jackets", "Uniforms", "ID accessories", "Caps", "Bottles", "Shift team merchandise"],
  Retail: ["Aprons", "Staff polos", "Caps", "Tote bags", "Name badges", "Packaging"],
  Events: ["Lanyards", "Badges", "T-shirts", "Tote bags", "Booth merchandise", "Gift kits"],
};

export function HeroSection() {
  return (
    <section className="hero-impact dot-grid relative overflow-hidden bg-[var(--charcoal)] text-white">
      <div className="idea-strip" aria-hidden="true">
        <span>WELCOME KITS</span>
        <span>CORPORATE GIFTS</span>
        <span>APPAREL</span>
        <span>EVENT MERCH</span>
        <span>OFFICE ESSENTIALS</span>
      </div>
      <div className="container-page hero-impact-grid">
        <div className="hero-impact-copy">
          <span className="hero-kicker">Corporate gifting and brand merchandise studio</span>
          <h1 className="hero-title">
            Corporate gifting that represents <span>your brand.</span>
          </h1>
          <p className="hero-lede">
            Premium welcome kits, branded apparel, office essentials, event merchandise, and custom gifts designed,
            printed, packed, and delivered for modern businesses.
          </p>
          <div className="hero-actions">
            <Link href="/quote" className="btn btn-primary px-8">
              Get Bulk Quote
            </Link>
            <Link href="/solutions" className="btn btn-ghost-dark px-8">
              Explore Corporate Solutions
            </Link>
          </div>
        </div>
        <div className="hero-impact-visual" aria-label="Custom merchandise preview">
          <div className="merch-stage">
            <Image
              src="/images/dottee-custom-everything-hero-4k.png"
              alt="Custom apparel, mugs, bottles, caps, bags, stickers, and welcome kit box arranged as a premium Dottee Plus merchandise set"
              fill
              priority
              sizes="(min-width: 1280px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <span className="stage-sticker sticker-logo">Welcome kits</span>
          <span className="stage-sticker sticker-photo">Apparel</span>
          <span className="stage-sticker sticker-kit">Gift boxes</span>
          <span className="stage-mark">+</span>
        </div>
      </div>
      <div className="container-page proof-line">
        {["50+ product types", "Bulk order support", "Artwork approval", "Quality check", "PAN-India delivery"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["HR teams", "Procurement", "Startups", "Schools", "Hospitals", "SMEs", "Event organizers", "Colleges"];
  return (
    <div className="overflow-hidden border-y border-[var(--gray-100)] bg-white py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="font-mono-brand text-sm uppercase tracking-[0.16em] text-[var(--gray-500)]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProductCategoryGrid() {
  return (
    <section id="solutions" className="section-pad bg-[var(--warm-white)]">
      <div className="container-page">
        <SectionHeading
          label="Corporate solutions"
          title="Corporate gifting solutions for every business moment."
          text="Move beyond item-by-item ordering. Build complete programs for onboarding, gifting, events, apparel, office essentials, and branded packaging."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(([name, desc, count, color, image]) => (
            <Link key={name} href="/products" className="card overflow-hidden">
              <div className="relative h-48 overflow-hidden" style={{ background: tone[color] }}>
                <Image
                  src={image}
                  alt={`${name} product mockup`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="label">{count}</span>
                <h3 className="font-display mt-2 text-xl font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">{desc}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-[var(--orange)]">Plan this solution -&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  return (
    <section className="bg-white py-8">
      <div className="container-page grid gap-4 md:grid-cols-4">
        {proofPoints.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-[var(--gray-100)] bg-[var(--warm-white)] p-5">
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BestSellersSection() {
  return (
    <section className="section-pad bg-[var(--off-white)]">
      <div className="container-page">
        <SectionHeading
          label="Employee welcome kits"
          title="First-day kits that feel planned, packed, and brand-ready."
          text="Give HR and founders a simple path from joining-kit idea to approved mockups, sourcing, packaging, and multi-location delivery."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {bestSellers.map(([name, text, price], index) => (
            <Link key={name} href="/quote" className="card p-6">
              <span className="label">Best seller 0{index + 1}</span>
              <h3 className="font-display mt-3 text-2xl font-extrabold">{name}</h3>
              <p className="mt-3 min-h-16 text-sm leading-7 text-[var(--gray-500)]">{text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[var(--gray-100)] pt-5">
                <strong className="font-display text-xl text-[var(--orange)]">{price}</strong>
                <span className="text-sm font-bold text-[var(--charcoal)]">Get quote -&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TShirtCustomizationSection() {
  const zones = ["Department polos", "Event tees", "Staff uniforms", "Hoodies", "Caps", "Packaging"];
  return (
    <section className="section-pad bg-[var(--off-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            label="Corporate apparel"
            title="Apparel programs for teams, departments, stores, and events."
            text="Choose fits, fabrics, print methods, and placement zones with production-ready mockups for every department and use case."
          />
          <div className="flex flex-wrap gap-3">
            {["Polos", "T-shirts", "Hoodies", "Jackets", "Uniforms", "Caps"].map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[24px] bg-[var(--charcoal)] p-6 text-white dot-grid">
          <div className="grid gap-4 sm:grid-cols-2">
            {zones.map((zone, index) => (
              <div key={zone} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <span className="font-display text-3xl font-extrabold text-[var(--orange)]">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{zone}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">Repeatable specs with artwork approval and production guidance.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandStudioSection() {
  return (
    <section id="studio" className="section-pad bg-[var(--charcoal)] text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="label text-[var(--teal)]">Brand Experience Studio</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Shape a complete merchandise program around your industry.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Choose an industry and see how Dottee Plus can combine apparel, gifting, office essentials, packaging, and delivery into one corporate program.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {useCases.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(industryBundles).map(([industry, bundle], index) => (
            <div key={industry} className="rounded-lg border border-white/10 bg-white/[0.06] p-5" style={index === 0 ? { background: "var(--orange)", color: "white" } : undefined}>
              <h3 className="font-display text-xl font-bold">{industry}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{bundle.join(" / ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrintingMethodsSection() {
  return (
    <section className="section-pad bg-[var(--warm-white)]">
      <div className="container-page">
          <SectionHeading label="Printing methods" title="The right finish for every fabric, logo, package, and order size." center />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {printMethods.map(([name, desc]) => (
            <div key={name} className="card p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--orange-tint)] text-lg font-black text-[var(--orange)]">
                +
              </div>
              <h3 className="font-display text-xl font-bold">{name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-[var(--off-white)]">
      <div className="container-page">
        <SectionHeading label="Procurement process" title="From brief to dispatch without the usual bulk-order chaos." center />
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map(([title, desc], index) => (
            <div key={title} className="relative rounded-2xl bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--orange)] font-display text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="font-display mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioAndCTA() {
  return (
    <section id="portfolio" className="section-pad bg-[var(--warm-white)]">
      <div className="container-page">
        <SectionHeading label="Portfolio preview" title="Built for corporate programs that need to look considered." />
        <div className="grid gap-5 md:grid-cols-3">
          {["Fintech onboarding kits", "Hospital staff apparel", "Conference merchandise"].map((item, index) => (
            <div key={item} className="card overflow-hidden">
              <div className="h-56" style={{ background: index === 0 ? tone.orange : index === 1 ? tone.teal : tone.purple }}>
                <div className="grid h-full place-items-center font-display text-5xl font-extrabold text-[var(--charcoal)]/20">0{index + 1}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">Mockups, production, packing, and delivery managed end to end.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventMerchandiseSection() {
  return (
    <section className="section-pad bg-[var(--warm-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            label="Event merchandise"
            title="Make every conference, fest, marathon, and brand activation feel coherent."
            text="Plan attendee kits, lanyards, badges, booth giveaways, staff apparel, totes, caps, and branded packaging in one workflow."
          />
          <Link href="/quote" className="btn btn-primary mt-2 px-8">
            Plan Event Merch
          </Link>
        </div>
        <div className="event-stack">
          {["Lanyards", "Badges", "Tote bags", "Caps", "Booth kits", "Event tees"].map((item, index) => (
            <div key={item} className="event-ticket" style={{ transform: `rotate(${index % 2 === 0 ? -1.4 : 1.4}deg)` }}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteCTASection() {
  return (
    <section className="dot-grid bg-[var(--charcoal)] py-20 text-center text-white">
      <div className="container-page">
        <span className="label text-[var(--teal)]">Get quote in 2 hours</span>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          Build a corporate gifting program your team can approve with confidence.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary px-8">
            Get Bulk Quote
          </Link>
          <Link href="/products" className="btn btn-ghost-dark px-8">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BuyerQuestionsSection() {
  return (
    <section className="section-pad bg-[var(--off-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="label">Buyer questions</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            The things every corporate buyer checks before ordering.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--gray-500)]">
            A premium site has to answer procurement questions before a buyer shares artwork, quantity, and a deadline. These answers make the quote flow feel safer and faster.
          </p>
        </div>
        <div className="grid gap-3">
          {buyerQuestions.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-[var(--gray-100)] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-display text-lg font-bold">
                {question}
                <span className="float-right text-[var(--orange)] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

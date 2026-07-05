import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { bestSellers, buyerQuestions, categories, contact, orderSteps, printMethods, processSteps, proofPoints, readyStock, useCases } from "@/lib/data";
import { hasFixedUnitPrice } from "@/lib/pricing";
import { QuantityPrice } from "@/components/QuantityPrice";
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
    <section id="home-hero" className="home-panel hero-impact dot-grid relative overflow-hidden bg-[var(--charcoal)] text-white">
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
              Request Custom Quote
            </Link>
            <Link href="/products/#stockroom" className="btn btn-ghost-dark px-8">
              Buy Standard Kits
            </Link>
          </div>
        </div>
        <div className="hero-impact-visual" aria-label="Custom merchandise preview">
          <div className="merch-stage">
            <Image
              src="/images/dottee-2026-merch-program-hero.png"
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
    <section id="home-solutions" className="home-panel solutions-showcase section-pad bg-[var(--warm-white)]">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeading
            label="Corporate solutions"
            title="Corporate gifting solutions for every business moment."
            text="Choose a solution, share your quantity and delivery address, approve artwork, and place one organized bulk order across products, packaging, and dispatch."
          />
          <div className="solution-orbit" aria-hidden="true">
            <Image
              src="/images/dottee-2026-solution-collage.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <span className="orbit-chip chip-one">Onboarding</span>
            <span className="orbit-chip chip-two">Events</span>
            <span className="orbit-chip chip-three">Packaging</span>
          </div>
        </div>
        <div className="grid gap-4 min-[520px]:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
          {categories.map(([name, desc, count, color, image], index) => (
            <a key={name} href={name === "Stockroom" ? "/products/#stockroom" : "/products/"} className="card solution-card overflow-hidden" style={{ "--accent": color === "teal" ? "var(--teal)" : color === "purple" ? "var(--purple)" : "var(--orange)", "--delay": `${index * 0.05}s` } as CSSProperties}>
              <div className="solution-card-media relative h-44 overflow-hidden md:h-52" style={{ background: tone[color] }}>
                <Image
                  src={image}
                  alt={`${name} product mockup`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <span className="solution-card-index">0{index + 1}</span>
              </div>
              <div className="p-4 md:p-5">
                <span className="label">{count}</span>
                <h3 className="font-display mt-2 text-lg font-bold md:text-xl">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">{desc}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-[var(--orange)]">Plan this solution -&gt;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofStrip() {
  return (
    <section className="bg-white py-5 md:py-8">
      <div className="container-page grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {proofPoints.map(([title, text]) => (
          <div key={title} className="rounded-lg border border-[var(--gray-100)] bg-[var(--warm-white)] p-4 md:p-5">
            <h3 className="font-display text-base font-bold md:text-xl">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-[var(--gray-500)] md:text-sm md:leading-6">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BestSellersSection() {
  return (
    <section id="home-welcome-kits" className="home-panel welcome-kit-section section-pad bg-[var(--off-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="kit-visual">
          <Image
            src="/images/dottee-2026-welcome-kit.png"
            alt="Premium employee welcome kit with apparel, bottle, mug, notebook, lanyard, and packaging"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div className="kit-floating-card kit-card-one">
            <span>01</span>
            <strong>Boxed kit</strong>
          </div>
          <div className="kit-floating-card kit-card-two">
            <span>02</span>
            <strong>Artwork proof</strong>
          </div>
        </div>
        <div>
          <SectionHeading
            label="Employee welcome kits"
            title="First-day kits that feel planned, packed, and brand-ready."
            text="Give HR and founders a simple path from joining-kit idea to approved mockups, sourcing, packaging, and multi-location delivery."
          />
          <div className="grid gap-3">
            {bestSellers.map(([name, text, price], index) => {
              const fixedPrice = hasFixedUnitPrice(price);
              const cartMessage = encodeURIComponent(`Hi Dottee Plus, I want to buy the standard ${name}. Please share checkout details.`);

              return (
                <article key={name} className="kit-row">
                  <span className="kit-row-number">0{index + 1}</span>
                  <span>
                    <strong>{name}</strong>
                    <small>{text}</small>
                  </span>
                  <div className="kit-row-action">
                    {fixedPrice ? <QuantityPrice price={price} unit="kit" compact /> : <em>{price}</em>}
                    {fixedPrice ? (
                      <a href={`https://wa.me/${contact.whatsapp}?text=${cartMessage}`} className="btn btn-primary min-h-10 px-4 py-2 text-sm">
                        Add to Cart
                      </a>
                    ) : (
                      <Link href="/quote" className="btn btn-primary min-h-10 px-4 py-2 text-sm">
                        Request Custom Quote
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <Link href="/quote" className="btn btn-primary mt-6 px-8">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ReadyStockSection() {
  const quickTags = ["Front/back tees", "Tamilanda", "Murugan", "Fan editions", "Trip tees", "Custom names"];

  return (
    <section id="home-stockroom" className="home-panel stockroom-section section-pad bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              label="Stockroom"
              title="Hyper-real front/back T-shirt samples customers can picture instantly."
              text="Show printed examples that feel already produced: Tamilanda typography, Murugan Vel artwork, cinema fan-edition graphics, trip tees, family names, and custom back-print designs for fast orders."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--gray-100)] bg-[var(--warm-white)] px-4 py-2 text-sm font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="/products/#stockroom" className="btn btn-primary px-8">
                Buy Standard Kits
              </a>
              <Link href="/quote" className="btn border border-[var(--gray-100)] bg-white px-8 text-[var(--charcoal)] shadow-sm">
                Request Custom Quote
              </Link>
            </div>
          </div>
          <div className="stockroom-hero">
            <Image
              src="/images/stockroom-tamilanda-front-back.png"
              alt="Hyper-realistic front and back Tamilanda custom T-shirt sample"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="stockroom-price-card">
              <span>Ready drops</span>
              <strong>Rs. 399+</strong>
              <small>Front/back T-shirt samples and custom artwork</small>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {readyStock.slice(0, 3).map(([name, text, price, label, image]) => {
            const unit = price.toLowerCase().includes("/tee") ? "tee" : "pc";
            const cartMessage = encodeURIComponent(`Hi Dottee Plus, I want to buy standard ${name}. Please share checkout details.`);

            return (
            <article key={name} className="card group overflow-hidden">
              <div className="relative h-56 overflow-hidden bg-[var(--gray-50)]">
                <Image
                  src={image}
                  alt={`${name} ready stock product sample`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-black text-[var(--charcoal)] shadow-sm">
                  {label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--gray-500)]">{text}</p>
                <div className="mt-4 grid gap-4">
                  <QuantityPrice price={price} unit={unit} compact />
                  <a href={`https://wa.me/${contact.whatsapp}?text=${cartMessage}`} className="btn btn-primary min-h-11 px-4 py-2 text-sm">
                    Add to Cart
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TShirtCustomizationSection() {
  const zones = ["Department polos", "Event tees", "Staff uniforms", "Hoodies", "Caps", "Packaging"];
  return (
    <section id="home-apparel" className="home-panel apparel-program-section section-pad bg-[var(--off-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
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
        <div className="apparel-showcase">
          <div className="apparel-photo">
            <Image
              src="/images/dottee-2026-apparel-program.png"
              alt="Corporate apparel program with polo, t-shirt, hoodie, jacket, cap, fabric swatches, and print placement guides"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="apparel-zone-grid">
            {zones.map((zone, index) => (
              <div key={zone} className="apparel-zone-card">
                <span>0{index + 1}</span>
                <strong>{zone}</strong>
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
    <section id="home-studio" className="home-panel brand-studio-section section-pad bg-[var(--charcoal)] text-white">
      <div className="studio-glow" aria-hidden="true" />
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
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
        <div className="studio-board">
          <div className="studio-image">
            <Image
              src="/images/dottee-2026-brand-studio.png"
              alt="Brand merchandise planning studio with product samples, proof boards, packaging, apparel, delivery planning, and industry bundles"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="studio-industry-grid">
            {Object.entries(industryBundles).map(([industry, bundle], index) => (
              <Link key={industry} href="/quote" className="studio-industry-card" style={{ "--delay": `${index * 0.12}s` } as CSSProperties}>
                <span>{industry}</span>
                <strong>{bundle.slice(0, 3).join(" / ")}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrintingMethodsSection() {
  return (
    <section id="home-printing" className="home-panel section-pad bg-[var(--warm-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            label="Printing methods"
            title="The right finish for every fabric, logo, package, and order size."
            text="Screen print, DTF, DTG, embroidery, sublimation, and vinyl each solve a different production problem. Dottee Plus helps match the method to the fabric, quantity, and artwork."
          />
          <div className="relative mt-7 min-h-80 overflow-hidden rounded-lg border border-[var(--gray-100)] shadow-xl md:min-h-[440px]">
            <Image
              src="/images/home-printing-methods-studio.png"
              alt="Printing methods studio with screen printing, embroidery, DTF, DTG, sublimation, vinyl and material swatches"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,36,0)_44%,rgba(26,26,36,0.72)_100%)]" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {["Fabric", "Logo", "Batch size", "Finish"].map((item) => (
                <span key={item} className="rounded-full bg-white/95 px-3 py-2 text-xs font-black text-[var(--charcoal)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {printMethods.map(([name, desc]) => (
            <Link key={name} href="/quote" className="card border-t-4 border-t-[var(--orange)] p-5 md:p-6">
              <span className="label text-[var(--teal-dark)]">Method</span>
              <h3 className="font-display text-xl font-bold">{name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{desc}</p>
              <span className="mt-5 inline-flex text-sm font-bold text-[var(--orange)]">Request Custom Quote -&gt;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="home-process" className="home-panel section-pad bg-[var(--off-white)]">
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

export function OrderFlowSection() {
  return (
    <section id="home-order-flow" className="home-panel section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <span className="label">How to place an order</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            From product idea to confirmed bulk order in four clear moves.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--gray-500)] md:text-lg">
            Customers can start from Products, Solutions, WhatsApp, email, or the quote form. Dottee Plus then turns the brief into a quote, artwork proof, production plan, and delivery schedule.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary px-8">
              Request Custom Quote
            </Link>
            <Link href="/products" className="btn border border-[var(--gray-100)] bg-white px-8 text-[var(--charcoal)] shadow-sm">
              Browse Products
            </Link>
          </div>
          <div className="relative mt-8 min-h-72 overflow-hidden rounded-lg border border-[var(--gray-100)] shadow-xl">
            <Image
              src="/images/home-order-flow-workbench.png"
              alt="Corporate merchandise order workflow with products, quote sheet, artwork proof, samples and shipping box"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {orderSteps.map(([title, text], index) => (
            <Link key={title} href={index === 0 ? "/products" : "/quote"} className="card p-5 md:p-6">
              <span className="font-mono-brand text-xs font-medium uppercase tracking-[0.14em] text-[var(--teal-dark)]">
                Order 0{index + 1}
              </span>
              <h3 className="font-display mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--gray-500)]">{text}</p>
              <span className="mt-5 inline-flex text-sm font-bold text-[var(--orange)]">
                {index === 0 ? "Browse Products" : "Request Custom Quote"} -&gt;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioAndCTA() {
  const examples = [
    ["Onboarding kit rollout", "Welcome boxes, apparel, drinkware, notebook, ID accessories, and branded packaging.", "/images/dottee-2026-welcome-kit.png"],
    ["Team apparel program", "Polos, tees, hoodies, jackets, caps, and department-wise artwork placement.", "/images/dottee-2026-apparel-program.png"],
    ["Event merchandise kit", "Lanyards, badges, tote bags, caps, bottles, stickers, and booth giveaways.", "/images/dottee-2026-solution-collage.png"],
  ] as const;

  return (
    <section id="home-portfolio" className="home-panel section-pad bg-[var(--warm-white)]">
      <div className="container-page">
        <SectionHeading label="Portfolio preview" title="Built for corporate programs that need to look considered." />
        <div className="grid gap-5 md:grid-cols-3">
          {examples.map(([title, text, image]) => (
            <div key={title} className="card overflow-hidden">
              <div className="relative h-52 overflow-hidden bg-[var(--off-white)]">
                <Image
                  src={image}
                  alt={`${title} Dottee Plus merchandise preview`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">{text}</p>
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
    <section id="home-event-merch" className="home-panel section-pad bg-[var(--warm-white)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <div>
          <SectionHeading
            label="Event merchandise"
            title="Make every conference, fest, marathon, and brand activation feel coherent."
            text="Plan attendee kits, lanyards, badges, booth giveaways, staff apparel, totes, caps, and branded packaging in one workflow."
          />
          <Link href="/quote" className="btn btn-primary mt-2 px-8">
            Request Custom Quote
          </Link>
        </div>
        <div className="grid gap-4">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[var(--gray-100)] shadow-xl">
            <Image
              src="/images/home-event-merch-kit.png"
              alt="Event merchandise kit with lanyards, badges, tote bags, caps, event tees, bottles, stickers and booth giveaways"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,36,0)_48%,rgba(26,26,36,0.76)_100%)]" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
              {["Attendee kits", "Booth giveaways", "Staff apparel"].map((item) => (
                <span key={item} className="rounded-full bg-white/95 px-3 py-2 text-center text-xs font-black text-[var(--charcoal)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Lanyards", "Badges", "Tote bags", "Caps", "Booth kits", "Event tees"].map((item, index) => (
              <Link key={item} href="/products#event" className="rounded-lg border border-[var(--gray-100)] bg-white p-4 shadow-sm">
                <span className="font-mono-brand text-[11px] font-medium text-[var(--teal-dark)]">0{index + 1}</span>
                <strong className="font-display mt-2 block text-lg leading-tight">{item}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteCTASection() {
  return (
    <section id="home-quote" className="home-panel dot-grid bg-[var(--charcoal)] py-20 text-center text-white">
      <div className="container-page">
        <span className="label text-[var(--teal)]">Get quote in 2 hours</span>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          Build a corporate gifting program your team can approve with confidence.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary px-8">
            Request Custom Quote
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
    <section id="home-questions" className="home-panel section-pad bg-[var(--off-white)]">
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

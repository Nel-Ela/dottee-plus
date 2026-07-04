import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { ProductCatalogue } from "@/components/ProductFilter";

export const metadata: Metadata = {
  title: "Corporate Products",
  description: "Explore employee onboarding kits, corporate apparel, office essentials, event merchandise, premium gifts, and printing methods from Dottee Plus.",
};

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="dot-grid relative overflow-hidden bg-[var(--charcoal)] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(26,26,36,0.98)_0%,rgba(26,26,36,0.9)_50%,rgba(255,92,26,0.18)_100%)]" />
          <div className="container-page relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(390px,0.7fr)] lg:items-center">
            <div>
              <div className="mb-5 text-sm font-semibold text-white/45">
                <Link href="/">Home</Link> / Products
              </div>
              <h1 className="font-display max-w-4xl text-[1.95rem] font-extrabold leading-tight sm:text-4xl md:text-6xl">
                Corporate Merchandise <span className="text-[var(--orange)]">Catalogue</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Organized for HR, procurement, founders, schools, hospitals, SMEs, and event teams planning bulk branded merchandise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["50+ Product Types", "Bulk Order Support", "Artwork Approval", "PAN-India Delivery"].map((badge) => (
                  <span key={badge} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/10 shadow-2xl md:min-h-96">
              <Image
                src="/images/products-onboarding-catalogue.png"
                alt="Corporate merchandise catalogue hero showing a welcome kit with apparel, drinkware, stationery and packaging"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,36,0)_42%,rgba(26,26,36,0.72)_100%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {["Apparel", "Drinkware", "Stationery", "Packaging"].map((chip) => (
                  <span key={chip} className="rounded-full bg-white/90 px-3 py-2 text-xs font-black text-[var(--charcoal)]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ProductCatalogue />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

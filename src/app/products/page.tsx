import type { Metadata } from "next";
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
        <section className="dot-grid relative overflow-hidden bg-[var(--charcoal)] py-20 text-white">
          <div className="absolute right-[-10%] top-[-30%] h-80 w-80 rounded-full bg-[rgba(255,92,26,0.35)] blur-3xl" />
          <div className="container-page relative">
            <div className="mb-5 text-sm font-semibold text-white/45">
              <Link href="/">Home</Link> / Products
            </div>
            <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
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
        </section>
        <ProductCatalogue />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

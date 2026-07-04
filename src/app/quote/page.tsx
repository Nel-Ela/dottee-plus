import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MobileActionBar } from "@/components/MobileActionBar";
import { QuoteForm, QuoteOrderGuide } from "@/components/QuoteForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get Corporate Bulk Quote",
  description: "Request a procurement-ready Dottee Plus quote for welcome kits, corporate apparel, event merchandise, premium gifts, printing, and PAN-India delivery.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[var(--warm-white)] pb-20 md:pb-0">
      <header className="border-b border-[var(--gray-100)] bg-[rgba(250,248,245,0.95)] backdrop-blur-xl">
        <div className="container-page grid h-[86px] grid-cols-[64px_1fr_64px] items-center gap-3 lg:flex lg:justify-between">
          <div className="col-start-2 flex justify-center lg:col-auto lg:block">
            <BrandLogo impact />
          </div>
          <Link href="/" className="col-start-3 text-right text-sm font-semibold text-[var(--gray-500)] lg:col-auto">
            <span className="lg:hidden">Home</span>
            <span className="hidden lg:inline">&lt;- Back to Home</span>
          </Link>
        </div>
      </header>
      <section className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_420px]">
        <QuoteForm />
        <aside className="grid h-max gap-5 lg:sticky lg:top-24">
          <div className="rounded-[24px] bg-[var(--charcoal)] p-6 text-white">
            <span className="label text-[var(--teal)]">Why Dottee Plus?</span>
            <div className="mt-6 grid gap-5">
              {["Procurement-ready quote", "Artwork approval", "PAN-India delivery", "Quality check"].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--orange)] font-black">OK</span>
                  <div>
                    <h3 className="font-display font-bold">{item}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/50">Clear communication, practical options, and production-ready guidance.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/[0.06] p-5">
              <a href={`https://wa.me/${contact.whatsapp}`} className="btn btn-whatsapp w-full">
                WhatsApp Requirement
              </a>
              <a href={`mailto:${contact.email}`} className="mt-4 block text-center text-sm text-white/55">
                {contact.email}
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 p-5 text-sm leading-7 text-white/60">
              Real client testimonials and client logos should be added only after they are verified.
            </div>
          </div>
          <QuoteOrderGuide />
        </aside>
      </section>
      <MobileActionBar />
    </main>
  );
}

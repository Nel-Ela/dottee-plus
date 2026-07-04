import Link from "next/link";
import { contact } from "@/lib/data";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#111118] px-0 py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <BrandLogo dark lockup="full" impact />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
            Corporate gifting and brand merchandise studio for welcome kits, apparel, office essentials, event merchandise, and premium gift boxes.
          </p>
        </div>
        <FooterGroup title="Solutions" links={["Welcome kits", "Corporate apparel", "Event merchandise", "Premium gifts"]} />
        <FooterGroup title="Company" links={["About", "Products", "Get Quote", "Process"]} />
        <div>
          <h3 className="font-display mb-4 text-lg font-bold">Contact</h3>
          <div className="grid gap-3 text-sm text-white/45">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <Link href="/quote">Request a bulk quote</Link>
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp requirement</a>
            <span>{contact.serviceArea}</span>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/25 md:flex-row md:justify-between">
        <span>Copyright 2026 Dottee Plus. All rights reserved.</span>
        <span>Corporate gifting and brand merchandise across India</span>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-display mb-4 text-lg font-bold">{title}</h3>
      <div className="grid gap-3 text-sm text-white/45">
        {links.map((link) => (
          <Link
            key={link}
            href={
              link === "About"
                ? "/about"
                : link === "Products"
                  ? "/products"
                  : link === "Get Quote"
                    ? "/quote"
                    : title === "Solutions"
                      ? "/solutions"
                      : "/#home-process"
            }
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

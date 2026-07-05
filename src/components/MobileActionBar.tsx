import Link from "next/link";
import { contact } from "@/lib/data";

export function MobileActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--gray-100)] bg-[rgba(250,248,245,0.96)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Link href="/quote" className="btn btn-primary min-h-11 py-2">
            Request Custom Quote
          </Link>
          <a href={`https://wa.me/${contact.whatsapp}`} className="btn btn-whatsapp min-h-11 py-2">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

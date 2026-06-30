import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Dottee Plus home">
      <Image src="/logos/logo-icon.svg" width={36} height={36} alt="" priority />
      <span className="font-display text-lg font-extrabold" style={{ color: dark ? "white" : "var(--charcoal)" }}>
        dottee<span style={{ color: "var(--orange)" }}>+</span>plus
      </span>
    </Link>
  );
}

export function SectionHeading({
  label,
  title,
  text,
  center = false,
}: {
  label: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}>
      <span className="label">{label}</span>
      <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[var(--gray-500)] md:text-lg">{text}</p> : null}
    </div>
  );
}

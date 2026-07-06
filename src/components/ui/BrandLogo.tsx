import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  dark = false,
  lockup = "wordmark",
  impact = false,
}: {
  dark?: boolean;
  lockup?: "wordmark" | "full";
  impact?: boolean;
}) {
  const isFull = lockup === "full";
  const src = isFull
    ? dark
      ? "/logos/dottee-logo-white.png"
      : "/logos/dottee-logo-black.png"
    : dark
      ? "/logos/dottee-wordmark-white.png"
      : "/logos/dottee-wordmark-black.png";

  return (
    <Link href="/" className="inline-flex items-center" aria-label="Dottee Plus home">
      <Image
        src={src}
        width={isFull ? 791 : 791}
        height={isFull ? 236 : 198}
        alt="Dottee Corporate Gifts and T Shirts"
        className={
          isFull
            ? impact
              ? "h-auto w-[250px] sm:w-[320px]"
              : "h-auto w-[220px] sm:w-[280px]"
            : impact
              ? "h-auto w-[190px] sm:w-[230px]"
              : "h-auto w-[164px] sm:w-[206px]"
        }
        priority
      />
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
    <div className={center ? "section-heading mx-auto mb-12 max-w-3xl text-center" : "section-heading mb-12 max-w-3xl"}>
      <span className="label">{label}</span>
      <h2 className="section-title font-display mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[var(--gray-500)] md:text-lg">{text}</p> : null}
    </div>
  );
}

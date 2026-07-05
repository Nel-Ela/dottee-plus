"use client";

import { useMemo, useState } from "react";
import { getBaseUnitPrice } from "@/lib/pricing";

const quantityTiers = [
  { label: "10", value: 10, multiplier: 1 },
  { label: "50", value: 50, multiplier: 0.84 },
  { label: "100", value: 100, multiplier: 0.68 },
  { label: "500+", value: 500, multiplier: 0.45 },
];

const unitPlural: Record<string, string> = { kit: "kits", tee: "tees", pc: "pcs", jersey: "jerseys" };

export type CartLinkOptions = {
  name: string;
  whatsapp: string;
  ctaClassName?: string;
  ctaLabel?: string;
};

export function QuantityPrice({
  price,
  unit = "kit",
  compact = false,
  cart,
}: {
  price: string;
  unit?: string;
  compact?: boolean;
  cart?: CartLinkOptions;
}) {
  const [quantity, setQuantity] = useState(quantityTiers[0].value);
  const basePrice = getBaseUnitPrice(price);
  const tier = quantityTiers.find((item) => item.value === quantity) ?? quantityTiers[0];
  const dynamicPrice = useMemo(() => {
    if (!basePrice) return null;
    return Math.max(Math.round(basePrice * tier.multiplier), 29);
  }, [basePrice, tier.multiplier]);

  const cartHref = useMemo(() => {
    if (!cart) return null;
    const message = dynamicPrice
      ? `Hi Dottee Plus, I want to buy ${quantity} ${unitPlural[unit] ?? `${unit}s`} of ${cart.name} at ~Rs. ${dynamicPrice}/${unit}. Please share checkout details.`
      : `Hi Dottee Plus, I want to buy standard ${cart.name}. Please share checkout details.`;
    return `https://wa.me/${cart.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [cart, dynamicPrice, quantity, unit]);

  const ctaClassName = cart?.ctaClassName ?? "btn btn-primary min-h-11 px-4 py-2 text-sm";
  const ctaLabel = cart?.ctaLabel ?? "Add to Cart";

  if (!basePrice) {
    return (
      <>
        <strong className="font-display text-[var(--orange)]">{price}</strong>
        {cartHref ? (
          <a href={cartHref} className={ctaClassName}>
            {ctaLabel}
          </a>
        ) : null}
      </>
    );
  }

  return (
    <div className={compact ? "grid gap-2" : "grid gap-3"}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-display text-lg font-extrabold text-[var(--orange)] md:text-xl">
          Starting from Rs. {dynamicPrice}/{unit}
        </span>
        <label className="inline-flex items-center gap-2 rounded-lg border border-[var(--gray-100)] bg-white px-3 py-2 text-xs font-bold text-[var(--charcoal)]">
          Qty:
          <select
            className="bg-transparent text-xs font-black outline-none"
            aria-label="Select quantity for dynamic price"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          >
            {quantityTiers.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="text-xs font-semibold leading-5 text-[var(--gray-500)]">Prices drop at higher quantities.</p>
      {cartHref ? (
        <a href={cartHref} className={ctaClassName}>
          {ctaLabel}
        </a>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, orderSteps } from "@/lib/data";

const quantityRanges = ["10", "50", "100", "500+"];
const timelines = ["24-48 hours", "3-5 working days", "1-2 weeks", "Flexible"];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (status === "done") {
    return (
      <div className="rounded-[24px] bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--teal)] text-2xl font-black text-white">✓</div>
        <h1 className="font-display mt-6 text-3xl font-extrabold leading-tight md:text-5xl">Custom quote request sent.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--gray-500)]">
          Dottee Plus has received your details and will reply by email with a procurement-ready quote.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn bg-[var(--charcoal)] text-white">
            Back to Home
          </Link>
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            Email Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-[24px] bg-white p-6 shadow-sm md:p-10"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");
        const form = event.currentTarget;
        try {
          const response = await fetch("/api/quote", { method: "POST", body: new FormData(form) });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || !result.ok) {
            throw new Error(result.error || "Something went wrong sending your request.");
          }
          setStatus("done");
        } catch (error) {
          setErrorMessage(error instanceof Error ? error.message : "Something went wrong sending your request.");
          setStatus("error");
        }
      }}
    >
      <span className="label">Request Custom Quote</span>
      <h1 className="font-display mt-2 text-3xl font-extrabold leading-tight md:text-5xl">Share the five details we need to price your order.</h1>
      <p className="mt-3 leading-8 text-[var(--gray-500)]">
        Dottee Plus will use your company name, contact email, quantity, timeline, and logo/artwork to prepare a procurement-ready bulk quote.
      </p>

      <div className="mt-8 grid gap-6">
        <Field label="Company name" name="company" placeholder="Example: Dottee Plus" required />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Work email" name="email" type="email" placeholder="you@company.com" required />
          <Field label="Phone / WhatsApp" name="phone" placeholder="Optional" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Quantity" name="quantity" as="select" options={quantityRanges} required />
          <Field label="Timeline" name="timeline" as="select" options={timelines} required />
        </div>
        <label className="block">
          <span className="mb-2 block text-sm font-bold">
            Logo upload <span className="text-[var(--orange)]">*</span>
          </span>
          <input
            name="logo"
            type="file"
            accept=".ai,.eps,.pdf,.svg,.png,.jpg,.jpeg"
            required
            className="w-full rounded-lg border-[1.5px] border-dashed border-[var(--gray-300)] bg-[var(--gray-50)] px-4 py-4 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--charcoal)] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white focus:border-[var(--orange)] focus:outline-none"
          />
          <span className="mt-2 block text-xs leading-5 text-[var(--gray-500)]">AI, EPS, PDF, SVG, PNG, or JPG accepted. Max 6MB.</span>
        </label>
        {status === "error" ? (
          <p className="rounded-lg border border-[var(--orange)]/30 bg-[var(--orange-tint)] px-4 py-3 text-sm font-semibold text-[var(--orange)]">
            {errorMessage} You can also reach us directly on{" "}
            <a href={`https://wa.me/${contact.whatsapp}`} className="underline">
              WhatsApp
            </a>{" "}
            or <a href={`mailto:${contact.email}`} className="underline">email</a>.
          </p>
        ) : null}
        <button className="btn btn-primary w-full sm:w-max" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Request Custom Quote"}
        </button>
      </div>
    </form>
  );
}

export function QuoteOrderGuide() {
  return (
    <div className="rounded-[24px] bg-white p-6 shadow-sm">
      <span className="label">Order placement path</span>
      <div className="mt-5 grid gap-4">
        {orderSteps.map(([title, text], index) => (
          <div key={title} className="flex gap-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--charcoal)] font-display text-sm font-extrabold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-display font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--gray-500)]">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/quote" className="btn btn-primary mt-6 w-full">
        Request Custom Quote
      </Link>
    </div>
  );
}

function Field({
  label,
  name,
  as,
  options,
  placeholder,
  required,
  type,
}: {
  label: string;
  name: string;
  as?: "select";
  options?: string[];
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  const className =
    "w-full rounded-lg border-[1.5px] border-[var(--gray-100)] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--orange)] focus:shadow-[0_0_0_3px_rgba(255,92,26,0.1)]";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">
        {label} {required ? <span className="text-[var(--orange)]">*</span> : null}
      </span>
      {as === "select" ? (
        <select name={name} className={className} required={required}>
          {options?.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input type={type ?? "text"} name={name} className={className} placeholder={placeholder} required={required} />
      )}
    </label>
  );
}

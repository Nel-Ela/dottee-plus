"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, orderSteps, printMethods } from "@/lib/data";

const requirementTypes = ["Stockroom front/back T-shirts", "Welcome kit", "Corporate apparel", "Event merchandise", "Premium gifts", "Printing only", "Not sure yet"];
const quantityRanges = ["25-50", "51-100", "101-500", "500+"];
const productInterests = ["Front/back T-shirts", "Tamilanda tees", "Murugan tees", "Fan edition tees", "Trip tees", "Cricket jerseys", "Polos", "Hoodies", "Mugs", "Bottles", "Notebooks", "Gift boxes", "Other"];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-[24px] bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--teal)] text-3xl font-black text-white">OK</div>
        <h1 className="font-display mt-6 text-4xl font-extrabold">Bulk quote brief captured.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--gray-500)]">
          This static MVP does not submit to a backend yet. Connect Formspree, Resend, or a CRM webhook before launch.
        </p>
        <div className="mx-auto mt-8 max-w-lg rounded-2xl bg-[var(--orange-tint)] p-5 text-left">
          {["Review requirement, quantity, and deadline", "Prepare product options and artwork proof path", "Share quote by email after contact details are verified"].map((item) => (
            <div key={item} className="py-2 font-semibold text-[var(--charcoal)]">
              OK {item}
            </div>
          ))}
        </div>
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
    <div className="rounded-[24px] bg-white p-6 shadow-sm md:p-10">
      <Stepper step={step} />
      {step === 1 ? (
        <StepShell label="Step 1 of 3" title="Define the procurement brief" text="Share the business moment, quantity, deadline, and delivery details. We will recommend the right products and branding method.">
          <ChipGroup label="Requirement type" items={requirementTypes} />
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Quantity range" as="select" options={quantityRanges} />
            <Field label="Deadline" placeholder="Example: 20 July 2026" />
          </div>
          <Field label="Delivery city" placeholder="Mumbai, Bengaluru, Delhi..." />
          <Field label="Delivery address / branch list" as="textarea" placeholder="Share office address, event venue, campus, branch list, or employee-address delivery requirement." />
          <ChipGroup label="Products you are considering" items={productInterests} />
          <Field label="Message" as="textarea" placeholder="Share budget, quantity, event date, kit contents, branding needs, or anything you are unsure about." />
          <button className="btn btn-primary" type="button" onClick={() => setStep(2)}>
            Continue to Artwork Brief -&gt;
          </button>
        </StepShell>
      ) : null}
      {step === 2 ? (
        <StepShell label="Step 2 of 3" title="Artwork and approval path" text="Help us understand your brand files, colors, and approval workflow before production.">
          <Field label="Company / Brand Name" placeholder="Dottee Plus" />
          <div className="grid gap-3 md:grid-cols-2">
            {["Logo/artwork ready", "Need artwork help"].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-lg border border-[var(--gray-100)] p-4 font-semibold">
                <input type="radio" name="logo" className="accent-[var(--orange)]" /> {item}
              </label>
            ))}
          </div>
          <div className="rounded-lg border border-dashed border-[var(--gray-300)] bg-[var(--gray-50)] p-5">
            <span className="mb-1 block text-sm font-bold">Logo/artwork upload placeholder</span>
            <p className="text-sm leading-6 text-[var(--gray-500)]">Static UI only. Connect upload storage or ask customers to send files by email/WhatsApp before launch.</p>
          </div>
          <Field label="Brand colors" placeholder="Orange, teal, charcoal..." />
          <ChipGroup label="Preferred print method" items={[...printMethods.map(([name]) => name), "Not Sure"]} />
          <Field label="Reference URL" placeholder="https://..." />
          <div className="flex gap-3">
            <button className="btn bg-[var(--gray-50)] text-[var(--charcoal)]" type="button" onClick={() => setStep(1)}>
              Back
            </button>
            <button className="btn btn-primary" type="button" onClick={() => setStep(3)}>
              Continue -&gt;
            </button>
          </div>
        </StepShell>
      ) : null}
      {step === 3 ? (
        <StepShell label="Step 3 of 3" title="Confirm business contact details" text="Where should we send the quote, product options, and artwork recommendations?">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" />
            <Field label="Company name" />
            <Field label="Work email" />
            <Field label="Phone / WhatsApp" />
          </div>
          <Field label="Designation / role" />
          <Field label="How did you find us?" as="select" options={["Google", "Instagram", "Referral", "LinkedIn", "Event", "Other"]} />
          <div className="rounded-lg bg-[var(--orange-tint)] p-4 text-sm leading-6 text-[var(--charcoal)]">
            Not sure what to choose? Share your budget, quantity, delivery address, and event date. We will recommend the right products and branding method.
          </div>
          <label className="flex items-start gap-3 text-sm leading-6 text-[var(--gray-500)]">
            <input type="checkbox" className="mt-1 accent-[var(--orange)]" /> I agree to be contacted by Dottee Plus about this quote request.
          </label>
          <div className="flex gap-3">
            <button className="btn bg-[var(--gray-50)] text-[var(--charcoal)]" type="button" onClick={() => setStep(2)}>
              Back
            </button>
            <button className="btn btn-primary" type="button" onClick={() => setDone(true)}>
              Submit Quote Request -&gt;
            </button>
          </div>
        </StepShell>
      ) : null}
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  return (
    <div className="mb-10 grid grid-cols-3 gap-3">
      {["Requirements", "Design Brief", "Confirm"].map((label, index) => {
        const n = index + 1;
        const state = n < step ? "var(--teal)" : n === step ? "var(--orange)" : "var(--gray-100)";
        return (
          <div key={label} className="flex items-center gap-2 text-sm font-semibold">
            <span
              className="grid h-8 w-8 place-items-center rounded-full font-display text-sm font-extrabold"
              style={{ background: state, color: n <= step ? "white" : "var(--gray-300)" }}
            >
              {n}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

function StepShell({ label, title, text, children }: { label: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="label">{label}</span>
      <h1 className="font-display mt-2 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
      <p className="mt-3 leading-8 text-[var(--gray-500)]">{text}</p>
      <div className="mt-8 grid gap-6">{children}</div>
    </div>
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
      <a href={`https://wa.me/${contact.whatsapp}`} className="btn btn-whatsapp mt-6 w-full">
        Place Order on WhatsApp
      </a>
    </div>
  );
}

function ChipGroup({ label, items }: { label: string; items: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div>
      <div className="mb-3 text-sm font-bold">
        {label} <span className="text-[var(--orange)]">*</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isSelected = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              className="rounded-lg border px-4 py-2 text-sm font-semibold transition"
              style={isSelected ? { borderColor: "var(--orange)", background: "var(--orange-tint)", color: "var(--orange-dark)" } : { borderColor: "var(--gray-100)", background: "white", color: "var(--gray-700)" }}
              onClick={() => setSelected((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]))}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, as, options, placeholder }: { label: string; as?: "select" | "textarea"; options?: string[]; placeholder?: string }) {
  const className =
    "w-full rounded-lg border-[1.5px] border-[var(--gray-100)] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--orange)] focus:shadow-[0_0_0_3px_rgba(255,92,26,0.1)]";
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">{label}</span>
      {as === "select" ? (
        <select className={className}>{options?.map((option) => <option key={option}>{option}</option>)}</select>
      ) : as === "textarea" ? (
        <textarea className={className} rows={5} placeholder={placeholder} />
      ) : (
        <input className={className} placeholder={placeholder} />
      )}
    </label>
  );
}

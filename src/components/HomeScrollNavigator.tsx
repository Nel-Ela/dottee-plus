"use client";

import { useEffect, useState } from "react";

const sections = [
  ["home-hero", "Home"],
  ["home-solutions", "Solutions"],
  ["home-studio", "Studio"],
  ["home-welcome-kits", "Welcome kits"],
  ["home-apparel", "Apparel"],
  ["home-event-merch", "Events"],
  ["home-printing", "Printing"],
  ["home-portfolio", "Portfolio"],
  ["home-order-flow", "Order"],
  ["home-process", "Process"],
  ["home-questions", "Questions"],
  ["home-quote", "Quote"],
] as const;

export function HomeScrollNavigator() {
  const [active, setActive] = useState<string>(sections[0][0]);

  useEffect(() => {
    const panels = sections
      .map(([id]) => document.getElementById(id))
      .filter((panel): panel is HTMLElement => Boolean(panel));

    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -42% 0px",
        threshold: [0.22, 0.42, 0.62],
      },
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => observer.disconnect();
  }, []);

  const moveTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="home-section-nav" aria-label="Homepage section navigation">
        {sections.map(([id, label], index) => (
          <button
            key={id}
            type="button"
            className={active === id ? "is-active" : undefined}
            aria-label={`Go to ${label}`}
            aria-current={active === id ? "true" : undefined}
            onClick={() => moveTo(id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <em>{label}</em>
          </button>
        ))}
      </nav>
      <button type="button" className="home-return-top" aria-label="Return to top" onClick={() => moveTo("home-hero")}>
        <span aria-hidden="true">↑</span>
      </button>
    </>
  );
}

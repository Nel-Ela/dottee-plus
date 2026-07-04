export const contact = {
  email: "hello@dotteeplus.com",
  whatsapp: "918838320810",
  serviceArea: "PAN-India delivery to offices, event venues, campuses, branches, and employee addresses",
};

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/#home-studio", label: "Industries" },
  { href: "/#home-portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export const categories = [
  ["Employee Welcome Kits", "Joining kits with apparel, bottles, notebooks, pens, ID accessories, and gift-ready packaging.", "Onboarding", "orange", "/images/dottee-2026-welcome-kit.png"],
  ["Corporate Apparel", "Polos, T-shirts, hoodies, jackets, and uniforms customized for teams and departments.", "Teams", "teal", "/images/dottee-2026-apparel-program.png"],
  ["Event Merchandise", "Caps, badges, lanyards, tote bags, tees, and promotional products for events and conferences.", "Events", "purple", "/images/dottee-2026-solution-collage.png"],
  ["Office Essentials", "Mugs, bottles, notebooks, mouse pads, calendars, desk kits, and daily-use branded items.", "Daily use", "orange", "/images/dottee-2026-solution-collage.png"],
  ["Premium Gift Boxes", "Curated gift sets for festivals, milestones, clients, leadership teams, and special campaigns.", "Gifting", "teal", "/images/dottee-2026-welcome-kit.png"],
  ["Printing & Branding", "Screen printing, DTF, embroidery, sublimation, vinyl, and packaging customization.", "Production", "purple", "/images/dottee-2026-brand-studio.png"],
] as const;

export const proofPoints = [
  ["50+ product types", "Build one procurement plan across apparel, gifting, office essentials, and events."],
  ["Artwork approval", "Review logo placement, print method, kit contents, and packaging before production."],
  ["Quality check", "Products move through sourcing, decoration, packing, and dispatch checks."],
  ["PAN-India delivery", "Ship to one office, multiple branches, campuses, hospitals, or event venues."],
];

export const orderSteps = [
  ["Pick a solution", "Browse products or choose a business moment: onboarding, apparel, events, office essentials, gifts, or printing."],
  ["Share requirement", "Send quantity, budget, deadline, logo files, product interests, and delivery address or branch list."],
  ["Approve quote", "Review kit contents, pricing, timelines, print method, artwork proof, packaging, and dispatch plan."],
  ["Place order", "Confirm the quotation, pay as agreed, approve artwork, and Dottee Plus coordinates production and delivery updates."],
] as const;

export const bestSellers = [
  ["New Joiner Kit", "Gift box, polo or tee, bottle, notebook, pen, stickers, ID accessories, and welcome card.", "From Rs. 999/kit"],
  ["Conference Kit", "Lanyard, badge, tote, cap, bottle, notebook, booth giveaways, and event apparel.", "From Rs. 499/kit"],
  ["Client Gift Box", "Premium drinkware, desk essentials, festive add-ons, branded packaging, and delivery support.", "Custom quote"],
];

export const printMethods = [
  ["Screen Printing", "Best for bold logos, large batches, and durable team uniforms."],
  ["DTF", "Sharp, flexible prints for multi-color artwork and fast turnarounds."],
  ["DTG", "Soft hand-feel for detailed artwork and limited apparel drops."],
  ["Embroidery", "Premium finish for polos, caps, jackets, and executive gifts."],
  ["Sublimation", "All-over artwork for dry-fit tees, sportswear, and event gear."],
  ["Vinyl", "Names, numbers, and crisp single-color branding."],
] as const;

export const apparel = [
  ["Polo Shirts", "Corporate collars, embroidery-ready pique, team-wise color planning", "From Rs. 349/pc", "Corporate Apparel", "/images/product-apparel-polo-shirts.png"],
  ["T-Shirts", "Round neck, dry-fit, event tees, department drops, chest/back/sleeve branding", "From Rs. 199/pc", "Corporate Apparel", "/images/product-apparel-t-shirts.png"],
  ["Hoodies", "Fleece hoodies with print, patch, or embroidery for startup and winter kits", "From Rs. 799/pc", "Corporate Apparel", "/images/product-apparel-hoodies.png"],
  ["Jackets", "Lightweight jackets, softshells, and outerwear for field and leadership teams", "Custom quote", "Corporate Apparel", "/images/product-apparel-jackets.png"],
  ["Uniforms", "Retail, hospital, factory, and office uniform programs with repeat specs", "Custom quote", "Corporate Apparel", "/images/product-apparel-uniforms.png"],
];

export const productGroups = [
  {
    key: "onboarding",
    number: "01",
    title: "Employee Onboarding",
    color: "var(--orange)",
    image: "/images/products-onboarding-catalogue.png",
    imageAlt: "Employee onboarding kit with apparel, bottle, mug, notebook, pen, lanyard and packaging",
    items: [
      ["Welcome Kits", "Gift-ready joining boxes with apparel, bottle, notebook, pen, and card", "From Rs. 999/kit", "Onboarding", "/images/product-onboarding-welcome-kits.png"],
      ["Joining Kits", "Role-wise kit combinations for HR and people teams", "Custom quote", "Onboarding", "/images/product-onboarding-joining-kits.png"],
      ["Laptop Bags", "Branded laptop sleeves, backpacks, and daily carry options", "Custom quote", "Onboarding", "/images/product-onboarding-laptop-bags.png"],
      ["Bottles", "Steel bottles, sippers, and tumblers with print or engraving", "From Rs. 299/pc", "Onboarding", "/images/product-onboarding-bottles.png"],
      ["Diaries", "Notebooks, planners, and premium journals for desk kits", "From Rs. 149/pc", "Onboarding", "/images/product-onboarding-diaries.png"],
      ["Pens", "Branded pens and stationery add-ons for joining boxes", "From Rs. 29/pc", "Onboarding", "/images/product-onboarding-pens.png"],
      ["ID Cards", "ID cards, holders, reels, and lanyard combinations", "Custom quote", "Onboarding", "/images/product-onboarding-id-cards.png"],
    ],
  },
  {
    key: "apparel",
    number: "02",
    title: "Corporate Apparel",
    color: "var(--teal-dark)",
    image: "/images/products-apparel-catalogue.png",
    imageAlt: "Corporate apparel range with professional models wearing polos, t-shirts, hoodies, jackets and uniforms",
    items: apparel,
  },
  {
    key: "office",
    number: "03",
    title: "Office Essentials",
    color: "var(--purple)",
    image: "/images/products-office-catalogue.png",
    imageAlt: "Office essentials with mugs, bottles, notebooks, calendars, desk pads and stationery",
    items: [
      ["Mugs", "Ceramic, matte, color-handle, and premium mug options", "From Rs. 149/pc", "Office", "/images/product-office-mugs.png"],
      ["Bottles", "Steel, copper, sipper, and travel bottle branding", "From Rs. 299/pc", "Office", "/images/product-office-bottles.png"],
      ["Mouse Pads", "Desk pads, mouse pads, and workspace branding essentials", "From Rs. 99/pc", "Office", "/images/product-office-mouse-pads.png"],
      ["Notebooks", "Custom notebooks, diaries, planners, and executive journals", "From Rs. 149/pc", "Office", "/images/product-office-notebooks.png"],
      ["Calendars", "Desk calendars, wall calendars, and campaign stationery", "Custom quote", "Office", "/images/product-office-calendars.png"],
    ],
  },
  {
    key: "event",
    number: "04",
    title: "Event Merchandise",
    color: "var(--orange)",
    image: "/images/products-event-catalogue.png",
    imageAlt: "Event merchandise with lanyards, badges, tote bags, caps, stickers and booth branding",
    items: [
      ["Lanyards", "Printed, woven, and badge-ready event lanyards", "From Rs. 39/pc", "Event", "/images/product-event-lanyards.png"],
      ["Badges", "Conference badges, ID cards, and access credentials", "Custom quote", "Event", "/images/product-event-badges.png"],
      ["Tote Bags", "Cotton, canvas, jute, and non-woven tote bags", "From Rs. 99/pc", "Event", "/images/product-event-tote-bags.png"],
      ["Caps", "Structured caps with embroidery, patches, or vinyl", "From Rs. 149/pc", "Event", "/images/product-event-caps.png"],
      ["Stickers", "Sticker sheets, labels, QR stickers, and kit inserts", "Custom quote", "Event", "/images/product-event-stickers.png"],
      ["Booth Branding", "Giveaways, table kits, and branded counter essentials", "Custom quote", "Event", "/images/product-event-booth-branding.png"],
    ],
  },
  {
    key: "gifts",
    number: "05",
    title: "Premium Gifts",
    color: "var(--teal-dark)",
    image: "/images/products-gifts-catalogue.png",
    imageAlt: "Premium corporate gift boxes with tech gifts, hampers, packaging and executive accessories",
    items: [
      ["Executive Gift Sets", "Premium boxes for clients, leaders, and milestone programs", "Custom quote", "Gifts", "/images/product-gifts-executive-gift-sets.png"],
      ["Tech Gifts", "Laptop sleeves, organizers, wireless accessories, and desk tech", "Custom quote", "Gifts", "/images/product-gifts-tech-gifts.png"],
      ["Festive Hampers", "Curated festival gifting with packaging and dispatch planning", "Custom quote", "Gifts", "/images/product-gifts-festive-hampers.png"],
      ["Customized Boxes", "Rigid boxes, mailer boxes, sleeves, inserts, and labels", "Custom quote", "Gifts", "/images/product-gifts-customized-boxes.png"],
    ],
  },
  {
    key: "printing",
    number: "06",
    title: "Printing Methods",
    color: "var(--purple)",
    image: "/images/products-printing-catalogue.png",
    imageAlt: "Printing methods studio with screen printing tools, embroidery, DTF, DTG, sublimation and vinyl samples",
    items: [
      ["Screen Printing", "Durable bulk printing for bold logos and large batches", "Bulk ready", "Printing", "/images/product-printing-screen-printing.png"],
      ["DTF", "Flexible full-color prints for apparel and quick production", "Fast track", "Printing", "/images/product-printing-dtf.png"],
      ["DTG", "Soft detailed prints for premium apparel programs", "Premium", "Printing", "/images/product-printing-dtg.png"],
      ["Embroidery", "Raised premium finish for polos, caps, jackets, and gifts", "Premium", "Printing", "/images/product-printing-embroidery.png"],
      ["Sublimation", "All-over artwork for sportswear and event apparel", "Custom quote", "Printing", "/images/product-printing-sublimation.png"],
      ["Vinyl", "Names, numbers, and crisp single-color applications", "Custom quote", "Printing", "/images/product-printing-vinyl.png"],
    ],
  },
];

export const useCases = [
  "Technology",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail",
  "Events",
];

export const processSteps = [
  ["Share Brief", "Send product goals, quantity, budget, logo files, timeline, and delivery locations."],
  ["Curate & Quote", "Get procurement-ready options with kit contents, pricing, timelines, and branding recommendations."],
  ["Approve Artwork", "Lock mockups, print methods, sizes, colors, packaging, and dispatch schedule."],
  ["Produce & Deliver", "Sourcing, decoration, quality checks, packing, and PAN-India dispatch are coordinated end to end."],
];

export const buyerQuestions = [
  [
    "Can I trust the final product quality?",
    "Yes. Dottee Plus supports mockup approval, fabric and print recommendations, production checks, and dispatch coordination before the order leaves.",
  ],
  [
    "What is the minimum order quantity?",
    "Most corporate products start from 50 pieces. Premium gift boxes, uniforms, and complex packaging may vary by product mix and sourcing.",
  ],
  [
    "How fast can you deliver?",
    "Express jobs can move in 24-48 hours after artwork approval. Standard bulk orders usually need 5-7 working days.",
  ],
  [
    "Do you help if my logo or artwork is not ready?",
    "Yes. Dottee Plus can help with clean mockups, artwork placement, basic file preparation, and print-method recommendations before production.",
  ],
  [
    "Which print method is best for my order?",
    "Screen print for bulk solids, DTF for colorful artwork, embroidery for premium polos/caps, sublimation for sportswear, and DTG for soft detailed prints.",
  ],
  [
    "Can I get samples before a bulk order?",
    "This should be offered as a paid or adjustable sample path for high-value orders, especially uniforms, kits, and repeat programs.",
  ],
  [
    "Can you ship to multiple offices or employee addresses?",
    "Yes. PAN-India delivery can cover offices, branches, campuses, hospitals, event venues, and multi-location packing requirements.",
  ],
  [
    "What do I need to submit for a quote?",
    "Requirement type, quantity range, budget, logo or artwork files, preferred colors, deadline, delivery city, and packaging requirements.",
  ],
];

export const values = [
  ["Quality First", "Every fabric, print, stitch, and package is checked before it carries your logo."],
  ["Fast Without Chaos", "Express tracks for urgent events, with clear timelines from quote to dispatch."],
  ["Design-Led", "Clean mockups and branding guidance help every order feel intentional."],
  ["Bulk Ready", "50 pieces or 50,000, we plan sourcing and production before promises are made."],
  ["Transparent", "Straight pricing, clear MOQs, and practical recommendations."],
  ["Eco Options", "Organic cotton, water-based inks, jute, bamboo, and recyclable packaging available."],
];

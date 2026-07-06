import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Syne } from "next/font/google";
import { QuoteToastHost } from "@/components/QuoteToast";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dotteeplus.com"),
  title: {
    default: "Dottee Plus | Corporate Gifting & Brand Merchandise Studio",
    template: "%s | Dottee Plus",
  },
  description:
    "Dottee Plus creates premium corporate gifts, employee welcome kits, branded apparel, event merchandise, and custom printing solutions for businesses, schools, events, and teams.",
  openGraph: {
    title: "Dottee Plus | Corporate Gifting & Brand Merchandise Studio",
    description:
      "Premium corporate gifts, employee welcome kits, branded apparel, event merchandise, and custom printing solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${dmMono.variable}`}>
      <body>
        {children}
        <QuoteToastHost />
      </body>
    </html>
  );
}

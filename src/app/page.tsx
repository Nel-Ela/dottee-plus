import { Footer } from "@/components/Footer";
import {
  BrandStudioSection,
  BestSellersSection,
  BuyerQuestionsSection,
  EventMerchandiseSection,
  HeroSection,
  Marquee,
  PortfolioAndCTA,
  ProofStrip,
  PrintingMethodsSection,
  ProcessSection,
  ProductCategoryGrid,
  QuoteCTASection,
  TShirtCustomizationSection,
} from "@/components/HomeSections";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ProofStrip />
        <Marquee />
        <ProductCategoryGrid />
        <BrandStudioSection />
        <BestSellersSection />
        <TShirtCustomizationSection />
        <EventMerchandiseSection />
        <PrintingMethodsSection />
        <PortfolioAndCTA />
        <ProcessSection />
        <BuyerQuestionsSection />
        <QuoteCTASection />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

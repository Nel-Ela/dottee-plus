import { Footer } from "@/components/Footer";
import {
  BrandStudioSection,
  BestSellersSection,
  BuyerQuestionsSection,
  EventMerchandiseSection,
  HeroSection,
  Marquee,
  OrderFlowSection,
  PortfolioAndCTA,
  ProofStrip,
  ReadyStockSection,
  PrintingMethodsSection,
  ProcessSection,
  ProductCategoryGrid,
  QuoteCTASection,
  TShirtCustomizationSection,
} from "@/components/HomeSections";
import { HomeScrollNavigator } from "@/components/HomeScrollNavigator";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";

export function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="home-scroll-stage">
        <HeroSection />
        <ProofStrip />
        <Marquee />
        <ProductCategoryGrid />
        <ReadyStockSection />
        <BrandStudioSection />
        <BestSellersSection />
        <TShirtCustomizationSection />
        <EventMerchandiseSection />
        <PrintingMethodsSection />
        <PortfolioAndCTA />
        <OrderFlowSection />
        <ProcessSection />
        <BuyerQuestionsSection />
        <QuoteCTASection />
      </main>
      <Footer />
      <HomeScrollNavigator />
      <MobileActionBar />
    </div>
  );
}

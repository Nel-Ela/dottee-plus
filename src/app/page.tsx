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
  PrintingMethodsSection,
  ProcessSection,
  ProductCategoryGrid,
  QuoteCTASection,
  TShirtCustomizationSection,
} from "@/components/HomeSections";
import { MobileActionBar } from "@/components/MobileActionBar";
import { HomeScrollNavigator } from "@/components/HomeScrollNavigator";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="home-scroll-stage">
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

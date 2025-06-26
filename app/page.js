import HeroSection from "@/components/custom/HeroSection";
import FeaturesSection from "@/components/custom/FeaturesSection";
import HowItWorksSection from "@/components/custom/HowItWorksSection";
import LiveDemoSection from "@/components/custom/LiveDemoSection";
import PricingSection from "@/components/custom/PricingSection";
import TestimonialsSection from "@/components/custom/TestimonialsSection";
import FAQSection from "@/components/custom/FAQSection";
import FinalCTASection from "@/components/custom/FinalCTASection";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

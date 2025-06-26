import HeroSection from "@/components/custom/HeroSection";
import FeaturesSection from "@/components/custom/FeaturesSection";
import HowItWorksSection from "@/components/custom/HowItWorksSection";
import LiveDemoSection from "@/components/custom/LiveDemoSection";
import FinalCTASection from "@/components/custom/FinalCTASection";
import Footer from "@/components/custom/Footer";
import { Faq5 } from "@/components/ui/faq-5";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { Pricing } from "@/components/ui/pricing";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <Pricing plans={demoPlans} />
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
      <Faq5 />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

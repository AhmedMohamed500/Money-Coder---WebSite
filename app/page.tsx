import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <><Header /><main><HeroSection /><TrustBar /><ServicesSection /><ProductsSection /><HowItWorks /><IndustriesSection /><div className="social-pricing-row"><TestimonialsSection /><PricingSection /></div></main><Footer /></>;
}

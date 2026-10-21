import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <><Header /><main><HeroSection /><ServicesSection /><ProductsSection /><HowItWorks /><IndustriesSection /><TestimonialsSection /><PricingSection /></main><Footer /></>;
}

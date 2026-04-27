import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";

export const metadata: Metadata = {
  title: "TRANSNORTE | Logística y Transporte Industrial en Monterrey",
  description:
    "Empresa líder de logística y transporte de carga en Monterrey. Fletes locales y foráneos, transporte dedicado, maquinaria pesada, custodia GPS 24/7. Cobertura nacional.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AdvantagesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ClosingCtaSection />
    </>
  );
}

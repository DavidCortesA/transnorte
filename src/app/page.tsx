import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import LogoStripSection from "@/components/sections/LogoStripSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorldwideSection from "@/components/sections/WorldwideSection";
import TeamSection from "@/components/sections/TeamSection";
import QuoteSection from "@/components/sections/QuoteSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
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
      <LogoStripSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WorldwideSection />
      <TeamSection />
      <QuoteSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ClosingCtaSection />
    </>
  );
}

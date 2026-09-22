import type { Metadata } from "next";
import ServiciosIndexHero from "@/components/servicios/ServiciosIndexHero";
import ServiciosIndexGrid from "@/components/servicios/ServiciosIndexGrid";
import FleetSection from "@/components/servicios/FleetSection";
import HowWeWorkSection from "@/components/servicios/HowWeWorkSection";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";

export const metadata: Metadata = {
  title: "Servicios de Logística y Transporte | TRANSNORTE Monterrey",
  description:
    "Servicios completos de logística: fletes locales y foráneos, transporte dedicado, maquinaria pesada, custodia GPS 24/7, logística urgente y gestión de carga. Monterrey y cobertura nacional.",
  keywords:
    "servicios de logística Monterrey, empresa de transporte de carga, fletes Monterrey, transporte dedicado, custodia GPS, logística urgente",
  openGraph: {
    title: "Servicios de Logística y Transporte | TRANSNORTE Monterrey",
    description:
      "Fletes locales y foráneos, transporte dedicado, maquinaria pesada, custodia GPS 24/7, logística urgente y gestión de carga. Una sola empresa, todas las soluciones.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1200&h=630&fit=crop&q=80",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <ServiciosIndexHero />
      <ServiciosIndexGrid />
      <FleetSection />
      <HowWeWorkSection />
      <ClosingCtaSection />
    </>
  );
}

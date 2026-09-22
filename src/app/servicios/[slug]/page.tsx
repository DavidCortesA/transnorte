import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import ServiceHero from "@/components/servicios/ServiceHero";
import ServiceBody from "@/components/servicios/ServiceBody";
import ServiceBenefits from "@/components/servicios/ServiceBenefits";
import RelatedServices from "@/components/servicios/RelatedServices";
import ServiceCta from "@/components/servicios/ServiceCta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      locale: "es_MX",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero slug={service.slug} />
      <ServiceBody service={service} />
      <ServiceBenefits service={service} />
      <RelatedServices current={service} />
      <ServiceCta service={service} />
    </>
  );
}

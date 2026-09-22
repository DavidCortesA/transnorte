import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import BlogCard from "@/components/blog/BlogCard";
import BlogFeaturedCard from "@/components/blog/BlogFeaturedCard";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | TRANSNORTE Logística Industrial",
  description:
    "Artículos, guías y noticias sobre logística, transporte de carga y cadena de suministro en México, escritos por el equipo de TRANSNORTE.",
  keywords:
    "blog de logística, transporte de carga México, cadena de suministro, guías de logística Monterrey",
  openGraph: {
    title: "Blog | TRANSNORTE Logística Industrial",
    description:
      "Artículos, guías y noticias sobre logística, transporte de carga y cadena de suministro en México.",
    locale: "es_MX",
    type: "website",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 mx-auto rounded-4xl bg-red-50 flex items-center justify-center mb-6">
            <Newspaper className="w-6 h-6 text-red-700" />
          </div>
          <Eyebrow icon={Newspaper} label="Blog TRANSNORTE" />
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            Ideas y guías para mover su operación
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            Artículos escritos por el equipo de TRANSNORTE sobre logística, transporte de carga y buenas prácticas para la cadena de suministro en México.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InView>
            <BlogFeaturedCard post={featured} />
          </InView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
            {rest.map((post, i) => (
              <InView key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} />
              </InView>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaSection />
    </>
  );
}

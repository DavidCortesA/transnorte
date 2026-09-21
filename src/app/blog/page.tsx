import type { Metadata } from "next";
import { Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | TRANSNORTE Logística Industrial",
  description:
    "Artículos, guías y noticias sobre logística, transporte de carga y cadena de suministro en México.",
};

export default function BlogPage() {
  return (
    <section className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 mx-auto rounded-4xl bg-red-50 flex items-center justify-center mb-6">
          <Newspaper className="w-6 h-6 text-red-700" />
        </div>
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
          Blog TRANSNORTE
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Muy pronto, nuevo contenido
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
          Estamos preparando artículos y guías sobre logística, transporte de carga y buenas prácticas
          para la cadena de suministro en México. Vuelve pronto.
        </p>
      </div>
    </section>
  );
}

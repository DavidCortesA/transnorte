import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, LayoutGrid, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Página no encontrada | TRANSNORTE",
  description: "La página que buscas no existe o fue movida. Regresa al inicio o explora nuestros servicios de logística y transporte.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-950 overflow-hidden py-24">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex items-center justify-center">
        <span className="text-[38vw] font-black text-white leading-none">404</span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-4xl bg-red-700 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-900/40">
          <Truck className="w-8 h-8 text-white" />
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-700/90 text-white text-xs font-bold tracking-wider uppercase rounded-4xl mb-6">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Esta ruta se perdió en el camino.
        </h1>
        <p className="text-gray-300 leading-relaxed mb-10 max-w-lg mx-auto">
          La página que buscas no existe o fue movida de lugar. Mientras la encontramos, puedes volver al inicio o revisar nuestros servicios de logística y transporte.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 shadow-xl shadow-red-900/40 transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/servicios"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-4xl hover:border-white hover:bg-white/10 transition-all"
          >
            <LayoutGrid className="w-4 h-4" />
            Ver servicios
          </Link>
        </div>

        <a
          href="https://wa.me/528112345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          ¿Necesitas ayuda? Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}

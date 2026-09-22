import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function PostCta() {
  return (
    <section className="bg-red-700 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <InView>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Listo para mover su próximo embarque?
          </h2>
          <p className="text-red-200 leading-relaxed mb-8 max-w-xl mx-auto">
            Cotice en minutos y reciba su unidad asignada en menos de 2 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="flex items-center gap-2 px-8 py-3.5 bg-white text-red-700 font-bold rounded-4xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Solicitar Cotización <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-4xl hover:border-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}

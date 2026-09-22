import Link from "next/link";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import { services } from "@/lib/services";

export default function ServiciosIndexGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center mb-14">
          <Eyebrow icon={LayoutGrid} label="Catálogo de Servicios" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Seis soluciones, una sola empresa
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Explore cada servicio a detalle: alcance, flota disponible y lo que puede esperar de TRANSNORTE en cada uno.
          </p>
        </InView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((s, i) => (
            <InView key={s.slug} delay={Math.min(i * 0.06, 0.3)}>
              <Link href={`/servicios/${s.slug}`} className="group flex flex-col">
                <div className="w-12 h-12 rounded-2xl border-2 border-red-100 flex items-center justify-center mb-5 group-hover:border-red-700 group-hover:bg-red-700 transition-colors">
                  <s.icon className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.cardTitle}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.cardDesc}</p>
                <div className="flex items-center gap-1 text-red-700 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Ver detalle <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

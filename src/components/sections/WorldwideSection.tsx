"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Globe2, MapPin, Plus, Minus } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const faqs = [
  {
    q: "¿Cómo obtengo un seguro para mi mercancía?",
    a: "Toda carga transportada por TRANSNORTE cuenta con póliza de seguro de responsabilidad civil incluida. Para mercancía de alto valor ofrecemos cobertura ampliada bajo cotización.",
  },
  {
    q: "¿Qué tipos de servicio ofrece TRANSNORTE?",
    a: "Fletes locales y foráneos, transporte dedicado, traslado de maquinaria pesada, custodia y monitoreo GPS, y logística urgente los 365 días del año.",
  },
  {
    q: "¿Garantizan la seguridad de la carga?",
    a: "Sí. Operadores certificados SCT, unidades con GPS 24/7 y protocolos de seguridad verificados en cada ruta, con opción de custodia armada para cargas sensibles.",
  },
  {
    q: "¿A qué zonas del país tienen cobertura?",
    a: "Presencia en los 32 estados de la República, con frecuencia diaria en rutas del Noreste y Bajío desde nuestra base en Monterrey.",
  },
];

const pins = [
  { top: "22%", left: "16%", color: "text-red-500" },
  { top: "14%", left: "72%", color: "text-purple-500" },
  { top: "48%", left: "34%", color: "text-amber-500" },
  { top: "60%", left: "80%", color: "text-blue-500" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WorldwideSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: heading + dot map with pins */}
          <motion.div
            variants={headerVariants as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Eyebrow icon={Globe2} label="Cobertura Nacional" tone="dark" />
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-8">
              Trabajamos a nivel nacional
              <br /> para ti, desde 2010.
            </h2>

            <div className="relative aspect-16/9 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <Image
                src="/images/world-dots-map.png"
                alt="Mapa de cobertura TRANSNORTE"
                fill
                className="object-contain p-6"
              />
              {pins.map((p, i) => (
                <motion.div
                  key={i}
                  className={`absolute -translate-x-1/2 -translate-y-full ${p.color}`}
                  style={{ top: p.top, left: p.left }}
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                >
                  <MapPin className="w-7 h-7 fill-current stroke-gray-950" strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ accordion */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? "border-red-700/60 bg-white/5" : "border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  >
                    <span className="flex items-baseline gap-3 font-semibold text-white text-sm sm:text-base">
                      <span className="text-red-500 text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-4xl bg-white/10 flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-white" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-16 text-sm text-gray-400 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ing. Roberto Garza",
    role: "Director de Operaciones · Grupo Acero del Norte",
    quote:
      "TRANSNORTE lleva 3 años siendo nuestro proveedor exclusivo de traslados de maquinaria pesada. Cero incidentes, puntualidad impecable y comunicación en tiempo real. Exactamente lo que necesita una operación industrial exigente.",
    stars: 5,
  },
  {
    name: "Lic. Mariana Sánchez",
    role: "Gerente de Supply Chain · Manufactura TechNor",
    quote:
      "Cuando nuestro proveedor anterior falló en un envío crítico, TRANSNORTE respondió en 90 minutos con unidad y operador asignados. Desde entonces son nuestro socio estratégico de logística.",
    stars: 5,
  },
  {
    name: "C.P. Alejandro Treviño",
    role: "Director General · Constructora Regiomont",
    quote:
      "El transporte dedicado que nos ofrecen ha reducido nuestros costos operativos un 22% y eliminado los retrasos en obra. Profesionalismo y cumplimiento total.",
    stars: 5,
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={headerVariants as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Lo que dicen nuestros
            <br className="hidden sm:block" /> clientes industriales
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants as Variants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-gray-50 rounded-xl p-7 border border-gray-200 flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

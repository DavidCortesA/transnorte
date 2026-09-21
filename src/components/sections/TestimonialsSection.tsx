"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const testimonials = [
  {
    name: "Ing. Roberto Garza",
    role: "Director de Operaciones · Grupo Acero del Norte",
    quote:
      "TRANSNORTE lleva 3 años siendo nuestro proveedor exclusivo de traslados de maquinaria pesada. Cero incidentes, puntualidad impecable y comunicación en tiempo real.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Lic. Mariana Sánchez",
    role: "Gerente de Supply Chain · Manufactura TechNor",
    quote:
      "Cuando nuestro proveedor anterior falló en un envío crítico, TRANSNORTE respondió en 90 minutos con unidad y operador asignados. Desde entonces son nuestro socio estratégico.",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "C.P. Alejandro Treviño",
    role: "Director General · Constructora Regiomont",
    quote:
      "El transporte dedicado que nos ofrecen ha reducido nuestros costos operativos un 22% y eliminado los retrasos en obra. Profesionalismo y cumplimiento total.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&q=85",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Eyebrow icon={MessageCircle} label="Testimonios" tone="dark" />
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Lo que dicen nuestros
            <br className="hidden sm:block" /> clientes industriales
          </h2>
        </motion.div>

        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
          <Quote className="w-10 h-10 text-red-700/50 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-4xl overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-6 right-8 sm:right-12 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-4xl bg-white/10 hover:bg-red-700 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-4xl bg-red-700 hover:bg-red-800 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

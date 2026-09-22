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
  {
    name: "Lic. Karla Villareal",
    role: "Gerente de Logística · Distribuidora AMM",
    quote:
      "La visibilidad de GPS en tiempo real cambió por completo cómo planeamos nuestra cadena de suministro. Soporte disponible los 365 días del año.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=85",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 2) % testimonials.length);
  const prev = () => setIndex((i) => (i - 2 + testimonials.length) % testimonials.length);
  const visible = [testimonials[index], testimonials[(index + 1) % testimonials.length]];

  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mb-12">
          <motion.div
            className="text-center sm:text-left"
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

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              aria-label="Testimonios anteriores"
              className="w-11 h-11 rounded-4xl bg-white/10 hover:bg-red-700 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={next}
              aria-label="Siguientes testimonios"
              className="w-11 h-11 rounded-4xl bg-red-700 hover:bg-red-800 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {visible.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <Quote className="w-8 h-8 text-red-700/60 mb-5" />
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-gray-200 leading-relaxed mb-7">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-4xl overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex sm:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            aria-label="Testimonios anteriores"
            className="w-11 h-11 rounded-4xl bg-white/10 hover:bg-red-700 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            aria-label="Siguientes testimonios"
            className="w-11 h-11 rounded-4xl bg-red-700 hover:bg-red-800 flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

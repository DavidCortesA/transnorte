"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Info, CheckCircle2, ArrowRight, Users } from "lucide-react";
import Counter from "@/components/Counter";
import Eyebrow from "@/components/Eyebrow";

const stats = [
  { value: 500, suffix: "+", label: "Empresas atendidas" },
  { value: 120, suffix: "+", label: "Operadores certificados" },
  { value: 32, suffix: "", label: "Estados con cobertura" },
];

const slideLeft = {
  hidden: { opacity: 0, x: -52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div
            className="relative h-[420px] sm:h-[480px]"
            variants={slideLeft as Variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="absolute top-0 left-0 w-[62%] h-[70%] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=700&h=700&fit=crop&q=85"
                alt="Contenedores de carga TRANSNORTE"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] h-[58%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=700&h=700&fit=crop&q=85"
                alt="Operación de montacargas en almacén"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute bottom-6 left-0 sm:-left-4 bg-red-700 text-white rounded-2xl p-4 shadow-2xl flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ delay: 0.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-10 h-10 rounded-4xl bg-white/15 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black leading-none">
                  <Counter target={1500} suffix="+" />
                </div>
                <div className="text-[11px] font-semibold text-red-200 mt-1">Envíos completados</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideRight as Variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Eyebrow icon={Info} label="Sobre Nosotros" />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
              Descubre TRANSNORTE:
              <br /> tu <span className="text-red-700">socio logístico.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Las empresas líderes del Noreste eligen TRANSNORTE porque saben que su operación no puede depender de improvisación. Más de 15 años ofreciendo procesos, tecnología y gente comprometida con cada embarque.
            </p>

            <ul className="space-y-3 mb-8">
              {["Operadores certificados SCT", "GPS 24/7 en tiempo real", "Respuesta en menos de 2 horas"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                    {f}
                  </li>
                )
              )}
            </ul>

            <motion.div
              className="grid grid-cols-3 gap-4 mb-9 pb-9 border-b border-gray-100"
              variants={gridContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={gridItem as Variants}>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
            >
              Contáctanos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

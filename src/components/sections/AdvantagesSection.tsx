"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Clock, Shield, MapPin, Navigation, Users, CheckCircle, Phone,
} from "lucide-react";

const advantages = [
  { icon: Clock, title: "Respuesta en 2 horas", desc: "Cotización y asignación de unidad en tiempo récord." },
  { icon: Shield, title: "Operadores certificados SCT", desc: "Personal con licencia federal, capacitado y verificado." },
  { icon: MapPin, title: "Cobertura nacional", desc: "Presencia en los 32 estados. Rutas Noreste con frecuencia diaria." },
  { icon: Navigation, title: "GPS 24/7 en tiempo real", desc: "Visibilidad completa de su carga en todo momento." },
  { icon: Users, title: "Asesor comercial dedicado", desc: "Un punto de contacto único para toda su operación." },
  { icon: CheckCircle, title: "+15 años de experiencia", desc: "Empresa consolidada con historial comprobable en industria pesada." },
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
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image with slide-left */}
          <motion.div
            className="relative"
            variants={slideLeft as Variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="aspect-4/3 rounded-2xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&h=600&fit=crop&q=85"
                alt="Operaciones logísticas TRANSNORTE"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 bg-red-700 text-white rounded-xl p-5 shadow-xl"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ delay: 0.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-3xl font-black">98%</div>
              <div className="text-xs font-semibold text-red-200 mt-0.5">Entregas a tiempo</div>
            </motion.div>
          </motion.div>

          {/* Content with slide-right */}
          <motion.div
            variants={slideRight as Variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-5">
              ¿Por qué TRANSNORTE?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
              La diferencia entre un proveedor
              <br /> y un <span className="text-red-700">socio estratégico.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Las empresas líderes del Noreste eligen TRANSNORTE porque saben que su operación no puede depender de improvisación. Ofrecemos procesos, tecnología y gente comprometida.
            </p>

            <motion.div
              className="grid sm:grid-cols-2 gap-5"
              variants={gridContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {advantages.map((a) => (
                <motion.div key={a.title} variants={gridItem as Variants} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <a.icon className="w-4 h-4 text-red-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{a.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{a.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors"
              >
                Solicitar Cotización
              </Link>
              <a
                href="tel:+528112345678"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-sm rounded-4xl hover:border-red-600 hover:text-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +52 (81) 1234-5678
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

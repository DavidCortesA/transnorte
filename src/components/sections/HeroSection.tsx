"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, MessageCircle, Star } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=1400&fit=crop&q=85",
    alt: "Operador de TRANSNORTE entregando un paquete",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=1400&fit=crop&q=85",
    alt: "Flota de camiones de carga TRANSNORTE",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1400&fit=crop&q=85",
    alt: "Operador cargando mercancía en almacén",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-950 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item as Variants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-700/90 text-white text-xs font-bold tracking-wider uppercase rounded-4xl mb-7 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Monterrey · Cobertura Nacional
              </div>
            </motion.div>

            <motion.h1
              variants={item as Variants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Ofreciendo la logística
              <span className="block text-red-500 mt-1">más segura, con integridad.</span>
            </motion.h1>

            <motion.p
              variants={item as Variants}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg"
            >
              Somos una empresa líder en transporte de carga con una red de clase mundial, tecnología de punta y un servicio que mantiene a nuestros clientes en el centro de todo lo que hacemos.
            </motion.p>

            <motion.div variants={item as Variants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 shadow-xl shadow-red-900/40 transition-all hover:-translate-y-0.5"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/528112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-4xl hover:border-white hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Hablar con un asesor
              </a>
            </motion.div>

            <motion.div variants={item as Variants} className="flex items-center gap-5 mt-12">
              <div className="flex -space-x-3">
                {slides.map((s) => (
                  <div key={s.src} className="relative w-10 h-10 rounded-4xl border-2 border-gray-950 overflow-hidden">
                    <Image src={s.src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1">Más de 500 empresas confían en nosotros</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
              {slides.map((s, i) => (
                <motion.div
                  key={s.src}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image src={s.src} alt={s.alt} fill priority={i === 0} className="object-cover" />
                </motion.div>
              ))}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/70 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute top-6 -left-4 sm:-left-8 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 max-w-[210px]"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-4xl bg-red-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-red-700" />
              </div>
              <div>
                <div className="font-black text-gray-900 text-sm leading-tight">GPS 24/7</div>
                <div className="text-[11px] text-gray-500 leading-tight">Monitoreo en tiempo real</div>
              </div>
            </motion.div>

            {/* Pagination dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ver imagen ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-4xl transition-all ${
                    active === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

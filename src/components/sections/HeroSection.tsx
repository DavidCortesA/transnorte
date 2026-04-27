"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const trustItems = ["SCT Certificado", "+500 empresas", "Respuesta 2hrs", "GPS 24/7"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with scale-in */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={imageVariant as Variants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop&q=85"
          alt="Flota de transporte de carga TRANSNORTE"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/92 via-gray-900/80 to-gray-900/40" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          className="max-w-2xl flex flex-col items-center justify-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={item as Variants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-700/90 text-white text-xs font-bold tracking-wider uppercase rounded-4xl mb-7 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Monterrey · Cobertura Nacional
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item as Variants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 text-center"
          >
            Logística industrial
            <span className="block text-red-500 mt-1">que no se detiene.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={item as Variants}
            className="text-lg text-gray-200 leading-relaxed mb-10 max-w-xl text-center"
          >
            Transporte terrestre confiable para empresas exigentes. Desde camionetas de 1 tonelada hasta tráileres de 53 pies. Operadores certificados, GPS 24/7 y respuesta en menos de 2 horas.
          </motion.p>

          {/* CTAs */}
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

          {/* Trust signals */}
          <motion.div
            variants={item as Variants}
            className="flex flex-wrap items-center gap-5 mt-12"
          >
            {trustItems.map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-red-400" />
                <span>{t}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-linear-to-b from-white/30 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}

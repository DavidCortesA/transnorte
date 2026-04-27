"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ClosingCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1471174522655-7e34f6a5a785?w=1920&h=700&fit=crop&q=80"
          alt="Transporte logístico industrial"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-950/85" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          variants={item as Variants}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5"
        >
          Su próximo embarque merece
          <br className="hidden sm:block" />
          <span className="text-red-500"> el mejor operador.</span>
        </motion.h2>

        <motion.p
          variants={item as Variants}
          className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Cotice en minutos y tenga su unidad lista en menos de 2 horas. Sin burocracia, sin sorpresas, con el respaldo de más de 15 años en la industria.
        </motion.p>

        <motion.div
          variants={item as Variants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contacto"
            className="group flex items-center gap-2 px-10 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 shadow-2xl shadow-red-900/50 transition-all hover:-translate-y-0.5"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/528112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-semibold text-base rounded-4xl hover:border-white hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Directo
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

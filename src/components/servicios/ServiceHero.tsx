"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { getServiceBySlug } from "@/lib/services";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function ServiceHero({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  return (
    <section className="relative overflow-hidden bg-gray-950 min-h-[520px] flex items-end">
      <div className="absolute inset-0">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/95 via-gray-950/75 to-gray-950/30" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pt-44 md:pb-20 w-full">
        <motion.div
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-200">{service.cardTitle}</span>
        </motion.div>

        <motion.div className="max-w-2xl" variants={container} initial="hidden" animate="visible">
          <motion.div variants={item as Variants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-700/90 text-white text-xs font-bold tracking-wider uppercase rounded-4xl mb-7 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {service.heroEyebrow}
            </div>
          </motion.div>

          <motion.h1
            variants={item as Variants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            {service.heroTitle}
          </motion.h1>

          <motion.p
            variants={item as Variants}
            className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
          >
            {service.heroSubtitle}
          </motion.p>

          <motion.div variants={item as Variants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 shadow-xl shadow-red-900/40 transition-all hover:-translate-y-0.5"
            >
              {service.ctaLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-4xl hover:border-white hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Preguntar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

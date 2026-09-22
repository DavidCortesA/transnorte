"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, ArrowRight, LayoutGrid } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { services } from "@/lib/services";

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export default function ServicesSection() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14"
          variants={headerVariants as Variants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Eyebrow icon={LayoutGrid} label="Nuestros Servicios" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Soluciones completas de logística
            <br className="hidden sm:block" /> para la industria mexicana
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Capacidad operativa desde 1 tonelada hasta cargas industriales de gran volumen. Una sola empresa, todas las soluciones.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
          variants={gridContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {services.map((s) => (
            <motion.div key={s.slug} variants={cardVariants as Variants}>
              <Link href={`/servicios/${s.slug}`} className="group flex flex-col">
                <div className="w-12 h-12 rounded-2xl border-2 border-red-100 flex items-center justify-center mb-5 group-hover:border-red-700 group-hover:bg-red-700 transition-colors">
                  <s.icon className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.cardTitle}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.cardDesc}</p>
                <div className="flex items-center gap-1 text-red-700 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Ver detalle <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-700 text-white font-bold rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
          >
            Ver todos los servicios <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

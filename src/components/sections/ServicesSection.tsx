"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Truck, Navigation, Wrench, Shield, AlertCircle, Package, ChevronRight, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fletes Locales y Foráneos",
    desc: "Servicio de transporte terrestre punto a punto en toda la República. Camionetas 1T hasta tráileres 53 pies.",
    href: "/servicios#fletes-locales",
  },
  {
    icon: Navigation,
    title: "Transporte Dedicado",
    desc: "Unidad y operador exclusivos para su empresa. Disponibilidad programada, flexibilidad total de rutas y horarios.",
    href: "/servicios#dedicado",
  },
  {
    icon: Wrench,
    title: "Maquinaria Pesada",
    desc: "Traslado especializado de maquinaria industrial, equipos de construcción y activos de alto valor.",
    href: "/servicios#maquinaria",
  },
  {
    icon: Shield,
    title: "Custodia y Monitoreo GPS",
    desc: "Escolta de seguridad y rastreo satelital en tiempo real 24/7 para cargas de alto valor o zonas sensibles.",
    href: "/servicios#custodia",
  },
  {
    icon: AlertCircle,
    title: "Logística Urgente",
    desc: "Respuesta en menos de 2 horas para cargas críticas. Operamos los 365 días del año, incluyendo días festivos.",
    href: "/servicios#urgente",
  },
  {
    icon: Package,
    title: "Gestión de Carga",
    desc: "Coordinación integral: carga, tránsito, descarga y documentación. Su operación en una sola llamada.",
    href: "/servicios",
  },
];

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
    <section className="py-20 lg:py-28 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14"
          variants={headerVariants as Variants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
            Nuestros Servicios
          </span>
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={cardVariants as Variants}>
              <Link
                href={s.href}
                className="group bg-white rounded-xl p-7 border border-gray-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <s.icon className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
                <div className="flex items-center gap-1 text-red-700 text-sm font-semibold mt-5 group-hover:gap-2 transition-all">
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

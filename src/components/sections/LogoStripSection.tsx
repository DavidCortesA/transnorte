"use client";

import { motion, Variants } from "framer-motion";
import { Boxes, Building2, Factory, Landmark, Layers, Warehouse } from "lucide-react";

const clients = [
  { name: "Acero del Norte", icon: Factory },
  { name: "Grupo Regiomont", icon: Building2 },
  { name: "TechNor Manufactura", icon: Layers },
  { name: "Constructora del Valle", icon: Landmark },
  { name: "Distribuidora AMM", icon: Warehouse },
  { name: "Industrias Nuevo León", icon: Boxes },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LogoStripSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-semibold text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Hemos trabajado en más de 200 proyectos con 150+ empresas
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={fade as Variants}
              className="flex items-center gap-2 text-gray-400 grayscale opacity-70 hover:opacity-100 hover:text-red-700 hover:grayscale-0 transition-all duration-300"
            >
              <c.icon className="w-5 h-5" />
              <span className="font-bold text-sm tracking-tight whitespace-nowrap">{c.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

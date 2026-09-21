"use client";

import { motion, Variants } from "framer-motion";
import { ClipboardList, Warehouse, PackageCheck, Truck, Workflow } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Recolección y Empaque",
    desc: "Levantamos su carga en punto de origen con el empaque adecuado para cada tipo de mercancía.",
  },
  {
    icon: Warehouse,
    step: "02",
    title: "Operación de Almacén",
    desc: "Resguardo temporal en instalaciones seguras con control de inventario en tiempo real.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Empaque y Distribución",
    desc: "Preparamos y clasificamos cada embarque conforme a la ruta y destino final.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Proceso de Transporte",
    desc: "Traslado monitoreado por GPS con operadores certificados hasta la entrega final.",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Eyebrow icon={Workflow} label="Nuestro Proceso" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Nos encargamos del estrés
            <br className="hidden sm:block" /> de tu envío.
          </h2>
        </motion.div>

        <motion.div
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-gray-300" />
          {steps.map((s) => (
            <motion.div key={s.step} variants={cardVariants as Variants} className="relative text-center">
              <div className="relative z-10 w-16 h-16 mx-auto rounded-4xl bg-white border-2 border-red-100 flex items-center justify-center mb-5 shadow-sm">
                <s.icon className="w-7 h-7 text-red-700" />
              </div>
              <span className="text-xs font-bold tracking-widest text-red-700/70">STEP {s.step}</span>
              <h3 className="font-bold text-gray-900 text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

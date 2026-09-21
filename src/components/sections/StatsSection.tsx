"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Counter from "@/components/Counter";

const stats = [
  { value: 500, suffix: "+", label: "Empresas atendidas" },
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 98, suffix: "%", label: "Entregas a tiempo" },
  { value: 24, suffix: "/7", label: "Monitoreo GPS" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-gray-950">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800">
          {stats.map((s) => (
            <motion.div key={s.label} variants={item as Variants} className="px-8 py-8 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const industries = [
  { name: "Industria Siderúrgica",        img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=280&fit=crop&q=80" },
  { name: "Sector Automotriz",            img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=280&fit=crop&q=80" },
  { name: "Manufactura Industrial",       img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=280&fit=crop&q=80" },
  { name: "Construcción e Infraestructura", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=280&fit=crop&q=80" },
  { name: "Comercio y Distribución",      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=280&fit=crop&q=80" },
  { name: "Energía y Petroquímica",       img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=280&fit=crop&q=80" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={headerVariants as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 bg-red-900/30 px-3 py-1 rounded-4xl mb-4">
            Industrias que Atendemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Experiencia en los sectores
            <br className="hidden sm:block" /> más exigentes de México
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={cardVariants as Variants}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={ind.img}
                alt={ind.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-base">{ind.name}</span>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-700 text-white text-xs font-bold px-2 py-1 rounded">
                  Conocer más →
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

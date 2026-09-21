"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Users, Globe, Share2, Camera, Mail } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const team = [
  {
    name: "Roberto Garza",
    role: "Director General",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=460&fit=crop&q=85",
  },
  {
    name: "Mariana Sánchez",
    role: "Jefa de Operaciones",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=460&fit=crop&q=85",
  },
  {
    name: "Jorge Nicolás",
    role: "Ingeniero de Flota",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=460&fit=crop&q=85",
  },
  {
    name: "Sonia Miller",
    role: "Gerente de Logística",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=460&fit=crop&q=85",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socials = [Globe, Share2, Camera, Mail];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={headerVariants as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Eyebrow icon={Users} label="Nuestro Equipo" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Conoce a nuestro equipo
            <br className="hidden sm:block" /> de soporte especializado.
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((m) => (
            <motion.div
              key={m.name}
              variants={cardVariants as Variants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-3xl overflow-hidden border border-gray-200"
            >
              <div className="relative aspect-3/4">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  {socials.map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-4xl bg-white/15 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="font-bold text-gray-900">{m.name}</div>
                <div className="text-xs text-red-700 font-semibold uppercase tracking-wide mt-0.5">
                  {m.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

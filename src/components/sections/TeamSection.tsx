"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Users } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { LinkedInIcon, InstagramIcon, XIcon } from "@/components/icons/SocialIcons";

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
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=460&fit=crop&q=85",
  },
  {
    name: "Sonia Miller",
    role: "Gerente de Logística",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=460&fit=crop&q=85",
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

const socials = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://www.instagram.com", label: "Instagram" },
  { icon: XIcon, href: "https://x.com", label: "X" },
];

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
              className="group relative"
            >
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <div className="absolute bottom-20 right-1 flex items-center gap-1.5 bg-white rounded-4xl shadow-lg border border-gray-100 p-1.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} de ${m.name}`}
                    className="group/social w-7 h-7 rounded-4xl bg-red-50 flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <s.icon className="w-3.5 h-3.5 text-red-700 group-hover/social:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <div className="pt-8 text-center">
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

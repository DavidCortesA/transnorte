"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const posts = [
  {
    title: "La guía para embarcar cargas de gran volumen",
    date: "22 Ene, 2026",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=200&h=200&fit=crop&q=85",
  },
  {
    title: "Cinco razones para elegir la mejor empresa de transporte",
    date: "18 Ene, 2026",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&h=200&fit=crop&q=85",
  },
  {
    title: "Tres razones por las que necesitas visibilidad en tu cadena de suministro",
    date: "12 Ene, 2026",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop&q=85",
  },
];

const featured = {
  title: "Cómo TRANSNORTE puede ayudar a tu logística",
  date: "22 Ene, 2026",
  img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&h=700&fit=crop&q=85",
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function BlogPreviewSection() {
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
          <Eyebrow icon={Newspaper} label="Nuestro Blog" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Blog y noticias actualizadas
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            className="space-y-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {posts.map((p) => (
              <motion.div key={p.title} variants={fade as Variants}>
                <Link
                  href="/blog"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-gray-50 transition-all"
                >
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                    <Image src={p.img} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date} · Por Admin
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fade as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/blog"
              className="group relative block rounded-3xl overflow-hidden h-full min-h-[280px]"
            >
              <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 mb-2">
                  <User className="w-3.5 h-3.5" />
                  {featured.date}
                </div>
                <h3 className="text-xl font-black text-white leading-tight mb-3">{featured.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-400 group-hover:gap-2.5 transition-all">
                  Leer más <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { blogPosts } from "@/lib/blog";

const [featured, ...rest] = blogPosts;
const listPosts = rest.slice(0, 3);

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
            {listPosts.map((p) => (
              <motion.div key={p.slug} variants={fade as Variants}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-red-200 hover:bg-gray-50 transition-all"
                >
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                    <Image src={p.coverImage} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date} · Por {p.author.name}
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
              href={`/blog/${featured.slug}`}
              className="group relative block rounded-3xl overflow-hidden h-full min-h-70"
            >
              <Image src={featured.coverImage} alt={featured.coverImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
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

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-700 text-white font-bold rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
          >
            Ver todo el blog <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

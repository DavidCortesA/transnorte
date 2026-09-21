"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  const inputBase =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-4xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all";

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Eyebrow icon={MessageSquare} label="Contáctanos" />
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
              Solicita hoy mismo
              <br /> tu <span className="text-red-700">cotización.</span>
            </h2>

            {submitted ? (
              <div className="bg-white border border-green-200 rounded-3xl p-6 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">¡Solicitud enviada!</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Un asesor de TRANSNORTE se pondrá en contacto en menos de 2 horas.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Nombre*" className={inputBase} />
                  <input required type="email" name="email" placeholder="Email*" className={inputBase} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required type="tel" name="phone" placeholder="Teléfono*" className={inputBase} />
                  <input name="company" placeholder="Empresa" className={inputBase} />
                </div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Cuéntanos sobre tu envío..."
                  className={`${inputBase} rounded-2xl resize-none`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20 disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Hablemos"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden"
            variants={slideRight as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=900&h=1100&fit=crop&q=85"
              alt="Paquetería lista para embarque"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

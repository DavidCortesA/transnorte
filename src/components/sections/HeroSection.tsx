"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=2000&h=1400&fit=crop&q=85",
    alt: "Operador de TRANSNORTE entregando un paquete junto a su unidad",
    badge: "Monterrey · Cobertura Nacional",
    title: "Ofreciendo la logística más segura, con integridad.",
    text: "Somos una empresa líder en transporte de carga con una red de clase mundial, tecnología de punta y un servicio que mantiene a nuestros clientes en el centro de todo lo que hacemos.",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2000&h=1400&fit=crop&q=85",
    alt: "Flota de camiones de carga TRANSNORTE",
    badge: "Flota propia · GPS 24/7",
    title: "Una flota lista para mover tu carga a cualquier destino.",
    text: "Contamos con unidades propias monitoreadas en tiempo real, listas para llegar a cualquier punto de la República con la puntualidad que tu operación necesita.",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2000&h=1400&fit=crop&q=85",
    alt: "Operador cargando mercancía en almacén",
    badge: "Operadores certificados SCT",
    title: "Personal capacitado que cuida cada embarque.",
    text: "Nuestros operadores están certificados y siguen protocolos de seguridad en cada etapa, desde la carga hasta la entrega final de tu mercancía.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gray-950 min-h-[640px] flex items-end">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === 0} className="object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/95 via-gray-950/70 to-gray-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 md:pt-52 md:pb-28 w-full">
        <div className="max-w-xl">
          {/* Stacked text slides: all occupy the same grid cell so the
              container height is always the tallest one, and never
              shrinks/grows when switching between shorter/longer copy. */}
          <div className="grid">
            {slides.map((s, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={i}
                  className="col-start-1 row-start-1"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                  aria-hidden={!isActive}
                  variants={container}
                  initial={false}
                  animate={isActive ? "visible" : "hidden"}
                >
                  <motion.div variants={item as Variants}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-700/90 text-white text-xs font-bold tracking-wider uppercase rounded-4xl mb-7 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {s.badge}
                    </div>
                  </motion.div>

                  <motion.h1
                    variants={item as Variants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
                  >
                    {s.title}
                  </motion.h1>

                  <motion.p
                    variants={item as Variants}
                    className="text-lg text-gray-300 leading-relaxed mb-10 max-w-md"
                  >
                    {s.text}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 shadow-xl shadow-red-900/40 transition-all hover:-translate-y-0.5"
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-4xl hover:border-white hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Hablar con un asesor
            </a>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center gap-2 mt-14">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver imagen ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-4xl transition-all ${
                active === i ? "w-8 bg-red-600" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

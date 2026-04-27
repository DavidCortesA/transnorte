"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Truck } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

const navContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const navItem = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.58, 1.0] as const } },
};

const mobileMenu = {
  hidden: { opacity: 0, y: -8, scaleY: 0.97 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.22, ease: "easeOut" } },
  exit:   { opacity: 0, y: -8, scaleY: 0.97, transition: { duration: 0.18, ease: "easeIn" } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHero = pathname === "/";
  const isDark = !scrolled && isHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <motion.div
        className="bg-red-700 text-white text-xs py-1.5 px-4 hidden md:block"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">
            Monterrey, Nuevo León · Cobertura Nacional
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+528112345678"
              className="flex items-center gap-1.5 hover:text-red-200 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+52 (81) 1234-5678</span>
            </a>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red-200 transition-colors"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-red-700 rounded-4xl flex items-center justify-center group-hover:bg-red-800 transition-colors">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className={`font-black text-xl tracking-tight ${!isDark ? "text-gray-900" : "text-white"}`}>
                  TRANS<span className="text-red-600">NORTE</span>
                </span>
                <div className={`text-[9px] font-semibold tracking-widest uppercase -mt-0.5 ${!isDark ? "text-gray-500" : "text-gray-300"}`}>
                  Logística Industrial
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop links */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={navContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={navItem}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors relative group ${
                    !isDark ? "text-gray-700 hover:text-red-700" : "text-gray-200 hover:text-white"
                  } ${pathname === link.href ? "text-red-600" : ""}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-4 py-2 rounded-4xl border transition-all ${
                !isDark
                  ? "border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-700"
                  : "border-white/40 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              Hablar con asesor
            </a>
            <Link
              href="/contacto"
              className="text-sm font-bold px-5 py-2 bg-red-700 text-white rounded-4xl hover:bg-red-800 shadow-sm shadow-red-900/20 transition-colors"
            >
              Solicitar Cotización
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${!isDark ? "text-gray-900" : "text-white"}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 shadow-xl origin-top"
            variants={mobileMenu as Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-4xl text-sm font-semibold transition-colors ${
                      pathname === link.href ? "bg-red-50 text-red-700" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-3 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22 }}
              >
                <a
                  href="https://wa.me/528112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2.5 border border-gray-300 rounded-4xl text-sm font-semibold text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Hablar con asesor
                </a>
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-red-700 text-white rounded-4xl text-sm font-bold"
                >
                  Solicitar Cotización
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

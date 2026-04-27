import Link from "next/link";
import { Truck, Phone, Mail, MapPin, MessageCircle, Globe, Share2, Camera } from "lucide-react";

const services = [
  { label: "Fletes Locales", href: "/servicios#fletes-locales" },
  { label: "Fletes Foráneos", href: "/servicios#fletes-foraneos" },
  { label: "Transporte Dedicado", href: "/servicios#dedicado" },
  { label: "Maquinaria Pesada", href: "/servicios#maquinaria" },
  { label: "Custodia y Monitoreo GPS", href: "/servicios#custodia" },
  { label: "Logística Urgente", href: "/servicios#urgente" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
  { label: "Aviso de Privacidad", href: "/privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* CTA strip */}
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-2xl leading-tight">
              ¿Listo para optimizar su logística?
            </p>
            <p className="text-red-200 text-sm mt-1">
              Un asesor especializado le responde en menos de 2 horas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-red-700 font-bold rounded-4xl text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Ahora
            </a>
            <Link
              href="/contacto"
              className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-4xl text-sm hover:bg-white hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-red-700 rounded-4xl flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-xl text-white tracking-tight">
                TRANS<span className="text-red-500">NORTE</span>
              </span>
              <div className="text-[9px] font-semibold tracking-widest text-gray-500 uppercase -mt-0.5">
                Logística Industrial
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Empresa regiomontana especializada en soluciones integrales de logística y transporte para la industria nacional. Más de 15 años moviendo lo que mueve a México.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-4xl bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Globe className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-4xl bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"
              aria-label="Facebook"
            >
              <Share2 className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-4xl bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-colors"
              aria-label="Instagram"
            >
              <Camera className="w-4 h-4 text-gray-300" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-gray-800">
            Servicios
          </h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-red-700 group-hover:bg-red-400 transition-colors" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-gray-800">
            Empresa
          </h3>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-red-700 group-hover:bg-red-400 transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-2 border-b border-gray-800">
            Contacto
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span className="text-sm leading-relaxed">
                Av. Constitución 1200, Col. Centro<br />
                Monterrey, N.L. 64000
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+528112345678" className="text-sm hover:text-red-400 transition-colors">
                +52 (81) 1234-5678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href="https://wa.me/528112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-red-400 transition-colors"
              >
                WhatsApp: +52 (81) 1234-5678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a
                href="mailto:ventas@transnorte.com.mx"
                className="text-sm hover:text-red-400 transition-colors"
              >
                ventas@transnorte.com.mx
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} TRANSNORTE Logística Industrial S.A. de C.V. · Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Aviso de Privacidad
            </Link>
            <span className="text-gray-700">·</span>
            <span className="text-xs text-gray-600">Monterrey, México</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

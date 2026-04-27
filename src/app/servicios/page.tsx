import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Navigation,
  Wrench,
  Shield,
  AlertCircle,
  Package,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Logística y Transporte | TRANSNORTE Monterrey",
  description:
    "Servicios completos de logística: fletes locales y foráneos, transporte dedicado, maquinaria pesada, custodia GPS 24/7 y logística urgente. Monterrey y cobertura nacional.",
};

const services = [
  {
    id: "fletes-locales",
    icon: Truck,
    label: "Fletes Locales",
    title: "Fletes Locales en Monterrey y AMM",
    headline: "Distribución ágil dentro del Área Metropolitana de Monterrey",
    desc: "Servicio de transporte terrestre para entregas dentro de Monterrey, San Pedro, Apodaca, Escobedo, Guadalupe y toda el Área Metropolitana. Ideal para distribución industrial, entregas urgentes a planta y movimientos de inventario.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&q=85",
    features: [
      "Camionetas 1, 2 y 3 toneladas",
      "Rabones y tortons disponibles",
      "Operadores con conocimiento del AMM",
      "Disponibilidad en el mismo día",
      "Seguimiento GPS en tiempo real",
      "Facturación electrónica inmediata",
    ],
  },
  {
    id: "fletes-foraneos",
    icon: MapPin,
    label: "Fletes Foráneos",
    title: "Fletes Foráneos · Cobertura Nacional",
    headline: "Su carga llega a cualquier punto de la República",
    desc: "Transporte terrestre a todos los estados de México. Con rutas consolidadas hacia CDMX, Guadalajara, Saltillo, Torreón, Tampico, Veracruz y principales centros industriales del país. Garantía de tiempos de entrega.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop&q=85",
    features: [
      "Tráileres de 48 y 53 pies",
      "Plataformas y lowboys",
      "Carta porte digital incluida",
      "Monitoreo GPS ruta completa",
      "Seguro de carga disponible",
      "Frecuencias diarias en rutas principales",
    ],
  },
  {
    id: "dedicado",
    icon: Navigation,
    label: "Transporte Dedicado",
    title: "Transporte Dedicado para su Empresa",
    headline: "Una unidad exclusiva, un operador comprometido",
    desc: "Asignamos una unidad y operador de forma exclusiva para su empresa. Sin compartir espacio, sin desvíos. Ideal para empresas con movimientos frecuentes que requieren disponibilidad garantizada y costos predecibles.",
    img: "https://images.unsplash.com/photo-1570071523009-79b5c41a2974?w=800&h=500&fit=crop&q=85",
    features: [
      "Unidad y operador exclusivos",
      "Contrato de disponibilidad mensual",
      "Rutas y horarios a su medida",
      "Reportes de operación periódicos",
      "Asesor de cuenta dedicado",
      "Tarifa fija sin sorpresas",
    ],
  },
  {
    id: "maquinaria",
    icon: Wrench,
    label: "Maquinaria Pesada",
    title: "Traslado de Maquinaria Pesada e Industrial",
    headline: "Activos de alto valor, en manos expertas",
    desc: "Servicio especializado para el traslado de maquinaria industrial, equipos de construcción, generadores, compresores y activos pesados. Contamos con lowboys, plataformas extendidas y personal técnico para aseguramiento de carga.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=85",
    features: [
      "Lowboys y plataformas extendidas",
      "Movimientos sobredimensionados",
      "Permisos y bandereros incluidos",
      "Técnicos en aseguramiento de carga",
      "Planeación de ruta especializada",
      "Coordinación con autoridades viales",
    ],
  },
  {
    id: "custodia",
    icon: Shield,
    label: "Custodia GPS",
    title: "Custodia y Monitoreo GPS 24/7",
    headline: "Visibilidad total, seguridad garantizada",
    desc: "Servicio de escolta y monitoreo satelital para cargas de alto valor, productos sensibles o rutas con factores de riesgo. Nuestro centro de control opera las 24 horas los 365 días del año.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=85",
    features: [
      "Monitoreo GPS en tiempo real",
      "Escolta vehicular disponible",
      "Alertas inmediatas ante desvíos",
      "Comunicación directa con operador",
      "Reportes de posición programados",
      "Protocolos de contingencia activos",
    ],
  },
  {
    id: "urgente",
    icon: AlertCircle,
    label: "Logística Urgente",
    title: "Logística Urgente y Cargas Críticas",
    headline: "Cuando cada hora cuenta, TRANSNORTE responde",
    desc: "Para paros de línea, entregas de emergencia o situaciones críticas que no pueden esperar. Asignamos unidad en menos de 2 horas los 365 días del año, incluyendo fines de semana y días festivos.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop&q=85",
    features: [
      "Respuesta garantizada en 2 horas",
      "Operación 365 días del año",
      "Línea prioritaria de atención",
      "Unidades en espera lista",
      "Coordinación express de documentos",
      "Soporte de emergencia 24/7",
    ],
  },
];

const fleetItems = [
  { name: "Camioneta", capacity: "1 - 1.5 Ton", icon: "🚐" },
  { name: "3.5 Toneladas", capacity: "3 - 3.5 Ton", icon: "🚚" },
  { name: "Rabon", capacity: "8 - 10 Ton", icon: "🚛" },
  { name: "Torton", capacity: "14 - 16 Ton", icon: "🚛" },
  { name: "Tráiler 48 pies", capacity: "22 - 24 Ton", icon: "🚛" },
  { name: "Tráiler 53 pies", capacity: "26 - 28 Ton", icon: "🚛" },
  { name: "Lowboy", capacity: "Sobredimensionado", icon: "🏗️" },
  { name: "Plataforma", capacity: "Carga especial", icon: "⚙️" },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1920&h=600&fit=crop&q=70"
            alt="Servicios de logística"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/95 to-gray-950/70 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 bg-red-900/30 px-3 py-1 rounded-4xl mb-5">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Todo lo que su operación<br />
              <span className="text-red-500">logística necesita.</span>
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Desde el flete local más ágil hasta el traslado de maquinaria más complejo. TRANSNORTE tiene la capacidad, la flota y la experiencia para moverlo todo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-red-700 text-white font-bold rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/40"
              >
                Solicitar Cotización <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/528112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-4xl hover:border-white/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV ── */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-4xl text-xs font-semibold text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors whitespace-nowrap"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 lg:py-28 scroll-mt-24 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
              {/* Image */}
              <div className={`relative ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <div className="aspect-video rounded-2xl overflow-hidden relative shadow-xl">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-red-700 text-white rounded-lg px-4 py-3 shadow-lg">
                  <s.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-1" : ""}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
                  {s.label}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3">
                  {s.title}
                </h2>
                <p className="text-red-700 font-semibold text-base mb-4 italic">{s.headline}</p>
                <p className="text-gray-600 leading-relaxed mb-7">{s.desc}</p>

                <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contacto?servicio=${s.id}`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors"
                  >
                    Cotizar este servicio
                  </Link>
                  <a
                    href="https://wa.me/528112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-sm rounded-4xl hover:border-red-600 hover:text-red-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── FLEET SECTION ── */}
      <section className="py-20 lg:py-28 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 bg-red-900/30 px-3 py-1 rounded-4xl mb-4">
              Nuestra Flota
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Capacidad para cualquier tonelaje
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              Contamos con unidades propias y red de operadores certificados para garantizar disponibilidad en toda la República.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {fleetItems.map((f) => (
              <div
                key={f.name}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-800 transition-colors"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{f.name}</div>
                <div className="text-gray-500 text-xs">{f.capacity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
              ¿Cómo Trabajamos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Simple, rápido y confiable
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: MessageCircle, title: "Contáctenos", desc: "Llame, escriba por WhatsApp o llene el formulario con los detalles de su embarque." },
              { step: "02", icon: Package, title: "Cotización Express", desc: "Reciba su cotización personalizada en menos de 30 minutos con nuestro equipo comercial." },
              { step: "03", icon: Truck, title: "Asignación de Unidad", desc: "Confirmado el servicio, asignamos operador y unidad. Puede seguirla en tiempo real." },
              { step: "04", icon: CheckCircle, title: "Entrega Confirmada", desc: "Recibe su mercancía en tiempo y forma, con documentación y evidencia fotográfica." },
            ].map((p) => (
              <div key={p.step} className="relative">
                <div className="text-6xl font-black text-gray-100 leading-none mb-4 select-none">{p.step}</div>
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <p.icon className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-red-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            ¿Necesita una cotización ahora mismo?
          </h2>
          <p className="text-red-200 leading-relaxed mb-8 max-w-xl mx-auto">
            Un asesor especializado le atiende de inmediato. Sin formularios complicados, sin esperas innecesarias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="flex items-center gap-2 px-8 py-3.5 bg-white text-red-700 font-bold rounded-4xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Solicitar Cotización <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/528112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-4xl hover:border-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

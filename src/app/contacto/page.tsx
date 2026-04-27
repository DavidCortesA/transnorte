"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
  "Flete local (AMM)",
  "Flete foráneo",
  "Transporte dedicado",
  "Maquinaria pesada",
  "Custodia y monitoreo GPS",
  "Logística urgente",
  "Otro / No estoy seguro",
];

const unitTypes = [
  "Camioneta (1-1.5 Ton)",
  "3.5 Toneladas",
  "Rabón (8-10 Ton)",
  "Tortón (14-16 Ton)",
  "Tráiler 48 pies",
  "Tráiler 53 pies",
  "Lowboy / Plataforma",
  "No lo sé / Necesito asesoría",
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    telefono: "",
    email: "",
    servicio: "",
    unidad: "",
    origen: "",
    destino: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  const inputBase =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-4xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all";

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1920&h=600&fit=crop&q=70"
            alt="Contacto TRANSNORTE"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 to-gray-950/80 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-500 bg-red-900/30 px-3 py-1 rounded-4xl mb-5">
            Contáctenos
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Solicite su cotización<br />
            <span className="text-red-500">sin compromiso.</span>
          </h1>
          <p className="text-gray-300 max-w-lg leading-relaxed">
            Un asesor especializado revisará su requerimiento y le responderá en menos de 2 horas en días hábiles.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-3">
                      ¡Solicitud recibida!
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                      Gracias, <strong>{form.nombre}</strong>. Un asesor de TRANSNORTE le contactará en menos de 2 horas al número{" "}
                      <strong>{form.telefono}</strong> o al correo <strong>{form.email}</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://wa.me/528112345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Escribir por WhatsApp
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-sm rounded-4xl hover:bg-gray-50 transition-colors"
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-black text-gray-900 mb-1">Formulario de Cotización</h2>
                      <p className="text-sm text-gray-500">Todos los campos con * son obligatorios.</p>
                    </div>

                    {/* Personal info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Nombre completo *
                        </label>
                        <input
                          name="nombre"
                          type="text"
                          required
                          value={form.nombre}
                          onChange={handleChange}
                          placeholder="Lic. Juan Garza"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Empresa *
                        </label>
                        <input
                          name="empresa"
                          type="text"
                          required
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Nombre de la empresa"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Cargo / Puesto
                        </label>
                        <input
                          name="cargo"
                          type="text"
                          value={form.cargo}
                          onChange={handleChange}
                          placeholder="Director de Operaciones"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          name="telefono"
                          type="tel"
                          required
                          value={form.telefono}
                          onChange={handleChange}
                          placeholder="+52 (81) 1234-5678"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="operaciones@suempresa.com"
                        className={inputBase}
                      />
                    </div>

                    {/* Shipment details */}
                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                        Detalles del Embarque
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Servicio requerido *
                          </label>
                          <select
                            name="servicio"
                            required
                            value={form.servicio}
                            onChange={handleChange}
                            className={inputBase}
                          >
                            <option value="">Seleccione un servicio</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                            Tipo de unidad estimada
                          </label>
                          <select
                            name="unidad"
                            value={form.unidad}
                            onChange={handleChange}
                            className={inputBase}
                          >
                            <option value="">Seleccione una opción</option>
                            {unitTypes.map((u) => (
                              <option key={u} value={u}>{u}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Origen *
                        </label>
                        <input
                          name="origen"
                          type="text"
                          required
                          value={form.origen}
                          onChange={handleChange}
                          placeholder="Monterrey, N.L."
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Destino *
                        </label>
                        <input
                          name="destino"
                          type="text"
                          required
                          value={form.destino}
                          onChange={handleChange}
                          placeholder="Ciudad de México, CDMX"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Descripción de la carga / comentarios adicionales
                      </label>
                      <textarea
                        name="mensaje"
                        rows={4}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Describa brevemente su carga: tipo de mercancía, peso aproximado, fecha requerida, frecuencia, etc."
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-700 text-white font-bold text-base rounded-4xl hover:bg-red-800 transition-colors shadow-lg shadow-red-900/25 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Solicitud de Cotización
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      Al enviar, acepta nuestro{" "}
                      <Link href="/privacidad" className="text-red-600 hover:underline">
                        Aviso de Privacidad
                      </Link>
                      . Su información es confidencial y nunca será compartida con terceros.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-5">
              {/* Contact card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-black text-gray-900 text-base mb-5 pb-3 border-b border-gray-100">
                  Contacto Directo
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-4xl bg-red-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        Teléfono
                      </div>
                      <a href="tel:+528112345678" className="text-sm font-bold text-gray-900 hover:text-red-700 transition-colors">
                        +52 (81) 1234-5678
                      </a>
                      <div className="text-xs text-gray-400 mt-0.5">Lun–Vie 8am–7pm · Sáb 9am–2pm</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-4xl bg-green-50 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/528112345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-gray-900 hover:text-green-700 transition-colors"
                      >
                        +52 (81) 1234-5678
                      </a>
                      <div className="text-xs text-gray-400 mt-0.5">Respuesta inmediata</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-4xl bg-red-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        Correo
                      </div>
                      <a href="mailto:ventas@transnorte.com.mx" className="text-sm font-bold text-gray-900 hover:text-red-700 transition-colors">
                        ventas@transnorte.com.mx
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-4xl bg-red-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        Oficinas
                      </div>
                      <address className="text-sm text-gray-700 not-italic leading-relaxed">
                        Av. Constitución 1200, Col. Centro<br />
                        Monterrey, N.L. 64000
                      </address>
                    </div>
                  </li>
                </ul>

                <a
                  href="https://wa.me/528112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 text-white font-bold text-sm rounded-4xl hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-red-700" />
                  <h3 className="font-bold text-gray-900 text-sm">Horario de Atención</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    { day: "Lunes – Viernes", hours: "8:00 am – 7:00 pm" },
                    { day: "Sábado", hours: "9:00 am – 2:00 pm" },
                    { day: "Domingo", hours: "Emergencias 24/7" },
                  ].map((h) => (
                    <li key={h.day} className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs">{h.day}</span>
                      <span className="font-semibold text-gray-900 text-xs">{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-4xl">
                  <p className="text-xs text-red-800 font-semibold leading-relaxed">
                    ⚡ Para servicios urgentes, nuestro equipo está disponible las 24 horas los 365 días del año.
                  </p>
                </div>
              </div>

              {/* Why us mini */}
              <div className="bg-gray-950 rounded-xl p-6">
                <h3 className="font-bold text-white text-sm mb-4">Al contactarnos obtendrá:</h3>
                <ul className="space-y-2.5">
                  {[
                    "Cotización en menos de 30 minutos",
                    "Asesor especializado asignado",
                    "Sin compromiso de contratación",
                    "Propuesta personalizada a su operación",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
                Dónde Estamos
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Base de operaciones en Monterrey,<br /> N.L.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Estratégicamente ubicados en Monterrey para servir a todo el Noreste de México. Nuestra red de operadores cubre los 32 estados de la República.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Oficina comercial:", value: "Av. Constitución 1200, Col. Centro, Mty. N.L." },
                  { label: "Cobertura:", value: "Nacional – Los 32 estados" },
                  { label: "Hub regional:", value: "Noreste: NL, Coah, Tamps, Chih" },
                ].map((d) => (
                  <div key={d.label} className="flex gap-2 text-sm">
                    <span className="font-bold text-gray-900 shrink-0">{d.label}</span>
                    <span className="text-gray-600">{d.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-700 text-white font-bold text-sm rounded-4xl hover:bg-red-800 transition-colors"
              >
                Agendar una visita <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Map placeholder with image */}
            <div className="aspect-video rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1553469945-7d8e4d19c37b?w=800&h=450&fit=crop&q=80"
                alt="Ubicación TRANSNORTE Monterrey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 text-center shadow-xl">
                  <MapPin className="w-6 h-6 text-red-700 mx-auto mb-1" />
                  <div className="font-bold text-gray-900 text-sm">TRANSNORTE</div>
                  <div className="text-xs text-gray-600">Monterrey, N.L.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

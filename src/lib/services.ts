import type { LucideIcon } from "lucide-react";
import { Truck, Navigation, Wrench, Shield, AlertCircle, Package } from "lucide-react";

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  cardTitle: string;
  cardDesc: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  features: string[];
  benefits: ServiceBenefit[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const services: Service[] = [
  {
    slug: "fletes-locales",
    icon: Truck,
    cardTitle: "Fletes Locales y Foráneos",
    cardDesc:
      "Servicio de transporte terrestre punto a punto en toda la República. Camionetas 1T hasta tráileres 53 pies.",
    heroEyebrow: "Fletes Locales y Foráneos",
    heroTitle: "Su carga, puntual, en Monterrey o en cualquier punto del país",
    heroSubtitle:
      "Combinamos una flota versátil —desde camionetas de una tonelada hasta tráileres de 53 pies— con operadores que conocen cada ruta del Área Metropolitana y las carreteras nacionales, para que su mercancía llegue a tiempo sin importar la distancia.",
    heroImage:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Flota de camiones de carga TRANSNORTE en carretera",
    intro:
      "Ya sea una entrega urgente dentro de Monterrey, San Pedro, Apodaca o Escobedo, o un embarque completo hacia CDMX, Guadalajara o Tampico, TRANSNORTE opera con la misma disciplina: unidades verificadas, operadores certificados por la SCT y seguimiento GPS de principio a fin. Una sola llamada cubre lo local y lo foráneo.",
    features: [
      "Camionetas de 1, 2 y 3 toneladas para el AMM",
      "Rabones, tortons y tráileres de 48 y 53 pies",
      "Rutas consolidadas a los principales centros industriales",
      "Carta porte digital y facturación electrónica inmediata",
      "Seguimiento GPS en tiempo real, ruta completa",
      "Seguro de carga disponible para todo tipo de mercancía",
    ],
    benefits: [
      {
        title: "Cobertura total",
        desc: "Del último kilómetro en Monterrey a cualquier estado de la República, con la misma unidad de control.",
      },
      {
        title: "Flota diversificada",
        desc: "El tamaño correcto de unidad para cada carga, sin pagar de más por espacio que no usa.",
      },
      {
        title: "Documentación al instante",
        desc: "Carta porte y facturación digital lista antes de que la unidad salga a ruta.",
      },
    ],
    ctaTitle: "¿Necesita mover carga hoy mismo?",
    ctaSubtitle:
      "Cotice su flete local o foráneo en minutos y tenga su unidad asignada en menos de 2 horas.",
    ctaLabel: "Cotizar mi flete",
    metaTitle: "Fletes Locales y Foráneos en Monterrey | TRANSNORTE",
    metaDescription:
      "Transporte terrestre local en el Área Metropolitana de Monterrey y foráneo a toda la República. Flota desde 1 tonelada hasta tráileres de 53 pies, GPS 24/7 y facturación inmediata.",
    keywords:
      "fletes locales Monterrey, fletes foráneos, transporte de carga terrestre, flete AMM, transporte foráneo México",
  },
  {
    slug: "dedicado",
    icon: Navigation,
    cardTitle: "Transporte Dedicado",
    cardDesc:
      "Unidad y operador exclusivos para su empresa. Disponibilidad programada, flexibilidad total de rutas y horarios.",
    heroEyebrow: "Transporte Dedicado",
    heroTitle: "Una unidad exclusiva. Un operador comprometido. Su ritmo.",
    heroSubtitle:
      "Asignamos unidad y operador de forma exclusiva para su empresa, sin compartir espacio ni desviarnos de su ruta, para que su operación tenga la disponibilidad y el costo predecible que necesita para crecer.",
    heroImage:
      "https://images.unsplash.com/photo-1570071523009-79b5c41a2974?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Unidad de transporte dedicado TRANSNORTE",
    intro:
      "Cuando los movimientos son frecuentes, compartir espacio en una unidad ya no es opción. El transporte dedicado de TRANSNORTE elimina la incertidumbre: usted decide horarios, rutas y prioridades, y nosotros ponemos la unidad, el operador y el seguimiento para que su cadena de suministro nunca se detenga.",
    features: [
      "Unidad y operador exclusivos para su empresa",
      "Contrato de disponibilidad mensual o por proyecto",
      "Rutas y horarios diseñados a su medida",
      "Reportes de operación periódicos",
      "Asesor de cuenta dedicado a su empresa",
      "Tarifa fija, sin sorpresas ni cargos variables",
    ],
    benefits: [
      {
        title: "Costos predecibles",
        desc: "Una tarifa fija mensual que facilita presupuestar su operación logística sin sobresaltos.",
      },
      {
        title: "Prioridad garantizada",
        desc: "Su unidad no compite por espacio ni horario con otros clientes.",
      },
      {
        title: "Relación de largo plazo",
        desc: "Un asesor y un operador que conocen su operación y se adaptan a ella.",
      },
    ],
    ctaTitle: "Deje de improvisar su logística",
    ctaSubtitle:
      "Hablemos sobre su volumen de embarques y armemos un esquema de transporte dedicado a la medida de su empresa.",
    ctaLabel: "Cotizar transporte dedicado",
    metaTitle: "Transporte Dedicado para Empresas | TRANSNORTE Monterrey",
    metaDescription:
      "Unidad y operador exclusivos para su empresa, con rutas y horarios a su medida y tarifa fija mensual. Transporte dedicado con base en Monterrey y cobertura nacional.",
    keywords:
      "transporte dedicado, unidad exclusiva transporte, logística dedicada Monterrey, transporte empresarial",
  },
  {
    slug: "maquinaria",
    icon: Wrench,
    cardTitle: "Maquinaria Pesada",
    cardDesc:
      "Traslado especializado de maquinaria industrial, equipos de construcción y activos de alto valor.",
    heroEyebrow: "Maquinaria Pesada",
    heroTitle: "Activos de alto valor, en manos expertas",
    heroSubtitle:
      "Lowboys, plataformas extendidas y un equipo técnico especializado en aseguramiento de carga para trasladar su maquinaria industrial sin poner en riesgo la inversión.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Traslado de maquinaria pesada industrial",
    intro:
      "Mover maquinaria pesada no admite improvisación: cada traslado requiere ingeniería de ruta, permisos y un aseguramiento de carga a prueba de imprevistos. TRANSNORTE cuenta con unidades especializadas y personal técnico certificado para trasladar generadores, compresores, equipos de construcción y maquinaria industrial de cualquier dimensión.",
    features: [
      "Lowboys y plataformas extendidas",
      "Movimientos de carga sobredimensionada",
      "Permisos y bandereros incluidos en la cotización",
      "Técnicos certificados en aseguramiento de carga",
      "Planeación de ruta especializada punto a punto",
      "Coordinación directa con autoridades viales",
    ],
    benefits: [
      {
        title: "Ingeniería de ruta",
        desc: "Evaluamos puentes, curvas y restricciones antes de mover una sola pieza de su maquinaria.",
      },
      {
        title: "Aseguramiento certificado",
        desc: "Protocolos de sujeción y protección diseñados para cargas de alto valor.",
      },
      {
        title: "Permisos resueltos",
        desc: "Gestionamos los permisos de movimiento especial para que usted no tenga que hacerlo.",
      },
    ],
    ctaTitle: "¿Necesita mover maquinaria pesada?",
    ctaSubtitle:
      "Cuéntenos las dimensiones y el destino de su equipo y le armamos un plan de traslado seguro.",
    ctaLabel: "Cotizar traslado de maquinaria",
    metaTitle: "Traslado de Maquinaria Pesada | TRANSNORTE",
    metaDescription:
      "Transporte especializado de maquinaria industrial y equipos de construcción con lowboys, plataformas extendidas y aseguramiento de carga certificado. Cobertura nacional desde Monterrey.",
    keywords:
      "traslado de maquinaria pesada, transporte de maquinaria industrial, lowboy Monterrey, carga sobredimensionada",
  },
  {
    slug: "custodia",
    icon: Shield,
    cardTitle: "Custodia y Monitoreo GPS",
    cardDesc:
      "Escolta de seguridad y rastreo satelital en tiempo real 24/7 para cargas de alto valor o zonas sensibles.",
    heroEyebrow: "Custodia y Monitoreo GPS",
    heroTitle: "Visibilidad total. Seguridad garantizada.",
    heroSubtitle:
      "Escolta de seguridad y rastreo satelital en tiempo real, operado desde un centro de control que no descansa, para que su carga de alto valor llegue sin sobresaltos.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Monitoreo GPS y custodia de carga TRANSNORTE",
    intro:
      "Para mercancía sensible, rutas de riesgo o embarques de alto valor, el monitoreo estándar no es suficiente. Nuestro centro de control opera 24 horas, los 365 días del año, con protocolos de contingencia listos para activarse ante cualquier desviación de ruta.",
    features: [
      "Monitoreo GPS en tiempo real desde centro de control",
      "Escolta vehicular disponible bajo demanda",
      "Alertas inmediatas ante desvíos o paradas no programadas",
      "Comunicación directa y constante con el operador",
      "Reportes de posición programados para su equipo",
      "Protocolos de contingencia activos las 24 horas",
    ],
    benefits: [
      {
        title: "Centro de control 24/7",
        desc: "Un equipo dedicado observa cada embarque de alto valor de principio a fin.",
      },
      {
        title: "Respuesta inmediata",
        desc: "Protocolos de contingencia que se activan en segundos ante cualquier alerta.",
      },
      {
        title: "Trazabilidad completa",
        desc: "Reportes de posición y evidencia disponibles durante todo el trayecto.",
      },
    ],
    ctaTitle: "Proteja su carga de alto valor",
    ctaSubtitle: "Active custodia y monitoreo GPS para su próximo embarque sensible.",
    ctaLabel: "Cotizar custodia GPS",
    metaTitle: "Custodia y Monitoreo GPS 24/7 | TRANSNORTE",
    metaDescription:
      "Escolta de seguridad y rastreo satelital en tiempo real para cargas de alto valor. Centro de control operando 24/7, los 365 días del año, con base en Monterrey.",
    keywords:
      "custodia de carga, monitoreo GPS transporte, escolta de seguridad carga, rastreo satelital Monterrey",
  },
  {
    slug: "urgente",
    icon: AlertCircle,
    cardTitle: "Logística Urgente",
    cardDesc:
      "Respuesta en menos de 2 horas para cargas críticas. Operamos los 365 días del año, incluyendo días festivos.",
    heroEyebrow: "Logística Urgente",
    heroTitle: "Cuando cada hora cuenta, TRANSNORTE responde",
    heroSubtitle:
      "Para paros de línea, entregas de emergencia o cualquier situación que no puede esperar, asignamos unidad en menos de 2 horas, los 365 días del año, incluyendo fines de semana y festivos.",
    heroImage:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Unidad de logística urgente TRANSNORTE",
    intro:
      "Un paro de línea no avisa. Cuando su operación depende de una pieza, un refacción o un embarque que debe salir ya, necesita un proveedor que reaccione tan rápido como el problema apareció. TRANSNORTE mantiene unidades en espera y una línea prioritaria de atención para resolver exactamente esos momentos.",
    features: [
      "Respuesta garantizada en menos de 2 horas",
      "Operación los 365 días del año, sin excepción",
      "Línea prioritaria de atención para clientes",
      "Unidades en espera lista para salir de inmediato",
      "Coordinación express de documentación y permisos",
      "Soporte de emergencia disponible 24/7",
    ],
    benefits: [
      {
        title: "Reacción inmediata",
        desc: "Una línea directa que asigna unidad sin pasar por procesos largos de aprobación.",
      },
      {
        title: "Disponibilidad real",
        desc: "Unidades reservadas específicamente para atender emergencias operativas.",
      },
      {
        title: "Sin días inhábiles",
        desc: "Fines de semana, festivos o madrugada: la urgencia no tiene horario y nosotros tampoco.",
      },
    ],
    ctaTitle: "¿Tiene una emergencia logística?",
    ctaSubtitle: "Contáctenos ahora mismo y le asignamos unidad en menos de 2 horas.",
    ctaLabel: "Solicitar unidad urgente",
    metaTitle: "Logística Urgente 24/7 | TRANSNORTE Monterrey",
    metaDescription:
      "Transporte urgente para cargas críticas y paros de línea, con asignación de unidad en menos de 2 horas, los 365 días del año. Cobertura nacional desde Monterrey.",
    keywords:
      "logística urgente, transporte de emergencia, flete urgente Monterrey, paro de línea transporte",
  },
  {
    slug: "gestion-de-carga",
    icon: Package,
    cardTitle: "Gestión de Carga",
    cardDesc:
      "Coordinación integral: carga, tránsito, descarga y documentación. Su operación en una sola llamada.",
    heroEyebrow: "Gestión de Carga",
    heroTitle: "Toda su operación logística, en una sola llamada",
    heroSubtitle:
      "Coordinamos carga, tránsito, descarga y documentación de principio a fin, con un solo responsable de su operación en lugar de media docena de proveedores distintos.",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=1000&fit=crop&q=85",
    heroImageAlt: "Coordinación de carga en almacén TRANSNORTE",
    intro:
      "Cuando una operación logística involucra múltiples etapas —recolección, almacenaje temporal, distribución y documentación— coordinar cada eslabón por separado cuesta tiempo y control. Nuestro equipo de gestión de carga centraliza toda la operación: un solo interlocutor, un solo reporte y una sola factura al final del proceso.",
    features: [
      "Coordinación integral de carga, tránsito y descarga",
      "Gestión documental completa (carta porte, facturación, POD)",
      "Un solo punto de contacto para toda la operación",
      "Reportes consolidados de estatus de embarque",
      "Compatible con transporte local, foráneo y dedicado",
      "Escalable a operaciones multi-embarque y multi-destino",
    ],
    benefits: [
      {
        title: "Un solo responsable",
        desc: "Elimine la fricción de coordinar múltiples proveedores para una misma operación.",
      },
      {
        title: "Visibilidad consolidada",
        desc: "Reportes unificados de todos sus embarques, sin importar el tipo de servicio.",
      },
      {
        title: "Escalabilidad",
        desc: "Del embarque único a la operación logística completa, sin cambiar de proveedor.",
      },
    ],
    ctaTitle: "Simplifique su cadena logística",
    ctaSubtitle:
      "Cuéntenos cómo opera hoy y le proponemos un esquema de gestión de carga integral.",
    ctaLabel: "Cotizar gestión de carga",
    metaTitle: "Gestión Integral de Carga | TRANSNORTE Monterrey",
    metaDescription:
      "Coordinación integral de carga, tránsito, descarga y documentación bajo un solo proveedor. Gestión de carga con base en Monterrey y cobertura nacional.",
    keywords:
      "gestión de carga, coordinación logística integral, operador logístico Monterrey, administración de embarques",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

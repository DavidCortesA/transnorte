export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite: string };

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: BlogAuthor;
  coverImage: string;
  coverImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  body: BlogBlock[];
}

const authors = {
  roberto: {
    name: "Roberto Garza",
    role: "Director General",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=85",
  },
  mariana: {
    name: "Mariana Sánchez",
    role: "Jefa de Operaciones",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=85",
  },
  jorge: {
    name: "Jorge Nicolás",
    role: "Ingeniero de Flota",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&q=85",
  },
  sonia: {
    name: "Sonia Miller",
    role: "Gerente de Logística",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=85",
  },
} satisfies Record<string, BlogAuthor>;

export const blogPosts: BlogPost[] = [
  {
    slug: "como-transnorte-ayuda-a-tu-logistica",
    title: "Cómo TRANSNORTE puede ayudar a tu logística",
    excerpt:
      "Un vistazo a los servicios, la tecnología y el compromiso operativo que hacen de TRANSNORTE el socio logístico de más de 500 empresas en el Noreste de México.",
    category: "Empresa",
    date: "22 Ene, 2026",
    isoDate: "2026-01-22",
    readTime: "6 min de lectura",
    author: authors.roberto,
    coverImage:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&h=1000&fit=crop&q=85",
    coverImageAlt: "Operación de logística de TRANSNORTE",
    metaTitle: "Cómo TRANSNORTE puede ayudar a tu logística | Blog TRANSNORTE",
    metaDescription:
      "Conoce los servicios, la tecnología y el compromiso operativo que hacen de TRANSNORTE el socio logístico de más de 500 empresas en el Noreste de México.",
    keywords: "empresa de logística Monterrey, socio logístico, transporte de carga confiable",
    body: [
      {
        type: "p",
        text: "Cuando una empresa crece, su logística deja de ser un servicio de apoyo y se convierte en una ventaja competitiva o en un cuello de botella. La diferencia casi siempre está en el proveedor de transporte que elige. Después de más de 15 años moviendo carga para la industria regiomontana, en TRANSNORTE hemos aprendido que la confianza no se pide: se construye embarque a embarque.",
      },
      {
        type: "h2",
        text: "Una operación pensada para la industria regiomontana",
      },
      {
        type: "p",
        text: "Monterrey y su zona metropolitana concentran una de las bases industriales más importantes de México, con necesidades muy específicas: entregas de precisión a planta, movimientos de maquinaria pesada y una dependencia real de proveedores que respondan cuando algo no sale según el plan. Diseñamos cada uno de nuestros seis servicios pensando en esos escenarios, no al revés.",
      },
      {
        type: "list",
        items: [
          "Fletes locales y foráneos, desde camionetas de 1 tonelada hasta tráileres de 53 pies",
          "Transporte dedicado con unidad y operador exclusivos para su empresa",
          "Traslado especializado de maquinaria pesada e industrial",
          "Custodia y monitoreo GPS 24/7 para cargas de alto valor",
          "Logística urgente con respuesta en menos de 2 horas, los 365 días del año",
          "Gestión integral de carga: coordinación, tránsito y documentación en una sola llamada",
        ],
      },
      {
        type: "h2",
        text: "Tecnología que da tranquilidad",
      },
      {
        type: "p",
        text: "El monitoreo GPS en tiempo real dejó de ser un lujo hace años; hoy es la base mínima para operar con seriedad. Cada unidad de nuestra flota reporta su posición en todo momento, y nuestro centro de control puede activar protocolos de contingencia en cuestión de segundos ante cualquier desviación de ruta. Para nuestros clientes, eso se traduce en una sola pregunta menos de la que preocuparse.",
      },
      {
        type: "quote",
        text: "TRANSNORTE lleva 3 años siendo nuestro proveedor exclusivo de traslados de maquinaria pesada. Cero incidentes, puntualidad impecable y comunicación en tiempo real.",
        cite: "Ing. Roberto Garza, Director de Operaciones · Grupo Acero del Norte",
      },
      {
        type: "h2",
        text: "Resultados que hablan por sí solos",
      },
      {
        type: "p",
        text: "Más de 500 empresas y 1,500 envíos completados no se logran con suerte, sino con procesos repetibles: operadores certificados por la SCT, unidades verificadas antes de cada salida y un equipo comercial que cotiza en minutos, no en días. Esa disciplina operativa es, en el fondo, la verdadera propuesta de valor de TRANSNORTE.",
      },
      {
        type: "h2",
        text: "¿Por dónde empezar?",
      },
      {
        type: "p",
        text: "Si su operación depende de embarques frecuentes, cargas especializadas o simplemente necesita un proveedor que responda cuando surge un imprevisto, el primer paso es una conversación. Nuestro equipo puede armar una propuesta a la medida de su volumen y sus rutas en menos de 30 minutos.",
      },
    ],
  },
  {
    slug: "guia-embarcar-cargas-gran-volumen",
    title: "La guía para embarcar cargas de gran volumen",
    excerpt:
      "Todo lo que necesita saber antes de programar un embarque de gran volumen: desde la elección de la unidad correcta hasta la documentación y el aseguramiento de carga.",
    category: "Guías",
    date: "22 Ene, 2026",
    isoDate: "2026-01-22",
    readTime: "7 min de lectura",
    author: authors.jorge,
    coverImage:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&h=1000&fit=crop&q=85",
    coverImageAlt: "Carga de gran volumen lista para embarque",
    metaTitle: "La guía para embarcar cargas de gran volumen | Blog TRANSNORTE",
    metaDescription:
      "Todo lo que necesita saber antes de programar un embarque de gran volumen: unidad correcta, documentación, aseguramiento de carga y ventanas de tiempo realistas.",
    keywords: "embarque de gran volumen, transporte de carga pesada, logística industrial México",
    body: [
      {
        type: "p",
        text: "Programar un embarque de gran volumen no es simplemente pedir 'un camión grande'. Es una decisión que involucra ingeniería de carga, documentación y una planeación de ruta que, si se hace mal, puede costar tiempo, dinero y hasta la integridad de la mercancía. Esta guía resume lo que revisamos con cada cliente antes de asignar una unidad.",
      },
      {
        type: "h2",
        text: "1. Elija la unidad correcta para su carga",
      },
      {
        type: "p",
        text: "No toda carga de gran volumen requiere un tráiler de 53 pies. El peso, las dimensiones y la naturaleza de la mercancía determinan si la solución correcta es un tortón, un tráiler estándar, una plataforma o un lowboy. Sobredimensionar la unidad encarece el flete; subdimensionarla pone en riesgo la carga y puede violar restricciones de peso en carretera.",
      },
      {
        type: "h2",
        text: "2. Prepare la documentación con anticipación",
      },
      {
        type: "p",
        text: "Carta porte, factura, y en su caso, permisos de carga sobredimensionada: cada documento debe estar listo antes de que la unidad llegue a cargar, no mientras el operador espera en el andén. Los retrasos documentales son, con diferencia, la causa más común de demoras evitables en embarques grandes.",
      },
      {
        type: "h2",
        text: "3. Piense en el aseguramiento de la carga, no solo en el transporte",
      },
      {
        type: "p",
        text: "Un embarque de gran volumen suele significar mayor valor concentrado en una sola unidad. Sujeción adecuada, protección contra la intemperie y, cuando aplica, seguro de carga con cobertura ampliada son parte de la ecuación tanto como el vehículo mismo.",
      },
      {
        type: "h2",
        text: "4. Defina ventanas de tiempo realistas",
      },
      {
        type: "p",
        text: "Las cargas grandes rara vez se mueven a la misma velocidad que un flete estándar, sobre todo si cruzan zonas urbanas o requieren maniobras de carga y descarga especializadas. Construir el cronograma con esa realidad en mente evita promesas de entrega que nadie puede cumplir.",
      },
      {
        type: "list",
        items: [
          "Confirme peso y dimensiones exactas antes de cotizar",
          "Verifique si la ruta requiere permisos de carga especial",
          "Reúna toda la documentación 24 horas antes de la carga",
          "Solicite información sobre el aseguramiento de la mercancía",
          "Deje margen adicional en el cronograma para maniobras",
        ],
      },
      {
        type: "h2",
        text: "Conclusión",
      },
      {
        type: "p",
        text: "Un embarque de gran volumen exitoso se decide antes de que la unidad salga de origen. Con la unidad correcta, la documentación en orden y expectativas de tiempo realistas, la parte más difícil ya quedó resuelta.",
      },
    ],
  },
  {
    slug: "cinco-razones-elegir-mejor-empresa-transporte",
    title: "Cinco razones para elegir la mejor empresa de transporte",
    excerpt:
      "No todos los proveedores de transporte son iguales. Estas son las cinco señales que distinguen a un socio logístico confiable de uno que solo mueve cajas.",
    category: "Logística",
    date: "18 Ene, 2026",
    isoDate: "2026-01-18",
    readTime: "5 min de lectura",
    author: authors.mariana,
    coverImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&h=1000&fit=crop&q=85",
    coverImageAlt: "Operador de transporte revisando su unidad",
    metaTitle: "Cinco razones para elegir la mejor empresa de transporte | Blog TRANSNORTE",
    metaDescription:
      "Las cinco señales que distinguen a un socio logístico confiable de uno que solo mueve cajas: operadores certificados, visibilidad, flexibilidad, respaldo y transparencia.",
    keywords: "elegir empresa de transporte, mejor empresa de logística, proveedor de transporte confiable",
    body: [
      {
        type: "p",
        text: "En un mercado con decenas de opciones, elegir un proveedor de transporte por precio es la forma más rápida de terminar pagando más caro después: retrasos, mercancía dañada o simplemente la ausencia de alguien que responda el teléfono cuando algo sale mal. Estas son cinco señales que sí importan.",
      },
      {
        type: "h2",
        text: "1. Operadores certificados y capacitados",
      },
      {
        type: "p",
        text: "Un operador certificado por la SCT no es solo un requisito legal: es la diferencia entre una carga que llega en tiempo y forma, y un incidente evitable. Pregunte siempre por la certificación y la antigüedad de los operadores que van a mover su mercancía.",
      },
      {
        type: "h2",
        text: "2. Visibilidad en tiempo real",
      },
      {
        type: "p",
        text: "Si su proveedor no puede decirle dónde está su carga en este momento, no tiene control real sobre su operación. El monitoreo GPS en tiempo real debería ser un estándar, no un servicio adicional.",
      },
      {
        type: "h2",
        text: "3. Flexibilidad de flota",
      },
      {
        type: "p",
        text: "Un buen socio logístico tiene el tamaño de unidad correcto para cada necesidad, desde una camioneta de una tonelada hasta un lowboy para maquinaria pesada, sin obligarlo a adaptar su carga a lo que el proveedor tiene disponible.",
      },
      {
        type: "h2",
        text: "4. Respaldo ante imprevistos",
      },
      {
        type: "p",
        text: "Los paros de línea, las entregas de última hora y las emergencias no avisan. La mejor prueba de un proveedor confiable es qué tan rápido puede reaccionar cuando el plan original ya no funciona.",
      },
      {
        type: "h2",
        text: "5. Transparencia en costos",
      },
      {
        type: "p",
        text: "Una cotización clara, sin cargos ocultos que aparecen después de la entrega, construye una relación de largo plazo. Si el precio final nunca coincide con la cotización inicial, es momento de buscar otro proveedor.",
      },
      {
        type: "p",
        text: "Ninguna de estas cinco señales es opcional: juntas son lo que separa a un proveedor que solo mueve cajas de un verdadero socio logístico.",
      },
    ],
  },
  {
    slug: "visibilidad-cadena-de-suministro",
    title: "Tres razones por las que necesitas visibilidad en tu cadena de suministro",
    excerpt:
      "La falta de visibilidad es la causa silenciosa de retrasos, sobrecostos y clientes insatisfechos. Así es como la trazabilidad en tiempo real cambia las reglas del juego.",
    category: "Cadena de Suministro",
    date: "12 Ene, 2026",
    isoDate: "2026-01-12",
    readTime: "5 min de lectura",
    author: authors.sonia,
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=1000&fit=crop&q=85",
    coverImageAlt: "Operación de almacén con control de inventario",
    metaTitle: "Tres razones para tener visibilidad en tu cadena de suministro | Blog TRANSNORTE",
    metaDescription:
      "La falta de visibilidad es la causa silenciosa de retrasos, sobrecostos y clientes insatisfechos. Descubre por qué la trazabilidad en tiempo real ya no es opcional.",
    keywords: "visibilidad cadena de suministro, trazabilidad logística, supply chain visibility México",
    body: [
      {
        type: "p",
        text: "Muchas empresas descubren que tienen un problema de visibilidad hasta que ya es demasiado tarde: un cliente pregunta dónde está su pedido y nadie tiene una respuesta concreta. La trazabilidad en tiempo real no es una comodidad, es la diferencia entre operar y reaccionar.",
      },
      {
        type: "h2",
        text: "1. Anticipa problemas antes de que se conviertan en crisis",
      },
      {
        type: "p",
        text: "Cuando puede ver en tiempo real dónde está cada embarque, detecta un retraso potencial horas antes de que afecte a su cliente final, y tiene tiempo de ajustar el plan en lugar de solo disculparse después.",
      },
      {
        type: "h2",
        text: "2. Mejora la toma de decisiones con datos reales",
      },
      {
        type: "p",
        text: "La visibilidad no solo sirve para saber dónde está una carga hoy; con el tiempo genera datos sobre rutas, tiempos de tránsito reales y proveedores confiables, información que ninguna hoja de cálculo puede reemplazar.",
      },
      {
        type: "h2",
        text: "3. Construye confianza con sus propios clientes",
      },
      {
        type: "p",
        text: "Poder decirle a un cliente exactamente dónde está su pedido, sin tener que llamar a tres personas para averiguarlo, proyecta una profesionalidad que se nota. La visibilidad de su proveedor logístico se convierte, indirectamente, en la visibilidad que usted le ofrece a sus propios clientes.",
      },
      {
        type: "p",
        text: "En TRANSNORTE, el monitoreo GPS en tiempo real y los reportes de posición programados forman parte de cada servicio, precisamente porque sabemos que la visibilidad ya no es un extra: es la base de cualquier cadena de suministro que funcione.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

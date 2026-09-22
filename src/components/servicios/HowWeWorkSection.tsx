import { Package, Truck, CheckCircle, Workflow } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

const steps = [
  {
    icon: WhatsAppIcon,
    step: "01",
    title: "Contáctenos",
    desc: "Llame, escriba por WhatsApp o llene el formulario con los detalles de su embarque.",
  },
  {
    icon: Package,
    step: "02",
    title: "Cotización Express",
    desc: "Reciba su cotización personalizada en menos de 30 minutos con nuestro equipo comercial.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Asignación de Unidad",
    desc: "Confirmado el servicio, asignamos operador y unidad. Puede seguirla en tiempo real.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Entrega Confirmada",
    desc: "Recibe su mercancía en tiempo y forma, con documentación y evidencia fotográfica.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center mb-16">
          <Eyebrow icon={Workflow} label="¿Cómo Trabajamos?" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Simple, rápido y confiable
          </h2>
        </InView>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-gray-300" />
          {steps.map((s, i) => (
            <InView key={s.step} delay={i * 0.1} className="relative text-center">
              <div className="relative z-10 w-16 h-16 mx-auto rounded-4xl bg-white border-2 border-red-100 flex items-center justify-center mb-5 shadow-sm">
                <s.icon className="w-7 h-7 text-red-700" />
              </div>
              <span className="text-xs font-bold tracking-widest text-red-700/70">STEP {s.step}</span>
              <h3 className="font-bold text-gray-900 text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

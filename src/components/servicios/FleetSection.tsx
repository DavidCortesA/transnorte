import { Truck } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";

const fleetItems = [
  { name: "Camioneta", capacity: "1 - 1.5 Ton", icon: "🚐" },
  { name: "3.5 Toneladas", capacity: "3 - 3.5 Ton", icon: "🚚" },
  { name: "Rabón", capacity: "8 - 10 Ton", icon: "🚛" },
  { name: "Tortón", capacity: "14 - 16 Ton", icon: "🚛" },
  { name: "Tráiler 48 pies", capacity: "22 - 24 Ton", icon: "🚛" },
  { name: "Tráiler 53 pies", capacity: "26 - 28 Ton", icon: "🚛" },
  { name: "Lowboy", capacity: "Sobredimensionado", icon: "🏗️" },
  { name: "Plataforma", capacity: "Carga especial", icon: "⚙️" },
];

export default function FleetSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center mb-14">
          <Eyebrow icon={Truck} label="Nuestra Flota" tone="dark" />
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Capacidad para cualquier tonelaje
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Contamos con unidades propias y red de operadores certificados para garantizar disponibilidad en toda la República.
          </p>
        </InView>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {fleetItems.map((f, i) => (
            <InView
              key={f.name}
              delay={Math.min(i * 0.05, 0.3)}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center hover:border-red-800 transition-colors"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-white font-bold text-sm mb-1">{f.name}</div>
              <div className="text-gray-500 text-xs">{f.capacity}</div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

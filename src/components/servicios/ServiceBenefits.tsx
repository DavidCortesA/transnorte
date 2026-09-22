import { Sparkles } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import type { Service } from "@/lib/services";

export default function ServiceBenefits({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center mb-14">
          <Eyebrow icon={Sparkles} label="Por qué elegirnos" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Lo que hace diferente a este servicio
          </h2>
        </InView>

        <div className="grid sm:grid-cols-3 gap-x-10 gap-y-12">
          {service.benefits.map((b, i) => (
            <InView key={b.title} delay={i * 0.1}>
              <span className="text-5xl font-black text-red-100 leading-none mb-4 block select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

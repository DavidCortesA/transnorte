import { CheckCircle2, Info } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import type { Service } from "@/lib/services";

export default function ServiceBody({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView>
          <Eyebrow icon={Info} label="Cómo trabajamos" />
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{service.intro}</p>
        </InView>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mt-10">
          {service.features.map((f, i) => (
            <InView key={f} delay={Math.min(i * 0.05, 0.3)} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium leading-snug">{f}</span>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

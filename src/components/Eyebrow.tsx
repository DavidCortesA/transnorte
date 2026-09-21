import type { LucideIcon } from "lucide-react";

interface EyebrowProps {
  icon: LucideIcon;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function Eyebrow({ icon: Icon, label, tone = "light", className = "" }: EyebrowProps) {
  const toneClasses =
    tone === "dark"
      ? "bg-white/10 text-white"
      : "bg-red-50 text-red-700";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-4xl mb-4 ${toneClasses} ${className}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

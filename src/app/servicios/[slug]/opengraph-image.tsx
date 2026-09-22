import { ImageResponse } from "next/og";
import { services, getServiceBySlug } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const eyebrow = service?.heroEyebrow ?? "Servicios";
  const title = service?.heroTitle ?? "Servicios de Logística y Transporte";
  const subtitle =
    service?.cardDesc ?? "Soluciones completas de logística para la industria mexicana.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #030712 0%, #111827 60%, #1f2937 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#b91c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            T
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800, color: "#ffffff" }}>
            TRANS<span style={{ color: "#ef4444" }}>NORTE</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(185,28,28,0.9)",
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 700,
            padding: "9px 20px",
            borderRadius: 999,
            width: "fit-content",
            marginBottom: 30,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
            marginBottom: 22,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#9ca3af",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}

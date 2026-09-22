import { ImageResponse } from "next/og";

export const alt = "TRANSNORTE | Logística y Transporte Industrial en Monterrey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#b91c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            T
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#ffffff" }}>
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
            fontSize: 20,
            fontWeight: 700,
            padding: "10px 22px",
            borderRadius: 999,
            width: "fit-content",
            marginBottom: 32,
            letterSpacing: 1,
          }}
        >
          MONTERREY · COBERTURA NACIONAL
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 980,
            marginBottom: 24,
          }}
        >
          Logística y transporte industrial con integridad.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9ca3af",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          Fletes, transporte dedicado, maquinaria pesada y custodia GPS 24/7. Más de 15 años moviendo lo que mueve a México.
        </div>
      </div>
    ),
    { ...size }
  );
}

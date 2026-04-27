import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRANSNORTE | Logística y Transporte Industrial en Monterrey",
  description:
    "Empresa de logística y transporte de carga en Monterrey, México. Fletes locales y foráneos, transporte dedicado, maquinaria pesada, custodia GPS 24/7. Cobertura nacional.",
  keywords:
    "empresa de logística en Monterrey, transporte de carga Monterrey, fletes industriales Monterrey, logística empresarial México, transporte dedicado Monterrey, fletes foráneos Nuevo León",
  openGraph: {
    title: "TRANSNORTE | Logística y Transporte Industrial en Monterrey",
    description:
      "Soluciones de transporte y logística para la industria regiomontana. Fletes, transporte dedicado y maquinaria pesada con cobertura nacional.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

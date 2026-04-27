import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | TRANSNORTE Logística Industrial",
  description:
    "Aviso de privacidad de TRANSNORTE Logística Industrial S.A. de C.V. conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function PrivacidadPage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-gray-500">
            Última actualización: enero de 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6 text-gray-700">
          <p>
            <strong>TRANSNORTE Logística Industrial S.A. de C.V.</strong> (en adelante &quot;TRANSNORTE&quot;), con domicilio en Av. Constitución 1200, Col. Centro, Monterrey, Nuevo León, C.P. 64000, es responsable del tratamiento de sus datos personales conforme a lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás disposiciones aplicables.
          </p>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">1. Datos Personales Recabados</h2>
            <p>
              TRANSNORTE podrá recabar los siguientes datos personales: nombre completo, empresa u organización, cargo o puesto, número de teléfono, dirección de correo electrónico, y datos relacionados con los servicios solicitados (origen, destino, tipo de carga).
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">2. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Atender solicitudes de cotización y prestación de servicios logísticos.</li>
              <li>Comunicación comercial y seguimiento de propuestas.</li>
              <li>Gestión de la relación contractual y operativa.</li>
              <li>Cumplimiento de obligaciones legales y fiscales.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">3. Transferencia de Datos</h2>
            <p>
              TRANSNORTE no transferirá sus datos personales a terceros sin su consentimiento previo, salvo los casos previstos en el Artículo 37 de la LFPDPPP y cuando sea necesario para la prestación del servicio contratado.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, envíe su solicitud al correo:{" "}
              <a href="mailto:privacidad@transnorte.com.mx" className="text-red-700 hover:underline">
                privacidad@transnorte.com.mx
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">5. Cambios al Aviso de Privacidad</h2>
            <p>
              TRANSNORTE se reserva el derecho de efectuar modificaciones al presente aviso de privacidad. Los cambios serán publicados en nuestro sitio web y, en caso de ser relevantes, le serán notificados por los medios de contacto registrados.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">6. Contacto</h2>
            <p>
              Para cualquier duda o solicitud relacionada con el tratamiento de sus datos personales, comuníquese con nosotros a través de:{" "}
              <a href="mailto:privacidad@transnorte.com.mx" className="text-red-700 hover:underline">
                privacidad@transnorte.com.mx
              </a>{" "}
              o al teléfono +52 (81) 1234-5678.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}

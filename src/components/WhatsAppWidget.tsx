"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

const WHATSAPP_NUMBER = "528112345678";
const DEFAULT_MESSAGE = "Hola, me gustaría cotizar un envío con TRANSNORTE.";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  function handleSend() {
    const text = message.trim() || DEFAULT_MESSAGE;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-[320px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl shadow-black/30 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-4xl bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm leading-tight">TRANSNORTE</div>
                <div className="text-white/80 text-xs leading-tight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
                  Normalmente responde en minutos
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar chat"
                className="w-7 h-7 rounded-4xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bot message */}
            <div className="p-4 bg-[#e5ddd5]">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800 leading-snug">
                  ¡Hola! 👋 Soy el asistente de TRANSNORTE. Escribe tu mensaje abajo y te contactamos por WhatsApp.
                </p>
              </div>
            </div>

            {/* Editable message + send */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-end gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Escribe tu mensaje..."
                className="flex-1 resize-none text-sm px-3 py-2 bg-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
              />
              <button
                onClick={handleSend}
                aria-label="Enviar por WhatsApp"
                className="shrink-0 w-10 h-10 rounded-4xl bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar chat de WhatsApp" : "Chatea por WhatsApp"}
        className="relative flex items-center justify-center w-14 h-14 rounded-4xl bg-[#25D366] shadow-2xl shadow-black/30 hover:bg-[#20bd5a] transition-colors"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen && <span className="absolute inset-0 rounded-4xl bg-[#25D366] animate-ping opacity-40" />}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="relative w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div key="icon" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}>
              <WhatsAppIcon className="relative w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

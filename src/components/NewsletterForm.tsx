"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-400">
        <CheckCircle className="w-4 h-4" />
        ¡Gracias por suscribirte!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        required
        type="email"
        placeholder="Tu correo electrónico"
        className="flex-1 min-w-0 px-4 py-2.5 bg-white/5 border border-gray-700 rounded-4xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
      />
      <button
        type="submit"
        aria-label="Suscribirse"
        className="shrink-0 w-10 h-10 rounded-4xl bg-red-700 hover:bg-red-800 flex items-center justify-center transition-colors"
      >
        <Send className="w-4 h-4 text-white" />
      </button>
    </form>
  );
}

import Image from "next/image";
import { MessageCircleQuestion } from "lucide-react";
import type { BlogAuthor } from "@/lib/blog";

export default function AuthorCard({ author }: { author: BlogAuthor }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex items-center gap-4 bg-gray-50 rounded-3xl p-6 border border-gray-100">
        <div className="relative w-14 h-14 rounded-4xl overflow-hidden shrink-0">
          <Image src={author.avatar} alt={author.name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
            Escrito por
          </div>
          <div className="font-black text-gray-900">{author.name}</div>
          <div className="text-sm text-red-700 font-semibold">{author.role} · TRANSNORTE</div>
        </div>
        <MessageCircleQuestion className="w-6 h-6 text-gray-300 hidden sm:block shrink-0" />
      </div>
    </div>
  );
}

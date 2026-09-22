import { CheckCircle2, Quote } from "lucide-react";
import type { BlogBlock } from "@/lib/blog";

export default function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="space-y-6">
        {blocks.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2 key={i} className="text-2xl font-black text-gray-900 leading-tight pt-4">
                {block.text}
              </h2>
            );
          }
          if (block.type === "p") {
            return (
              <p key={i} className="text-gray-600 leading-relaxed text-base">
                {block.text}
              </p>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="space-y-2.5 py-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={i}
                className="relative bg-gray-50 border-l-4 border-red-700 rounded-r-2xl px-6 py-5 my-8"
              >
                <Quote className="w-6 h-6 text-red-700/40 mb-2" />
                <p className="text-gray-800 leading-relaxed italic mb-3">&ldquo;{block.text}&rdquo;</p>
                <cite className="not-italic text-sm font-semibold text-gray-500">{block.cite}</cite>
              </blockquote>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

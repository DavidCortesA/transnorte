import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function PostHero({ post }: { post: BlogPost }) {
  return (
    <section className="pt-32 pb-0 md:pt-40 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mb-6">
          <Link href="/" className="hover:text-red-700 transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-red-700 transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-600 truncate">{post.title}</span>
        </div>

        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-5">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 mb-8 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-4xl overflow-hidden shrink-0">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight">{post.author.name}</div>
              <div className="text-xs text-gray-400 leading-tight">{post.author.role}</div>
            </div>
          </div>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
          <Image src={post.coverImage} alt={post.coverImageAlt} fill priority className="object-cover" />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-gray-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 transition-all p-4 sm:p-6"
    >
      <div className="relative aspect-video md:aspect-4/3 rounded-2xl overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-red-700 text-white text-xs font-bold uppercase tracking-wide rounded-4xl">
          Destacado
        </span>
      </div>
      <div>
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-700 bg-red-50 px-3 py-1 rounded-4xl mb-4">
          {post.category}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3 group-hover:text-red-700 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
          <div className="relative w-8 h-8 rounded-4xl overflow-hidden shrink-0">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <span className="font-semibold text-gray-600">{post.author.name}</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-700 group-hover:gap-2.5 transition-all">
          Leer artículo completo <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

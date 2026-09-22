import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm text-red-700 text-xs font-bold uppercase tracking-wide rounded-4xl">
          {post.category}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-red-700 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-gray-400 pt-4 border-t border-gray-100">
        <div className="relative w-6 h-6 rounded-4xl overflow-hidden shrink-0">
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
    </Link>
  );
}

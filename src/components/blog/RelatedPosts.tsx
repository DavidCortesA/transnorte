import { Newspaper } from "lucide-react";
import { InView } from "@/components/motion-primitives";
import Eyebrow from "@/components/Eyebrow";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, type BlogPost } from "@/lib/blog";

export default function RelatedPosts({ current }: { current: BlogPost }) {
  const others = blogPosts.filter((p) => p.slug !== current.slug).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView className="text-center mb-14">
          <Eyebrow icon={Newspaper} label="Más Artículos" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Sigue leyendo
          </h2>
        </InView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {others.map((post, i) => (
            <InView key={post.slug} delay={Math.min(i * 0.08, 0.3)}>
              <BlogCard post={post} />
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

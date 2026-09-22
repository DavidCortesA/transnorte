import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import PostHero from "@/components/blog/PostHero";
import PostBody from "@/components/blog/PostBody";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";
import PostCta from "@/components/blog/PostCta";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.coverImage }],
      locale: "es_MX",
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PostHero post={post} />
      <PostBody blocks={post.body} />
      <AuthorCard author={post.author} />
      <RelatedPosts current={post} />
      <PostCta />
    </>
  );
}

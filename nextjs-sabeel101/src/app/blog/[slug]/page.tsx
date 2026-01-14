import { getBlogPost } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FaChevronLeft, FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import { urlFor } from "@/sanity/image";
import { Metadata } from "next";

// This generates unique metadata for every blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  // Generate the image URL for the social share preview
  const ogImageUrl = post.image 
    ? urlFor(post.image).width(1200).height(630).url() 
    : "/opengraph-image.png"; 

  return {
    title: `${post.title} | Sabilul Jannah Blog`,
    description: "Read the latest updates and stories from Sabilul Jannah Foundation.",
    openGraph: {
      title: post.title,
      description: "A story of impact from Sabilul Jannah.",
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold text-primary font-serif">Post not found</h1>
        <Link href="/blog" className="text-secondary hover:underline mt-6 inline-block font-bold">Return to Journal</Link>
      </div>
    );
  }

  const postImageUrl = post.image ? urlFor(post.image).width(1200).auto('format').url() : null;

  return (
    <article className="bg-white min-h-screen pb-24">
      {/* Header with Navigation */}
      <div className="bg-gray-50 border-b border-gray-100 py-6 px-6 sticky top-0 z-30">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-extrabold text-sm uppercase tracking-widest">
            <FaChevronLeft /> Back to Journal
          </Link>
          <button className="text-gray-400 hover:text-primary transition-colors"><FaShareAlt /></button>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-16 max-w-4xl">
        <header className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-secondary font-bold text-sm uppercase tracking-widest mb-6">
            <FaCalendarAlt size={14} />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 font-serif leading-[1.1]">
            {post.title}
          </h1>
        </header>

        {postImageUrl && (
          <div className="relative w-full h-75 md:h-125 rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
            <img src={postImageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content Area with Rich Typography */}
        <div className="prose prose-lg md:prose-xl prose-primary max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-gray-700 prose-p:leading-relaxed prose-img:rounded-3xl prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl">
          {post.body && <PortableText value={post.body} />}
        </div>

        {/* Post Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-100 flex flex-col items-center gap-8">
          <p className="text-gray-400 italic font-serif">Thank you for reading about our mission.</p>
          <div className="flex gap-4">
             <Link href="/donate" className="bg-accent text-primary-dark px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">Support this Cause</Link>
             <Link href="/blog" className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">More Stories</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
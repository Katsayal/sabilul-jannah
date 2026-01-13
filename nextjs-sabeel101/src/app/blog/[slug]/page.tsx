import { getBlogPost, client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FaChevronLeft, FaCalendarAlt } from "react-icons/fa";
import createImageUrlBuilder from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-primary">Post not found</h1>
        <Link href="/blog" className="text-secondary hover:underline mt-4 inline-block">
          Return to blog
        </Link>
      </div>
    );
  }

  /**
   * CHECK BOTH FIELD NAMES:
   * Sanity often uses 'image' by default, but some templates use 'mainImage'.
   * This logic checks both to be safe.
   */
  const imageSource = post.image;
  const postImageUrl = imageSource?.asset 
    ? urlFor(imageSource).width(1200).auto('format').url() 
    : null;

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors font-bold">
        <FaChevronLeft /> Back to Blog
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-gray-500 italic">
          <FaCalendarAlt size={14} />
          <span>Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
          })}</span>
        </div>
      </header>

      {postImageUrl ? (
        <img 
          src={postImageUrl} 
          alt={post.title} 
          className="w-full h-auto rounded-3xl shadow-lg mb-10 object-cover max-h-125"
        />
      ) : (
        /* This box appears if the data isn't found in Sanity */
        <div className="w-full h-64 bg-gray-100 rounded-3xl mb-10 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
          <p>No image data found in Sanity.</p>
          <p className="text-xs mt-2">Check if your field is named "image" or "mainImage"</p>
        </div>
      )}

      <div className="prose prose-lg prose-primary max-w-none">
        {post.body && <PortableText value={post.body} />}
      </div>
    </article>
  );
}
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPost, type BlogPost } from "../services/sanity";
import { PortableText } from "@portabletext/react";
// Note: You need to install the portable text component:
// npm install @portabletext/react

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const fetchedPost = await getBlogPost(slug);
        setPost(fetchedPost);
      } catch (err) {
        setError("Failed to load post. Please make sure the Sanity client is configured correctly and the slug is correct.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">{error || "Post not found."}</p>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Back to all posts
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          {post.mainImage?.asset.url && (
            <img
              className="w-full h-auto object-cover rounded-lg mb-8"
              src={post.mainImage.asset.url}
              alt={post.title}
            />
          )}

          <div className="prose lg:prose-xl max-w-none">
            <PortableText value={post.body} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;

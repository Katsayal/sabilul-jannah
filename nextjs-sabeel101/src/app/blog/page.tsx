import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { getBlogPosts, client } from "@/sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

export const revalidate = 60; // Refresh data every 60 seconds

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          Our Journal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, success stories, and updates from the Sabilul Jannah community.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              {post.image && (
                <div className="relative h-48 w-full">
                  <img
                    src={urlFor(post.image).width(600).height(400).url()}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6 grow">
                <div className="flex items-center text-secondary text-sm mb-3 gap-2">
                  <FaCalendarAlt size={12} />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-auto"
                >
                  Read More <FaArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 italic">No stories published yet. Stay tuned!</p>
        </div>
      )}
    </div>
  );
}
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight, FaBookOpen } from "react-icons/fa";
import { getBlogPosts, client } from "@/sanity/client";
import { urlFor } from "@/sanity/image"; // Centralized image helper

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-base-100 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-primary-dark text-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex bg-accent/20 p-5 rounded-full mb-6">
            <FaBookOpen className="text-accent text-3xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-accent">Our Journal</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stories of impact, community updates, and reflections from the Sabilul Jannah path.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <div className="container mx-auto px-6 -mt-12 max-w-7xl relative z-10">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post._id} 
                className="group bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
              >
                {/* Featured Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  {post.image ? (
                    <img
                      src={urlFor(post.image).width(600).height(450).url()}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="bg-primary/5 w-full h-full flex items-center justify-center text-primary/10">
                      <FaBookOpen size={64} />
                    </div>
                  )}
                  {/* Category Badge Placeholder */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                    Update
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center text-secondary font-bold text-xs mb-4 gap-2 uppercase tracking-tighter">
                    <FaCalendarAlt size={12} />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric'
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 font-serif leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-primary font-extrabold hover:text-accent transition-all active:scale-95"
                    >
                      Read Story <FaArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl border border-gray-100">
            <p className="text-gray-400 font-serif italic text-xl">No stories published yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </main>
  );
}
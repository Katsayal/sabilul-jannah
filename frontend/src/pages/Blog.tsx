import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts, type BlogPost } from "../services/sanity";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getBlogPosts();
        // Note: In a real app with a configured Sanity client, this will fetch real data.
        // Since the project ID is a placeholder, it will likely return an empty array.
        // We will add some mock data for display purposes if no posts are found.
        if (fetchedPosts.length === 0) {
          setPosts(getMockPosts());
        } else {
          setPosts(fetchedPosts);
        }
      } catch (err) {
        setError("Failed to load posts. Please make sure the Sanity client is configured correctly.");
        setPosts(getMockPosts()); // Show mock data on error to demonstrate layout
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            News, stories, and updates from the Sabilul Jannah Foundation.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No blog posts found.</p>
            <p className="text-gray-400 mt-2">This may be because the Sanity project ID is not yet configured.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug.current}`} key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-full object-cover"
                    src={post.mainImage?.asset.url || 'https://via.placeholder.com/400x225?text=No+Image'}
                    alt={post.title}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Mock data function in case Sanity isn't configured yet
const getMockPosts = (): BlogPost[] => [
  {
    _id: 'mock-1',
    title: 'Our Recent Community Outreach Program',
    slug: { current: 'community-outreach-program' },
    mainImage: { asset: { url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop' } },
    publishedAt: new Date().toISOString(),
    body: [],
  },
  {
    _id: 'mock-2',
    title: 'Annual Charity Gala: A Night to Remember',
    slug: { current: 'annual-charity-gala' },
    mainImage: { asset: { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop' } },
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    body: [],
  },
    {
    _id: 'mock-3',
    title: 'Volunteer Spotlight: Meet Our Heroes',
    slug: { current: 'volunteer-spotlight' },
    mainImage: { asset: { url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop' } },
    publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    body: [],
  },
];


export default Blog;

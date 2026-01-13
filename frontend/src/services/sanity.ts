import { createClient } from "@sanity/client";

// TODO: Replace with your actual project ID and dataset from sanity.io/manage
const sanityClient = createClient({
  projectId: "your-project-id", // or process.env.SANITY_PROJECT_ID
  dataset: "production",        // or process.env.SANITY_DATASET
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-01-01", // use a UTC date in YYYY-MM-DD format
});

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: any[]; // This is the Portable Text field
  publishedAt: string;
}

export interface Page {
  _id: string;
  title: string;
  body: any[]; // Portable Text
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt
  }`;
  
  try {
    const posts = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity:", error);
    return [];
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    body,
    publishedAt
  }`;

  try {
    const post = await sanityClient.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error(`Failed to fetch blog post with slug "${slug}" from Sanity:`, error);
    return null;
  }
}

export const getPage = async (slug: string): Promise<Page | null> => {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    body
  }`;

  try {
    const page = await sanityClient.fetch(query, { slug });
    return page;
  } catch (error) {
    console.error(`Failed to fetch page with slug "${slug}" from Sanity:`, error);
    return null;
  }
};


export default sanityClient;

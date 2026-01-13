import { createClient } from "next-sanity";

export const client = createClient({
  // Use process.env to pull from your .env.local file
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, 
});

// --- Interfaces for Type Safety ---
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  image?: {
    asset: { _ref: string; _type: 'reference' };
  };
  body: any[]; 
  publishedAt: string;
}

// Landing Section Interface
export interface LandingPageData {
  heroTitle: string;
  heroDescription: string;
  heroImage?: {
    asset: { _ref: string; _type: 'reference' };
  };
}

// Activity Section Interface
export interface Activity {
  _id: string;
  title: string;
  image: any;
  link?: string;
}

// --- Helper Functions (Fetched from your original logic) ---
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, image, publishedAt
  }`;
  return await client.fetch(query);
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id, 
    title, 
    slug,
    image,
    body, 
    publishedAt
  }`;
  return await client.fetch(query, { slug });
};

// Add this function at the bottom
export const getLandingPage = async (): Promise<LandingPageData | null> => {
  // We use [0] because we only ever want the first landingPage document
  const query = `*[_type == "landingPage"][0] {
    heroTitle,
    heroDescription,
    heroImage
  }`;
  return await client.fetch(query);
};

export const getActivities = async (): Promise<Activity[]> => {
  return await client.fetch(`*[_type == "activity"]{_id, title, image, link}`);
};
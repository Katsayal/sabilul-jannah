import { createClient } from "next-sanity";

export const client = createClient({
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

export interface LandingPageData {
  heroTitle: string;
  heroDescription: string;
  heroImage?: {
    asset: { _ref: string; _type: 'reference' };
  };
}

export interface Activity {
  _id: string;
  title: string;
  image: any;
  link?: string;
}

export interface Member {
  _id: string;
  name: string;
  role: string;
  image?: any;
}

export interface Testimonial {
  _id: string;
  author: string;
  role: string;
  quote: string;
  image?: any;
}

// --- Fetch Functions ---

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

export const getLandingPage = async (): Promise<LandingPageData | null> => {
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

export const getMembers = async (): Promise<Member[]> => {
  return await client.fetch(`*[_type == "member"] | order(order asc){_id, name, role, image}`);
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return await client.fetch(`*[_type == "testimonial"]{_id, author, role, quote, image}`);
};
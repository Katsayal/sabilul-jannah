import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sabilul-jannah.netlify.app";

  // 1. Fetch your blog posts from Sanity to include them in the map
  const posts = await getBlogPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  // 2. Define your static pages
  const staticPages = ["", "/about", "/blog", "/contact", "/volunteer", "/donate"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  return [...staticPages, ...blogUrls];
}
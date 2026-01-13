import { useState, useEffect } from "react";
import { getPage, type Page } from "../services/sanity";
import { PortableText } from "@portabletext/react";

const About = () => {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const fetchedPage = await getPage("about");
        if (!fetchedPage) {
          setPage(getMockPage());
        } else {
          setPage(fetchedPage);
        }
      } catch (err) {
        setError("Failed to load page content. Please ensure the Sanity client is configured.");
        setPage(getMockPage()); // Show mock data on error
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error && !page) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="max-w-3xl mx-auto">
          {page?.title && (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
              {page.title}
            </h1>
          )}
          {page?.body && (
            <div className="prose lg:prose-xl max-w-none">
              <PortableText value={page.body} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

// Mock data for demonstration
const getMockPage = (): Page => ({
  _id: "mock-about",
  title: "About Sabilul Jannah Foundation",
  body: [
    {
      _type: "block",
      style: "normal",
      _key: "1",
      children: [
        {
          _type: "span",
          text: "Sabilul Jannah is a charity foundation dedicated to making a tangible difference in the lives of underprivileged communities. Our mission is to provide support, resources, and hope to those in need.",
        },
      ],
    },
    {
      _type: "block",
      style: "h2",
      _key: "2",
      children: [
        {
          _type: "span",
          text: "Our Vision",
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      _key: "3",
      children: [
        {
          _type: "span",
          text: "We envision a world where every individual has the opportunity to thrive. Through our programs in education, healthcare, and community development, we aim to empower individuals and build a brighter future for generations to come.",
        },
      ],
    },
  ],
});

export default About;

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sabilul-jannah.netlify.app"), // Replace with your actual live URL
  // Primary Meta Tags
  title: "Sabilul Jannah | Empowering Communities, Seeking Paradise",
  description: "A modern charity foundation dedicated to providing food, education, and support to those in need.",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://sabilul-jannah.netlify.app/", // Replace with your actual Netlify URL
    title: "Sabilul Jannah | Charity Foundation",
    description: "Join us in providing support and building a path to paradise through service.",
    siteName: "Sabilul Jannah",
    images: [
      {
        url: "/opengraph-image.png", // Looks in your public folder
        width: 1200,
        height: 630,
        alt: "Sabilul Jannah Foundation Logo",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Sabilul Jannah | Charity Foundation",
    description: "Join us in providing support and building a path to paradise through service.",
    images: ["/opengraph-image.png"],
  },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
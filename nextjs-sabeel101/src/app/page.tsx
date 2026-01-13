import Link from "next/link";
import { FaHeart, FaHandsHelping, FaLightbulb } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-accent">
            Sabilul Jannah
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-light">
            Empowering the community and serving humanity with compassion. 
            Join us in building a path to a better future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all">
              Donate Now
            </Link>
            <Link href="/about" className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Quick-Stats */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart className="text-secondary" />, title: "Compassion", text: "Providing support for families in need." },
            { icon: <FaHandsHelping className="text-accent" />, title: "Community", text: "Building local projects for lasting impact." },
            { icon: <FaLightbulb className="text-primary" />, title: "Education", text: "Empowering through knowledge and skills." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:scale-105 transition-transform">
              <div className="text-4xl flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
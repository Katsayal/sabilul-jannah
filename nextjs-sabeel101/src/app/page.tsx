import Link from "next/link";
import { FaHeart, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { getLandingPage, getActivities } from "@/sanity/client"; // Added getActivities
import { urlFor } from "@/sanity/image";

export default async function HomePage() {
  const [data, activities] = await Promise.all([
    getLandingPage(),
    getActivities()
  ]);

  const heroTitle = data?.heroTitle || "Sabilul Jannah";
  const heroDesc = data?.heroDescription || "Empowering the community and serving humanity with compassion.";
  const bgImage = data?.heroImage ? urlFor(data.heroImage).width(800).auto('format').url() : null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white px-6 py-20 overflow-hidden bg-primary-dark">
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <img src={bgImage} alt={heroTitle} className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-black/50" /> 
          </div>
        )}
        <div className="container mx-auto text-center relative z-10 px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-10 md:mb-14 font-serif text-accent leading-tight drop-shadow-lg">{heroTitle}</h1>
          <p className="text-lg md:text-2xl mb-16 md:mb-20 max-w-2xl mx-auto text-white/95 leading-relaxed font-medium drop-shadow-md px-2">{heroDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xs mx-auto sm:max-w-none">
            <Link href="/donate" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-extrabold text-lg hover:bg-accent-dark transition-all active:scale-95 text-center shadow-2xl">Donate Now</Link>
            <Link href="/about" className="bg-white/10 backdrop-blur-md border border-white/40 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all active:scale-95 text-center">Our Mission</Link>
          </div>
        </div>
      </section>

      {/* Mission Quick-Stats */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart className="text-secondary" />, title: "Compassion", text: "Providing support for families in need." },
            { icon: <FaHandsHelping className="text-accent" />, title: "Community", text: "Building local projects for lasting impact." },
            { icon: <FaLightbulb className="text-primary" />, title: "Education", text: "Empowering through knowledge and skills." }
          ].map((item, i) => (
            <div key={i} className="text-center p-10 rounded-3xl bg-white border border-gray-100 shadow-sm active:bg-gray-50 transition-colors">
              <div className="text-4xl flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary font-serif">{item.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Our Activities */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4">Our Activities</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity) => (
              <Link 
                key={activity._id} 
                href={activity.link || "#"}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 active:scale-95"
              >
                {/* Background Image for Tile */}
                <div className="absolute inset-0">
                  <img 
                    src={urlFor(activity.image).width(600).height(800).url()} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold font-serif leading-tight group-hover:text-accent transition-colors">
                    {activity.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
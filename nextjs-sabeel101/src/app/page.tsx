import Link from "next/link";
import { FaHeart, FaHandsHelping, FaLightbulb, FaQuoteRight, FaUserCircle } from "react-icons/fa";
import { getLandingPage, getActivities, getTestimonials } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export const revalidate = 60;

export default async function HomePage() {
  const [data, activities, testimonials] = await Promise.all([
    getLandingPage(),
    getActivities(),
    getTestimonials()
  ]);

  const heroTitle = data?.heroTitle || "Sabilul Jannah";
  const heroDesc = data?.heroDescription || "Empowering the community and serving humanity with compassion.";
  const bgImage = data?.heroImage ? urlFor(data.heroImage).width(1200).auto('format').url() : null;

  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white px-6 py-20 overflow-hidden bg-primary-dark">
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt={`${heroTitle} - Leading the path to paradise through community service in Daura, Katsina State`} 
              className="w-full h-full object-cover" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-black/60" /> 
          </div>
        )}
        <div className="container mx-auto text-center relative z-10 px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-10 md:mb-14 font-serif text-accent leading-tight drop-shadow-lg">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-2xl mb-16 md:mb-20 max-w-2xl mx-auto text-white/95 leading-relaxed font-medium drop-shadow-md px-2">
            {heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xs mx-auto sm:max-w-none">
            <Link href="/donate" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-extrabold text-lg hover:bg-accent-dark transition-all active:scale-95 text-center shadow-2xl">Donate Now</Link>
            <Link href="/about" className="bg-white/10 backdrop-blur-md border border-white/40 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all active:scale-95 text-center">Our Mission</Link>
          </div>
        </div>
      </section>

      {/* 2. MISSION QUICK-STATS */}
      <section className="py-24 container mx-auto px-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart className="text-secondary" />, title: "Compassion", text: "Providing Zakat and Sadaqah support for families in need." },
            { icon: <FaHandsHelping className="text-accent" />, title: "Community", text: "Building local projects for lasting impact in Katsina State." },
            { icon: <FaLightbulb className="text-primary" />, title: "Education", text: "Empowering our youth through knowledge and vocational skills." }
          ].map((item, i) => (
            <div key={i} className="text-center p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm">
              <div className="text-4xl flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary font-serif">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR ACTIVITIES - Fixed with Conditional Linking to Blog */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-accent mb-4">
              Our Charitable Activities in Daura
            </h2>
            <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-white/70 max-w-xl mx-auto">
              Discover how your contributions empower the local community through our welfare initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => {
              const CardContent = (
                <div className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all border border-white/5">
                  <div className="absolute inset-0">
                    <img 
                      src={urlFor(activity.image).width(600).height(800).url()}
                      alt={`Sabilul Jannah Activity: ${activity.title} in Daura`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-white text-xl font-bold font-serif leading-tight group-hover:text-accent transition-colors">
                      {activity.title}
                    </h3>
                    {activity.link && (
                      <span className="text-xs text-accent/80 font-bold uppercase tracking-widest mt-3 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                        Read Story →
                      </span>
                    )}
                  </div>
                </div>
              );

              return activity.link ? (
                <Link key={activity._id} href={activity.link}>
                  {CardContent}
                </Link>
              ) : (
                <div key={activity._id}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#F3E5AB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/islamic-exercise.png')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block">Kind Words</span>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-primary-dark mb-4">
              Voices of Hope
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t._id} 
                className="bg-primary-dark p-10 rounded-[3rem] relative flex flex-col shadow-xl border-t-4 border-secondary"
              >
                <FaQuoteRight className="absolute top-8 right-10 text-white/5 text-5xl" />
                
                <p className="text-white/90 italic leading-relaxed mb-10 text-lg relative z-10 font-serif">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 shrink-0 border border-white/20">
                    {t.image ? (
                      <img 
                        src={urlFor(t.image).width(100).height(100).url()} 
                        alt={t.author} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/30">
                        <FaUserCircle size={30} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-accent font-bold font-serif leading-none mb-1 text-lg">{t.author}</h4>
                    <p className="text-white/50 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 text-center px-6 bg-white">
        <div className="container mx-auto max-w-4xl bg-secondary rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-bold font-serif mb-8 text-white">Ready to make a difference?</h2>
              <p className="text-white/80 mb-12 text-xl max-w-xl mx-auto">Your support translates into immediate relief for those in need in Daura and beyond.</p>
              <Link href="/volunteer" className="inline-block bg-white text-secondary px-14 py-5 rounded-full font-extrabold text-2xl shadow-lg active:scale-95">Get Involved</Link>
           </div>
           <FaHeart className="absolute -bottom-16 -right-16 text-white/10 text-[25rem] rotate-12 pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
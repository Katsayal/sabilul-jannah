import { FaHeart, FaEye, FaHistory, FaUsers, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';
import { getMembers } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export default async function AboutPage() {
  const members = await getMembers();

  return (
    <div className="bg-white">
      {/* Hero Section - Matching Homepage Style */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 font-serif text-accent leading-tight">
            Our Journey & Purpose
          </h1>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Sabilul Jannah was founded on the principle that serving humanity is 
            the most direct path to seeking the pleasure of the Almighty.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Spaced for Mobile */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FaHeart className="text-secondary text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide essential support, education, and resources to underprivileged 
              communities, ensuring dignity and hope for every individual.
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <FaEye className="text-accent-dark text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be a beacon of compassion and a catalyst for sustainable change, 
              breaking the cycle of poverty through collective charity.
            </p>
          </div>
        </div>
      </section>

      {/* History & Stats */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 font-serif flex items-center gap-4">
                <FaHistory className="text-secondary" /> Our History
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                <p>
                  Started as a community group in 2024, Sabilul Jannah grew from a simple observation: 
                  many small needs were going unnoticed in our local neighborhoods.
                </p>
                <p>
                  Today, we provide monthly food baskets, medical assistance funds, and educational 
                  scholarships to those who need them most.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
              {[
                { val: "13+", lab: "Families Helped", color: "text-secondary" },
                { val: "5+", lab: "Active Projects", color: "text-accent" },
                { val: "100%", lab: "Transparency", color: "text-white", span: "col-span-2" }
              ].map((stat, i) => (
                <div key={i} className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center ${stat.span}`}>
                  <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.val}</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">{stat.lab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Team Members */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4">Our Dedicated Team</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member._id} className="group text-center">
              <div className="relative aspect-square mb-6 rounded-4xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                {member.image ? (
                  <img 
                    src={urlFor(member.image).width(400).height(400).url()} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/5 text-secondary/20">
                    <FaUserAlt className="text-6xl" />
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-primary font-serif">{member.name}</h3>
              <p className="text-gray-500 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <div className="container mx-auto">
          <FaUsers className="mx-auto text-6xl text-primary/10 mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 font-serif">
            Be Part of the Story
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/volunteer" className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95">
              Join as Volunteer
            </Link>
            <Link href="/donate" className="bg-accent text-primary-dark px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95">
              Support Financially
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
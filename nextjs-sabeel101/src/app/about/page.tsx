import { FaHeart, FaEye, FaHistory, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-accent">
            Our Journey & Purpose
          </h1>
          <p className="text-lg md:text-xl text-primary-light leading-relaxed">
            Sabilul Jannah was founded on the principle that serving humanity is 
            the most direct path to seeking the pleasure of the Almighty. 
            We are a community-driven foundation dedicated to uplifting the vulnerable.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
            <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <FaHeart className="text-secondary text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide essential support, education, and resources to underprivileged 
              communities, ensuring that every individual has the opportunity to live 
              with dignity and hope.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <FaEye className="text-accent-dark text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a beacon of compassion and a catalyst for sustainable change, 
              where the cycle of poverty is broken through collective charity 
              and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values / History */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6 font-serif flex items-center gap-3">
                <FaHistory className="text-accent" /> Our History
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Started as a small community group in 2024, Sabilul Jannah 
                  (The Path to Paradise) grew from a simple observation: 
                  many small needs were going unnoticed in our local neighborhoods.
                </p>
                <p>
                  Today, we have expanded our reach to provide monthly food baskets, 
                  medical assistance funds, and educational scholarships to those 
                  who need them most.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <p className="text-3xl font-bold text-secondary mb-1">500+</p>
                <p className="text-sm text-gray-500 uppercase font-bold">Families Helped</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <p className="text-3xl font-bold text-accent-dark mb-1">10+</p>
                <p className="text-sm text-gray-500 uppercase font-bold">Active Projects</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center col-span-2">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-gray-500 uppercase font-bold">Donation Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center container mx-auto px-4">
        <FaUsers className="mx-auto text-5xl text-gray-200 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif">
          Be Part of the Story
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/volunteer" 
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Join as Volunteer
          </Link>
          <Link 
            href="/donate" 
            className="bg-accent hover:bg-accent-dark text-primary px-8 py-3 rounded-full font-bold transition-colors"
          >
            Support Financially
          </Link>
        </div>
      </section>
    </div>
  );
}
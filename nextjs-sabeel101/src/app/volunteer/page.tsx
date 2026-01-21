import { FaHandsHelping, FaCheckCircle, FaUserPlus, FaCheck } from 'react-icons/fa';

export const revalidate = 60;

export default function VolunteerPage() {
  const googleFormUrl = "https://forms.gle/1ZYhufRkYr7duuV8A";

  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex bg-secondary/20 p-5 rounded-full mb-6 border border-secondary/30">
            <FaUserPlus className="text-secondary text-4xl" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif text-accent leading-tight">
            Join Sabilul Jannah
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Help us pave the path to paradise by serving those in need. Your time is the most valuable gift you can give.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 -mt-12 max-w-6xl relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Why Volunteer Card */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-10 font-serif flex items-center gap-4">
              <span className="bg-secondary/10 p-3 rounded-2xl">
                <FaHandsHelping className="text-secondary" />
              </span>
              Why Volunteer?
            </h2>
            <ul className="space-y-8 grow">
              {[
                { title: "Tangible Impact", desc: "Directly influence the lives of families and orphans in your community." },
                { title: "Skill Building", desc: "Develop leadership, teamwork, and project management experience." },
                { title: "Brotherhood & Unity", desc: "Connect with like-minded individuals working for the sake of Allah." },
                { title: "Sadaqah Jariyah", desc: "Earn continuous rewards in the hereafter through selfless service." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <div className="mt-1 bg-secondary text-white p-1 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <FaCheck className="text-[10px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Card */}
          <div className="bg-secondary text-white p-8 md:p-12 rounded-[3rem] shadow-xl flex flex-col justify-center text-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 text-white/10 text-[20rem] transform rotate-12 pointer-events-none">
                <FaHandsHelping />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 font-serif">Ready to start?</h3>
              <p className="text-white/90 mb-10 text-xl leading-relaxed font-medium">
                We are always looking for passionate individuals to join our various programs, 
                from Ramadan feeding to educational support.
              </p>
              
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-secondary font-extrabold text-2xl py-6 px-14 rounded-full transition-all shadow-2xl active:scale-95 hover:bg-accent hover:text-primary-dark w-full sm:w-auto"
              >
                Become a Volunteer
              </a>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-white/70 text-sm font-bold tracking-widest uppercase">
                <FaCheckCircle />
                <span>Redirects to Google Forms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM HADITH SECTION */}
      <section className="mt-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative p-12 md:p-20 rounded-[4rem] bg-primary-dark text-center overflow-hidden border border-accent/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            
            {/* Islamic Pattern Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/islamic-exercise.png')]"></div>
            </div>

            {/* Floating Quote Icon */}
            <div className="relative z-10 flex justify-center mb-10">
              <span className="text-7xl font-serif text-accent opacity-40 leading-none">“</span>
            </div>

            <div className="relative z-10">
              <blockquote className="text-3xl md:text-5xl font-serif italic font-medium text-white leading-tight mb-12 px-4">
                The best of people are those that are <span className="text-accent not-italic font-bold underline decoration-accent/30 underline-offset-8">most useful</span> to people.
              </blockquote>
              
              {/* Reference */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-1 w-16 bg-accent rounded-full mb-2"></div>
                <cite className="text-accent font-bold tracking-[0.3em] uppercase text-base md:text-lg not-italic">
                  Prophet Muhammad (ﷺ)
                </cite>
                <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase font-semibold">
                  Sahih al-Jami’ | Hadith No. 3289
                </p>
              </div>
            </div>

            {/* Closing Quote Icon */}
            <div className="relative z-10 flex justify-center mt-8">
              <span className="text-7xl font-serif text-accent opacity-40 translate-y-6">”</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const revalidate = 60;

export default function ContactPage() {
  const contactFormUrl = "https://forms.gle/ejXwxiG2XdPQSUbe6";

  return (
    <main className="bg-base-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-primary-dark text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-accent">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Have questions about our projects or want to support our mission? 
            We are here to listen and help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-10 pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Actionable Contact Cards */}
          <div className="space-y-4 lg:col-span-1">
            <a 
              href="mailto:sabiluljannah1411@gmail.com" 
              className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary font-serif">Email Us</h4>
                <p className="text-gray-500 text-sm">sabiluljannah1411@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://wa.me/2348164239070" 
              className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="bg-green-100 p-4 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary font-serif">WhatsApp</h4>
                <p className="text-gray-500 text-sm">Chat with our team</p>
              </div>
            </a>

            <div className="bg-white p-6 rounded-4xl shadow-sm border border-gray-100 flex items-center gap-5">
              <div className="bg-accent/20 p-4 rounded-2xl text-accent-dark">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary font-serif">Location</h4>
                <p className="text-gray-500 text-sm">Daura Katsina State, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Form Link Section */}
          <div className="lg:col-span-2 bg-primary text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-accent">
                Send a Message
              </h2>
              <p className="mb-10 text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
                To help us direct your inquiry to the right department, please use our secure contact form. We aim to respond within 24–48 hours.
              </p>
              
              <a 
                href={contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-primary-dark font-extrabold py-5 px-10 rounded-full transition-all shadow-lg active:scale-95 w-full sm:w-auto text-center"
              >
                Open Official Form <FaExternalLinkAlt size={16} />
              </a>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 text-white/5 text-[15rem] transform -rotate-12 pointer-events-none">
              <FaEnvelope />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
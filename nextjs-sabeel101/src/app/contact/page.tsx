import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function ContactPage() {
  // TODO: Replace with your actual Google Form link for inquiries
  const contactFormUrl = "https://docs.google.com/forms/d/e/YOUR_CONTACT_FORM_ID/viewform";

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4 font-serif">Contact Us</h1>
        <p className="text-gray-600">Have questions? We are here to help and listen.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-accent/20 p-3 rounded-lg text-accent-dark">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Email Us</h4>
              <p className="text-gray-600 text-sm">contact@sabiluljannah.org</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Location</h4>
              <p className="text-gray-600 text-sm">Main Office, City Center</p>
            </div>
          </div>
        </div>

        {/* Form Link Section */}
        <div className="md:col-span-2 bg-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 font-serif text-accent">Send a Message</h2>
            <p className="mb-8 text-primary-light text-lg">
              To ensure your inquiry reaches the right department, please fill out our official contact form.
            </p>
            <a 
              href={contactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Open Contact Form <FaExternalLinkAlt size={16} />
            </a>
          </div>
          {/* Decorative Background Icon */}
          <FaEnvelope className="absolute -bottom-10 -right-10 text-white/5 text-9xl transform -rotate-12" />
        </div>
      </div>
    </div>
  );
}
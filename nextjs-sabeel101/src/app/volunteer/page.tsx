import { FaHandsHelping, FaCheckCircle } from 'react-icons/fa';

export default function VolunteerPage() {
  // TODO: Replace with your actual Google Form link
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          Join Sabilul Jannah
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Help us pave the path to paradise by serving those in need. Your time is the most valuable gift you can give.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FaHandsHelping className="text-secondary" /> Why Volunteer?
          </h2>
          <ul className="space-y-4">
            {[
              "Make a tangible impact in your community",
              "Develop new skills and gain experience",
              "Meet like-minded individuals",
              "Earn rewards in the hereafter (Sadaqah Jariyah)"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-secondary mt-1 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to start?</h3>
          <p className="text-gray-600 mb-8">
            Click the button below to fill out our volunteer application form on Google Forms.
          </p>
          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold text-xl py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Become a Volunteer
          </a>
          <p className="mt-4 text-sm text-gray-500 italic">
            Redirects to a secure Google Form
          </p>
        </div>
      </div>
    </div>
  );
}
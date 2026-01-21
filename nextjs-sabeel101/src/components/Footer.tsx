import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white font-sans mt-auto border-t border-white/5">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand & Mission */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 text-accent font-serif tracking-tight">
              Sabilul Jannah
            </h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              A charity foundation dedicated to empowering the community and serving humanity with compassion.
            </p>
          </div>

          {/* Quick Links - Organized in 2 columns on mobile for better space usage */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-2">
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors py-2 block">About Us</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-accent transition-colors py-2 block">Volunteer</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent transition-colors py-2 block">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors py-2 block">Contact</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-accent transition-colors py-2 block">Donate</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">
              Connect With Us
            </h3>
            
            {/* Direct Contact Links - Huge tap targets for mobile */}
            <div className="space-y-4 mb-8 w-full">
              <a href="mailto:sabiluljannah1411@gmail.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/10">
                  <FaEnvelope className="h-5 w-5 text-accent" />
                </div>
                <span>sabiluljannah1411@gmail.com</span>
              </a>
              {/* Added a placeholder phone link as it's vital for mobile users */}
              <a href="tel:+234 816 423 9070" className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/10">
                  <FaPhone className="h-5 w-5 text-accent" />
                </div>
                <span>+234 816 423 9070</span>
              </a>
            </div>

            {/* Social Icons with distinct backgrounds */}
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, href: "#", label: "Facebook" },
                { icon: <FaTwitter />, href: "#", label: "Twitter" },
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  aria-label={social.label}
                  className="bg-white/5 p-3 rounded-full text-gray-300 hover:bg-accent hover:text-primary-dark transition-all active:scale-90"
                >
                  <div className="h-6 w-6 flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            &copy; {new Date().getFullYear()} Sabilul Jannah Foundation.
          </p>
          <p className="text-gray-600 text-xs">
            Built with heart for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
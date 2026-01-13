import { Link } from 'react-router-dom';
import NewsletterForm from './forms/NewsletterForm';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Sabilul Jannah</h3>
            <p className="text-gray-300">
              A charity foundation dedicated to making a difference in the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/volunteer" className="hover:text-accent">Volunteer</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-accent">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <NewsletterForm />
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sabilul Jannah Foundation. All Rights Reserved.</p>
          <p>Contact us: <a href="mailto:contact@sabiluljannah.org" className="hover:text-accent">contact@sabiluljannah.org</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

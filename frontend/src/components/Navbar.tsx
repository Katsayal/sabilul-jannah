import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-accent' : 'hover:text-accent transition-colors';

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-accent">
          Sabilul Jannah
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <Link to="/volunteer" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors">
            Volunteer
          </Link>
          <Link to="/donate" className="bg-accent hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded transition-colors">
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary pb-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <div className="pt-4">
              <Link to="/volunteer" onClick={() => setIsOpen(false)} className="block text-center bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors w-full">
                  Volunteer
              </Link>
            </div>
            <div className="pt-2">
              <Link to="/donate" onClick={() => setIsOpen(false)} className="block text-center bg-accent hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded transition-colors w-full">
                  Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => 
    pathname === path ? 'text-accent font-bold' : 'hover:text-accent transition-colors';

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-50 font-sans"> {/* bg-primary */}
      <nav className="container mx-auto flex items-center justify-between p-4">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center p-1 -ml-1 group transition-transform active:scale-95">
          <div className="relative h-14 w-14 md:h-16 md:w-16">
            <Image
              src="/logo1.svg" // Path to your file in /public
              alt="Sabilul Jannah Logo"
              fill
              className="object-contain scale-155"
              priority // Ensures the logo loads instantly
            />
          </div>
          {/* We keep the text but hide it on very small phones, show it on tablets/desktop 
          <span className="hidden sm:block text-xl md:text-2xl font-bold text-accent group-hover:text-white transition-colors">
            Sabilul Jannah
          </span> */}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
          <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
          
          <div className="flex items-center gap-3 ml-4">
            <Link href="/volunteer" className="bg-secondary/20 border border-secondary text-secondary-light hover:bg-secondary hover:text-white font-bold py-2 px-4 rounded-lg transition-all text-sm">
              Volunteer
            </Link>
            <Link href="/donate" className="bg-accent hover:bg-accent-dark text-primary-dark font-bold py-2 px-5 rounded-lg transition-all shadow-md text-sm">
              Donate
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-accent hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col items-center space-y-5 py-8">
            <Link href="/" className={`${getLinkClass('/')} text-lg`} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={`${getLinkClass('/about')} text-lg`} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/blog" className={`${getLinkClass('/blog')} text-lg`} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className={`${getLinkClass('/contact')} text-lg`} onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="flex flex-col w-full px-10 gap-4 pt-4">
              <Link href="/volunteer" onClick={() => setIsOpen(false)} className="w-full text-center bg-secondary text-white font-bold py-3 rounded-xl shadow-lg">
                Volunteer
              </Link>
              <Link href="/donate" onClick={() => setIsOpen(false)} className="w-full text-center bg-accent text-primary-dark font-bold py-3 rounded-xl shadow-lg">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
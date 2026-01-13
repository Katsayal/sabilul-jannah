"use client"; // Required for useState and usePathname

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a link is active in Next.js
  const getLinkClass = (path: string) => 
    pathname === path ? 'text-accent font-bold' : 'hover:text-accent transition-colors';

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50 font-sans">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-accent">
          Sabilul Jannah
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/about" className={getLinkClass('/about')}>About</Link>
          <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
          <Link href="/volunteer" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded transition-colors">
            Volunteer
          </Link>
          <Link href="/donate" className="bg-accent hover:bg-opacity-90 text-primary font-bold py-2 px-4 rounded transition-colors">
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary pb-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={getLinkClass('/about')} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/blog" className={getLinkClass('/blog')} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className={getLinkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="pt-4 w-full px-4">
              <Link href="/volunteer" onClick={() => setIsOpen(false)} className="block text-center bg-secondary text-white font-bold py-2 rounded">
                Volunteer
              </Link>
            </div>
            <div className="pt-2 w-full px-4">
              <Link href="/donate" onClick={() => setIsOpen(false)} className="block text-center bg-accent text-primary font-bold py-2 rounded">
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
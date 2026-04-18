import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-3'
            : 'bg-gradient-to-b from-zinc-950/80 to-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
                CHR<span className="text-gold-500">I</span>SMAR
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">The Hotel</NavLink>
              <NavLink href="#rooms">Rooms</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#location">Location</NavLink>
              
              <a
                href="#booking"
                className="bg-gold-500 hover:bg-gold-600 text-zinc-950 px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2"
              >
                <Calendar size={18} />
                <span>Book Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-gold-500 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col"
          >
            <div className="p-5 flex justify-between items-center border-b border-zinc-800">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                CHR<span className="text-gold-500">I</span>SMAR
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gold-500"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
              <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>The Hotel</MobileNavLink>
              <MobileNavLink href="#rooms" onClick={() => setIsMobileMenuOpen(false)}>Rooms & Suites</MobileNavLink>
              <MobileNavLink href="#amenities" onClick={() => setIsMobileMenuOpen(false)}>Amenities</MobileNavLink>
              <MobileNavLink href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
              <MobileNavLink href="#location" onClick={() => setIsMobileMenuOpen(false)}>Location</MobileNavLink>
              
              <div className="pt-8">
                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gold-500 text-zinc-950 px-8 py-3 rounded-full font-medium text-lg flex items-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Your Stay</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm uppercase tracking-widest text-zinc-300 hover:text-gold-500 transition-colors font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-serif text-3xl text-zinc-200 hover:text-gold-500 transition-colors"
    >
      {children}
    </a>
  );
}

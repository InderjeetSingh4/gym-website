import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          AURA<span className="text-neonBlue">.</span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors mr-4">Home</Link>
          <Link to="/#features" className="text-sm text-white/70 hover:text-white transition-colors mr-4">Features</Link>
          <Link to="/#pricing" className="text-sm text-white/70 hover:text-white transition-colors mr-8">Pricing</Link>
          
          <Button variant="secondary" to="/book" className="!py-2 !px-6 text-xs">Book Trial</Button>
          <Button variant="primary" to="/book" className="!py-2 !px-6 text-xs">Join Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <Link to="/" className="text-lg text-white/80" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/book" className="text-lg text-white/80" onClick={() => setIsMobileMenuOpen(false)}>Book Trial</Link>
          <Button variant="primary" to="/book" className="w-full justify-center">Join Now</Button>
        </div>
      )}
    </nav>
  );
};

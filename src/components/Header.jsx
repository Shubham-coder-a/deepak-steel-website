import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Award, Menu, X, MessageSquare, Send, ChevronRight, ShieldCheck } from 'lucide-react';

export const Header = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries We Serve', path: '/industries' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full z-40 sticky top-0 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Sales Hotline: +91 98765 43210</span>
            </a>
            <a href="mailto:sales@deepaksteel.com" className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>sales@deepaksteel.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              ISO 9001:2015 Certified
            </span>
            <span className="hidden sm:inline border-r border-slate-800 h-3"></span>
            <span className="hidden sm:inline text-amber-400 font-medium">Exporting to 45+ Countries</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800' : 'bg-slate-900 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 flex items-center justify-center text-white font-extrabold shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl tracking-tighter">DS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                DEEPAK STEEL
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Pipes • Fittings • Flanges
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-blue-700/80 shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Callouts & Quick Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded-lg transition-colors"
              aria-label="WhatsApp Inquiry"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="md:hidden bg-amber-500 text-slate-950 p-2 rounded-lg font-bold text-xs"
              aria-label="Quick Quote"
            >
              <Send className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 text-white px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-white bg-blue-700 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-slate-800 text-white text-xs font-bold py-2.5 px-3 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Sales</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs font-bold py-2.5 px-3 rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry && onOpenInquiry();
            }}
            className="mt-3 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <Send className="w-4 h-4" />
            <span>Request Custom B2B Quote</span>
          </button>
        </div>
      )}
    </header>
  );
};

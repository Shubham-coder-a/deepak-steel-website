import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, ShieldCheck, ChevronRight, Globe, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 flex items-center justify-center text-white font-extrabold shadow-md">
                <span className="text-xl tracking-tighter">DS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  DEEPAK STEEL
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Global Piping Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Deepak Steel is a leading ISO 9001:2015 certified manufacturer, stockist, and global exporter of high-precision Stainless Steel Pipes, Butt-Weld Fittings, Forged Flanges, Fasteners, Round Bars, and Steel Plates.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-semibold text-emerald-400">
                <Award className="w-3.5 h-3.5" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" /> IBR Approved
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> About Company
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Complete Catalog
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Request B2B Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Core Product Range
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products?category=Pipes+%26+Tubes" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Seamless & Welded Pipes
                </Link>
              </li>
              <li>
                <Link to="/products?category=Pipe+Fittings" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Butt-Weld Pipe Fittings
                </Link>
              </li>
              <li>
                <Link to="/products?category=Flanges" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Industrial Forged Flanges
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fasteners" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> High-Tensile Stud Bolts
                </Link>
              </li>
              <li>
                <Link to="/products?category=Round+Bars" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Bright & Forged Round Bars
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sheets+%26+Plates" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Stainless Sheets & Plates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Corporate Headquarters
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Deepak Steel House, Plot No. 45/B, Metal & Hardware Market, Kalbadevi Road, Mumbai - 400002, Maharashtra, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210 / +91 22 6677 8899</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:sales@deepaksteel.com" className="hover:text-white transition-colors">sales@deepaksteel.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Deepak Steel. All Rights Reserved. ISO 9001:2015 Certified Manufacturer & Exporter.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">Quality Assurance Policy</span>
            <span className="hover:text-slate-400 transition-colors">MTC Verification</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Supply</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

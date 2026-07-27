import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { industriesData } from '../data/industriesData';
import {
  Flame,
  FlaskConical,
  Zap,
  Ship,
  ShieldCheck,
  Droplets,
  Building2,
  CheckCircle2,
  Send,
  FileText
} from 'lucide-react';

export const IndustriesPage = () => {
  const { handleOpenInquiry } = useOutletContext();

  const industryIcons = {
    "Flame": Flame,
    "FlaskConical": FlaskConical,
    "Zap": Zap,
    "Ship": Ship,
    "ShieldCheck": ShieldCheck,
    "Droplets": Droplets
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 text-amber-400 border border-blue-700/60 mb-3">
            <Building2 className="w-3.5 h-3.5" /> Industry Verticals
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Industries We Serve</h1>
          <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
            Providing high-integrity stainless steel and specialty nickel piping products for heavy process industries globally.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        {industriesData.map((ind, idx) => {
          const IconComponent = industryIcons[ind.iconName] || Building2;
          return (
            <div
              key={ind.id}
              className={`bg-white rounded-3xl border border-slate-200 shadow-md p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{ind.name}</h2>
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                      Standards: {ind.standardsCompliance}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {ind.overview}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2">
                    Key Products Supplied to This Sector:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.keyProductsUsed.map((prod, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleOpenInquiry({ name: `${ind.name} Piping Inquiry` })}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire for {ind.name} Tenders</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-[280px] object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Building2,
  Microscope,
  FileCheck,
  Users,
  Send,
  Truck,
  Layers,
  Sparkles
} from 'lucide-react';

export const AboutPage = () => {
  const { handleOpenInquiry } = useOutletContext();

  const testingEquipment = [
    { name: "Thermo Scientific XRF PMI Spectrometer", purpose: "Instant non-destructive chemical element verification" },
    { name: "Hydrostatic Pressure Testing Rig", purpose: "High-pressure seal and leak integrity validation up to 10,000 PSI" },
    { name: "Ultrasonic Thickness & Flaw Detector", purpose: "Internal void detection and precise wall thickness measurement" },
    { name: "Rockwell & Brinell Hardness Tester", purpose: "Mechanical hardness and heat treatment compliance verification" },
    { name: "Intergranular Corrosion (IGC) Test Lab", purpose: "ASTM A262 Practice E corrosion resistance testing" },
    { name: "Surface Roughness & Dimension Gauges", purpose: "Micrometer precision dimensional tolerance validation" }
  ];

  const coreValues = [
    {
      title: "Quality First Commitment",
      desc: "Zero tolerance for non-conforming materials. Every order undergoes 100% PMI testing before dispatch."
    },
    {
      title: "Customer Centricity",
      desc: "Custom size cutting, fast response times, and specialized seaworthy export packaging tailored to client specifications."
    },
    {
      title: "Integrity & Compliance",
      desc: "Complete heat number traceability with authentic Mill Test Certificates (EN 10204 3.1) accompanying every shipment."
    },
    {
      title: "Global Reliability",
      desc: "Supplying contractors across 45+ countries with on-time logistics and competitive direct-mill pricing."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 text-amber-400 border border-blue-700/60 mb-3">
            <Building2 className="w-3.5 h-3.5" /> Corporate Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Deepak Steel</h1>
          <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
            Over 25 years of excellence in manufacturing, stocking, and globally exporting premium stainless steel and alloy piping components.
          </p>
        </div>
      </section>

      {/* Heritage & Mission */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              subtitle="Our Journey"
              title="A Quarter-Century of Metallurgical Leadership"
              center={false}
            />

            <p className="text-slate-600 text-base leading-relaxed">
              Founded in 1998 in Mumbai, India, <strong className="text-slate-900">Deepak Steel</strong> started with a clear vision: to establish an unshakeable reputation as a reliable B2B supplier of high-grade industrial steel piping products.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Today, our warehousing infrastructure spans over 60,000 square feet, maintaining an active inventory exceeding 5,000 metric tonnes of stainless steel, duplex steel, nickel alloys, and carbon steel products.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-3xl font-extrabold text-blue-700">1998</div>
                <div className="text-xs font-bold text-slate-700 uppercase mt-1">Year Established</div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-3xl font-extrabold text-amber-500">60,000+</div>
                <div className="text-xs font-bold text-slate-700 uppercase mt-1">Sq. Ft Warehouse</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Deepak Steel Quality Testing Lab"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Corporate Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver world-class piping products that strictly comply with international standards (ASTM, ASME, DIN, EN, ISO) while maintaining 100% heat traceability, rapid dispatch capabilities, and uncompromised customer service for heavy engineering projects worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Strategic Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be recognised globally as the most dependable and quality-focused single-source partner for stainless steel, duplex, and specialty nickel alloy piping systems in oil refineries, energy plants, and naval infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Quality Testing Laboratory */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Metallurgical Quality Control"
          title="State-of-the-Art Testing Facility & Quality Policy"
          description="Quality is the cornerstone of our operations. Every single batch is verified in our certified in-house laboratory."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testingEquipment.map((equip, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">{equip.name}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{equip.purpose}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
              <ShieldCheck className="w-4 h-4" /> Certification Compliance
            </div>
            <h3 className="text-2xl font-bold">ISO 9001:2015 & IBR Approved Quality Management</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              We provide Third Party Inspection (TPI) options with SGS, TUV Rheinland, Bureau Veritas, DNV-GL, and Lloyds Register upon request.
            </p>
          </div>

          <button
            onClick={() => handleOpenInquiry()}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shrink-0 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request Sample MTC Report</span>
          </button>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Core Pillars"
            title="The Values That Drive Our Operations"
            description="Built on transparency, metallurgical precision, and client satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 bg-slate-800/80 border border-slate-700/80 rounded-2xl space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Export Footprint */}
      <section className="max-w-7xl mx-auto px-4 text-center space-y-8">
        <SectionTitle
          subtitle="Worldwide Presence"
          title="Exporting to Over 45+ Countries Globally"
          description="Our seaworthy ISPM-15 compliant packaging ensures safe and timely delivery to international ports."
        />

        <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">Middle East</div>
            <div className="text-xs text-slate-500">UAE, Oman, Qatar, KSA</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">Europe</div>
            <div className="text-xs text-slate-500">Germany, Italy, UK, Netherlands</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">SE Asia</div>
            <div className="text-xs text-slate-500">Singapore, Malaysia, Vietnam</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">Americas</div>
            <div className="text-xs text-slate-500">USA, Brazil, Canada</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">Africa</div>
            <div className="text-xs text-slate-500">Nigeria, Egypt, South Africa</div>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-slate-900">Australia</div>
            <div className="text-xs text-slate-500">Sydney, Melbourne, Perth</div>
          </div>
        </div>
      </section>
    </div>
  );
};

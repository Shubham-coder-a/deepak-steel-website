import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/productsData';
import { industriesData } from '../data/industriesData';
import { faqData } from '../data/faqData';
import {
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  FileCheck,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Star,
  Layers,
  Flame,
  FlaskConical,
  Zap,
  Ship,
  Droplets,
  PackageCheck
} from 'lucide-react';

export const HomePage = () => {
  const { handleOpenInquiry } = useOutletContext();
  const [openFaq, setOpenFaq] = useState(0);

  const featuredProducts = productsData.slice(0, 6);

  const stats = [
    { label: 'Years of Excellence', value: '25+', subtext: 'Established in 1998' },
    { label: 'Ready Inventory Stock', value: '5,000+', subtext: 'Metric Tonnes in Stock' },
    { label: 'Export Destinations', value: '45+', subtext: 'Global Countries Served' },
    { label: 'Satisfied Corporate Clients', value: '1,200+', subtext: 'EPC & Oil Conglomerates' }
  ];

  const whyChooseUs = [
    {
      title: '100% Positive Material ID (PMI)',
      description: 'Every pipe, flange, and fitting undergoes Thermo-XRF spectro analysis before dispatch to guarantee raw material purity.',
      icon: ShieldCheck
    },
    {
      title: 'Mill Test Certificates EN 10204 3.1',
      description: 'Full heat traceability from raw ingot to finished product with comprehensive mechanical and chemical test reports.',
      icon: FileCheck
    },
    {
      title: 'Global Export Ready Stock',
      description: 'Over 5,000 tonnes of stainless steel 304, 316, Duplex 2205, and Inconel stored in climate-controlled warehouses.',
      icon: PackageCheck
    },
    {
      title: 'Custom Cutting & Beveling',
      description: 'On-site band saws, waterjet cutting, and pipe beveling to deliver custom length components matching your exact specs.',
      icon: Layers
    },
    {
      title: 'Fast Seaworthy Packaging',
      description: 'ISPM-15 wooden boxes, plastic end cap covers, and anti-rust oiling designed for safe ocean and air freight.',
      icon: Truck
    },
    {
      title: 'Competitive B2B Pricing',
      description: 'Direct mill sourcing partnerships allow us to provide wholesale competitive rates for bulk project tenders.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      quote: "Deepak Steel provided 250 tonnes of Duplex 2205 seamless pipes and ASME B16.5 flanges for our offshore refinery project. The MTC documentation was impeccable and delivery was ahead of schedule.",
      author: "Robert Henderson",
      title: "Senior Procurement Director",
      company: "Global Petrochemical EPC, UAE"
    },
    {
      quote: "Finding high-nickel Inconel 625 forged fittings with NACE MR0175 certification on tight deadlines used to be a challenge. Deepak Steel's ready inventory saved our shutdown timeline.",
      author: "Vikram Malhotra",
      title: "Lead Piping Engineer",
      company: "Reliance Infrastructure Division"
    },
    {
      quote: "Their precision centerless ground round bars and 316L plates have consistently passed our third-party Bureau Veritas inspections without a single rejection.",
      author: "Hans Gruber",
      title: "Quality Assurance Head",
      company: "Marine Heavy Engineering, Germany"
    }
  ];

  const industryIcons = {
    "Flame": Flame,
    "FlaskConical": FlaskConical,
    "Zap": Zap,
    "Ship": Ship,
    "ShieldCheck": ShieldCheck,
    "Droplets": Droplets
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 border border-blue-700/60 text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Premier B2B Manufacturer & Global Exporter</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                High Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-400">Stainless Steel</span> & Alloy Piping Solutions
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Deepak Steel manufactures and exports ISO 9001:2015 certified Seamless Pipes, Butt-Weld Fittings, Forged Flanges, Fasteners, Round Bars, and Plates for Oil & Gas, Petrochemical, Power, and Marine industries worldwide.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Products Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => handleOpenInquiry()}
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Instant Factory Quote</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-left text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% PMI Spectro Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>EN 10204 3.1 MTC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5000+ Tonnes Ready Stock</span>
                </div>
              </div>
            </div>

            {/* Hero Image Showcase / Quick Spec Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
                  alt="Deepak Steel Industrial Stock"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                    <span>Manufacturing Spec</span>
                    <span>ASTM A312 / ASME B16.5</span>
                  </div>
                  <div className="text-lg font-bold">Stainless & High Alloy Steel Stock</div>
                  <p className="text-slate-300 text-xs">
                    Ready stock of SS 304/304L, 316/316L, Duplex 2205, Super Duplex 2507, and Inconel 625.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro & Heritage Overview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Deepak Steel Manufacturing Quality"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900 text-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="text-3xl font-extrabold text-amber-400">25+</div>
                <div className="text-xs font-semibold text-slate-300">Years of Industrial Manufacturing & Global Export Trust</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-50 text-blue-800 border border-blue-200">
              Company Overview
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              India's Premier Stockist & Exporter of Industrial Piping Material
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Established in 1998, <strong className="text-slate-900">Deepak Steel</strong> has evolved into a powerhouse stockist, manufacturer, and exporter of high-grade stainless steel pipes, fittings, flanges, fasteners, and round bars.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our state-of-the-art warehousing and testing facility in Mumbai holds over 5,000 metric tonnes of prime stock. We serve multi-national EPC contractors, oil refineries, power plants, and chemical processing facilities across Europe, the Middle East, Southeast Asia, and the Americas.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Full Heat Traceability</h4>
                  <p className="text-xs text-slate-500">Every item marked with heat number & EN 10204 3.1 MTC.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">TPIA Accepted</h4>
                  <p className="text-xs text-slate-500">Regularly inspected by BV, TUV, SGS, LRQA, and EIL.</p>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 group"
              >
                <span>Read More About Our Manufacturing Facilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Industrial Product Range"
            title="Explore Our Core Piping & Steel Products"
            description="Manufactured to ASTM, ASME, DIN, EN, and ISO standards with comprehensive mill test certificates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>View All Products & Grades</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Why Deepak Steel"
          title="Engineered for Precision, Delivered for Reliability"
          description="We uphold uncompromising quality standards to meet strict international engineering benchmarks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 p-4">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Global Application"
          title="Serving Heavy Engineering & Process Industries"
          description="Our piping products power essential infrastructure across critical industrial sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.slice(0, 6).map((ind) => {
            const IconComponent = industryIcons[ind.iconName] || Building2;
            return (
              <div key={ind.id} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {ind.name}
                    </h3>
                    <span className="text-xs text-blue-600 font-semibold">{ind.standardsCompliance}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {ind.shortDescription}
                </p>

                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-blue-700 transition-colors"
                >
                  <span>Read Industry Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Client Testimonials"
            title="Trusted by Procurement Leaders Worldwide"
            description="What project engineers and global procurement managers say about working with Deepak Steel."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-base font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-blue-700 font-semibold">{t.title}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Frequently Asked Questions (FAQ)"
          description="Everything you need to know about our material certifications, MOQs, testing, and ocean export logistics."
        />

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-base sm:text-lg hover:bg-slate-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Direct Sales Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Need Custom Specifications or Bulk Tender Quotations?
              </h2>
              <p className="text-slate-300 text-base max-w-xl">
                Send us your material bill of quantities (BOQ). Our technical sales engineers will send a formal quote complete with MTC and delivery lead times within 2 hours.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => handleOpenInquiry()}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit RFQ Now</span>
              </button>

              <a
                href="tel:+919876543210"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm py-4 px-6 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Call +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

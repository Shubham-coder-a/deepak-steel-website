import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { SpecTable } from '../components/SpecTable';
import { ProductCard } from '../components/ProductCard';
import {
  Send,
  PhoneCall,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  Layers,
  ArrowLeft,
  Share2
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleOpenInquiry } = useOutletContext();

  const product = productsData.find(p => p.id === id || p.slug === id);

  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900">Product Not Found</h2>
        <p className="text-slate-600">The product specification page you are looking for does not exist.</p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-6 py-3 rounded-xl">
          <ArrowLeft className="w-4 h-4" /> Back to Products Catalog
        </Link>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Deepak Steel sales team, I want to inquire about: ${product.name} (Category: ${product.category}). Please share catalog & price quotation.`
  );

  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-900 text-slate-300 py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center text-xs space-x-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDE: Image & Thumbnail Gallery */}
          <div className="lg:col-span-5 space-y-4">
            {/* Large Product Image */}
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                {product.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-emerald-950/90 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ISO Certified Stock
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === thumb ? 'border-blue-600 ring-2 ring-blue-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Factory Quality Badges */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Quality Assurance & Certifications</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Accompanied with Mill Test Certificate (EN 10204 3.1)</li>
                <li>100% Positive Material Identification (PMI) Verified</li>
                <li>Hydrostatic pressure & Eddy current tested</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Technical Specs & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                {product.name}
              </h1>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Direct Action Buttons (NO SHOPPING CART / NO BUY NOW) */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 text-white space-y-4 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center justify-between">
                <span>B2B Commercial Inquiry</span>
                <span>Wholesale Direct Mill Rates</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => handleOpenInquiry(product)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                <a
                  href="tel:+919876543210"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Request Callback</span>
                </a>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-700 pl-3">
                Technical Specifications
              </h3>
              <SpecTable specifications={product.specifications} />
            </div>

            {/* Available Materials & Popular Grades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.materials && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-700">Available Materials</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.materials.map((mat, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-white text-slate-800 px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.grades && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-700">Popular Material Grades</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.grades.map((grade, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded border border-blue-200">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Features */}
            {product.features && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-700 pl-3">
                  Key Product Features
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Industrial Applications */}
            {product.applications && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-700 pl-3">
                  Industrial Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-100/70 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Related Products in {product.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} onOpenInquiry={handleOpenInquiry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

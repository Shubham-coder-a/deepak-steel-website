import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Send } from 'lucide-react';

export const ProductCard = ({ product, onOpenInquiry }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1">
      {/* Image Header */}
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-amber-300 font-medium">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ISO Certified Stock
          </span>
          <span>EN 10204 3.1 MTC</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
          {product.name}
        </h3>

        <p className="mt-2.5 text-slate-600 text-sm leading-relaxed line-clamp-3 flex-grow">
          {product.shortDescription}
        </p>

        {/* Popular Grades Preview */}
        {product.grades && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Popular Grades:</span>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {product.grades.slice(0, 3).map((grade, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded border border-slate-200">
                  {grade}
                </span>
              ))}
              {product.grades.length > 3 && (
                <span className="text-xs bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded">
                  +{product.grades.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-lg transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            View Details
          </Link>

          <button
            onClick={() => onOpenInquiry && onOpenInquiry(product)}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 py-2.5 px-3 rounded-lg shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

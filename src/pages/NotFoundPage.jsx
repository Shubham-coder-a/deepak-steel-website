import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Mail, ArrowLeft, ShieldAlert } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-200">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Error 404 — Page Not Found
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Invalid Spec Route
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page or product datasheet you requested could not be located in our piping registry. It may have been moved or updated.
          </p>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/products"
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-4 rounded-xl transition-colors"
          >
            <Package className="w-4 h-4 text-blue-600" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

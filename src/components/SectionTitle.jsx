import React from 'react';

export const SectionTitle = ({ subtitle, title, description, center = true }) => {
  return (
    <div className={`max-w-3xl mb-12 ${center ? 'mx-auto text-center' : 'text-left'}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200/80 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-blue-700 via-blue-500 to-amber-500 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

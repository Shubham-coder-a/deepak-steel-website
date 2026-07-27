import React from 'react';

export const SpecTable = ({ specifications }) => {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="overflow-hidden border border-slate-200 rounded-xl shadow-xs bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
            <th className="py-3 px-4 border-b border-slate-800 w-1/3">Specification Parameter</th>
            <th className="py-3 px-4 border-b border-slate-800 w-2/3">Technical Detail / Standard Range</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {specifications.map((spec, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/80 transition-colors' : 'bg-slate-50/50 hover:bg-slate-50 transition-colors'}>
              <td className="py-3.5 px-4 font-semibold text-slate-800 border-r border-slate-100">
                {spec.key}
              </td>
              <td className="py-3.5 px-4 text-slate-600 font-medium">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

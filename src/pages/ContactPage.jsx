import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Building2,
  Award,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: 'Pipes & Tubes',
    materialGrade: '',
    estimatedQuantity: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 text-amber-400 border border-blue-700/60 mb-3">
            <Mail className="w-3.5 h-3.5" /> Contact & Quotation Desk
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Deepak Steel</h1>
          <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
            Get in touch with our technical sales engineers for instant B2B price quotes, product catalogs, and custom mill specifications.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Contact Information & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
                Corporate Sales Headquarters
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Registered Office & Warehouse</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Deepak Steel House, Plot No. 45/B, Metal & Hardware Market, Kalbadevi Road, Mumbai - 400002, Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Hotlines & Direct Desk</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Domestic Sales: <a href="tel:+919876543210" className="text-blue-700 font-semibold">+91 98765 43210</a><br />
                      Export Desk: <a href="tel:+912266778899" className="text-blue-700 font-semibold">+91 22 6677 8899</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      General RFQ: <a href="mailto:sales@deepaksteel.com" className="text-blue-700 font-semibold">sales@deepaksteel.com</a><br />
                      Export Desk: <a href="mailto:export@deepaksteel.com" className="text-blue-700 font-semibold">export@deepaksteel.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Working Hours</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Monday to Saturday: 9:30 AM – 7:00 PM IST<br />
                      Sunday: Closed (Emergency WhatsApp Desk Active)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 p-6 space-y-4 text-white relative">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-widest">
                <span>Mumbai Industrial Hub</span>
                <span>Interactive Location Map</span>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden bg-slate-800 relative border border-slate-700 flex flex-col items-center justify-center text-center p-6">
                {/* Styled Google Map Simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg mb-2 relative z-10 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base relative z-10">Deepak Steel House, Mumbai</h4>
                <p className="text-xs text-slate-400 max-w-xs mt-1 relative z-10">
                  Kalbadevi Metal Market, Mumbai - 400002, MH, India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 relative z-10 text-xs font-bold text-amber-400 underline hover:text-amber-300"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: B2B Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-md">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  B2B Official Quotation Form
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 pt-2">Send Us Your Material BOQ</h2>
                <p className="text-slate-600 text-sm">
                  Fill out your product parameters below. Our sales team will get back to you with a competitive factory quotation.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank You! Inquiry Submitted.</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    We have logged your quotation request for <strong className="text-slate-900">{formData.companyName}</strong>. A dedicated sales manager will email you the official tender quotation shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-900 text-white font-bold text-xs py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company / Industry *</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Reliance EPC Works"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anand@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone / Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Product Category</label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="Pipes & Tubes">Pipes & Tubes</option>
                        <option value="Pipe Fittings">Pipe Fittings</option>
                        <option value="Flanges">Flanges</option>
                        <option value="Fasteners">Fasteners</option>
                        <option value="Round Bars">Round Bars</option>
                        <option value="Sheets & Plates">Sheets & Plates</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Material Grade Required</label>
                      <input
                        type="text"
                        name="materialGrade"
                        value={formData.materialGrade}
                        onChange={handleChange}
                        placeholder="e.g. SS 316L / Duplex 2205 / Inconel 625"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Estimated Quantity / Dimensions</label>
                    <input
                      type="text"
                      name="estimatedQuantity"
                      value={formData.estimatedQuantity}
                      onChange={handleChange}
                      placeholder="e.g. 200 Meters of 4&quot; NB Sch 40S Seamless Pipe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Detailed Technical Specifications / Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify manufacturing standards (ASTM A312, ASME B16.5), required end finishes, hydrotesting parameters, or third-party inspection (SGS, TUV, BV)..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Submit Official B2B Quote Request</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Data Privacy
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" /> Mill Direct Pricing
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

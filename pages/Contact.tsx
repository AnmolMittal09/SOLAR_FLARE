
import React, { useState } from 'react';
import { PHONE_JATIN, PHONE_DHIRAJ, EMAIL_ADDRESS, ADDRESS, BRAND_NAME, WHATSAPP_LINK } from '../constants';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', requirement: 'Residential', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `Project Inquiry Submission:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
        setShowSuccess(false);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Project Command Center" 
        description="Direct terminal for DRG Power technical audits. Connect with our engineering leads for high-performance solar infrastructure."
      />
      
      <section className="pt-48 pb-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Strategic Leads & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BE1E2D] mb-4">Direct Contact</h2>
              <h1 className="text-5xl font-black text-black tracking-tighter uppercase italic leading-none">
                Connect With <br /> <span className="text-[#BE1E2D]">Our Team.</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Strategic Leads</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`tel:${PHONE_JATIN}`} className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-black transition-all duration-500 flex flex-col justify-between h-48 shadow-sm hover:shadow-2xl">
                  <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">📞</span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Project Director</p>
                    <p className="text-lg font-black text-slate-900 group-hover:text-white transition-colors">{PHONE_JATIN}</p>
                  </div>
                </a>
                <a href={`tel:${PHONE_DHIRAJ}`} className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-black transition-all duration-500 flex flex-col justify-between h-48 shadow-sm hover:shadow-2xl">
                  <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">⚙️</span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Technical Ops</p>
                    <p className="text-lg font-black text-slate-900 group-hover:text-white transition-colors">{PHONE_DHIRAJ}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Operational Hub</h2>
              <div className="space-y-4">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="block p-10 bg-black text-white rounded-3xl border border-white/5 hover:border-[#BE1E2D]/50 transition-all group shadow-2xl overflow-hidden relative">
                  <div className="absolute -bottom-10 -right-10 text-9xl font-black text-white/5 italic select-none">MAIL</div>
                  <div className="relative z-10 flex items-center gap-8">
                    <div className="w-14 h-14 bg-[#BE1E2D] rounded-xl flex items-center justify-center text-2xl shadow-xl group-hover:rotate-6 transition-transform">✉️</div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Corporate Channel</p>
                      <p className="text-xl font-black tracking-tight group-hover:text-[#BE1E2D] transition-colors">{EMAIL_ADDRESS}</p>
                    </div>
                  </div>
                </a>

                <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden group shadow-sm">
                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl shadow-xl">📍</div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Industrial HQ</p>
                      <address className="text-xl font-black leading-snug not-italic text-slate-800 uppercase tracking-tighter italic">
                        {ADDRESS}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Badge */}
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#BE1E2D] italic">
              <div className="flex items-center gap-4 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#BE1E2D] animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Standard Response Protocol</span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Technical queries are processed within <span className="text-slate-900 font-bold">120 minutes</span> during operational hours (09:00 - 20:00 IST).
              </p>
            </div>

            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-video relative group bg-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.828551733224!2d76.97556107528216!3d28.45465717576288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzE2LjgiTiA3Niw1OCc0MS4zIkU!5e0!3m2!1sen!2sin!4v1715870000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="DRG Power Location Map"
                className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 brightness-90 group-hover:brightness-100"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <p className="text-[8px] font-black text-white uppercase tracking-widest">Global Deployment Hub</p>
              </div>
            </div>
          </div>

          {/* Right: Project Intake Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-16 lg:p-20 rounded-[3rem] shadow-2xl border border-slate-100 sticky top-32">
              <div className="mb-12">
                 <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-black uppercase italic leading-none">
                  Project <span className="text-[#BE1E2D]">Intake.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium italic">Define your energy targets to receive a custom technical proposal.</p>
              </div>

              {showSuccess ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-red-50 text-[#BE1E2D] rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner border border-red-100">✓</div>
                  <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tighter italic">Signal Transmitted</h3>
                  <p className="text-lg text-slate-500 font-medium italic">Connecting with project desk...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 group/form">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Identity</label>
                      <input
                        id="name"
                        required
                        type="text"
                        autoComplete="name"
                        className="peer w-full bg-slate-50 border-b-2 border-slate-100 rounded-t-xl px-5 py-5 text-black font-black outline-none focus:border-[#BE1E2D] focus:bg-white focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-lg invalid:border-red-500/50"
                        placeholder="Lead Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Terminal</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        pattern="[0-9+ ]{10,15}"
                        autoComplete="tel"
                        className="peer w-full bg-slate-50 border-b-2 border-slate-100 rounded-t-xl px-5 py-5 text-black font-black outline-none focus:border-[#BE1E2D] focus:bg-white focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-lg invalid:border-red-500/50"
                        placeholder="+91 Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Location</label>
                      <input
                        id="city"
                        required
                        type="text"
                        className="peer w-full bg-slate-50 border-b-2 border-slate-100 rounded-t-xl px-5 py-5 text-black font-black outline-none focus:border-[#BE1E2D] focus:bg-white focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-lg invalid:border-red-500/50"
                        placeholder="City / Region"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="requirement" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Domain</label>
                      <div className="relative">
                        <select 
                          id="requirement"
                          className="w-full bg-slate-50 border-b-2 border-slate-100 rounded-t-xl px-5 py-5 text-black font-black outline-none focus:border-[#BE1E2D] focus:bg-white focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-lg cursor-pointer appearance-none"
                          value={formData.requirement}
                          onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                        >
                          <option value="Residential">Residential Asset</option>
                          <option value="Commercial">Commercial Grid</option>
                          <option value="Industrial">Industrial Plant</option>
                          <option value="Society">Housing Society</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#BE1E2D]">▼</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Project Particulars</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="peer w-full bg-slate-50 border-b-2 border-slate-100 rounded-t-xl px-5 py-5 text-black font-black outline-none focus:border-[#BE1E2D] focus:bg-white focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-lg resize-none invalid:border-red-500/50"
                      placeholder="e.g., Monthly consumption units or plant size target..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-6 relative">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-6 rounded-2xl text-white font-black text-xl shadow-2xl transition-all duration-200 uppercase tracking-[0.4em] overflow-hidden ${
                        isSubmitting 
                          ? 'bg-slate-400 cursor-not-allowed scale-[0.98]' 
                          : 'bg-black hover:bg-[#BE1E2D] active:scale-95 active:bg-[#8b1520] active:shadow-inner active:shadow-black/40 hover:shadow-red-900/20'
                      }`}
                    >
                      {isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" />
                      )}
                      <span className="relative z-10 flex items-center justify-center gap-6">
                        {isSubmitting ? 'Uplinking...' : 'Transmit Data'}
                        {!isSubmitting && <span className="text-2xl group-hover/form:translate-x-2 transition-transform duration-300">→</span>}
                      </span>
                    </button>
                    <p className="text-[8px] text-center text-slate-400 mt-6 font-bold uppercase tracking-widest">By transmitting, you initiate a secure project evaluation protocol.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-50">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">🛡️</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em]">Secure Audits</p>
            </div>
            <div className="h-px w-20 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">⚙️</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em]">Expert Engineering</p>
            </div>
            <div className="h-px w-20 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4">🤝</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em]">Group Integrity</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Contact;

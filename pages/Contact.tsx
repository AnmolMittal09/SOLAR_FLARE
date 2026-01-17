
import React, { useState } from 'react';
import { PHONE_JATIN, PHONE_DHIRAJ, EMAIL_ADDRESS, ADDRESS, BRAND_NAME, WHATSAPP_LINK, GOOGLE_MAPS_URL } from '../constants';
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
    <div className="bg-[#050505] min-h-screen text-white">
      <SEO 
        title="Project Command Center" 
        description="Direct terminal for Solar Flare technical audits. Connect with our engineering leads for high-performance solar infrastructure."
      />
      
      <section className="pt-56 md:pt-64 lg:pt-80 pb-16 md:pb-24 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Strategic Leads & Info */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-[#BE1E2D] mb-3 md:mb-4">Direct Contact</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                Connect With <br className="hidden sm:block" /> <span className="text-[#BE1E2D]">Our Team.</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 text-center lg:text-left">Strategic Leads</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`tel:+91${PHONE_JATIN}`} className="group p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:bg-black transition-all duration-500 flex flex-col justify-between h-40 md:h-48 shadow-sm hover:shadow-2xl">
                  <span className="text-xl md:text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">📞</span>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Project Director</p>
                    <p className="text-base md:text-lg font-black text-white transition-colors">{PHONE_JATIN}</p>
                  </div>
                </a>
                <a href={`tel:+91${PHONE_DHIRAJ}`} className="group p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:bg-black transition-all duration-500 flex flex-col justify-between h-40 md:h-48 shadow-sm hover:shadow-2xl">
                  <span className="text-xl md:text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">⚙️</span>
                  <div>
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Technical Ops</p>
                    <p className="text-base md:text-lg font-black text-white transition-colors">{PHONE_DHIRAJ}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 text-center lg:text-left">Operational Hub</h2>
              <div className="space-y-4">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="block p-6 md:p-10 bg-black text-white rounded-[2rem] border border-white/5 hover:border-[#BE1E2D]/50 transition-all group shadow-2xl overflow-hidden relative">
                  <div className="absolute -bottom-6 -right-6 text-6xl md:text-9xl font-black text-white/5 italic select-none pointer-events-none">MAIL</div>
                  <div className="relative z-10 flex items-center gap-6 md:gap-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#BE1E2D] rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-xl group-hover:rotate-6 transition-transform shrink-0">✉️</div>
                    <div className="min-w-0">
                      <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Corporate Channel</p>
                      <p className="text-sm sm:text-lg md:text-xl font-black tracking-tight group-hover:text-[#BE1E2D] transition-colors truncate">{EMAIL_ADDRESS}</p>
                    </div>
                  </div>
                </a>

                <div className="p-6 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] relative overflow-hidden group shadow-sm">
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-black rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-xl shrink-0">📍</div>
                    <div>
                      <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">Industrial HQ</p>
                      <address className="text-sm md:text-xl font-black leading-snug not-italic text-white uppercase tracking-tighter italic">
                        {ADDRESS}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Badge */}
            <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border-l-4 border-[#BE1E2D] italic shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-3">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#BE1E2D] animate-pulse"></span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">Standard Response Protocol</span>
              </div>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                Technical queries are processed within <span className="text-white font-bold">120 minutes</span> during operational hours (09:00 - 20:00 IST).
              </p>
            </div>

            {/* Map Frame */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 aspect-video relative group bg-[#111]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.838612185523!2d76.9754911762194!3d28.45435427576295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d176709f6974b%3A0xc3e13d5b00109927!2sDRG%20Power%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739989000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Solar Flare Location Map"
                className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 brightness-50 group-hover:brightness-100"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 pointer-events-none">
                <a 
                  href={GOOGLE_MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#BE1E2D] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl pointer-events-auto transform hover:scale-110 active:scale-95 transition-all"
                >
                  Get Directions →
                </a>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <p className="text-[7px] md:text-[8px] font-black text-white uppercase tracking-widest">Global Deployment Hub</p>
              </div>
            </div>
          </div>

          {/* Right: Project Intake Terminal */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] p-8 sm:p-12 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/5 lg:sticky lg:top-32 transition-all">
              <div className="mb-8 md:mb-12 text-center lg:text-left">
                 <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-3 md:mb-4 tracking-tighter text-white uppercase italic leading-none">
                  Project <span className="text-[#BE1E2D]">Intake.</span>
                </h2>
                <p className="text-base md:text-lg text-slate-500 font-medium italic">Define your energy targets to receive a custom technical proposal.</p>
              </div>

              {showSuccess ? (
                <div className="py-12 md:py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-red-900/20 text-[#BE1E2D] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-2xl md:text-4xl shadow-inner border border-red-900/30">✓</div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 uppercase tracking-tighter italic">Signal Transmitted</h3>
                  <p className="text-base md:text-lg text-slate-500 font-medium italic">Connecting with project desk...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 group/form">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-1.5 md:space-y-2 group">
                      <label htmlFor="name" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Identity</label>
                      <input
                        id="name"
                        required
                        type="text"
                        autoComplete="name"
                        className="peer w-full bg-[#111] border-b-2 border-white/5 rounded-t-xl px-4 md:px-5 py-3 md:py-5 text-white font-black outline-none focus:border-[#BE1E2D] focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-base md:text-lg invalid:border-red-900/50"
                        placeholder="Lead Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2 group">
                      <label htmlFor="phone" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Terminal</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        pattern="[0-9+ ]{10,15}"
                        autoComplete="tel"
                        className="peer w-full bg-[#111] border-b-2 border-white/5 rounded-t-xl px-4 md:px-5 py-3 md:py-5 text-white font-black outline-none focus:border-[#BE1E2D] focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-base md:text-lg invalid:border-red-900/50"
                        placeholder="+91 Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-1.5 md:space-y-2 group">
                      <label htmlFor="city" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Location</label>
                      <input
                        id="city"
                        required
                        type="text"
                        className="peer w-full bg-[#111] border-b-2 border-white/5 rounded-t-xl px-4 md:px-5 py-3 md:py-5 text-white font-black outline-none focus:border-[#BE1E2D] focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-base md:text-lg invalid:border-red-900/50"
                        placeholder="City / Region"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2 group">
                      <label htmlFor="requirement" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Domain</label>
                      <div className="relative">
                        <select 
                          id="requirement"
                          className="w-full bg-[#111] border-b-2 border-white/5 rounded-t-xl px-4 md:px-5 py-3 md:py-5 text-white font-black outline-none focus:border-[#BE1E2D] focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-base md:text-lg cursor-pointer appearance-none"
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

                  <div className="space-y-1.5 md:space-y-2 group">
                    <label htmlFor="message" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1 transition-colors group-focus-within:text-[#BE1E2D]">Project Particulars</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="peer w-full bg-[#111] border-b-2 border-white/5 rounded-t-xl px-4 md:px-5 py-3 md:py-5 text-white font-black outline-none focus:border-[#BE1E2D] focus:bg-[#1a1a1a] focus:ring-4 focus:ring-[#BE1E2D]/5 transition-all uppercase tracking-tighter text-base md:text-lg resize-none invalid:border-red-900/50"
                      placeholder="e.g., Monthly consumption units or plant size target..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-4 md:pt-6 relative">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full py-5 md:py-8 rounded-[2.5rem] font-[1000] text-xl md:text-2xl shadow-[0_25px_60px_rgba(190,30,45,0.35)] transition-all duration-500 uppercase tracking-[0.3em] md:tracking-[0.5em] overflow-hidden group/btn ${
                        isSubmitting 
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed scale-[0.98]' 
                          : 'bg-[#BE1E2D] text-white hover:bg-[#FF8A00] hover:shadow-[0_25px_80px_rgba(255,138,0,0.5)] hover:-translate-y-1.5 active:scale-95'
                      }`}
                    >
                      {isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] -translate-x-full" />
                      )}
                      <span className="relative z-10 flex items-center justify-center gap-4 md:gap-8">
                        {isSubmitting ? 'Uplinking...' : 'Submit Request'}
                        {!isSubmitting && <span className="text-2xl md:text-4xl group-hover/btn:translate-x-3 transition-transform duration-500">→</span>}
                      </span>
                    </button>
                    <p className="text-[7px] md:text-[9px] text-center text-slate-600 mt-6 md:mt-8 font-black uppercase tracking-[0.4em] px-2 opacity-60">Technical Signal Initialization Protocol Alpha-01</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer Section */}
      <section className="bg-black py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</span>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Secure Audits</p>
            </div>
            <div className="h-px w-12 md:w-20 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl mb-3 md:mb-4">⚙️</span>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Expert Engineering</p>
            </div>
            <div className="h-px w-12 md:w-20 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</span>
              <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Group Integrity</p>
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

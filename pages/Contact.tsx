
import React, { useState } from 'react';
import { PHONE_JATIN, PHONE_DHIRAJ, EMAIL_ADDRESS, ADDRESS, WHATSAPP_LINK, GOOGLE_MAPS_URL } from '../constants';
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
    <div className="bg-[#050505] min-h-screen text-white pt-48 pb-24">
      <SEO title="Project Intake Desk" description="Direct communication terminal for Solar Flare technical audits. Connect with our engineering leads." />
      
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[#F97316] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Terminal Support</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none font-heading">
                Connect With <br /><span className="text-[#DC2626]">Solar</span> <span className="text-[#F97316]">Flare.</span>
              </h1>
              <p className="text-xl text-slate-500 mt-8 max-w-lg font-medium italic">Direct technical desk for high-performance solar infrastructure queries.</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <a href={`tel:+91${PHONE_JATIN}`} className="group p-8 glass rounded-sm hover:bg-black transition-all duration-500 flex flex-col justify-between h-48 shadow-sm hover:shadow-2xl hover:border-[#F97316]/30">
                  <span className="text-3xl opacity-40 group-hover:opacity-100 transition-all origin-left grayscale group-hover:grayscale-0">📞</span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-2">PROJECT MANAGER</p>
                    <p className="text-[12px] font-black uppercase tracking-widest text-slate-600 mb-2">JATIN BATHEJA</p>
                    <p className="text-xl font-black text-white font-heading">{PHONE_JATIN}</p>
                  </div>
                </a>
                <a href={`tel:+91${PHONE_DHIRAJ}`} className="group p-8 glass rounded-sm hover:bg-black transition-all duration-500 flex flex-col justify-between h-48 shadow-sm hover:shadow-2xl hover:border-[#F97316]/30">
                  <span className="text-3xl opacity-40 group-hover:opacity-100 transition-all origin-left grayscale group-hover:grayscale-0">⚙️</span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-2">DIRECTOR</p>
                    <p className="text-[12px] font-black uppercase tracking-widest text-slate-600 mb-2">DHIRAJ SANDUJA</p>
                    <p className="text-xl font-black text-white font-heading">{PHONE_DHIRAJ}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="block p-10 bg-black rounded-sm border border-white/10 hover:border-[#F97316]/50 transition-all group shadow-2xl overflow-hidden relative">
                  <div className="absolute -bottom-8 -right-8 text-9xl font-black text-white/5 italic select-none pointer-events-none">MAIL</div>
                  <div className="relative z-10 flex items-center gap-8">
                    <div className="w-14 h-14 bg-[#DC2626] rounded-sm flex items-center justify-center text-2xl shadow-xl group-hover:rotate-12 transition-transform shrink-0">✉️</div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Corporate Signal</p>
                      <p className="text-xl md:text-2xl font-black tracking-tight group-hover:text-[#F97316] transition-colors truncate font-heading">{EMAIL_ADDRESS}</p>
                    </div>
                  </div>
                </a>

                <div className="p-10 glass border border-white/5 rounded-sm relative overflow-hidden group shadow-sm">
                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 bg-white text-black rounded-sm flex items-center justify-center text-2xl shadow-xl shrink-0">📍</div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-2">Industrial Hub</p>
                      <address className="text-xl font-black leading-snug not-italic text-white uppercase tracking-tighter italic font-heading">
                        {ADDRESS}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-3xl border border-white/5 aspect-video relative group bg-black">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.838612185523!2d76.9754911762194!3d28.45435427576295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d176709f6974b%3A0xc3e13d5b00109927!2sDRG%20Power%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739989000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Location Map"
                className="grayscale contrast-125 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-[#F97316]/10 pointer-events-none"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 pointer-events-none">
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="bg-[#DC2626] text-white px-8 py-4 rounded-sm font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl pointer-events-auto transform hover:scale-110 active:scale-95 transition-all">Get Directions →</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass p-10 md:p-20 rounded-sm shadow-2xl border border-white/5 lg:sticky lg:top-32">
              <div className="mb-16">
                 <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white uppercase italic leading-none font-heading">
                  Project <span className="text-[#F97316]">Intake.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium italic">Define your energy yield targets to receive a custom proposal.</p>
              </div>

              {showSuccess ? (
                <div className="py-24 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-orange-900/20 text-[#F97316] rounded-full flex items-center justify-center mx-auto mb-10 text-5xl shadow-inner border border-orange-900/30">✓</div>
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic font-heading">Transmission Successful</h3>
                  <p className="text-xl text-slate-500 font-medium italic">Connecting with project desk...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Identity</label>
                      <input required type="text" className="w-full bg-black/40 border-b border-white/10 px-0 py-5 text-white font-black outline-none focus:border-[#F97316] transition-all uppercase tracking-tighter text-xl font-heading" placeholder="Lead Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Terminal</label>
                      <input required type="tel" className="w-full bg-black/40 border-b border-white/10 px-0 py-5 text-white font-black outline-none focus:border-[#F97316] transition-all uppercase tracking-tighter text-xl font-heading" placeholder="+91 Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Location</label>
                      <input required type="text" className="w-full bg-black/40 border-b border-white/10 px-0 py-5 text-white font-black outline-none focus:border-[#F97316] transition-all uppercase tracking-tighter text-xl font-heading" placeholder="City / Region" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Domain</label>
                      <select className="w-full bg-black/40 border-b border-white/10 px-0 py-5 text-white font-black outline-none focus:border-[#F97316] transition-all uppercase tracking-tighter text-xl font-heading cursor-pointer appearance-none" value={formData.requirement} onChange={(e) => setFormData({...formData, requirement: e.target.value})}>
                        <option value="Residential">Residential Asset</option>
                        <option value="Commercial">Commercial Grid</option>
                        <option value="Industrial">Industrial Plant</option>
                        <option value="Society">Housing Society</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Particulars</label>
                    <textarea rows={4} className="w-full bg-black/40 border-b border-white/10 px-0 py-5 text-white font-black outline-none focus:border-[#F97316] transition-all uppercase tracking-tighter text-xl font-heading resize-none" placeholder="Target load or plant size..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>

                  <div className="pt-8">
                    <button type="submit" disabled={isSubmitting} className={`w-full py-8 rounded-sm font-black text-2xl transition-all duration-500 uppercase tracking-[0.4em] shadow-2xl btn-glow ${isSubmitting ? 'bg-slate-800 text-slate-500' : 'bg-[#DC2626] text-white hover:bg-[#F97316] hover:-translate-y-2 active:scale-95 font-heading'}`}>
                      {isSubmitting ? 'Transmitting...' : 'Submit Request →'}
                    </button>
                    <p className="text-[9px] text-center text-slate-600 mt-10 font-black uppercase tracking-[0.5em] opacity-40">Technical Intake Protocol Alpha-01</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 border-t border-white/5 mt-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-20 hover:opacity-100 transition-opacity duration-1000 grayscale group hover:grayscale-0">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white group-hover:text-[#F97316]">SECURE AUDITS</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white group-hover:text-[#F97316]">EXPERT DESK</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤝</span>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white group-hover:text-[#F97316]">GROUP TRUST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

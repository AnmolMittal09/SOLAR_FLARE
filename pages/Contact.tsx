import React, { useState, useEffect } from 'react';
import { PHONE_JATIN, PHONE_DHIRAJ, EMAIL_ADDRESS, ADDRESS, ICONS, BRAND_NAME } from '../constants';
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
    }, 800);
  };

  return (
    <div className="pt-48 pb-32 bg-white">
      <SEO 
        title="Project Desk" 
        description="Connect with DRG Power senior engineers for residential and commercial solar audits."
      />
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mb-32">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-50 border border-red-100 mb-10">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#BE1E2D] animate-pulse"></span>
            <span className="text-[11px] font-[900] uppercase tracking-[0.4em] text-[#BE1E2D]">Global Service Standard</span>
          </div>
          <h1 className="text-6xl md:text-[9.5rem] font-[900] text-black leading-[0.85] tracking-tighter mb-12 uppercase italic">
            LET'S <span className="text-gradient">CONNECT.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-medium max-w-3xl leading-relaxed italic">
            Your transition to energy autonomy starts with a single high-fidelity technical audit.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-16">
            
            <div className="grid gap-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <a href={`tel:${PHONE_JATIN}`} className="group p-10 bg-slate-900 text-white rounded-sm shadow-3xl hover:bg-black transition-all duration-500 border border-white/5 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-white text-black rounded-sm flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-12 transition-transform">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Director Desk</p>
                    <p className="text-lg font-black group-hover:text-[#BE1E2D] transition-colors">{PHONE_JATIN}</p>
                  </div>
                </a>
                <a href={`tel:${PHONE_DHIRAJ}`} className="group p-10 bg-slate-900 text-white rounded-sm shadow-3xl hover:bg-black transition-all duration-500 border border-white/5 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-white text-black rounded-sm flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-12 transition-transform">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Technical Lead</p>
                    <p className="text-lg font-black group-hover:text-[#BE1E2D] transition-colors">{PHONE_DHIRAJ}</p>
                  </div>
                </a>
              </div>

              <a href={`mailto:${EMAIL_ADDRESS}`} className="group p-12 bg-white rounded-sm border border-slate-100 shadow-3xl hover:border-[#BE1E2D]/30 transition-all duration-500 flex items-start gap-10">
                <div className="w-16 h-16 bg-black text-white rounded-sm flex items-center justify-center shrink-0 shadow-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <span className="text-3xl">✉️</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Corporate Channel</p>
                  <p className="text-2xl font-black text-black group-hover:text-[#BE1E2D] transition-colors break-all leading-none tracking-tighter uppercase italic">{EMAIL_ADDRESS}</p>
                  <p className="text-xs font-bold text-slate-400 mt-3 uppercase tracking-widest">Rapid Response Protocol</p>
                </div>
              </a>

              <div className="p-12 bg-black text-white rounded-sm shadow-3xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10 flex items-start gap-10">
                  <div className="w-16 h-16 bg-white text-black rounded-sm flex items-center justify-center shrink-0 shadow-2xl">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Industrial HQ</p>
                    <address className="text-2xl font-black leading-snug not-italic uppercase tracking-tighter italic">
                      {ADDRESS}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-sm overflow-hidden shadow-3xl border border-slate-100 aspect-square relative group bg-slate-900">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.828551733224!2d76.97556107528216!3d28.45465717576288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzE2LjgiTiA3Niw1OCc0MS4zIkU!5e0!3m2!1sen!2sin!4v1715870000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="DRG Power Location Map"
                className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-16 lg:p-24 rounded-sm shadow-3xl border border-slate-100 sticky top-32">
              <div className="mb-16">
                 <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Direct Transmit</span>
                 <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter text-black italic uppercase italic leading-none">
                  Project <span className="text-gradient">Audit.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium italic">High-fidelity data analysis for your facility's energy future.</p>
              </div>

              {showSuccess ? (
                <div className="py-24 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-32 h-32 bg-red-50 text-[#BE1E2D] rounded-full flex items-center justify-center mx-auto mb-10 text-5xl shadow-inner border border-red-100">
                    ✓
                  </div>
                  <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter italic">Transmission Received</h3>
                  <p className="text-xl text-slate-500 font-medium italic">Establishing priority connection with the project desk...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">Full Identity</label>
                      <input
                        id="name"
                        required
                        type="text"
                        className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-black font-[900] outline-none focus:border-[#BE1E2D] transition-all uppercase tracking-tighter text-lg"
                        placeholder="Project Lead Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">Secure Contact</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-black font-[900] outline-none focus:border-[#BE1E2D] transition-all uppercase tracking-tighter text-lg"
                        placeholder="Phone Terminal"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">Deployment Location</label>
                      <input
                        id="city"
                        required
                        type="text"
                        className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-black font-[900] outline-none focus:border-[#BE1E2D] transition-all uppercase tracking-tighter text-lg"
                        placeholder="Area / City"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="requirement" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">Segment</label>
                      <select 
                        id="requirement"
                        className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-black font-[900] outline-none focus:border-[#BE1E2D] transition-all uppercase tracking-tighter text-lg cursor-pointer appearance-none"
                        value={formData.requirement}
                        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                      >
                        <option value="Residential">Residential Array</option>
                        <option value="Commercial">Commercial Grid</option>
                        <option value="Industrial">Industrial Plant</option>
                        <option value="AMC/Service">Maintenance Loop</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-1">Project Particulars</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-5 text-black font-[900] outline-none focus:border-[#BE1E2D] transition-all uppercase tracking-tighter text-lg resize-none"
                      placeholder="Load specs or energy targets..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-8 rounded-sm text-white font-[900] text-2xl shadow-3xl transition-all active:scale-[0.98] flex items-center justify-center gap-6 uppercase tracking-[0.4em] ${
                        isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-black hover:bg-[#BE1E2D] shadow-red-900/10'
                      }`}
                    >
                      TRANSMIT DATA
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SOLUTIONS, WHATSAPP_LINK, TAGLINE } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

// ==========================================
// 1. HERO SECTION (FOLD 1)
// ==========================================
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center bg-[#020202] overflow-hidden perspective-2000">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#DC2626]/10 blur-[180px] rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#F97316]/10 blur-[180px] rounded-full opacity-60"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.1]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-12 md:pt-48 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-2 md:gap-3 glass px-5 py-2 rounded-sm border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_10px_#F97316]"></span>
              <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">{TAGLINE}</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[8.5rem] font-black text-white leading-[0.85] tracking-tighter uppercase italic font-heading">
              <span className="text-[#DC2626]">SOLAR</span> <br />
              <span className="text-[#F97316]">FLARE.</span> <br />
              <span className="
                font-sans
                italic
                tracking-normal
                [word-spacing:0]
                text-2xl sm:text-5xl md:text-7xl
                block mt-2 text-white/90
              ">
                INDUSTRIAL ASSETS.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed italic border-l-4 border-[#F97316] pl-6 py-2">
              SOLAR FLARE engineers high-octane energy assets. We optimize rooftops with technical precision and Tier-1 hardware modules.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none text-center px-10 md:px-14 py-5 md:py-6 bg-[#DC2626] hover:bg-white hover:text-black text-white text-base md:text-lg font-black rounded-sm transition-all shadow-2xl btn-glow uppercase tracking-widest">
                Get Site Audit
              </a>
              <Link to="/expertise" className="flex-1 sm:flex-none text-center px-10 md:px-14 py-5 md:py-6 glass hover:bg-white/10 text-white text-base md:text-lg font-black rounded-sm border border-white/10 transition-all uppercase tracking-widest backdrop-blur-sm">
                View Tech Specs
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative rounded-sm overflow-hidden shadow-3xl border border-white/10 group aspect-[3/4] transform rotate-3 hover:rotate-0 transition-transform duration-1000 bg-slate-900 preserve-3d">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Array" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-black text-[10px] uppercase tracking-widest text-[#F97316]">Industrial Engineering</p>
                <p className="text-2xl font-black italic uppercase font-heading">Grid Terminal 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. QUICK INTAKE FORM SECTION
// ==========================================
const QuickForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', segment: 'Residential' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Home Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nSegment: ${formData.segment}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <section className="py-12 md:py-16 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto glass rounded-sm p-8 md:p-14 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white leading-none font-heading">Book Your <br /><span className="text-[#F97316]">Audit.</span></h2>
            </div>
            <div className="flex-1 grid md:grid-cols-3 gap-6 w-full">
              <input required type="text" placeholder="Identity" className="w-full bg-black/40 border-b border-white/10 px-4 py-4 font-black outline-none focus:border-[#F97316] uppercase tracking-tighter text-white transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required type="tel" placeholder="Terminal Number" className="w-full bg-black/40 border-b border-white/10 px-4 py-4 font-black outline-none focus:border-[#F97316] uppercase tracking-tighter text-white transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="w-full bg-black/40 border-b border-white/10 px-4 py-4 font-black outline-none focus:border-[#F97316] uppercase tracking-tighter text-white transition-all cursor-pointer" value={formData.segment} onChange={e => setFormData({...formData, segment: e.target.value})}>
                <option value="Residential">Residential Asset</option>
                <option value="Commercial">Commercial Grid</option>
                <option value="Industrial">Industrial Plant</option>
              </select>
            </div>
            <button type="submit" className="lg:w-auto w-full px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-sm hover:bg-[#F97316] hover:text-white transition-all active:scale-95 shadow-xl btn-glow">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. DIFFERENTIATION & USP SECTION
// ==========================================
const WhyChooseUs = () => {
  const protocols = [
    { title: "SOLUTION", desc: "Customized energy blueprints for peak ROI.", icon: "🎯", active: true },
    { title: "SITC", desc: "Supply, Installation & Commissioning precision.", icon: "⚡", active: false },
    { title: "SERVICE", desc: "Maintenance to ensure peak asset output.", icon: "🛡️", active: true },
    { title: "SCREENING", desc: "Advanced shadow mapping and site analysis.", icon: "🔬", active: false },
    { title: "SUPPORT", desc: "Dedicated 24/7 industrial technical assist.", icon: "📞", active: true }
  ];

  return (
    <section className="py-24 md:py-48 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[15rem] md:text-[35rem] font-black text-white opacity-[0.02] tracking-tighter italic font-heading">ENGINEERING</h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 md:mb-40">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic leading-none mb-10 font-heading">
            The <span className="text-[#DC2626]">Industrial</span> Standard.
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-[#DC2626] to-[#F97316] mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Sustainable energy legacies built with 360° precision engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {protocols.map((protocol, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-10 rounded-sm glass border border-white/5 hover:bg-white/5 hover:border-[#F97316]/40 transition-all duration-700 shadow-2xl">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-sm flex items-center justify-center mb-10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                protocol.active ? 'bg-[#F97316] text-white' : 'bg-white/5 text-white/30'
              }`}>
                <span className="text-3xl md:text-4xl">{protocol.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 italic transition-colors group-hover:text-[#F97316] font-heading">
                {protocol.title}
              </h3>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic">
                {protocol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. MAIN HOME PAGE COMPONENT (EXPORT)
// ==========================================
const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#050505]">
      <SEO title="Premium Solar Infrastructure" description="Engineering high-yield solar ecosystems for residential and industrial sectors. SOLAR FLARE certified partners." />
      
      {/* --- Visual Hero Section --- */}
      <Hero />
      
      {/* --- Fast-Lead Generation Form --- */}
      <QuickForm />
      
      {/* --- Core Values & Standards --- */}
      <WhyChooseUs />
      
      {/* --- Technical Solutions Preview --- */}
      <section className="py-24 md:py-40 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-[#F97316] font-black uppercase tracking-[0.5em] text-[30px] mb-6 block">Technical Modalities</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic text-white font-heading">ENERGY  SOLUTIONS.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTIONS.map(sol => (
              <div key={sol.id} className="p-10 md:p-14 glass border border-white/5 rounded-sm hover:bg-white hover:text-black transition-all duration-700 group flex flex-col relative h-full">
                <div className="text-6xl md:text-7xl mb-10 group-hover:scale-110 transition-transform origin-left grayscale group-hover:grayscale-0">{sol.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-6 font-heading">{sol.title}</h3>
                <p className="text-base text-slate-500 font-medium italic mb-10 group-hover:text-slate-700">{sol.desc}</p>
                <div className="space-y-4 mb-16 grow">
                  {sol.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-black">
                      <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full"></span> {b}
                    </div>
                  ))}
                </div>
                <Link to={`/solutions#${sol.id}`} className="absolute bottom-10 right-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#DC2626] group-hover:text-[#F97316] transition-colors flex items-center gap-2">
                  VIEW DETAILS <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Sector Expertise Preview --- */}
      <section className="py-24 md:py-40 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-[#DC2626] font-black uppercase tracking-[0.5em] text-[30px] mb-6 block">Sector Expertise</span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase italic font-heading">PREMIUM  SEGMENTS.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map(s => (
              <div key={s.id} className="glass rounded-sm overflow-hidden shadow-2xl group border border-white/5">
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <img src={s.imageUrl} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-black text-white uppercase italic font-heading">{s.title}</h3>
                </div>
                <div className="p-10">
                  <p className="text-base text-slate-500 font-medium italic mb-8">{s.description}</p>
                  <Link to="/expertise" className="text-[#F97316] font-black uppercase tracking-widest text-[11px] flex items-center gap-3 hover:gap-6 transition-all group-hover:text-white">
                    Explore Technical Specs <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final Page CTA --- */}
      <section className="py-32 md:py-56 bg-[#050505] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F97316]/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.85] mb-16 font-heading">Ignite Your <br /> <span className="text-gradient">AUTONOMY.</span></h2>
          <Link to="/contact" className="inline-block px-14 md:px-20 py-6 md:py-8 bg-[#DC2626] hover:bg-white hover:text-black text-white text-xl md:text-2xl font-black rounded-sm shadow-3xl hover:scale-110 transition-all uppercase tracking-[0.3em] btn-glow">
            Request Flare Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

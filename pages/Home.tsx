
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, BRANDS, WHATSAPP_LINK, TAGLINE } from '../constants.tsx';
import { SEO } from '../components/SEO';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#020202] overflow-hidden perspective-2000">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#BE1E2D]/10 blur-[180px] rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#FF8A00]/10 blur-[180px] rounded-full opacity-60"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse shadow-[0_0_10px_#FF8A00]"></span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.5em]">{TAGLINE}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.9] tracking-tighter uppercase italic">
              FLARING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-[#FF8A00] to-[#ff4d5e]">THE SUN.</span> <br />
              <span className="text-3xl sm:text-5xl md:text-7xl block mt-2 text-white/90">ULTRA YIELD POWER.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed italic border-l-4 border-[#FF8A00] pl-6 py-2">
              SOLAR FLARE delivers high-octane energy assets. We optimize industrial rooftops with thermal precision and Tier-1 hardware.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#BE1E2D] hover:bg-[#FF8A00] text-white text-lg font-black rounded-xl transition-all shadow-2xl hover:-translate-y-1 hover:shadow-[#FF8A00]/40 uppercase tracking-widest">
                Get Site Audit
              </a>
              <Link to="/expertise" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white text-lg font-black rounded-xl border border-white/10 transition-all uppercase tracking-widest backdrop-blur-sm">
                View Tech Specs
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5] transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-slate-900 preserve-3d">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Array" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-black text-xs uppercase tracking-widest text-[#FF8A00]">Flare Series Infrastructure</p>
                <p className="text-2xl font-black italic uppercase">Grid Terminal 01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', segment: 'Residential' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Home Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nSegment: ${formData.segment}`;
    window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <section className="py-12 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-[#0a0a0a] rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/4">
              <h2 className="text-3xl font-black tracking-tighter uppercase italic text-white leading-none">Book Your <br />Technical Audit</h2>
            </div>
            <div className="flex-1 grid md:grid-cols-3 gap-6 w-full">
              <input required type="text" placeholder="Full Name" className="w-full bg-[#111] border-b-2 border-white/10 px-4 py-4 font-black outline-none focus:border-[#FF8A00] uppercase tracking-tighter text-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required type="tel" placeholder="Phone Number" className="w-full bg-[#111] border-b-2 border-white/10 px-4 py-4 font-black outline-none focus:border-[#FF8A00] uppercase tracking-tighter text-white" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <select className="w-full bg-[#111] border-b-2 border-white/10 px-4 py-4 font-black outline-none focus:border-[#FF8A00] uppercase tracking-tighter text-white" value={formData.segment} onChange={e => setFormData({...formData, segment: e.target.value})}>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            <button type="submit" className="lg:w-auto w-full px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#FF8A00] hover:text-white transition-all active:scale-95 shadow-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const protocols = [
    {
      title: "SOLUTION",
      desc: "End-to-end customized solar blueprints for maximum ROI.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      active: true
    },
    {
      title: "SITC",
      desc: "Supply, Installation, Testing & Commissioning with precision.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "SERVICE",
      desc: "Periodic maintenance to ensure peak performance always.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      active: true
    },
    {
      title: "SCREENING",
      desc: "Advanced site analysis and shadow mapping technology.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "POST SUPPORT",
      desc: "Dedicated 24/7 technical assistance after installation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      active: true
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[12rem] md:text-[25rem] lg:text-[35rem] font-black text-white opacity-[0.03] tracking-tighter leading-none whitespace-nowrap italic">
          ENGINEERING!
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic leading-none mb-10">
            Why <span className="text-[#BE1E2D]">SOLAR</span><span className="text-white">FLARE?</span>
          </h2>
          <div className="w-32 md:w-48 h-2 bg-[#BE1E2D] mx-auto mb-12 -mt-6"></div>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed italic">
            We don't just sell panels; we build sustainable energy legacies with a <br className="hidden md:block" />
            360° precision engineering approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
          {protocols.map((protocol, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 hover:bg-[#111] hover:border-[#BE1E2D]/30 transition-all duration-500 shadow-2xl">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 ${
                protocol.active ? 'bg-[#BE1E2D] text-white' : 'bg-[#1a1a1a] text-white/40 group-hover:bg-[#1a1a1a]'
              }`}>
                {protocol.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4 italic transition-colors group-hover:text-[#BE1E2D]">
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

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-[#050505]">
      <SEO title="Premium Solar Infrastructure" description="Engineering high-yield solar ecosystems for residential and industrial sectors. SOLAR FLARE certified partners." />
      <Hero />
      <QuickForm />
      <WhyChooseUs />
      
      {/* Solutions Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#FF8A00] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Technical Modalities</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">Energy Solutions.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTIONS.map(sol => (
              <div key={sol.id} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700 group">
                <div className="text-6xl mb-8">{sol.icon}</div>
                <h3 className="text-2xl font-black uppercase italic mb-4">{sol.title}</h3>
                <p className="text-slate-400 font-medium italic mb-8 group-hover:text-slate-600">{sol.desc}</p>
                <div className="space-y-3">
                  {sol.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900">
                      <span className="w-1.5 h-1.5 bg-[#FF8A00] rounded-full"></span> {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#FF8A00] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Sector Expertise</span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic">Premium Segments.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map(s => (
              <div key={s.id} className="bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-xl group border border-white/5">
                <div className="h-64 relative overflow-hidden">
                  <img src={s.imageUrl} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white uppercase italic">{s.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-500 font-medium italic mb-6">{s.description}</p>
                  <Link to="/expertise" className="text-[#FF8A00] font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:gap-5 transition-all">
                    Explore Technical Specs <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#FF8A00]/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-12">Ignite Your <br /> <span className="text-[#FF8A00]">Solar Autonomy.</span></h2>
          <Link to="/contact" className="inline-block px-16 py-8 bg-[#BE1E2D] hover:bg-[#FF8A00] text-white text-2xl font-black rounded-full shadow-3xl hover:scale-105 transition-all uppercase tracking-[0.2em]">
            Request Flare Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

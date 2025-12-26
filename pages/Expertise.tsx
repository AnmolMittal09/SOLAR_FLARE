
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, ICONS } from '../constants';
import { SEO } from '../components/SEO';

const ExpertiseHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out scale-110 opacity-50 grayscale contrast-125"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1611365892117-00ac5ef4365c?auto=format&fit=crop&q=90&w=1920"
            alt="Advanced Solar Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-2xl px-5 py-2 rounded-full mb-8 border border-red-500/20 shadow-2xl">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#BE1E2D] animate-pulse"></span>
            <span className="text-white text-[11px] font-black uppercase tracking-[0.4em]">Precision Engineering</span>
          </div>

          <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.8] mb-10 tracking-tighter uppercase italic">
            TECHNICAL <br />
            <span className="text-[#BE1E2D]">SOLUTIONS.</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-400 max-w-2xl font-medium leading-relaxed italic">
            From grid-tied synchronization to total off-grid autonomy, we engineer energy assets for every sector.
          </p>
        </div>
      </div>
    </section>
  );
};

const Expertise: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Technical Expertise" 
        description="Comprehensive solar solutions and sector expertise. Detailed breakdown of On-Grid, Off-Grid, and Hybrid systems for Residential, Commercial, and Industrial assets."
      />
      <ExpertiseHero />

      {/* Part 1: System Modalities (Technical Solutions) */}
      <section id="solutions" className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Technical Architecture</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">ENERGY <span className="text-gradient">MODALITIES.</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium italic mt-8">
              Choose the protocol that fits your energy autonomy goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-[#BE1E2D]/20 transition-all group shadow-sm hover:shadow-2xl">
                <div className="text-7xl mb-10 group-hover:scale-110 transition-transform origin-left">{sol.icon}</div>
                <h3 className="text-3xl font-black mb-6 tracking-tight text-slate-900 uppercase italic">{sol.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 italic">{sol.desc}</p>
                <div className="space-y-4">
                  {sol.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <span className="w-1.5 h-1.5 bg-[#BE1E2D] rounded-full"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Sector Domains (Core Services) */}
      <section id="services" className="py-40 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Sector Domains</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">CORE <span className="text-[#BE1E2D]">SERVICES.</span></h2>
          </div>

          <div className="space-y-48">
            {SERVICES.map((s, idx) => (
              <section key={s.id} className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-slate-900 text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-2xl group hover:rotate-12 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-none italic uppercase">{s.title}</h3>
                  <p className="text-2xl text-slate-500 mb-10 leading-relaxed font-medium italic">
                    {s.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 bg-[#BE1E2D] text-white rounded-lg flex items-center justify-center shrink-0">
                          {ICONS.Check}
                        </div>
                        <span className="font-black text-slate-900 text-[10px] uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-6 bg-black text-white px-10 py-6 rounded-xl font-black text-lg hover:bg-[#BE1E2D] transition-all uppercase tracking-widest">
                    Request Audit Desk <span>→</span>
                  </Link>
                </div>
                <div className="lg:w-1/2 relative group">
                  <div className="relative rounded-[3rem] overflow-hidden shadow-3xl">
                    <img 
                      src={s.imageUrl} 
                      alt={s.title} 
                      className="w-full h-[500px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-20 bg-black text-white rounded-[4rem] border border-white/5 relative overflow-hidden group">
            <h2 className="text-4xl lg:text-6xl font-black mb-10 tracking-tighter uppercase italic leading-none">Comprehensive <br />Lifecycle Support.</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Site Audit", desc: "Detailed shadow analysis and technical mapping." },
                { title: "Net Metering", desc: "End-to-end grid liaison and documentation." },
                { title: "Maintenance", desc: "Annual technical health checks and cleaning." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <h4 className="text-lg font-black uppercase mb-3 text-[#BE1E2D] italic">{item.title}</h4>
                  <p className="text-white/50 text-sm font-medium italic">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-block mt-16 bg-[#BE1E2D] text-white px-16 py-7 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-3xl uppercase tracking-widest">
              Schedule Feasibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

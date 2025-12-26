
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, ICONS } from '../constants';
import { SEO } from '../components/SEO';

const ServicesHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-black perspective-2000">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out scale-110"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})` }}
        >
          <img
            src="https://images.unsplash.com/photo-1611365892117-00ac5ef4365c?auto=format&fit=crop&q=90&w=1920"
            alt="Advanced Solar Technology"
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(190,30,45,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-48">
        <div className="max-w-5xl preserve-3d">
          <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-2xl px-5 py-2 rounded-full mb-10 border border-red-500/20 shadow-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#BE1E2D] animate-pulse"></span>
            <span className="text-white text-[11px] font-black uppercase tracking-[0.4em]">Engineering Spectrum</span>
          </div>

          <h1 className="text-6xl md:text-[9rem] font-[900] text-white leading-[0.8] mb-12 tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000 uppercase italic">
            FUTURE <br />
            <span className="text-gradient">ASSETS.</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-400 max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 leading-relaxed italic">
            Delivering high-performance energy infrastructure across India. From residential rooftops to massive industrial plants.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block animate-float">
        <div className="bg-black/60 backdrop-blur-xl p-10 rounded-sm border border-white/10 shadow-3xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#BE1E2D] rounded-sm flex items-center justify-center text-white text-3xl shadow-2xl">
              ⚡
            </div>
            <div>
              <p className="text-white font-black text-lg tracking-tighter uppercase italic">99.9% Uptime</p>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Industrial Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => (
  <section className="py-40 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Core Expertise</span>
        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase italic leading-none text-slate-900">ENERGY <span className="text-[#BE1E2D]">SOLUTIONS.</span></h2>
        <p className="text-xl text-slate-500 mt-6 max-w-2xl mx-auto font-medium italic">We engineer grid-connected, battery-backed, and completely autonomous solar setups.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {SOLUTIONS.map((sol, i) => (
          <div key={sol.id} className="bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100 hover:border-[#BE1E2D]/20 transition-all duration-500 group">
            <div className="text-6xl mb-10 group-hover:scale-110 transition-transform origin-left">{sol.icon}</div>
            <h3 className="text-3xl font-black mb-6 tracking-tight text-slate-900 uppercase italic">{sol.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-10 italic">{sol.desc}</p>
            <div className="space-y-4">
              {sol.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
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
);

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Technical Solutions" 
        description="Comprehensive solar solutions for Residential, Commercial, and Industrial sectors. Tier-1 modules and smart grid synchronization."
      />
      <ServicesHero />

      <SolutionsSection />
      
      <div className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-48">
            <div className="text-center mb-12">
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Sector Expertise</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase italic leading-none text-slate-900">CORE <span className="text-[#BE1E2D]">SERVICES.</span></h2>
            </div>
            {SERVICES.map((s, idx) => (
              <section key={s.id} className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-slate-900 text-white w-24 h-24 rounded-sm flex items-center justify-center mb-12 shadow-2xl group hover:rotate-12 transition-transform">
                    {s.icon}
                  </div>
                  <h2 className="text-5xl lg:text-[5.5rem] font-black mb-10 tracking-tighter leading-none italic uppercase">{s.title}</h2>
                  <p className="text-2xl text-slate-500 mb-12 leading-relaxed font-medium italic">
                    {s.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-6 bg-slate-50 p-6 rounded-sm border border-slate-100 hover:border-red-200 hover:bg-white transition-all duration-300">
                        <div className="w-10 h-10 bg-[#BE1E2D] text-white rounded-sm flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          {ICONS.Check}
                        </div>
                        <span className="font-black text-slate-900 text-xs uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-6 bg-black text-white px-14 py-7 rounded-sm font-black text-xl hover:bg-[#BE1E2D] transition-all shadow-3xl active:scale-95 group uppercase tracking-widest">
                    Request Sector Audit
                    <span className="group-hover:translate-x-2 transition-transform">{ICONS.ChevronRight}</span>
                  </Link>
                </div>
                <div className="lg:w-1/2 relative group">
                  <div className="absolute -inset-10 bg-red-600/5 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative rounded-sm overflow-hidden shadow-3xl border border-slate-100">
                    <img 
                      src={s.imageUrl} 
                      alt={s.title} 
                      className="w-full h-[450px] lg:h-[700px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-64 border-t border-slate-100 pt-40">
            <div className="text-center mb-32">
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Legacy Service</span>
              <h2 className="text-5xl lg:text-9xl font-black tracking-tighter italic uppercase italic leading-none">BEYOND <br /><span className="text-gradient">SUPPORT.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Annual Operations", desc: "Technical health-checks and terminal stress testing to ensure peaking at 100% capacity.", icon: "🛠️" },
                { title: "Energy Consulting", desc: "Strategic advisory on net-metering policies and large-scale technical feasibility.", icon: "🧠" },
                { title: "Infrastructure Retrofit", desc: "Upgrading legacy solar plants with high-density N-Type bifacial modules.", icon: "🔄" }
              ].map((service, i) => (
                <section key={i} className="bg-slate-50 p-16 rounded-sm border border-slate-100 hover:bg-white hover:shadow-3xl transition-all duration-500 group">
                  <div className="text-6xl mb-12 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                  <h3 className="text-2xl font-black mb-6 tracking-tighter text-slate-900 uppercase leading-none">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-base italic">{service.desc}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

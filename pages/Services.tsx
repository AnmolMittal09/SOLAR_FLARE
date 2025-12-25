
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, ICONS } from '../constants';
import { SEO } from '../components/SEO';

const ServicesHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] lg:h-[80vh] flex items-center overflow-hidden bg-slate-950 perspective-2000">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out scale-110"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})` }}
        >
          <img
            src="https://images.unsplash.com/photo-1611365892117-00ac5ef4365c?auto=format&fit=crop&q=90&w=1920"
            alt="Advanced Solar Photovoltaic Systems Engineered by DRG Power"
            className="w-full h-full object-cover opacity-50 grayscale-[10%]"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(22,163,74,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 lg:pt-48">
        <div className="max-w-4xl preserve-3d">
          <div 
            className="inline-flex items-center gap-3 bg-green-600/10 backdrop-blur-2xl px-4 py-2 rounded-full mb-6 border border-green-500/20 shadow-2xl animate-in fade-in slide-in-from-left-8 duration-1000"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Technical Specs</span>
          </div>

          <h1 
            className="text-5xl md:text-8xl font-[900] text-white leading-tight mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000"
          >
            FUTURE <br />
            <span className="text-gradient">SOLUTIONS.</span>
          </h1>

          <p 
            className="text-lg md:text-2xl text-slate-300 max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200"
          >
            Engineering the next generation of energy infrastructure with Tier-1 solar technology and resilient mounting systems.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block animate-float">
        <div className="glass p-6 rounded-3xl border border-white/20 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
              ⚡
            </div>
            <div>
              <p className="text-white font-black text-sm">99.9% Uptime</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Guaranteed Backup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Services" 
        description="Comprehensive solar solutions including residential rooftop, housing complex systems, and commercial industrial solar plants in Haryana. Tier-1 modules and smart grid integration."
      />
      <ServicesHero />
      
      <div className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {SERVICES.map((s, idx) => (
              <section key={s.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-green-50 text-green-600 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner">
                    {s.icon}
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter leading-none">{s.title}</h2>
                  <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                    {s.description} Our {s.title.toLowerCase()} systems are designed to maximize solar harvesting even in the high-density urban corridors of Haryana.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-green-200 hover:bg-white transition-all duration-300">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          {ICONS.Check}
                        </div>
                        <span className="font-bold text-slate-800 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl active:scale-95 group">
                    Request Full Proposal
                    <span className="group-hover:translate-x-2 transition-transform">{ICONS.ChevronRight}</span>
                  </Link>
                </div>
                <div className="lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-green-600 rounded-[3rem] translate-x-6 translate-y-6 -z-10 opacity-5 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={s.imageUrl} 
                      alt={`Premium solar energy installation for ${s.title}`} 
                      className="w-full h-[400px] lg:h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" 
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase">BEYOND <span className="text-gradient">INSTALLATION.</span></h2>
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mt-4">Lifetime partnership for energy efficiency</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Annual Maintenance", 
                  desc: "Comprehensive panel cleaning, terminal health checks, and inverter stress testing to ensure peaking at 100% capacity.",
                  icon: "🛠️"
                },
                { 
                  title: "Solar Consulting", 
                  desc: "Strategic advisory on Haryana's latest net-metering policies, subsidy eligibility, and technical feasibility reports.",
                  icon: "🧠"
                },
                { 
                  title: "System Retrofitting", 
                  desc: "Breathe life into old solar plants with N-Type Bifacial panels and micro-inverter upgrades for better shade tolerance.",
                  icon: "🔄"
                }
              ].map((service, i) => (
                <section key={i} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{service.desc}</p>
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

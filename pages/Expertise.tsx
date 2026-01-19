
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, ICONS } from '../constants';
import { SEO } from '../components/SEO';

// ==========================================
// 1. EXPERTISE PAGE HERO
// ==========================================
const ExpertiseHero = () => (
  <section className="relative min-h-[70vh] flex flex-col justify-center bg-[#020202] overflow-hidden pt-32 md:pt-48">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.1]"></div>
      <div className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] bg-[#F97316]/5 blur-[200px] rounded-full"></div>
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="max-w-6xl">
        <div className="inline-flex items-center gap-3 glass px-5 py-2 rounded-sm border border-white/5 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
          <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em]">TECHNICAL DOMAIN</span>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic font-heading mb-12">
          PRECISION <br />
          <span className="text-[#F97316]">FLARE.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-slate-400 max-w-3xl font-medium leading-relaxed italic border-l-4 border-[#DC2626] pl-8 py-2">
          SOLAR FLARE integrates world-class hardware with proprietary engineering logic to deliver assets that outperform the grid.
        </p>
      </div>
    </div>
  </section>
);

// ==========================================
// 2. ENHANCED SYSTEM PROTOCOLS
// ==========================================
const SystemProtocols = () => (
  <section id="solutions" className="py-24 md:py-48 bg-[#050505]">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 md:mb-40">
        <div className="max-w-2xl">
          <span className="text-[#F97316] font-black uppercase tracking-[0.7em] text-[10px] mb-8 block">Energy Modalities</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-white font-heading leading-none">SYSTEM <br />PROTOCOLS.</h2>
        </div>
        <p className="text-lg text-slate-500 font-medium italic lg:max-w-sm">Architectural blueprints for on-grid, off-grid, and high-performance hybrid infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {SOLUTIONS.map((sol) => (
          <div key={sol.id} className="group relative glass p-10 md:p-16 rounded-sm border border-white/5 hover:border-[#F97316]/40 transition-all duration-700 shadow-3xl bg-[#080808]/50 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5 text-8xl font-black italic select-none pointer-events-none group-hover:text-white/10 transition-colors">
              {sol.id.split('-')[0].toUpperCase()}
            </div>
            
            <div className="text-6xl md:text-8xl mb-12 group-hover:scale-110 group-hover:-rotate-3 transition-transform origin-left grayscale group-hover:grayscale-0 relative z-10">
              {sol.icon}
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight text-white uppercase italic font-heading relative z-10 leading-none">
              {sol.title}
            </h3>
            
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-12 italic relative z-10 group-hover:text-slate-300 transition-colors">
              {sol.desc}
            </p>
            
            <div className="space-y-5 relative z-10">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">Technical Gains</p>
              {sol.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-600 group-hover:text-white transition-all">
                  <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
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

// ==========================================
// 3. ENHANCED SECTOR DOMAINS
// ==========================================
const SectorDomains = () => (
  <section id="services" className="py-24 md:py-48 bg-black border-y border-white/5 relative">
    <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-24 md:mb-48">
        <span className="text-[#DC2626] font-black uppercase tracking-[0.7em] text-[10px] mb-8 block">Sector Domains</span>
        <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase italic text-white font-heading leading-none">CORE <span className="text-[#DC2626]">ASSETS.</span></h2>
      </div>

      <div className="space-y-48 md:space-y-64">
        {SERVICES.map((s, idx) => (
          <section key={s.id} className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-sm mb-12 group hover:bg-white hover:text-black transition-all">
                <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  {s.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Asset Class: {s.id}</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl lg:text-9xl font-black mb-12 tracking-tighter leading-[0.85] italic uppercase text-white font-heading">
                {s.title.split(' ')[0]} <br />
                <span className="text-[#F97316]">{s.title.split(' ')[1]}</span>
              </h3>
              
              <p className="text-xl md:text-3xl text-slate-400 mb-16 leading-relaxed font-medium italic">
                {s.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
                {s.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-5 glass p-6 rounded-sm border border-white/5 group hover:bg-white/5 hover:border-[#F97316]/40 transition-all">
                    <div className="w-10 h-10 bg-[#F97316] text-white rounded-sm flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                      {ICONS.Check}
                    </div>
                    <span className="font-black text-slate-500 group-hover:text-white text-[11px] uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="inline-flex items-center gap-8 bg-[#DC2626] text-white px-14 py-8 rounded-sm font-black text-xl hover:bg-white hover:text-black transition-all uppercase tracking-[0.3em] shadow-3xl btn-glow w-full sm:w-auto justify-center">
                INITIATE AUDIT <span>→</span>
              </Link>
            </div>

            <div className="lg:w-1/2 relative group w-full">
              <div className="absolute -inset-10 bg-[#DC2626]/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-sm overflow-hidden shadow-3xl border border-white/10 transform transition-all duration-1000 group-hover:scale-[1.02] bg-slate-900">
                <img 
                  src={s.imageUrl} 
                  alt={s.title} 
                  className="w-full h-[450px] md:h-[750px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#F97316] mb-2">Technical Rendering</p>
                  <p className="text-3xl font-black italic uppercase font-heading">{s.id.charAt(0).toUpperCase() + s.id.slice(1)} Grid-0{idx + 1}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  </section>
);

// ==========================================
// 4. HARDWARE FIDELITY SECTION
// ==========================================
const HardwareFidelity = () => (
  <section className="py-24 md:py-48 bg-[#050505]">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-24 md:mb-40">
        <span className="text-[#F97316] font-black uppercase tracking-[0.7em] text-[10px] mb-8 block">Hardware Stack</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-white font-heading">THE <span className="text-gradient">COMPONENTS.</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: "🏗️", title: "Heavy Structuring", desc: "Wind-load certified mounting systems made of high-tensile galvanized steel." },
          { icon: "⚡", title: "Smart Inversion", desc: "Dual-MPPT string inverters with real-time cloud diagnostic capabilities." },
          { icon: "🔬", title: "Tier-1 Modules", desc: "Bifacial N-Type solar panels for maximum energy yield in all weather states." }
        ].map((item, i) => (
          <div key={i} className="glass p-12 rounded-sm border border-white/5 group hover:border-[#DC2626]/40 transition-all">
            <div className="text-6xl mb-10 group-hover:scale-110 transition-transform origin-left grayscale group-hover:grayscale-0">{item.icon}</div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6 italic font-heading">{item.title}</h3>
            <p className="text-lg text-slate-500 font-medium italic leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ==========================================
// 5. ENHANCED LIFECYCLE CTA
// ==========================================
const Expertise: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#050505]">
      <SEO title="Technical Expertise" description="Comprehensive solar solutions and sector expertise. High-performance engineering for residential and industrial assets." />

      <ExpertiseHero />
      <SystemProtocols />
      <SectorDomains />
      <HardwareFidelity />

      <section className="py-24 md:py-64 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#DC2626]/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto p-12 md:p-32 glass text-white rounded-sm border border-white/10 relative overflow-hidden group text-center bg-black/40 shadow-3xl">
            <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter uppercase italic leading-[0.8] font-heading">
              Energy <br /><span className="text-gradient">LIFECYCLE.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden mb-20">
              {[
                { title: "Analysis", desc: "Detailed shadow mapping and capacity audit." },
                { title: "Net-metering", desc: "Full documentation and liaison protocol." },
                { title: "Performance", desc: "24/7 technical pulse and annual health." }
              ].map((item, i) => (
                <div key={i} className="p-10 md:p-14 bg-black/80 hover:bg-[#111] transition-all text-left">
                  <span className="text-[#DC2626] font-black text-sm mb-6 block font-heading">STEP 0{i + 1}</span>
                  <h4 className="text-2xl font-black uppercase mb-6 text-white italic font-heading">{item.title}</h4>
                  <p className="text-slate-500 text-base font-medium italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-8 bg-[#DC2626] hover:bg-white hover:text-black text-white text-2xl font-black rounded-sm transition-all shadow-3xl uppercase tracking-[0.3em] btn-glow font-heading">
                REQUEST AUDIT
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-16 py-8 glass border border-white/10 hover:bg-white/10 text-white text-2xl font-black rounded-sm transition-all uppercase tracking-[0.3em] font-heading">
                VIEW ASSETS
              </Link>
            </div>
            
            <p className="text-[10px] text-center text-slate-600 mt-20 font-black uppercase tracking-[0.6em] opacity-40">Industrial Engineering Division // Solar Flare Alpha</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

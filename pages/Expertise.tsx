
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SOLUTIONS, ICONS } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

const Expertise: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 bg-[#050505] pt-[80px]">
      <SEO title="Technical Expertise" description="Comprehensive solar solutions and sector expertise. High-performance engineering for residential and industrial assets." />

      <section id="solutions" className="pt-10 pb-24 md:pb-32 bg-[#050505]">
        <div className="text-center container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic text-white font-heading">
              SYSTEM <span className="text-[#F97316]">PROTOCOLS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} className="glass p-10 md:p-16 rounded-sm border border-white/5 hover:border-[#F97316]/30 transition-all group shadow-2xl relative flex flex-col h-full text-left">
                <div className="text-6xl md:text-8xl mb-12 group-hover:scale-110 transition-transform origin-left grayscale group-hover:grayscale-0">{sol.icon}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white uppercase italic font-heading">{sol.title}</h3>
                <p className="text-base text-slate-500 font-medium leading-relaxed mb-12 italic">{sol.desc}</p>
                <div className="space-y-4 mb-16 grow">
                  {sol.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                      {benefit}
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

      <section id="services" className="py-24 md:py-40 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24 md:mb-40">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic text-white font-heading">SECTOR <span className="text-[#F97316]">DOMAINS.</span></h2>
          </div>

          <div className="space-y-32 md:space-y-48">
            {SERVICES.map((s, idx) => (
              <section key={s.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white text-black w-20 h-20 rounded-sm flex items-center justify-center mb-10 shadow-3xl group hover:rotate-12 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] italic uppercase text-white font-heading">{s.title}</h3>
                  <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed font-medium italic">
                    {s.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 glass p-6 rounded-sm border border-white/5 group hover:border-[#F97316]/40 transition-all">
                        <div className="w-8 h-8 bg-[#F97316] text-white rounded-sm flex items-center justify-center shrink-0 shadow-lg">
                          {ICONS.Check}
                        </div>
                        <span className="font-black text-slate-500 group-hover:text-white text-[10px] uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-6 bg-[#DC2626] text-white px-12 py-6 rounded-sm font-black text-lg hover:bg-white hover:text-black transition-all uppercase tracking-widest shadow-2xl btn-glow w-full sm:w-auto justify-center">
                    Request Audit Desk <span>→</span>
                  </Link>
                </div>
                <div className="lg:w-1/2 relative group w-full">
                  <div className="relative rounded-sm overflow-hidden shadow-3xl border border-white/10 aspect-video md:aspect-auto">
                    <img 
                      src={s.imageUrl} 
                      alt={s.title} 
                      className="w-full h-full md:h-[600px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto p-12 md:p-32 glass text-white rounded-sm border border-white/5 relative overflow-hidden group text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase italic leading-none font-heading">Energy <br /><span className="text-gradient">Lifecycle.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
              {[
                { title: "Technical Audit", desc: "Detailed shadow mapping and capacity analysis." },
                { title: "Net Metering", desc: "Documentation and grid liaison processing." },
                { title: "SLA Support", desc: "Guaranteed uptime and annual health checks." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-sm border border-white/10 hover:border-[#F97316]/30 transition-colors">
                  <h4 className="text-xl font-black uppercase mb-4 text-[#F97316] italic font-heading">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium italic">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-block bg-[#DC2626] hover:bg-white hover:text-black text-white px-16 py-7 rounded-sm font-black text-xl transition-all shadow-3xl uppercase tracking-widest btn-glow">
              Initialize Feasibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;

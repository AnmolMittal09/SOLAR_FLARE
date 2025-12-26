import React from 'react';
import { ICONS, PHONE_PRIMARY } from '../constants';

const StepCard: React.FC<{ number: string; title: string; desc: string; icon: string; delay: string }> = ({ number, title, desc, icon, delay }) => (
  <div className={`group perspective-1000 animate-in fade-in slide-in-from-bottom-12 duration-1000 ${delay}`}>
    <div className="relative bg-white p-12 rounded-sm border border-slate-100 shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-3xl hover:border-[#BE1E2D]/20 h-full flex flex-col">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-black text-white rounded-sm flex items-center justify-center text-3xl font-black border-4 border-white shadow-3xl z-20 group-hover:rotate-12 transition-transform uppercase italic">
        {number}
      </div>
      <div className="text-7xl mb-12 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-3xl font-black mb-6 tracking-tighter text-slate-900 uppercase italic">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed grow text-lg italic">{desc}</p>
      <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-4">
        <span className="w-3 h-3 rounded-full bg-[#BE1E2D] animate-pulse"></span>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Security Protocol Alpha</span>
      </div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { number: "01", title: "Thermal Audit", desc: "Site mapping to measure energy absorption potential and analyze structural wind-load integrity.", icon: "🔍", delay: "delay-100" },
    { number: "02", title: "Technical Mapping", desc: "Proprietary 3D shadow analysis ensuring 100% harvesting potential based on local solar azimuth.", icon: "📐", delay: "delay-200" },
    { number: "03", title: "Liaison Protocol", desc: "Handling net-metering applications and government solar subsidies with the project desk.", icon: "📄", delay: "delay-300" },
    { number: "04", title: "Rapid Deployment", desc: "Certified industrial teams install Tier-1 arrays and wind-certified mounting within 48-72 hours.", icon: "⚡", delay: "delay-400" },
    { number: "05", title: "Smart Integration", desc: "Grid synchronization and safety tests. Transitioning from consumer to autonomous producer.", icon: "🔌", delay: "delay-500" },
    { number: "06", title: "Cloud Pulse", desc: "Live 24/7 technical diagnostics and performance monitoring with dedicated senior lead support.", icon: "📱", delay: "delay-600" }
  ];

  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">The Workflow</span>
          <h1 className="text-6xl lg:text-[9.5rem] font-[900] mb-10 leading-[0.85] tracking-tighter italic uppercase italic">
            ENERGY <span className="text-gradient">AUTONOMY.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium italic">Transparent, engineered, and built for decades of peak industrial performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>

        <div className="mt-48 p-20 lg:p-32 bg-black text-white rounded-sm relative overflow-hidden shadow-3xl group border border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 text-[35rem] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-1/2">GRID</div>
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter italic uppercase italic leading-none">The First <br />Pulse.</h2>
              <p className="text-2xl text-slate-400 font-medium mb-16 leading-relaxed italic">
                Schedule your industrial-grade site audit today. Verified technical advice on your facility's energy potential.
              </p>
              <div className="flex flex-wrap gap-8">
                <a href={`tel:${PHONE_PRIMARY}`} className="bg-[#BE1E2D] text-white px-16 py-8 rounded-sm font-black text-2xl hover:scale-110 transition-all shadow-3xl shadow-red-900/40 uppercase tracking-widest active:scale-95">
                  Book Project Audit
                </a>
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-3xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Installation Technical Pulse"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
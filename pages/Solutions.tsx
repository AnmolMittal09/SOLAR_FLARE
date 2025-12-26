
import React from 'react';
import { SOLUTIONS, ICONS } from '../constants';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <SEO 
        title="Solar Solutions Architecture" 
        description="Detailed technical breakdown of On-Grid, Off-Grid, and Hybrid solar systems. Custom engineered for maximum energy yield."
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Technical Architecture</span>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase italic leading-none">ENERGY <span className="text-gradient">MODALITIES.</span></h1>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium italic mt-8">
            Choosing the right system depends on your grid stability, local regulations, and energy autonomy goals.
          </p>
        </div>

        <div className="space-y-48">
          {SOLUTIONS.map((sol, idx) => (
            <section key={sol.id} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-10">
                <div className="text-8xl">{sol.icon}</div>
                <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none">{sol.title}</h2>
                <p className="text-2xl text-slate-500 leading-relaxed font-medium italic">
                  {sol.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sol.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <div className="w-10 h-10 bg-[#BE1E2D] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                        {ICONS.Check}
                      </div>
                      <span className="font-black text-slate-900 text-xs uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-10 bg-red-600/5 blur-3xl rounded-full opacity-50"></div>
                <div className="relative h-[500px] w-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-3xl flex items-center justify-center p-12">
                   <div className="text-white text-center space-y-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Infrastructure Rendering</p>
                      <div className="text-9xl opacity-20">{sol.icon}</div>
                      <h4 className="text-3xl font-black uppercase tracking-widest">{sol.id.replace('-', ' ')} protocol</h4>
                      <p className="text-white/40 font-medium italic">High-fidelity synchronization enabled</p>
                   </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-48 p-20 bg-black text-white rounded-[4rem] text-center border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase italic">Need a Technical Feasibility?</h2>
          <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto italic">Our senior engineers conduct shadow analysis and structural audits to recommend the optimal modality.</p>
          <a href="#/contact" className="inline-block bg-[#BE1E2D] text-white px-16 py-7 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-3xl uppercase tracking-widest">
            Book Site Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

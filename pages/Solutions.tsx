
import React from 'react';
import { Link } from 'react-router-dom';
import { SOLUTIONS, ICONS } from '../constants.tsx';
import { SEO } from '../components/SEO.tsx';

const Solutions: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#050505] min-h-screen">
      <SEO 
        title="Solar Solutions Architecture" 
        description="Detailed technical breakdown of On-Grid, Off-Grid, and Hybrid solar systems. Custom engineered for maximum energy yield."
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24 md:mb-40">
          <span className="text-[#F97316] font-black uppercase tracking-[0.6em] text-[30px] mb-8 block">Technical Architecture</span>
          <h1 className="text-5xl md:text-[9rem] font-[900] tracking-tighter uppercase italic leading-none text-white font-heading">ENERGY <span className="text-gradient">MODALITIES.</span></h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-medium italic mt-8">
            Choosing the right system depends on your grid stability, local regulations, and energy autonomy goals.
          </p>
        </div>

        <div className="space-y-48 md:space-y-64">
          {SOLUTIONS.map((sol, idx) => (
            <section key={sol.id} id={sol.id} className={`flex flex-col lg:flex-row gap-16 md:gap-24 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="text-7xl md:text-8xl grayscale hover:grayscale-0 transition-all">{sol.icon}</div>
                  <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-white font-heading">{sol.title}</h2>
                </div>
                
                <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium italic">
                  {sol.detailedDesc}
                </p>

                <div className="space-y-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F97316]">Execution Protocol (How it works)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sol.howItWorks.map((step) => (
                      <div key={step.step} className="glass p-6 rounded-sm border border-white/5 group hover:border-[#F97316]/30 transition-all">
                        <div className="text-[#F97316] font-black text-xs mb-2 tracking-widest">STEP {step.step}</div>
                        <h4 className="text-white font-black uppercase tracking-tight mb-2 text-sm">{step.title}</h4>
                        <p className="text-slate-500 text-[10px] leading-relaxed italic">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
                  {sol.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 glass p-6 rounded-sm border border-white/5">
                      <div className="w-10 h-10 bg-[#DC2626] text-white rounded-sm flex items-center justify-center shrink-0 shadow-lg">
                        {ICONS.Check}
                      </div>
                      <span className="font-black text-slate-500 text-[10px] uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative group w-full">
                <div className="absolute -inset-10 bg-red-600/5 blur-3xl rounded-full opacity-50"></div>
                <div className="relative rounded-sm overflow-hidden shadow-3xl border border-white/10 bg-black aspect-video lg:aspect-square flex items-center justify-center">
                   <img 
                     src={sol.imageUrl} 
                     alt={sol.title} 
                     className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-[9px] font-black uppercase tracking-widest text-[#F97316] mb-2">Technical Schematic</p>
                      <h4 className="text-2xl md:text-3xl font-black uppercase tracking-widest italic font-heading">{sol.id.replace('-', ' ')} protocol</h4>
                   </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-48 p-12 md:p-32 glass text-white rounded-sm text-center border border-white/5 relative overflow-hidden group shadow-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-[0.1em] uppercase italic leading-none font-heading">Need a <br /><span className="text-[#F97316]">Technical</span> Feasibility?</h2>
          <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto italic font-medium">Our senior engineers conduct shadow analysis and structural audits to recommend the optimal modality.</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

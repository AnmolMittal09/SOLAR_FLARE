
import React from 'react';
import { BRANDS, PARTNER_BRAND } from '../constants';
import { SEO } from '../components/SEO';

const Brands: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#050505] min-h-screen">
      <SEO 
        title="Hardware Partners & Tier-1 Brands" 
        description={`Solar Flare partners with global leaders like ${PARTNER_BRAND}, Waree, and Jakson to ensure high-performance solar components.`}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Quality Ecosystem</span>
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase italic leading-none text-white">ELITE <span className="text-gradient">HARDWARE.</span></h1>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium italic mt-8">
            Longevity in solar infrastructure is a direct result of component integrity. We partner only with the best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BRANDS.map((brand, i) => (
            <div key={i} className="bg-[#0a0a0a] p-16 rounded-[3rem] shadow-xl border border-white/5 hover:border-[#BE1E2D]/20 transition-all group">
              <div className="mb-10 flex items-center justify-between">
                <span className="bg-[#111] text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full text-slate-600 group-hover:bg-[#BE1E2D]/5 group-hover:text-[#BE1E2D] transition-all">
                  {brand.role}
                </span>
                <div className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center text-slate-600 group-hover:text-[#FF8A00] transition-colors">
                  🛡️
                </div>
              </div>
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">{brand.name}</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed italic mb-8">
                {brand.desc}
              </p>
              <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 italic">Certified Tier-1 Vendor</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none italic text-white">The Flare <span className="text-[#BE1E2D]">Standard.</span></h2>
              <div className="space-y-8">
                 {[
                   { title: "25-Year Performance", desc: "Linear performance warranties guaranteed by our Tier-1 module partners." },
                   { title: "Smart Grid Sync", desc: "High-density inverters ensuring maximum conversion efficiency even in low light." },
                   { title: "Industrial Mounting", desc: "Galvanized structural steel components built to withstand extreme wind loads." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 shrink-0 bg-[#0a0a0a] border border-white/5 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:bg-[#BE1E2D] group-hover:text-white transition-all">
                        {i === 0 ? "📈" : i === 1 ? "⚡" : "🏗️"}
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-white mb-2">{item.title}</h4>
                        <p className="text-slate-500 font-medium italic">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <div className="absolute -inset-10 bg-[#BE1E2D]/5 blur-3xl rounded-full"></div>
              <div className="relative bg-[#0a0a0a] p-20 rounded-[4rem] border border-white/5 shadow-3xl text-white">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BE1E2D] mb-8">Supply Chain Trust</p>
                 <h3 className="text-4xl font-black tracking-tighter uppercase italic mb-8">Direct OEM <br />Channeling.</h3>
                 <p className="text-white/40 text-lg font-medium italic leading-relaxed">
                   By sourcing directly from brand OEMs like {PARTNER_BRAND} and Waree, we eliminate middle-layer costs and ensure 100% authentic hardware with validated serial tracking.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

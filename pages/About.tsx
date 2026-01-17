
import React from 'react';
import { GROUP_NAME, VISION, MISSION, ESTABLISHED_YEAR, GROUP_LEGACY_YEAR, PARTNER_BRAND, LEADERSHIP, CORE_VALUES } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 lg:pt-72 pb-16 md:pb-32 bg-[#050505]">
      <SEO 
        title="Industrial Heritage" 
        description={`SOLAR FLARE, established in ${ESTABLISHED_YEAR}, is an industrial solar energy firm under the umbrella of ${GROUP_NAME}. Partnered with ${PARTNER_BRAND} since ${GROUP_LEGACY_YEAR}.`}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-48">
          <div className="space-y-8 md:space-y-12">
            <div>
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Corporate Foundation</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight text-white leading-[0.9] italic uppercase">The Energy <br /> Umbrella.</h1>
            </div>
            <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-2xl text-slate-400 font-medium leading-relaxed italic">
              <p>
                SOLAR FLARE is a forward-looking solar energy firm under the umbrella of <span className="text-white font-bold">{GROUP_NAME}</span>, dedicated to bringing sustainable, cost-effective solutions to Gurugram and beyond.
              </p>
              <p>
                Since <span className="text-[#BE1E2D] font-bold">{GROUP_LEGACY_YEAR}</span>, our group has proudly partnered with <span className="text-white font-bold">{PARTNER_BRAND}</span>, one of India's leading power solution brands, managing a complete distribution network with professional excellence.
              </p>
            </div>
            <div className="flex gap-10 md:gap-16 pt-4 md:pt-8 border-t border-white/5">
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white italic block">2021</span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">Founded Flare</span>
              </div>
              <div>
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#BE1E2D] italic block">{GROUP_LEGACY_YEAR}</span>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">Group Legacy</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
             <div className="absolute -inset-8 md:-inset-16 bg-red-600/5 blur-[80px] md:blur-[150px] rounded-full opacity-60" />
             <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-3xl border border-white/5 bg-[#0a0a0a]">
               <img 
                 src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-50 hover:brightness-100" 
                 alt="SOLAR FLARE Industrial Context"
               />
             </div>
          </div>
        </div>

        {/* Vision/Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-48">
          <div className="bg-[#111] text-white p-8 sm:p-12 md:p-20 rounded-[2rem] md:rounded-[4rem] shadow-3xl relative overflow-hidden group border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tighter uppercase italic text-[#BE1E2D]">The Mission</h2>
            <p className="text-lg sm:text-xl md:text-3xl text-white/80 font-medium leading-tight italic relative z-10">
              {MISSION}
            </p>
            <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 text-[10rem] md:text-[18rem] font-black text-white/5 select-none pointer-events-none">M</div>
          </div>
          <div className="bg-[#0a0a0a] p-8 sm:p-12 md:p-20 rounded-[2rem] md:rounded-[4rem] shadow-xl relative overflow-hidden group border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tighter uppercase italic text-white">The Vision</h2>
            <p className="text-lg sm:text-xl md:text-3xl text-slate-400 font-medium leading-tight italic relative z-10">
              {VISION}
            </p>
            <div className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-16 text-[10rem] md:text-[18rem] font-black text-white/5 select-none pointer-events-none">V</div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-24 md:mb-48">
          <div className="text-center mb-12 md:mb-24">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Our Leadership</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white italic uppercase">The Technical Core.</h2>
            <p className="text-base md:text-xl text-slate-500 mt-4 md:mt-6 max-w-2xl mx-auto font-medium italic">
              Blending technical expertise with strategic vision toward sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {LEADERSHIP.map((member: any, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl hover:shadow-red-900/5 transition-all group">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mb-8 md:mb-10">
                   <div className="w-20 h-20 md:w-32 md:h-32 bg-[#111] rounded-2xl overflow-hidden shadow-xl group-hover:rotate-3 transition-transform shrink-0 border border-white/10">
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name} 
                          className="w-full h-full object-cover filter brightness-110 group-hover:scale-110 transition-transform duration-700" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-3xl md:text-5xl font-black bg-slate-900">
                          {member.name.charAt(0)}
                        </div>
                      )}
                   </div>
                   <div>
                      <h3 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase leading-none italic">{member.name}</h3>
                      <p className="text-[#BE1E2D] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mt-2 md:mt-4 italic">{member.role}</p>
                   </div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-12 md:mb-24">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6 block">Operational Ethics</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white italic uppercase">Foundation Pillars.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mb-16 md:mb-32">
          {CORE_VALUES.map((v, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 sm:p-10 md:p-14 text-center hover:bg-[#111] transition-all duration-500 group">
              <div className="text-5xl md:text-6xl mb-6 md:mb-10 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="text-[10px] md:text-sm font-black mb-4 md:mb-6 tracking-[0.2em] leading-tight uppercase text-white">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-[10px] md:text-xs italic">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

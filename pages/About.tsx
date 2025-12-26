import React from 'react';
import { COMPANY_NAME, GROUP_NAME, ICONS, VISION, MISSION, ESTABLISHED_YEAR, PARTNERSHIP_YEAR, PARTNER_BRAND, LEADERSHIP, CORE_VALUES } from '../constants';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32">
      <SEO 
        title="Industrial Heritage" 
        description={`DRG Power Technology, established in ${ESTABLISHED_YEAR}, is an industrial solar energy firm under the umbrella of ${GROUP_NAME}. Partnered with ${PARTNER_BRAND} since ${PARTNERSHIP_YEAR}.`}
      />
      <div className="container mx-auto px-6">
        {/* Company Overview Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="reveal">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Corporate Identity</span>
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter italic uppercase">
              DRG Power <br /><span className="text-gradient">Technology.</span>
            </h1>
            <div className="space-y-10 text-xl text-slate-500 font-medium leading-relaxed">
              <p>
                Established in <span className="text-black font-black uppercase tracking-widest text-sm">{ESTABLISHED_YEAR}</span>, <span className="text-black font-black">{COMPANY_NAME}</span> is a dedicated energy infrastructure firm under the umbrella of <span className="text-black font-black">{GROUP_NAME}</span>.
              </p>
              <p>
                We deliver high-yield solar assets to India's most demanding residential and commercial corridors. Our expertise spans from initial thermal auditing to the final synchronization with the smart grid.
              </p>
              <p>
                Since <span className="text-[#BE1E2D] font-black">{PARTNERSHIP_YEAR}</span>, our group has proudly partnered with <span className="text-black font-black">{PARTNER_BRAND}</span>, ensuring our systems are powered by one of India's most trusted energy storage brands.
              </p>
            </div>
            
            <div className="mt-16 flex items-center gap-16 border-t border-slate-100 pt-12">
              <div className="flex flex-col">
                <p className="text-5xl font-[900] text-black tracking-tighter mb-2">{ESTABLISHED_YEAR}</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Inception</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-[900] text-[#BE1E2D] tracking-tighter mb-2">12Y+</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Energy Expertise</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-10 bg-red-600/5 blur-3xl rounded-full opacity-50"></div>
            <div className="relative rounded-sm overflow-hidden border border-slate-100 shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200"
                alt="Solar Technology Overview"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black p-10 rounded-sm shadow-3xl border border-white/10 animate-float hidden lg:block">
              <div className="text-[#BE1E2D] mb-6">{ICONS.Sun}</div>
              <p className="text-3xl font-black text-white leading-none tracking-tighter uppercase italic">PAN-INDIA</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Certified Network</p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-48">
          <div className="text-center mb-24">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Command Centre</span>
            <h2 className="text-6xl font-black tracking-tighter mb-8 italic uppercase italic">Our <span className="text-gradient">Leadership.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className="bg-white p-16 rounded-sm border border-slate-100 shadow-xl hover:bg-slate-50 transition-colors flex flex-col items-center text-center group">
                <div className="w-32 h-32 bg-slate-900 text-white rounded-sm flex items-center justify-center text-5xl mb-10 shadow-2xl group-hover:rotate-12 transition-transform">👤</div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{leader.name}</h3>
                <p className="text-[#BE1E2D] font-black uppercase tracking-widest text-[11px] mb-8">{leader.role}</p>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-48">
          <section className="bg-black text-white p-20 rounded-sm shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 text-[15rem] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-1/2">MISSION</div>
            <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic relative z-10">The Mission</h2>
            <p className="text-2xl text-slate-400 font-medium leading-relaxed relative z-10 italic">
              {MISSION}
            </p>
          </section>
          <section className="bg-[#BE1E2D] text-white p-20 rounded-sm shadow-3xl relative overflow-hidden group shadow-red-900/40">
            <div className="absolute top-0 right-0 text-[15rem] font-black text-black/5 leading-none select-none pointer-events-none -translate-y-1/2">VISION</div>
            <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic relative z-10">The Vision</h2>
            <p className="text-2xl text-white/90 font-medium leading-relaxed relative z-10 italic">
              {VISION}
            </p>
          </section>
        </div>

        {/* Values Section */}
        <div className="text-center mb-24">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Foundation</span>
          <h2 className="text-6xl font-black tracking-tighter mb-8 italic uppercase italic">Core <span className="text-gradient">Principles.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-100 border border-slate-100">
          {CORE_VALUES.map((v, i) => (
            <div key={i} className="bg-white p-12 text-center hover:bg-slate-50 transition-colors group">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="text-xl font-black mb-6 tracking-tighter leading-none uppercase">{v.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
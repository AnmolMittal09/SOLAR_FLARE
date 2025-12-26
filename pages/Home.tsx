
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, SOLUTIONS, BRANDS, ICONS, PHONE_PRIMARY, WHATSAPP_LINK, ESTABLISHED_YEAR, TAGLINE } from '../constants.tsx';
import { SEO } from '../components/SEO';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#050505] overflow-hidden">
      {/* Structural Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(190,30,45,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
        {/* Industrial texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-40 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#BE1E2D] animate-pulse"></span>
                <span className="text-white text-[9px] font-black uppercase tracking-[0.4em]">{TAGLINE}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                ONE SOLAR <br />
                <span className="text-[#BE1E2D]">PARTNER.</span> <br />
                <span className="text-4xl md:text-6xl lg:text-7xl block mt-4 text-white/90">COMPLETE SOLUTIONS.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed italic border-l-4 border-[#BE1E2D] pl-8 py-2">
                DRG Power Technology Private Limited delivers high-performance energy infrastructure with precision engineering. Transforming rooftops into high-yield industrial assets.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#BE1E2D] hover:bg-[#a11a27] text-white text-lg font-black rounded-xl transition-all shadow-[0_20px_50px_-10px_rgba(190,30,45,0.6)] hover:shadow-[0_30px_60px_-15px_rgba(190,30,45,0.8)] hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
              >
                Get A Quote
                <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </a>
              <Link 
                to="/about"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 hover:bg-white/10 text-white text-lg font-black rounded-xl border border-white/10 transition-all uppercase tracking-widest backdrop-blur-sm"
              >
                Why DRG?
              </Link>
            </div>

            <div className="flex gap-16 pt-12 border-t border-white/5">
              <div className="space-y-2">
                <span className="block text-5xl font-black text-white italic tracking-tighter">25+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#BE1E2D]">Years Warranty</span>
              </div>
              <div className="space-y-2">
                <span className="block text-5xl font-black text-white italic tracking-tighter">92k+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#BE1E2D]">Watts Saved</span>
              </div>
            </div>
          </div>

          {/* Right Visual (Cols 8-12) */}
          <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 group aspect-[4/5] bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Solar Array" 
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Efficiency Badge */}
              <div className="absolute top-8 right-8 bg-[#00AEEF]/10 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] text-right shadow-3xl transform hover:scale-105 transition-transform cursor-default">
                <span className="block text-white/60 text-[9px] font-black uppercase tracking-widest mb-1">Grid Efficiency</span>
                <span className="block text-3xl font-black text-[#00AEEF] italic tracking-tighter">99.8%</span>
              </div>
              
              <div className="absolute bottom-12 left-12">
                <p className="text-white font-black text-sm uppercase tracking-[0.2em] italic">Infrastructure Alpha</p>
                <div className="h-1 w-12 bg-[#BE1E2D] mt-2"></div>
              </div>
            </div>
            
            {/* Ambient Background Blur for depth */}
            <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-[#BE1E2D]/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Trust bar */}
      <div className="bg-black/80 backdrop-blur-2xl border-t border-white/5 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between py-10 gap-8">
            {[
              { icon: "🛡️", label: "Max Security" },
              { icon: "🏅", label: "ISO Certified" },
              { icon: "⚙️", label: "Custom Built" },
              { icon: "⚡", label: "Instant Power" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300 opacity-40 group-hover:opacity-100">{item.icon}</span>
                <span className="text-[10px] font-black text-white/30 group-hover:text-white uppercase tracking-[0.4em] transition-all">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InquirySection = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', segment: 'Residential' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Home Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nSegment: ${formData.segment}`;
    window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative z-30 py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[4rem] border border-slate-100 p-12 lg:p-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-4 uppercase italic">Site <br />Evaluation.</h2>
              <p className="text-slate-500 font-medium leading-relaxed italic">Book a high-fidelity technical audit with our project engineers.</p>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-2/3 grid sm:grid-cols-3 gap-10 w-full">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity</label>
                  <div className="group relative">
                    <span className="cursor-help text-slate-300 hover:text-[#BE1E2D] transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-48 p-3 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-1">
                      Provide your full legal or business name so our engineers can prepare a formalized technical document for your audit.
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </div>
                <input required type="text" className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-5 font-black outline-none focus:border-[#BE1E2D] transition-all text-xl uppercase tracking-tighter" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact Terminal</label>
                <input required type="tel" className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-5 font-black outline-none focus:border-[#BE1E2D] transition-all text-xl uppercase tracking-tighter" placeholder="+91" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <button type="submit" className="bg-black hover:bg-[#BE1E2D] text-white font-black py-6 rounded-2xl transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs self-end">
                Book Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsGrid = () => (
  <section className="py-40 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-32">
        <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">The Tech Stack</span>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">High Efficiency <br /><span className="text-[#BE1E2D]">Solutions.</span></h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {SOLUTIONS.map((sol, i) => (
          <div key={sol.id} className="group p-16 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700 shadow-2xl">
            <div className="text-7xl mb-12 group-hover:scale-110 transition-transform origin-left">{sol.icon}</div>
            <h3 className="text-3xl font-black mb-6 tracking-tight uppercase italic">{sol.title}</h3>
            <p className="text-white/40 group-hover:text-black/60 font-medium leading-relaxed mb-10 italic">{sol.desc}</p>
            <div className="space-y-4">
              {sol.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-[#BE1E2D] rounded-full"></span>
                  {benefit}
                </div>
              ))}
            </div>
            <Link to="/expertise" className="inline-flex items-center gap-4 mt-12 text-[#BE1E2D] font-black uppercase tracking-widest text-xs group-hover:text-black transition-colors">
              Full Specs →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolarBrands = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Hardware Integrity</span>
          <h2 className="text-6xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">Tier-1 <br />Partnerships.</h2>
        </div>
        <p className="text-xl text-slate-400 font-medium italic max-w-sm">We exclusively utilize components from globally recognized leaders in renewable energy.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {BRANDS.map((brand, i) => (
          <div key={i} className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-900 hover:text-white transition-all duration-500">
            <span className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#BE1E2D]">{brand.role}</span>
            <span className="text-2xl font-black tracking-tighter uppercase group-hover:scale-110 transition-transform">{brand.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <Link to="/brands" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#BE1E2D] transition-colors">View All Quality Standards →</Link>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const reasons = [
    { title: "Legacy Reliability", desc: "Built on a decade of Sanduja Enterprises energy expertise and distribution trust.", icon: "💎" },
    { title: "Tier-1 Hardware", desc: "Strategic partnership with Livguard for high-yield technology and robust warranties.", icon: "⚙️" },
    { title: "Project Precision", desc: "End-to-end site evaluation and bespoke engineering for maximum solar harvesting.", icon: "📐" },
    { title: "Local Presence", desc: "Headquartered in Gurugram for rapid response, maintenance, and project liaison.", icon: "📍" }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
           <div className="max-w-3xl">
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Competitive Edge</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85] italic uppercase italic">Why Industry <br /> Leaders Choose Us.</h2>
           </div>
           <p className="text-2xl text-slate-400 font-medium italic max-w-sm mb-4 leading-relaxed">
              We don't just install panels; we engineer long-term energy assets for the next generation.
           </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="group p-14 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-700 shadow-sm hover:shadow-3xl">
              <div className="text-6xl mb-12 group-hover:scale-110 transition-transform origin-left duration-500">{reason.icon}</div>
              <h3 className="text-2xl font-black mb-6 tracking-tight uppercase italic leading-none">{reason.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed italic text-base">
                {reason.desc}
              </p>
              <div className="mt-10 h-1 w-0 group-hover:w-full bg-[#BE1E2D] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Domains = () => (
  <section className="py-32 bg-slate-50/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Our Expertise</span>
        <h2 className="text-6xl font-black tracking-tighter text-slate-900 uppercase italic">Premium Segments.</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {SERVICES.map((s) => (
          <div key={s.id} className="group relative bg-white rounded-[4rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-700">
            <div className="relative h-80 overflow-hidden">
              <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                  {s.icon}
                </div>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">{s.title}</h3>
              </div>
            </div>
            <div className="p-16">
              <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-10 italic">{s.description}</p>
              <div className="flex flex-wrap gap-4 mb-10">
                {s.features.slice(0, 3).map((f, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-6 py-3 rounded-full">{f}</span>
                ))}
              </div>
              <Link to="/expertise" className="text-[#BE1E2D] font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:gap-8 transition-all">
                Project Audit Desk <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="One Solar Partner | Premium Solar Infrastructure" 
        description="Engineering high-yield solar ecosystems for India's leading residential and commercial sectors. Tier-1 certified partners." 
      />
      <Hero />
      <InquirySection />
      
      <WhyChooseUs />

      <SolutionsGrid />

      <SolarBrands />

      <Domains />

      <section className="py-48 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-16 italic uppercase italic leading-[0.85]">
            Ready for <br /> <span className="text-[#BE1E2D]">Solar Autonomy?</span>
          </h2>
          <p className="text-3xl text-white/50 mb-20 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Engineering sustainable rooftops for households and commercial spaces. Book your project audit now.
          </p>
          <Link to="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a11a27] text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-2xl shadow-3xl transition-all active:scale-95">
            Audit Request
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

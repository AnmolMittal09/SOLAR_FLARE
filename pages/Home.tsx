import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, ICONS, PHONE_PRIMARY, BRAND_NAME, TAGLINE, SUB_TAGLINE, WHATSAPP_LINK } from '../constants.tsx';
import { Service } from '../types.ts';
import { SEO } from '../components/SEO';

const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const requestRef = React.useRef<number>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const parallaxY = scrollY * 0.2;
  const rotX = mousePos.y * -3;
  const rotY = mousePos.x * 3;

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black perspective-2000 text-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out scale-110"
          style={{ 
            transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.00005})`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=90&w=1920"
            alt="Solar Grid Background"
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(190,30,45,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 lg:pt-40">
        <div 
          className="max-w-6xl mx-auto preserve-3d transition-transform duration-700 ease-out"
          style={{ 
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0px)` 
          }}
        >
          <div 
            className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-3xl px-6 py-2.5 rounded-full mb-12 border border-red-500/20 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000"
            style={{ transform: `translateZ(50px)` }}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#BE1E2D] animate-pulse shadow-[0_0_15px_rgba(190,30,45,1)]"></span>
            <span className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.4em]">{TAGLINE}</span>
          </div>

          <h1 
            className="text-6xl sm:text-7xl lg:text-[12rem] font-[900] text-white leading-[0.8] mb-14 tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000 uppercase italic"
            style={{ transform: `translateZ(100px)` }}
          >
            POWER <br />
            <span className="text-gradient">FREEDOM.</span>
          </h1>

          <p 
            className="text-lg md:text-2xl text-slate-400 mb-20 leading-relaxed max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200"
            style={{ transform: `translateZ(70px)` }}
          >
            {SUB_TAGLINE} Industrial-grade solar engineering for premium residential and commercial energy autonomy.
          </p>

          <div 
            className="flex flex-col sm:flex-row justify-center items-center gap-8 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300"
            style={{ transform: `translateZ(90px)` }}
          >
            <a 
              href={`tel:${PHONE_PRIMARY}`} 
              className="group relative bg-[#BE1E2D] text-white px-14 py-7 rounded-sm font-black text-xl lg:text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(190,30,45,0.5)] uppercase tracking-widest"
            >
              Call Now
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-14 py-7 rounded-sm font-black text-xl lg:text-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-6 shadow-2xl active:scale-95 uppercase tracking-widest"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 hidden lg:block z-20">
         <div className="container mx-auto px-6 flex justify-between items-end border-t border-white/10 pt-10">
            <div className="flex gap-20">
               <div>
                  <p className="text-white text-3xl font-black tracking-tighter">25Y+</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Warranty</p>
               </div>
               <div>
                  <p className="text-[#BE1E2D] text-3xl font-black tracking-tighter">99.9%</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Efficiency</p>
               </div>
            </div>
            <div className="w-[1px] h-20 bg-gradient-to-b from-red-600 to-transparent animate-pulse"></div>
         </div>
      </div>
    </section>
  );
};

const QuickInquirySection = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', city: '', requirement: 'Residential' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Solar Inquiry Form:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nRequirement: ${formData.requirement}`;
    window.open(`https://wa.me/919211592425?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative z-20 py-24 -mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-black text-white flex flex-col justify-center">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter leading-none italic uppercase">Get Your <br /><span className="text-[#BE1E2D]">Solar Roadmap.</span></h2>
              <p className="text-slate-400 text-xl font-medium mb-12 leading-relaxed">
                Expert analysis of your facility's energy requirements and local subsidy eligibility. Designed for maximum return on investment.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-slate-500 uppercase">
                <span className="w-10 h-[2px] bg-[#BE1E2D]"></span>
                Industrial Grade Consulting
              </div>
            </div>
            <div className="p-12 lg:p-20 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:border-[#BE1E2D] transition-all outline-none font-bold" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Contact</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="Phone" 
                      className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:border-[#BE1E2D] transition-all outline-none font-bold" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Location</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="City" 
                    className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:border-[#BE1E2D] transition-all outline-none font-bold" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Solution Segment</label>
                  <select 
                    className="w-full bg-slate-50 border-b-2 border-slate-100 px-0 py-4 text-slate-900 focus:border-[#BE1E2D] transition-all outline-none font-bold cursor-pointer"
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                  >
                    <option value="Residential">Residential Solar</option>
                    <option value="Commercial">Commercial Solar</option>
                    <option value="Industrial">Industrial Solar</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#BE1E2D] hover:bg-red-800 text-white font-black py-6 rounded-sm transition-all shadow-xl shadow-red-900/20 active:scale-[0.98] mt-4 text-xl uppercase tracking-widest">
                  Transmitting...
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "Industrial Heritage", desc: "Expertise since 2012 as part of the Sanduja Enterprises group. Trust built over decades.", icon: "🏗️" },
    { title: "Tier-1 Hardware", desc: "Exclusively deploying world-class modules and N-Type technology for peak performance.", icon: "💎" },
    { title: "Pan-India Grid", desc: "Engineering solar ecosystems across residential, commercial, and industrial segments nationwide.", icon: "🇮🇳" },
    { title: "24/7 Monitoring", desc: "Proprietary after-sales ecosystem with real-time diagnostics and lifetime technical support.", icon: "⚡" }
  ];

  return (
    <section ref={sectionRef} className="py-40 bg-white overflow-hidden perspective-2000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Core Competencies</span>
          <h2 className="text-6xl lg:text-[10rem] font-[900] tracking-tighter leading-none italic uppercase italic">
            THE <span className="text-gradient">ADVANTAGE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
          {features.map((f, i) => (
            <div 
              key={i}
              className={`bg-white p-16 transition-all duration-1000 ease-out flex flex-col items-center text-center group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-6xl mb-12 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">{f.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase leading-none">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 text-sm">{f.desc}</p>
              <div className="w-12 h-1 bg-red-100 rounded-full group-hover:w-full group-hover:bg-[#BE1E2D] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = React.memo(({ s }: { s: Service }) => (
  <div className="group relative bg-white border border-slate-100 overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-700 hover:shadow-red-900/10">
    <div className="relative h-72 overflow-hidden">
      <img 
        src={s.imageUrl} 
        alt={s.title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 brightness-75 group-hover:brightness-100" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 bg-white text-[#BE1E2D] rounded-xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
          {s.icon}
        </div>
      </div>
    </div>

    <div className="p-12 flex flex-col grow">
      <h3 className="text-3xl font-black mb-6 tracking-tighter text-slate-900 uppercase leading-none">{s.title}</h3>
      <p className="text-slate-500 mb-12 font-medium leading-relaxed grow text-lg">{s.description}</p>
      <Link to="/services" className="inline-flex items-center gap-4 text-[#BE1E2D] font-black text-xs uppercase tracking-[0.3em] group/btn">
        Full Proposal 
        <span className="group-hover/btn:translate-x-3 transition-transform">{ICONS.ChevronRight}</span>
      </Link>
    </div>
  </div>
));

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Premium Solar Infrastructure" 
        description="Engineering high-yield solar ecosystems for the modern industrial corridors of India. Decades of energy legacy." 
      />
      <Hero />
      <QuickInquirySection />

      <WhyChooseSection />
      
      <section className="py-40 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mb-32 text-center lg:text-left">
            <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Domain</span>
            <h2 className="text-6xl lg:text-9xl font-[900] mb-12 tracking-tighter leading-none italic uppercase italic">
              PREMIUM <br />
              <span className="text-gradient">SOLAR.</span>
            </h2>
            <p className="text-slate-500 text-xl lg:text-3xl font-medium leading-relaxed max-w-3xl">
              Engineered solutions for India's most demanding residential and commercial power requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* RE-IMPLEMENTING INSTALLATION PROCESS AS THE 6TH SECTION */}
      <section className="py-40 bg-white overflow-hidden relative border-y border-slate-100">
        <div className="container mx-auto px-6">
           <div className="text-center mb-32">
              <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">The Workflow</span>
              <h2 className="text-6xl lg:text-9xl font-black tracking-tighter mb-10 italic uppercase italic leading-none">
                HOW IT <span className="text-gradient">WORKS.</span>
              </h2>
           </div>
           
           <div className="grid md:grid-cols-4 gap-12 relative">
              {[
                { title: "Consultation", desc: "Industrial-grade site evaluation and load mapping.", icon: "🔍" },
                { title: "Engineering", desc: "Tailored solar mapping and structural design.", icon: "📐" },
                { title: "Deployment", desc: "Rapid Tier-1 installation within 48-72 hours.", icon: "⚡" },
                { title: "Synchronization", desc: "Grid-tie coordination and net-metering sync.", icon: "🔌" }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                   <div className="w-24 h-24 bg-black text-white flex items-center justify-center text-4xl font-black rounded-sm mx-auto mb-10 shadow-2xl group-hover:rotate-45 transition-transform duration-500 relative">
                      <span className="group-hover:-rotate-45 transition-transform">{step.icon}</span>
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#BE1E2D] rounded-full flex items-center justify-center text-sm font-black border-2 border-white">{i+1}</div>
                   </div>
                   <h4 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter">{step.title}</h4>
                   <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
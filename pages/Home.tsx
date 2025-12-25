
// Fix: Use namespace import to bypass named export resolution issues in certain environments
import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { SERVICES, TESTIMONIALS, ICONS, PHONE_PRIMARY, BRAND_NAME, TAGLINE } from '../constants';
import { Service } from '../types';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        // Calculate relative mouse position (-1 to 1)
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

  // Parallax and Tilt constants
  const parallaxY = scrollY * 0.25; // Subtle scroll parallax
  const rotX = mousePos.y * -6; // Soft tilt range
  const rotY = mousePos.x * 6;
  const shadowX = mousePos.x * 30;
  const shadowY = mousePos.y * 30;

  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center overflow-hidden bg-slate-950 perspective-2000">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out scale-110 will-change-transform"
          style={{ 
            transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.00008})`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=90&w=2800"
            alt="Premium Solar Installation"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Refined Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/40 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(22,163,74,0.15)_0%,transparent_70%)]"></div>
        
        {/* Sunlight spot that follows mouse subtly */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(800px circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(34, 197, 94, 0.25), transparent 70%)`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 lg:pt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Area with Enhanced 3D Interaction */}
          <div 
            className="lg:col-span-8 preserve-3d transition-transform duration-700 ease-out will-change-transform"
            style={{ 
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0px)` 
            }}
          >
            <div 
              className="inline-flex items-center gap-3 bg-green-600/20 backdrop-blur-3xl px-5 py-2.5 rounded-full mb-10 border border-green-500/30 shadow-[0_0_50px_rgba(22,163,74,0.2)] animate-in fade-in slide-in-from-left-8 duration-1000 will-change-transform"
              style={{ transform: `translateZ(60px)` }}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#16a34a]"></span>
              <span className="text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap">Group of Sanduja Enterprises</span>
            </div>

            <h1 
              className="text-6xl sm:text-7xl lg:text-[11.5rem] font-[900] text-white leading-[0.85] mb-12 tracking-[-0.05em] animate-in fade-in slide-in-from-bottom-12 duration-1000 will-change-transform select-none"
              style={{ 
                transform: `translateZ(120px)`,
                textShadow: `${-shadowX}px ${-shadowY}px 60px rgba(0,0,0,0.8)`
              }}
            >
              SOLAR <br />
              <span className="text-gradient">EVOLUTION.</span>
            </h1>

            <p 
              className="text-lg md:text-3xl text-slate-100 mb-16 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200 will-change-transform"
              style={{ transform: `translateZ(80px)` }}
            >
              {TAGLINE} Industrial-grade solar infrastructure engineered for Haryana's specific climate and grid demands.
            </p>

            <div 
              className="flex flex-col sm:flex-row flex-wrap gap-5 lg:gap-10 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300 will-change-transform"
              style={{ transform: `translateZ(100px)`, transformStyle: 'preserve-3d' }}
            >
              <Link 
                to="/contact" 
                className="group relative bg-green-600 text-white px-10 lg:px-16 py-5 lg:py-7 rounded-[1.8rem] lg:rounded-[2.2rem] text-center font-black text-xl lg:text-2xl overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_40px_80px_-20px_rgba(22,163,74,0.6)] border-t border-white/30"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Get Expert Audit</span>
              </Link>
              <a 
                href={`tel:${PHONE_PRIMARY}`} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 lg:px-16 py-5 lg:py-7 rounded-[1.8rem] lg:rounded-[2.2rem] text-center font-black text-xl lg:text-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-5 shadow-2xl active:scale-95"
              >
                <span className="w-8 h-8 lg:w-11 lg:h-11 bg-green-600/30 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors shadow-lg">📞</span>
                {PHONE_PRIMARY}
              </a>
            </div>
          </div>

          {/* Floating Data Dashboard with Internal Depth */}
          <div className="hidden lg:block lg:col-span-4 perspective-2000 pt-10">
            <div 
              className="glass p-12 rounded-[4rem] shadow-[0_80px_150px_rgba(0,0,0,0.6)] border border-white/20 transition-transform duration-1000 ease-out group overflow-hidden will-change-transform preserve-3d"
              style={{ 
                transform: `rotateX(${rotX * 1.5}deg) rotateY(${rotY * 1.5}deg) translateZ(50px)`,
              }}
            >
              {/* Internal Parallax Element */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full transition-transform duration-700"
                style={{ transform: `translateZ(-20px) translateX(${mousePos.x * -20}px) translateY(${mousePos.y * -20}px)` }}
              ></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {ICONS.Sun}
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Harvest Efficiency</p>
                  <p className="text-green-500 text-4xl font-black">99.2%</p>
                </div>
              </div>
              
              <div className="space-y-8 relative z-10" style={{ transform: 'translateZ(20px)' }}>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-500 shadow-[0_0_20px_#22c55e] animate-pulse"></div>
                </div>
                <div className="flex justify-between text-white/50 text-xs font-black uppercase tracking-widest">
                  <span>Districts Covered</span>
                  <span className="text-white">All 22</span>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-white text-xl font-black mb-2">State-Wide Presence</p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Custom-mapped solar profiles for every specific region in Haryana, from Panchkula to Palwal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-in fade-in duration-1000 delay-1000">
        <span className="text-white text-[9px] font-black uppercase tracking-[0.6em]">Discover</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-green-500 to-transparent"></div>
      </div>
    </section>
  );
};

// Memoized ServiceCard with Image
const ServiceCard = memo(({ s }: { s: Service }) => (
  <div className="group relative bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl shadow-slate-200/50 hover-3d transition-all duration-700 border border-slate-100 flex flex-col h-full perspective-1000 overflow-hidden">
    {/* Image Header */}
    <div className="relative h-64 lg:h-72 overflow-hidden">
      <img 
        src={s.imageUrl} 
        alt={s.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      <div className="absolute bottom-6 left-10">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white text-green-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {s.icon}
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-10 lg:p-14 pt-4 lg:pt-6 flex flex-col grow">
      <h3 className="text-3xl lg:text-4xl font-black mb-6 lg:mb-8 tracking-tighter text-slate-900 leading-none">{s.title}</h3>
      <p className="text-slate-500 mb-10 lg:mb-16 font-medium leading-relaxed grow text-lg lg:text-xl">{s.description}</p>
      
      <div className="space-y-5 mb-12 lg:mb-16">
        {s.features.slice(0, 3).map((f: string, idx: number) => (
          <div key={idx} className="flex items-center gap-5 text-sm font-bold text-slate-800">
            <div className="w-7 h-7 bg-green-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-600/20">
              {ICONS.Check}
            </div>
            {f}
          </div>
        ))}
      </div>
      
      <Link to="/services" className="inline-flex items-center gap-4 text-green-600 font-black text-xs lg:text-sm uppercase tracking-[0.25em] group/btn">
        Full Specifications 
        <span className="group-hover/btn:translate-x-3 transition-transform duration-300">{ICONS.ChevronRight}</span>
      </Link>
    </div>
  </div>
));

const StepCard: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`group relative transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Index Number */}
      <div className="absolute -top-8 -left-4 text-9xl lg:text-[12rem] font-black text-slate-50 leading-none -z-10 transition-colors group-hover:text-green-50/70 select-none">
        0{index + 1}
      </div>

      {/* Step Image with Hover Effect */}
      <div className="relative mb-10 overflow-hidden rounded-[2.5rem] shadow-xl aspect-[4/3] group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={step.img} 
          alt={step.title} 
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <div className="absolute top-6 left-6 text-5xl lg:text-6xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
          {step.icon}
        </div>
      </div>

      {/* Step Text */}
      <div className="px-2">
        <h4 className="text-2xl lg:text-3xl font-black mb-4 lg:mb-6 text-slate-900 tracking-tight flex items-center gap-3">
          <span className="w-1 h-8 bg-green-500 rounded-full"></span>
          {step.title}
        </h4>
        <p className="text-slate-500 font-medium text-base lg:text-lg leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
};

const InstallationProcess = memo(() => {
  const steps = useMemo(() => [
    { 
      title: "Consultation", 
      desc: "Precision site audit and power demand mapping by our technical leads.", 
      icon: "📋",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Design", 
      desc: "Advanced 3D shadow analysis and structural modeling tailored to your roof.", 
      icon: "📐",
      img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Deployment", 
      desc: "Tier-1 installation by certified solar technicians using premium hardware.", 
      icon: "⚡",
      img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Connectivity", 
      desc: "Seamless net-metering and cloud grid integration with local utility hubs.", 
      icon: "🔌",
      img: "https://images.unsplash.com/photo-1558444479-c84750339fd0?auto=format&fit=crop&q=80&w=800"
    }
  ], []);

  return (
    <section className="py-24 lg:py-44 relative overflow-hidden bg-white">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 lg:mb-40">
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 italic uppercase lg:normal-case">
            THE <span className="text-gradient">PROCESS.</span>
          </h2>
          <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] lg:text-xs">
            Four phases to total energy freedom in Haryana
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 lg:py-44 relative bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mb-24 lg:mb-40 text-center lg:text-left">
            <h2 className="text-5xl lg:text-9xl font-[900] mb-8 lg:mb-12 tracking-tighter leading-tight lg:leading-[0.85] uppercase lg:normal-case">
              ENGINEERED FOR <br className="hidden lg:block" />
              <span className="text-gradient">PERFORMANCE.</span>
            </h2>
            <p className="text-slate-500 text-xl lg:text-3xl font-medium leading-relaxed max-w-4xl mx-auto lg:mx-0">
              Specialized power ecosystems designed for Haryana's most sophisticated residential complexes and high-demand commercial enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      <InstallationProcess />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-44 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-[10rem] font-black mb-16 lg:mb-20 tracking-tighter leading-tight lg:leading-[0.8] uppercase lg:normal-case">
                ELITE <br className="hidden lg:block" />
                <span className="text-green-500">TRUST.</span>
              </h2>
              <div className="space-y-10 lg:space-y-14 text-left">
                {[
                  { t: "All Haryana Service", d: "Providing expert sales and support across all 22 districts of the state." },
                  { t: "Precision Mounting", d: "Wind-load optimized structures rated for extreme Haryana weather fronts." },
                  { t: "Full Utility Management", d: "Direct coordination with DHBVN and UHBVN for seamless net-metering." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 lg:gap-12 group">
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-[2.2rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-all duration-500 shadow-2xl">
                      <span className="text-green-500 group-hover:text-white transition-colors">{ICONS.Check}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl lg:text-4xl font-black mb-3 lg:mb-4 tracking-tight">{item.t}</h4>
                      <p className="text-slate-400 font-medium text-lg lg:text-2xl leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative perspective-2000 hidden lg:block">
              <div className="absolute inset-0 bg-green-600/10 blur-[180px] rounded-full"></div>
              <div className="relative rounded-[5rem] overflow-hidden border border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.7)] group hover:rotate-y-12 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1400" 
                  alt="Industrial solar"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-16 left-16">
                  <p className="text-green-500 font-black text-[10px] uppercase tracking-[0.4em] mb-3">Live Installation</p>
                  <p className="text-white text-4xl font-black">IMT Manesar Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-44 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 lg:mb-40">
            <h2 className="text-5xl lg:text-9xl font-[900] tracking-tighter italic leading-none uppercase lg:normal-case">THE <span className="text-gradient">VERDICT.</span></h2>
            <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] lg:text-xs mt-6">Unfiltered feedback from our Haryana project partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-12 lg:p-20 bg-slate-50 rounded-[4rem] relative hover:bg-slate-100 transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-4">
                <div className="absolute top-12 right-12 lg:top-16 lg:right-20 text-slate-200">
                  {ICONS.Quote}
                </div>
                <div className="flex gap-2 mb-10 lg:mb-14">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl lg:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900 italic mb-14 lg:mb-20 leading-[1.5]">"{t.content}"</p>
                <div className="flex items-center gap-6 lg:gap-8">
                  <img src={t.imageUrl} alt={t.name} className="w-16 h-16 lg:w-24 lg:h-24 rounded-[1.8rem] lg:rounded-[2rem] object-cover shadow-2xl border-4 border-white" loading="lazy" decoding="async" />
                  <div>
                    <h5 className="font-black text-slate-900 text-xl lg:text-2xl tracking-tight">{t.name}</h5>
                    <p className="text-[10px] font-black uppercase text-green-600 tracking-[0.3em]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-44 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-950 rounded-[4rem] lg:rounded-[6rem] p-12 lg:p-40 text-white text-center relative overflow-hidden shadow-[0_120px_200px_-50px_rgba(0,0,0,0.8)] border border-white/5">
            <div className="absolute top-0 right-0 w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-green-600/10 blur-[150px] lg:blur-[250px] rounded-full -mr-60 lg:-mr-[450px] -mt-60 lg:-mt-[450px]"></div>
            <h2 className="text-5xl sm:text-7xl lg:text-[11rem] font-[900] mb-12 lg:mb-16 tracking-tighter relative z-10 leading-tight lg:leading-[0.8] uppercase lg:normal-case">
              START THE <br className="hidden lg:block" />
              <span className="text-green-500">SAVING.</span>
            </h2>
            <p className="text-xl lg:text-5xl text-slate-300 mb-14 lg:mb-24 relative z-10 max-w-5xl mx-auto font-medium leading-relaxed">
              DRG Power is scaling up the solar footprint across Haryana. Be part of the state-wide transition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-12 relative z-10">
              <Link to="/contact" className="bg-green-600 text-white px-12 lg:px-24 py-6 lg:py-8 rounded-[2rem] lg:rounded-[3rem] font-black text-2xl lg:text-4xl hover:scale-110 transition-all shadow-3xl shadow-green-600/40 active:scale-95 border-b-8 border-green-800">
                Claim Free Audit
              </Link>
              <a href={`tel:${PHONE_PRIMARY}`} className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-12 lg:px-24 py-6 lg:py-8 rounded-[2rem] lg:rounded-[3rem] font-black text-2xl lg:text-4xl hover:bg-white/10 transition-all active:scale-95 shadow-2xl">
                Chat Live
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

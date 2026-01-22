
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { PROJECTS } from '../constants.tsx';
import { SEO } from '../components/SEO';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Industrial', 'Society', 'Commercial', 'Home'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const galleryImages = [
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/6.avif", title: "Industrial Grid", desc: "Monocrystalline Perc" },
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/7.avif", title: "MWp Power Plant", desc: "High-Efficiency Modules" },
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/8.avif", title: "Smart-Sync Setup", desc: "Cloud Monitoring" },
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/9.avif", title: "Precision QC", desc: "Technical Verification" },
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/10.avif", title: "Structural Load", desc: "Extreme Weather Safety" },
    { url: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/1c0f337ad280347990b009b979a8c1c1223372ff/projects/11.avif", title: "Bifacial Loop", desc: "Dual Generation Tech" }
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO 
        title="Project Portfolio" 
        description="Explore Solar Flare's high-yield solar installation portfolio across India's industrial corridors."
      />

      {/* --- Projects Hero Section --- */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DC2626]/5 blur-[150px] rounded-full opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F97316]/5 blur-[150px] rounded-full opacity-40"></div>
          <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 glass px-6 py-2 rounded-sm border border-white/5 mb-10">
               <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
               <span className="text-white text-[20px] font-black uppercase tracking-[0.5em]">Global Footprint</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter uppercase italic leading-[0.8] text-white font-heading mb-12">
              ENGINEERED <br /> <span className="text-gradient">LEGACIES.</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl font-medium italic leading-relaxed">
              A detailed ledger of utility-scale infrastructure and high-yield deployments across India's industrial manufacturing hubs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 rounded-sm font-black text-[11px] uppercase tracking-[0.4em] transition-all duration-500 ${
                filter === cat 
                  ? 'bg-white text-black shadow-3xl scale-105 border-b-2 border-[#F97316]' 
                  : 'bg-[#111] text-slate-500 hover:text-white hover:bg-[#1a1a1a] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-48">
          {filteredProjects.map((p) => (
            <article key={p.id} className="group relative rounded-sm overflow-hidden shadow-2xl h-[550px] border border-white/5 bg-black">
              {p.videoUrl ? (
                <video 
                  src={p.videoUrl} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster={p.imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90"
                />
              ) : (
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-16 text-white pointer-events-none">
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-[#DC2626] text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-sm shadow-2xl">{p.category}</span>
                  <span className="bg-[#F97316]/20 backdrop-blur-md text-[10px] font-black text-[#F97316] uppercase tracking-[0.3em] px-5 py-2 rounded-sm border border-[#F97316]/20">{p.location}</span>
                  {p.videoUrl && (
                    <span className="bg-white/10 backdrop-blur-md text-[8px] font-black text-white uppercase tracking-[0.3em] px-4 py-1.5 rounded-sm border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse"></span> LIVE REEL
                    </span>
                  )}
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase italic font-heading">{p.title}</h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Infrastructure Capacity</span>
                  <span className="font-[900] text-[#F97316] text-4xl tracking-tighter italic">{p.capacity}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-48">
          <div className="flex items-center gap-8 mb-20">
            <div className="h-[1px] grow bg-white/5"></div>
            <h2 className="text-[21px] font-black uppercase tracking-[0.6em] text-slate-500 shrink-0">Hardware Fidelity</h2>
            <div className="h-[1px] grow bg-white/5"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-sm overflow-hidden shadow-xl hover:shadow-3xl transition-all cursor-crosshair border border-white/5 bg-black">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-white font-black text-xs uppercase mb-3 tracking-tighter italic font-heading">{img.title}</p>
                  <div className="w-8 h-[2px] bg-[#F97316] mb-3"></div>
                  <p className="text-slate-400 font-bold text-[8px] uppercase tracking-widest">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-20 bg-black text-white rounded-sm border border-white/10 shadow-3xl text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          <h2 className="text-5xl font-black mb-6 tracking-[0.1em] italic uppercase italic leading-none font-heading">Verify Infrastructure <br />Quality.</h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed italic">Site visits to operational industrial plants in Gurugram and Manesar can be arranged for enterprise clients.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#DC2626] text-white px-16 py-6 rounded-sm font-black text-xl hover:scale-110 transition-all shadow-3xl shadow-red-900/40 uppercase tracking-widest active:scale-95 btn-glow"
          >
            Request Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;


import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM;
import { PROJECTS } from '../constants.tsx';
import { SEO } from '../components/SEO';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Society', 'Commercial', 'Home'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800", title: "Residential Array", desc: "Monocrystalline Perc Panels" },
    { url: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=800", title: "Industrial Grid", desc: "High-Efficiency 540Wp Modules" },
    { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", title: "Inverter Setup", desc: "Smart Monitoring Systems" },
    { url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&q=80&w=800", title: "Quality Check", desc: "Technical Verification" },
    { url: "https://images.unsplash.com/photo-1509391366360-fe5bb5843e03?auto=format&fit=crop&q=80&w=800", title: "Roof Integrity", desc: "Wind-Resistant Structures" },
    { url: "https://images.unsplash.com/photo-1454165833019-d1d756012971?auto=format&fit=crop&q=80&w=800", title: "Bifacial Tech", desc: "Double-Sided Generation" }
  ];

  return (
    <div className="pt-40 lg:pt-48 pb-24 bg-slate-50/50 min-h-screen">
      <SEO 
        title="Our Projects" 
        description="Explore DRG Power's solar installation portfolio across Haryana, including major society projects in Gurugram, industrial plants in Manesar, and luxury home solar systems."
      />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic">PROVEN <span className="text-gradient">IMPACT.</span></h1>
          <p className="text-lg text-slate-600 font-medium">Browse our portfolio of high-yield installations across Haryana and the NCR region.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                  ? 'bg-slate-900 text-white shadow-xl scale-105' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000 mb-32">
          {filteredProjects.map((p) => (
            <article key={p.id} className="group relative rounded-[2.5rem] overflow-hidden shadow-xl hover-3d transition-all duration-700 h-[450px] border border-white">
              <img src={p.imageUrl} alt={`${p.title} - Solar project in ${p.location}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent flex flex-col justify-end p-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl shadow-lg">{p.category}</span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl border border-white/20">{p.location}</span>
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tighter">{p.title}</h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <span className="text-sm font-bold text-slate-400">Capacity Installed</span>
                  <span className="font-black text-green-400 text-2xl tracking-tighter">{p.capacity}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] grow bg-slate-200"></div>
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-slate-400 shrink-0">Hardware Precision</h2>
            <div className="h-[2px] grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-crosshair">
                <img src={img.url} alt={`Close up of ${img.title} - ${img.desc}`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-white font-black text-xs uppercase mb-1">{img.title}</p>
                  <p className="text-green-500 font-bold text-[8px] uppercase tracking-widest">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-16 bg-white rounded-[3rem] border border-slate-100 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full"></div>
          <h2 className="text-3xl font-black mb-4 tracking-tight">Want to verify our quality?</h2>
          <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">We can arrange site visits to our operational plants in Gurugram, Basai, or Manesar. See the engineering for yourself.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-green-600 transition-all shadow-xl active:scale-95"
          >
            Request Site Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

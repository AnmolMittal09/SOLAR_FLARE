
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useLocation } = ReactRouterDOM;
import { 
  COMPANY_NAME, 
  BRAND_NAME, 
  PHONE_PRIMARY, 
  PHONE_JATIN,
  PHONE_DHIRAJ,
  WHATSAPP_LINK, 
  ADDRESS, 
  EMAIL_ADDRESS,
  LOGO_IMAGE 
} from '../constants';

const Logo: React.FC<{ footer?: boolean }> = ({ footer }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center group cursor-pointer">
      <div className={`relative transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center ${
        footer ? 'h-16 w-16' : 'h-14 w-14'
      }`}>
        <div className="relative w-full h-full flex items-center justify-center">
          {!imgError ? (
            <img 
              src={LOGO_IMAGE} 
              alt="DRG Power Logo" 
              className="w-full h-full object-contain filter drop-shadow-xl brightness-110"
              style={{ minWidth: footer ? '56px' : '48px', minHeight: footer ? '56px' : '48px' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-10 h-10 bg-[#BE1E2D] rounded-lg flex items-center justify-center shadow-lg border border-white/20">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="ml-4 flex flex-col justify-center border-l border-white/20 pl-4">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter leading-none text-white uppercase">
            DRG <span className={`${footer ? 'text-white' : 'text-[#BE1E2D]'}`}>{footer ? 'TECH' : 'POWER'}</span>
          </span>
          {!footer && <span className="text-[7px] font-black uppercase tracking-[0.4em] text-white/60 leading-none mt-1.5">Technology</span>}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-8'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="z-10">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <Link to="/about" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all">Why DRG</Link>
              <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all">Services</Link>
              <Link to="/projects" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all">Projects</Link>
              <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 hover:text-white transition-all">Contact</Link>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="bg-white text-black hover:bg-[#BE1E2D] hover:text-white px-8 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all flex items-center gap-2 group shadow-lg uppercase"
              >
                CALL US <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <button
              className="lg:hidden p-3 text-white bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative">
                <span className={`absolute block h-0.5 w-6 bg-current transition-all ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/98 backdrop-blur-3xl transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute inset-y-0 right-0 w-full md:w-[70%] bg-[#050505] flex flex-col p-12 transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-8 mt-24">
            <Link to="/" className="text-4xl font-black text-white uppercase italic tracking-tighter">Home</Link>
            <Link to="/about" className="text-4xl font-black text-white uppercase italic tracking-tighter">About</Link>
            <Link to="/services" className="text-4xl font-black text-white uppercase italic tracking-tighter">Services</Link>
            <Link to="/projects" className="text-4xl font-black text-white uppercase italic tracking-tighter">Projects</Link>
            <Link to="/contact" className="text-4xl font-black text-white uppercase italic tracking-tighter">Contact</Link>
            <a href={`tel:${PHONE_PRIMARY}`} className="mt-12 bg-[#BE1E2D] text-white py-6 rounded-2xl text-center font-black tracking-widest uppercase text-xl shadow-2xl">Call Project Desk</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-24 pb-8 font-sans border-t border-white/5">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Logo footer />
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mt-6 italic">
            Industrial grade solar solutions for the next generation of infrastructure. High precision, zero compromise.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Solutions</h3>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">Residential Units</Link></li>
            <li><Link to="/services" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">Industrial Solar</Link></li>
            <li><Link to="/services" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">Grid Management</Link></li>
            <li><Link to="/services" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">O&M Contracts</Link></li>
          </ul>
        </div>

        {/* HQ Info Column */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">HQ Info</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[#BE1E2D]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <p className="text-sm text-slate-500 leading-snug italic">{ADDRESS}</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[#BE1E2D]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <p className="text-lg font-black tracking-tighter">{PHONE_PRIMARY}</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[#BE1E2D]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <p className="text-sm text-slate-500 font-semibold italic">{EMAIL_ADDRESS}</p>
            </div>
          </div>
        </div>

        {/* Direct Connect Column */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Direct Connect</h3>
          <div className="space-y-4">
            <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-white/5 flex flex-col gap-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#BE1E2D]">Jatin Batheja</span>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-lg font-black tracking-tight">{PHONE_JATIN}</span>
              </div>
            </div>
            <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-white/5 flex flex-col gap-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#BE1E2D]">Dhiraj Sanduja</span>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-lg font-black tracking-tight">{PHONE_DHIRAJ}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
          © 2024 DRG POWER TECHNOLOGY PRIVATE LIMITED. BUILT FOR POWER.
        </p>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Systems</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppButton: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-50 bg-[#BE1E2D] text-white w-16 h-16 rounded-3xl shadow-3xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/20 group"
    aria-label="WhatsApp"
  >
    <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  </a>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

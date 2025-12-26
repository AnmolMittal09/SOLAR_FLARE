
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
  return (
    <div className="flex items-center group cursor-pointer">
      <div className={`relative transition-all duration-500 transform group-hover:scale-110 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 p-1 ${
        footer ? 'h-16 w-16' : 'h-14 w-14'
      }`}>
        {/* Brand Image Logo */}
        <img 
          src={LOGO_IMAGE} 
          alt={`${BRAND_NAME} Logo`}
          className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all"
          style={{ imageRendering: 'auto' }}
        />
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[#BE1E2D]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <div className="ml-4 flex flex-col justify-center border-l border-white/20 pl-4">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter leading-none text-white uppercase">
            DRG <span className={`${footer ? 'text-white' : 'text-[#BE1E2D]'}`}>POWER</span>
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'Brands', path: '/brands' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-8'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="z-10 shrink-0">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="bg-white text-black hover:bg-[#BE1E2D] hover:text-white px-6 py-2.5 rounded-lg text-[9px] font-black tracking-[0.2em] transition-all flex items-center gap-2 group shadow-lg uppercase shrink-0"
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
          <div className="flex flex-col gap-6 mt-24">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-3xl font-black uppercase italic tracking-tighter transition-all ${
                  location.pathname === link.path ? 'text-[#BE1E2D]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${PHONE_PRIMARY}`} className="mt-8 bg-[#BE1E2D] text-white py-5 rounded-2xl text-center font-black tracking-widest uppercase text-lg shadow-2xl">Call Project Desk</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-24 pb-8 font-sans border-t border-white/5">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
        
        {/* Column 1: Identity */}
        <div className="space-y-8">
          <Logo footer />
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs italic">
            Delivering high-performance solar infrastructure for residential and commercial assets. Built for longevity and yield.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-all" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-all" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Navigation</h3>
          <ul className="space-y-5">
            <li><Link to="/solutions" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Solutions</Link></li>
            <li><Link to="/services" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Services</Link></li>
            <li><Link to="/brands" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Brands</Link></li>
            <li><Link to="/how-it-works" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">How It Works</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Resources</h3>
          <ul className="space-y-5">
            <li><Link to="/projects" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Projects</Link></li>
            <li><Link to="/faq" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">FAQ</Link></li>
            <li><a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a></li>
            <li><a href="#" className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Safety Loop</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Direct Connect</h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#BE1E2D]">Head of Projects</span>
              <a href={`tel:${PHONE_JATIN}`} className="text-xl font-black tracking-tighter text-white hover:text-[#BE1E2D] transition-colors">{PHONE_JATIN}</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#BE1E2D]">Technical Operations</span>
              <a href={`tel:${PHONE_DHIRAJ}`} className="text-xl font-black tracking-tighter text-white hover:text-[#BE1E2D] transition-colors">{PHONE_DHIRAJ}</a>
            </div>
            <div className="pt-2 border-t border-white/10 mt-4">
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-xs font-bold text-slate-500 hover:text-white transition-colors block mb-4 italic break-all">{EMAIL_ADDRESS}</a>
              <p className="text-[10px] text-slate-600 leading-relaxed italic">{ADDRESS}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
          © 2024 DRG POWER TECHNOLOGY PRIVATE LIMITED. ENGINEERING THE FUTURE.
        </p>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/30">
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-white transition-colors">Grid Health</a>
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

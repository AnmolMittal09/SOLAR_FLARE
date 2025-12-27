
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
  LOGO_IMAGE,
  SOLUTIONS,
  SERVICES
} from '../constants';

const Logo: React.FC<{ footer?: boolean }> = ({ footer }) => {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className={`relative transition-all duration-500 transform group-hover:scale-110 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 p-1 shrink-0 ${
        footer ? 'h-12 w-12 md:h-16 md:w-16' : 'h-10 w-10 md:h-14 md:w-14'
      }`}>
        <img 
          src={LOGO_IMAGE} 
          alt={`${BRAND_NAME} Logo`}
          className="w-full h-full object-contain filter brightness-110 group-hover:brightness-125 transition-all"
          style={{ imageRendering: 'auto' }}
        />
        <div className="absolute inset-0 bg-[#BE1E2D]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <div className="ml-3 md:ml-4 flex flex-col justify-center border-l border-white/20 pl-3 md:pl-4">
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-black tracking-tighter leading-none text-white uppercase">
            DRG <span className="text-[#BE1E2D]">POWER</span>
          </span>
          <span className="text-[6px] md:text-[7px] font-black uppercase tracking-[0.4em] text-white/60 leading-none mt-1 md:mt-1.5">Technology</span>
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
    { name: 'Expertise', path: '/expertise' },
    { name: 'Brands', path: '/brands' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-black/95 backdrop-blur-xl py-3 md:py-4 shadow-2xl border-b border-white/5' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 md:py-8'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
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
                href={`tel:+91${PHONE_PRIMARY}`}
                className="bg-white text-black hover:bg-[#BE1E2D] hover:text-white px-6 py-2.5 rounded-lg text-[9px] font-black tracking-[0.2em] transition-all flex items-center gap-2 group shadow-lg uppercase shrink-0"
              >
                CALL US <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <button
              className="lg:hidden p-2.5 text-white bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative">
                <span className={`absolute block h-0.5 w-5 bg-current transition-all ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transition-all top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-current transition-all ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/98 backdrop-blur-3xl transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute inset-y-0 right-0 w-full sm:w-[350px] md:w-[450px] bg-[#050505] flex flex-col p-8 md:p-12 transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-6 mt-20">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-2xl md:text-3xl font-black uppercase italic tracking-tighter transition-all ${
                  location.pathname === link.path ? 'text-[#BE1E2D]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:+91${PHONE_PRIMARY}`} className="mt-8 bg-[#BE1E2D] text-white py-4 md:py-5 rounded-2xl text-center font-black tracking-widest uppercase text-base md:text-lg shadow-2xl">Call Project Desk</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-16 md:pt-24 pb-8 font-sans border-t border-white/5">
    <div className="container mx-auto px-4 md:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8 mb-16 md:mb-24">
        
        {/* Column 1: Identity */}
        <div className="lg:col-span-1 space-y-6 md:space-y-8">
          <Logo footer />
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xs italic">
            Delivering high-performance solar infrastructure for residential and commercial assets. Built for longevity and yield.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/drg_solar_/?igsh=Nm5laW0waHNscTRt#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-all" aria-label="Instagram">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 border border-white/10 flex items-center justify-center rounded-lg hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-all" aria-label="Facebook">
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Technical Solutions */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Solutions</h3>
          <ul className="space-y-4 md:space-y-5">
            {SOLUTIONS.map(sol => (
              <li key={sol.id}>
                <Link to="/expertise#solutions" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest block">
                  {sol.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Sector Services */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Services</h3>
          <ul className="space-y-4 md:space-y-5">
            {SERVICES.map(service => (
              <li key={service.id}>
                <Link to="/expertise#services" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest block">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Key Pages */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Company</h3>
          <ul className="space-y-4 md:space-y-5">
            <li><Link to="/about" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">About Us</Link></li>
            <li><Link to="/brands" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Brands</Link></li>
            <li><Link to="/projects" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Projects</Link></li>
            <li><Link to="/faq" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Knowledge Hub</Link></li>
            <li><Link to="/how-it-works" className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">Protocol</Link></li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div className="space-y-6 md:space-y-8 sm:col-span-2 lg:col-span-1">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Reach Us</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#BE1E2D]">Project Desk</span>
              <a href={`tel:+91${PHONE_JATIN}`} className="text-lg md:text-xl font-black tracking-tighter text-white hover:text-[#BE1E2D] transition-colors">{PHONE_JATIN}</a>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#BE1E2D]">Technical Leads</span>
              <a href={`tel:+91${PHONE_DHIRAJ}`} className="text-lg md:text-xl font-black tracking-tighter text-white hover:text-[#BE1E2D] transition-colors">{PHONE_DHIRAJ}</a>
            </div>
            <div className="pt-2 border-t border-white/10 mt-2 md:mt-4">
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-white transition-colors block mb-2 md:mb-4 italic break-all">{EMAIL_ADDRESS}</a>
              <p className="text-[9px] md:text-[10px] text-slate-600 leading-relaxed italic">{ADDRESS}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 pt-10 md:pt-12 border-t border-white/5 text-center">
        <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/20 px-4">
          © 2024 DRG POWER TECHNOLOGY PRIVATE LIMITED. ENGINEERING THE FUTURE.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] text-white/30 px-4">
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-white transition-colors">Grid Health</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <Link to="/contact" className="hover:text-white transition-colors">Support Terminal</Link>
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
    className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-50 bg-[#BE1E2D] text-white w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl shadow-3xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/20 group"
    aria-label="WhatsApp"
  >
    <svg className="w-6 h-6 md:w-8 md:h-8 fill-current text-white" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  </a>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's an anchor hash (e.g., #solutions), scroll to that element
    if (hash) {
      try {
        const element = document.querySelector(hash);
        if (element) {
          // Adding a slight delay to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } catch (e) {
        console.warn("Invalid selector in hash:", hash);
      }
    } else {
      // Normal page navigation, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

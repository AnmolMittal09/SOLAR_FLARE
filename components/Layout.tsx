import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useLocation } = ReactRouterDOM;
import { 
  COMPANY_NAME, 
  BRAND_NAME, 
  PHONE_PRIMARY, 
  PHONE_SECONDARY, 
  WHATSAPP_LINK, 
  ICONS, 
  ADDRESS, 
  EMAIL_ADDRESS,
  GROUP_NAME,
  ESTABLISHED_YEAR,
  LOGO_IMAGE 
} from '../constants';

// Updated Logo component to use a container for better visibility
const Logo: React.FC<{ light?: boolean; scrolled?: boolean }> = ({ light, scrolled }) => (
  <div className="flex items-center group">
    <div className={`relative transition-all duration-500 group-hover:scale-105 bg-slate-900 rounded-xl overflow-hidden p-1 shadow-2xl ${
      scrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
    }`}>
      <img 
        src={LOGO_IMAGE} 
        alt={COMPANY_NAME}
        className="h-full w-auto object-contain"
        loading="eager"
        onError={(e) => {
          // Fallback if the URL still fails due to Google Drive restrictions
          e.currentTarget.src = "https://i.ibb.co/p6V0fR8m/drg-logo.png";
        }}
      />
    </div>
  </div>
);

const TopBar: React.FC<{ isScrolled: boolean; isHome: boolean }> = ({ isScrolled, isHome }) => {
  return (
    <div className={`hidden lg:block border-b transition-all duration-300 ${
      isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100 py-2'
    } ${isHome && !isScrolled ? 'bg-white/5 border-white/10 text-white/70' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
        <div className="flex gap-8" role="list">
          <div className="flex items-center gap-2" role="listitem">
            <span className="text-green-700" aria-hidden="true">📍</span>
            <span>Serving Pan-India Projects</span>
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <span className="text-green-700" aria-hidden="true">⏰</span>
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
        <div>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-green-700 transition-colors flex items-center gap-2">
            <span className="text-green-700" aria-hidden="true">✉️</span> {EMAIL_ADDRESS}
          </a>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'glass py-3 shadow-xl border-b border-slate-200/50' 
          : 'bg-transparent py-0'
      }`}>
        <TopBar isScrolled={isScrolled} isHome={isHome} />
        
        <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-4'}`}>
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            <Link to="/" className="z-10" aria-label={`${BRAND_NAME} Home`}>
              <Logo light={isHome} scrolled={isScrolled} />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-widest transition-all hover:text-green-700 relative group py-2 ${
                    location.pathname === link.path
                      ? 'text-green-700'
                      : !isScrolled && isHome ? 'text-white/90' : 'text-slate-700'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-700 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} aria-hidden="true"></span>
                </Link>
              ))}
              <div className="flex items-center gap-4 border-l border-slate-200/30 pl-8">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl text-[10px] font-black transition-all shadow-xl shadow-green-700/20 active:scale-95 flex items-center gap-2"
                >
                  CALL NOW
                </a>
              </div>
            </div>

            <button
              className={`lg:hidden p-3 rounded-2xl transition-all duration-300 z-10 ${!isScrolled && isHome && !isOpen ? 'text-white bg-white/10' : 'text-slate-900 bg-slate-100'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-5" aria-hidden="true">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'invisible'}`} aria-hidden={!isOpen}>
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-md glass transition-transform duration-500 ease-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-32 pb-12 px-10">
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`text-3xl font-black transition-all duration-500 transform tracking-tighter ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} ${
                    location.pathname === link.path ? 'text-green-700' : 'text-slate-800 hover:text-green-700'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-slate-200/50">
              <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-4 group" aria-label={`Call Support at ${PHONE_PRIMARY}`}>
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center font-bold" aria-hidden="true">
                  📞
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Support</p>
                  <p className="text-lg font-black text-slate-900">{PHONE_PRIMARY}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" aria-label={`${BRAND_NAME} Home`}>
              <Logo light />
            </Link>
            <p className="text-slate-500 leading-relaxed text-base font-medium max-w-sm">
              Delivering high-performance solar solutions since {ESTABLISHED_YEAR}. Trusted partner for residential and commercial energy across India.
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-green-700 transition-all" aria-label="WhatsApp">
                <span aria-hidden="true">W</span>
              </a>
            </div>
          </div>

          <nav className="lg:col-span-2 space-y-8" aria-label="Quick Links Navigation">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] opacity-40">Company</h3>
            <ul className="space-y-4 text-sm font-bold">
              {['Home', 'About', 'Services', 'How It Works', 'Projects', 'FAQ', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-green-700 transition-colors inline-block tracking-tight">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 space-y-8" aria-label="Solutions Navigation">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] opacity-40">Solutions</h3>
            <ul className="space-y-4 text-sm font-bold">
              {['Residential', 'Commercial', 'Industrial'].map(item => (
                <li key={item}>
                  <Link to="/services" className="hover:text-green-700 transition-colors inline-block tracking-tight">
                    {item} Solar
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] opacity-40">Headquarters</h3>
            <address className="not-italic space-y-8 text-sm">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5" aria-hidden="true">
                  <span className="text-xs">📍</span>
                </div>
                <span className="leading-relaxed font-medium text-slate-400">
                  {ADDRESS}
                </span>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5" aria-hidden="true">
                  <span className="text-xs">📞</span>
                </div>
                <div className="flex flex-col gap-1 font-black tracking-tight text-white">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-green-700 transition-colors" aria-label={`Call primary phone: ${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-green-700 transition-colors" aria-label={`Call secondary phone: ${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. A Part of {GROUP_NAME}.
          </p>
          <nav className="flex gap-8" aria-label="Legal Navigation">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-[70] flex flex-col items-end gap-3"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Tooltip Label */}
      <div className={`transition-all duration-500 origin-right transform ${isExpanded ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-slate-950 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Chat with Solar Expert</span>
        </div>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20"
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-[2.2rem] animate-ping opacity-20 scale-125"></div>
        <div className="absolute inset-0 bg-[#25D366] rounded-[2.2rem] animate-pulse opacity-40 scale-110"></div>
        
        {/* Main Button */}
        <div className="relative z-10 bg-[#25D366] text-white w-full h-full rounded-[2.2rem] shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-90">
          <svg className="w-8 h-8 lg:w-10 lg:h-10 fill-current drop-shadow-md" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.461 3.42 1.268 4.861l-1.306 4.762 4.887-1.282c1.408.766 3.012 1.201 4.714 1.201 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.797 14.131c-.244.686-1.42 1.261-1.943 1.343-.48.075-.989.109-2.585-.544-2.04-.84-3.359-2.909-3.46-3.047-.101-.137-.822-1.092-.822-2.083 0-.991.514-1.478.697-1.681.183-.203.4-.254.534-.254l.381.006c.125.006.292-.047.458.35.17.408.577 1.405.626 1.503.05.098.083.213.017.347-.067.133-.1.216-.2.333-.1.117-.21.261-.3.35-.1.101-.205.212-.089.41.116.198.513.844 1.102 1.369.759.676 1.397.886 1.594.985.197.1.314.083.431-.051.117-.135.5-0.584.634-.784.133-.2.267-.166.45-.1.183.066 1.166.55 1.366.65.201.1.334.151.384.234.05.084.05.485-.194 1.171z"/>
          </svg>
          
          {/* Status Dot */}
          <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
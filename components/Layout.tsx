import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  COMPANY_NAME, 
  BRAND_NAME, 
  PHONE_PRIMARY, 
  PHONE_SECONDARY, 
  WHATSAPP_LINK, 
  ICONS, 
  ADDRESS, 
  EMAIL_ADDRESS,
  GROUP_NAME 
} from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled || isOpen ? 'glass py-3 shadow-xl border-b border-slate-200' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex flex-col group z-10">
              <div className="flex items-center gap-2">
                <div className="bg-green-600 p-1.5 rounded-xl text-white shadow-lg shadow-green-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {ICONS.Sun}
                </div>
                <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${!isScrolled && location.pathname === '/' && !isOpen ? 'text-white' : 'text-slate-900'}`}>
                  DRG<span className="text-green-600">POWER</span>
                </span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ml-10 -mt-1 opacity-60 ${!isScrolled && location.pathname === '/' && !isOpen ? 'text-white' : 'text-slate-500'}`}>
                Group of Sanduja Enterprises
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide transition-all hover:text-green-600 relative group ${
                    location.pathname === link.path
                      ? 'text-green-600'
                      : !isScrolled && location.pathname === '/' ? 'text-white/90' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-green-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-xs font-black transition-all shadow-xl shadow-green-600/20 active:scale-95 hover:-translate-y-0.5"
                >
                  {PHONE_PRIMARY}
                </a>
              </div>
            </div>

            <button
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 z-10 ${!isScrolled && location.pathname === '/' && !isOpen ? 'text-white bg-white/10' : 'text-slate-900 bg-slate-100'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 top-2.5' : 'top-5'}`}></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-sm glass transition-transform duration-500 ease-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-28 pb-10 px-8">
            <div className="flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`text-2xl font-black transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'} ${
                    location.pathname === link.path ? 'text-green-600' : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto space-y-6">
              <div className={`p-6 bg-green-600 rounded-3xl transition-all duration-700 delay-300 transform shadow-xl ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <p className="text-green-100 text-[10px] font-black uppercase tracking-widest mb-2">Primary Support</p>
                <p className="text-white text-xl font-black mb-6">{PHONE_PRIMARY}</p>
                <a href={`tel:${PHONE_PRIMARY}`} className="block w-full bg-white text-green-600 text-center py-3 rounded-2xl font-black text-sm active:scale-95 transition-transform">
                  Speak to Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-600/5 blur-[100px] rounded-full -mr-40 -mt-40"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="bg-green-600 p-1.5 rounded-xl text-white">
                  {ICONS.Sun}
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  DRG<span className="text-green-600">POWER</span>
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                {GROUP_NAME}
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing robust energy solutions across Haryana and NCR. Looking for Backup? We have the solution for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.461 3.42 1.268 4.861l-1.306 4.762 4.887-1.282c1.408.766 3.012 1.201 4.714 1.201 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.797 14.131c-.244.686-1.42 1.261-1.943 1.343-.48.075-.989.109-2.585-.544-2.04-.84-3.359-2.909-3.46-3.047-.101-.137-.822-1.092-.822-2.083 0-.991.514-1.478.697-1.681.183-.203.4-.254.534-.254l.381.006c.125.006.292-.047.458.35.17.408.577 1.405.626 1.503.05.098.083.213.017.347-.067.133-.1.216-.2.333-.1.117-.21.261-.3.35-.1.101-.205.212-.089.41.116.198.513.844 1.102 1.369.759.676 1.397.886 1.594.985.197.1.314.083.431-.051.117-.135.5-0.584.634-.784.133-.2.267-.166.45-.1.183.066 1.166.55 1.366.65.201.1.334.151.384.234.05.084.05.485-.194 1.171z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-60">Sitemap</h3>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'About Us', 'Services', 'Projects', 'FAQ', 'Contact'].map(item => (
                <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="hover:text-green-500 transition-colors inline-block">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-60">Solutions</h3>
            <ul className="space-y-4 text-sm font-medium">
              {['Homes', 'Societies', 'Commercial', 'Industrial', 'Solar Parks'].map(item => (
                <li key={item}><Link to="/services" className="hover:text-green-500 transition-colors inline-block">{item} Solar</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-60">Headquarters</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <span className="text-green-500 shrink-0">📍</span>
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex gap-4">
                <span className="text-green-500 shrink-0">📞</span>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-green-500 font-bold transition-colors">{PHONE_PRIMARY}</a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-green-500 font-bold transition-colors">{PHONE_SECONDARY}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-500 shrink-0">✉️</span>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-green-500 font-bold transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 text-[10px] font-bold flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-2xl shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
    aria-label="Contact on WhatsApp"
  >
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.461 3.42 1.268 4.861l-1.306 4.762 4.887-1.282c1.408.766 3.012 1.201 4.714 1.201 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.797 14.131c-.244.686-1.42 1.261-1.943 1.343-.48.075-.989.109-2.585-.544-2.04-.84-3.359-2.909-3.46-3.047-.101-.137-.822-1.092-.822-2.083 0-.991.514-1.478.697-1.681.183-.203.4-.254.534-.254l.381.006c.125.006.292-.047.458.35.17.408.577 1.405.626 1.503.05.098.083.213.017.347-.067.133-.1.216-.2.333-.1.117-.21.261-.3.35-.1.101-.205.212-.089.41.116.198.513.844 1.102 1.369.759.676 1.397.886 1.594.985.197.1.314.083.431-.051.117-.135.5-0.584.634-.784.133-.2.267-.166.45-.1.183.066 1.166.55 1.366.65.201.1.334.151.384.234.05.084.05.485-.194 1.171z"/></svg>
  </a>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
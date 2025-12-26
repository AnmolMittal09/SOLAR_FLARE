import React, { useState } from 'react';
import { FAQS, EMAIL_ADDRESS, WHATSAPP_LINK } from '../constants';
import { SEO } from '../components/SEO';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-48 pb-32">
      <SEO 
        title="Knowledge Hub" 
        description="Industrial solar queries. Information on warranties, net-metering, and ROI."
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
           <span className="text-[#BE1E2D] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Project Support</span>
           <h1 className="text-6xl md:text-[8rem] font-[900] mb-8 italic uppercase italic tracking-tighter leading-none">COMMON <br /><span className="text-gradient">QUERIES.</span></h1>
           <p className="text-2xl text-slate-500 font-medium italic">Everything you need to verify before your energy transition.</p>
        </div>

        <div className="space-y-6" role="list">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-sm border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500" role="listitem">
              <button
                id={`faq-button-${i}`}
                aria-expanded={activeIndex === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left p-10 flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tighter uppercase italic">{faq.question}</span>
                <span className={`text-4xl transition-all duration-500 font-black ${activeIndex === i ? 'rotate-180 text-[#BE1E2D]' : 'text-slate-300'}`} aria-hidden="true">
                  {activeIndex === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                hidden={activeIndex !== i}
                className={`p-10 pt-0 text-slate-500 text-lg leading-relaxed font-medium italic border-t border-slate-50 transition-all ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 lg:p-24 bg-black text-white rounded-sm border border-white/10 shadow-3xl text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
          <h2 className="text-4xl lg:text-6xl font-[900] mb-8 tracking-tighter uppercase italic italic">Deeper Analysis?</h2>
          <p className="text-2xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed italic">
            Technical desks are available for live consultation regarding project-specific load requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href={`mailto:${EMAIL_ADDRESS}`} 
              className="bg-white text-black px-16 py-6 rounded-sm font-black text-xl hover:bg-[#BE1E2D] hover:text-white transition-all shadow-3xl uppercase tracking-widest active:scale-95"
            >
              Email Desk
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-16 py-6 rounded-sm font-black text-xl hover:opacity-90 transition-all shadow-3xl shadow-[#25D366]/20 flex items-center gap-4 active:scale-95 uppercase tracking-widest"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.461 3.42 1.268 4.861l-1.306 4.762 4.887-1.282c1.408.766 3.012 1.201 4.714 1.201 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.797 14.131c-.244.686-1.42 1.261-1.943 1.343-.48.075-.989.109-2.585-.544-2.04-.84-3.359-2.909-3.46-3.047-.101-.137-.822-1.092-.822-2.083 0-.991.514-1.478.697-1.681.183-.203.4-.254.534-.254l.381.006c.125.006.292-.047.458.35.17.408.577 1.405.626 1.503.05.098.083.213.017.347-.067.133-.1.216-.2.333-.1.117-.21.261-.3.35-.1.101-.205.212-.089.41.116.198.513.844 1.102 1.369.759.676 1.397.886 1.594.985.197.1.314.083.431-.051.117-.135.5-0.584.634-.784.133-.2.267-.166.45-.1.183.066 1.166.55 1.366.65.201.1.334.151.384.234.05.084.05.485-.194 1.171z"/>
              </svg>
              Project WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
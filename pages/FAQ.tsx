
import React, { useState } from 'react';
import { FAQS, EMAIL_ADDRESS, WHATSAPP_LINK } from '../constants';
import { SEO } from '../components/SEO';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 lg:pt-48 pb-24">
      <SEO 
        title="FAQ" 
        description="Frequently asked questions about solar energy in Haryana. Information on solar panel warranty, government subsidies, net-metering with DHBVN/UHBVN, and ROI."
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">COMMON <span className="text-gradient">QUESTIONS.</span></h1>
          <p className="text-lg text-slate-600 font-medium">Everything you need to know about switching to solar energy in Haryana.</p>
        </div>

        <div className="space-y-4" role="list">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow" role="listitem">
              <button
                id={`faq-button-${i}`}
                aria-expanded={activeIndex === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-green-700 focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 font-mono ${activeIndex === i ? 'rotate-180 text-green-700' : 'text-slate-400'}`} aria-hidden="true">
                  {activeIndex === i ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                hidden={activeIndex !== i}
                className={`p-6 pt-0 text-slate-600 leading-relaxed font-medium ${activeIndex === i ? 'animate-in slide-in-from-top-2 duration-200' : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 lg:p-16 bg-white rounded-[3rem] border border-slate-100 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full" aria-hidden="true"></div>
          <h2 className="text-3xl font-black mb-4 tracking-tight">Still have questions?</h2>
          <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our energy consultants are available for a live chat to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${EMAIL_ADDRESS}`} 
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              Email Support
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-black hover:opacity-90 transition-all shadow-xl shadow-[#25D366]/20 flex items-center gap-3 active:scale-95"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.461 3.42 1.268 4.861l-1.306 4.762 4.887-1.282c1.408.766 3.012 1.201 4.714 1.201 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.797 14.131c-.244.686-1.42 1.261-1.943 1.343-.48.075-.989.109-2.585-.544-2.04-.84-3.359-2.909-3.46-3.047-.101-.137-.822-1.092-.822-2.083 0-.991.514-1.478.697-1.681.183-.203.4-.254.534-.254l.381.006c.125.006.292-.047.458.35.17.408.577 1.405.626 1.503.05.098.083.213.017.347-.067.133-.1.216-.2.333-.1.117-.21.261-.3.35-.1.101-.205.212-.089.41.116.198.513.844 1.102 1.369.759.676 1.397.886 1.594.985.197.1.314.083.431-.051.117-.135.5-0.584.634-.784.133-.2.267-.166.45-.1.183.066 1.166.55 1.366.65.201.1.334.151.384.234.05.084.05.485-.194 1.171z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

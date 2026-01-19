
// ==========================================
// 1. SITE IDENTITY & BRANDING
// ==========================================
import React from 'react';
import { Service, Project, Testimonial, FAQItem } from './types';

export const COMPANY_NAME = "SOLAR FLARE";
export const BRAND_NAME = "SOLAR FLARE";
export const TAGLINE = "CLEAN. RENEWABLE. AFFORDABLE.";
export const SUB_TAGLINE = "India's Leading Solar Energy Network.";
export const GROUP_NAME = "Sanduja Enterprises";
export const ESTABLISHED_YEAR = "2021";
export const GROUP_LEGACY_YEAR = "2002";
export const PARTNER_BRAND = "Livguard";

// ==========================================
// 2. CONTACT & LOCATION COORDINATES
// ==========================================
export const PHONE_JATIN = "9211592425";
export const PHONE_DHIRAJ = "9313481712";
export const PHONE_PRIMARY = PHONE_JATIN;
export const PHONE_SECONDARY = PHONE_DHIRAJ;
export const EMAIL_ADDRESS = "drgpower712@gmail.com";
export const ADDRESS = "Khasra no 253, Gali No 1, Basai Enclave, VPO, Gurugram, HR 122006.";
export const WHATSAPP_LINK = "https://wa.me/919211592425";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/rsmXnAT8ZN6qRCdy9";

// ==========================================
// 3. ASSETS & MEDIA
// ==========================================
export const LOGO_IMAGE = "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/logo%20(2).png"; 

// ==========================================
// 4. MISSION, VISION & LEADERSHIP
// ==========================================
export const VISION = "Powering a cleaner, greener tomorrow — one rooftop at a time.";
export const MISSION = "Delivering smart, efficient, and affordable rooftop solar energy solutions that empower our customers and reduce carbon footprints.";

export const LEADERSHIP = [
  { 
    name: "Dhiraj Sanduja", 
    role: "Founder", 
    imageUrl: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/Dheeraj.png",
    bio: "Brings extensive technical expertise and strategic vision, guiding the group toward sustainable growth and a greener future." 
  },
  { 
    name: "Jatin Batheja", 
    role: "Director", 
    imageUrl: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/Jatin.png",
    bio: "Specializes in project management and operational excellence, ensuring every solar deployment meets the highest standards of reliability." 
  }
];

export const CORE_VALUES = [
  { title: "Customer-centric", desc: "Bespoke solar setups for varying budgets.", icon: "🎯" },
  { title: "Quality & Reliability", desc: "Trusted energy solutions built for longevity.", icon: "🛡️" },
  { title: "Innovation", desc: "Using the most efficient solar systems available.", icon: "⚙️" },
  { title: "Integrity", desc: "Honest communication and professional excellence.", icon: "💎" },
  { title: "Excellence", desc: "High-performance energy infrastructure.", icon: "🤝" }
];

// ==========================================
// 5. VECTOR ICONS & UI ELEMENTS
// ==========================================
export const ICONS = {
  Sun: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>,
  Home: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Society: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Commercial: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Check: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
  ChevronRight: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>,
  Factory: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
};

// ==========================================
// 6. CORE SERVICES DATA
// ==========================================
export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Solar",
    description: "Premium rooftop solar for homes. Reduce bills and gain energy independence with high-performance Tier-1 panels.",
    icon: ICONS.Home,
    features: ["Rooftop Optimization", "Smart Monitoring", "Net-metering", "25-Year Performance"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=70&w=1000"
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    description: "Fixed energy costs for retail hubs, offices, and schools. Protect your bottom line from rising utility tariffs.",
    icon: ICONS.Commercial,
    features: ["Scalable PV Arrays", "Operational Savings", "Rapid ROI", "CSR Support"],
    imageUrl: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=70&w=1000"
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    description: "MW-scale solar deployment for factories. Resilient energy systems engineered for continuous high-load operations.",
    icon: ICONS.Factory,
    features: ["Industrial Sync", "Grid-tie Tech", "Structural Integrity", "MW-scale Capacity"],
    imageUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=70&w=1000"
  }
];

// ==========================================
// 7. TECHNICAL SOLUTIONS DATA
// ==========================================
export const SOLUTIONS = [
  {
    id: "on-grid",
    title: "On-Grid Systems",
    desc: "Export excess power to the utility grid and earn credits through Net-metering. The most cost-efficient solar model.",
    icon: "🔌",
    imageUrl: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/3.png",
    detailedDesc: "On-grid solar systems are designed to work in synchronization with the utility grid. These systems use solar panels to generate electricity during the day, which is then used by the consumer. Any excess energy is fed back into the grid via a net-metering process.",
    howItWorks: [
      { step: 1, title: "Solar Generation", text: "Solar panels capture sunlight and convert it into DC electricity." },
      { step: 2, title: "DC to AC Conversion", text: "A grid-tie inverter converts the DC into AC for your property." },
      { step: 3, title: "Consumption & Export", text: "Power is consumed locally; surplus flows to the utility grid." },
      { step: 4, title: "Net Metering", text: "The utility meter tracks credits for the electricity you export." }
    ],
    benefits: ["Zero Battery Costs", "Maximize ROI", "Government Subsidies", "Less Maintenance"]
  },
  {
    id: "off-grid",
    title: "Off-Grid Systems",
    desc: "Total independence. Store solar power in high-capacity batteries to power your property anywhere, anytime.",
    icon: "🔋",
    imageUrl: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/solar-off-grid-system2.jpg",
    detailedDesc: "Off-grid systems are completely autonomous and independent of the utility grid. These are ideal for remote locations or areas with frequent power outages, utilizing heavy-duty battery storage to provide electricity 24/7.",
    howItWorks: [
      { step: 1, title: "Energy Capture", text: "Panels generate DC power from sunlight during daylight hours." },
      { step: 2, title: "Storage Control", text: "A charge controller regulates the flow of electricity to batteries." },
      { step: 3, title: "Battery Bank", text: "Energy is stored in high-performance deep-cycle batteries." },
      { step: 4, title: "Inversion", text: "The inverter draws from the battery bank to power your loads." }
    ],
    benefits: ["100% Autonomy", "Reliable Backup", "Remote Operations", "Long Lasting"]
  },
  {
    id: "hybrid",
    title: "Hybrid Systems",
    desc: "Stay connected to the grid while maintaining a battery bank for critical backup during utility outages.",
    icon: "⚡",
    imageUrl: "https://raw.githubusercontent.com/AnmolMittal09/Solar_flare_images/main/4.png",
    detailedDesc: "Hybrid systems combine the best of both worlds. They are connected to the grid like on-grid systems but also include a battery bank for backup. This ensures you can export power while also having security during blackouts.",
    howItWorks: [
      { step: 1, title: "Smart Generation", text: "Hybrid panels generate power used for immediate local loads." },
      { step: 2, title: "Priority Charging", text: "The system ensures batteries are fully charged for outages." },
      { step: 3, title: "Surplus Management", text: "Extra energy is sent to the grid for net-metering credits." },
      { step: 4, title: "Fail-over Support", text: "In case of a grid failure, the system switches to battery mode." }
    ],
    benefits: ["Priority Backup", "Peak Saving", "Ultimate Reliability", "Smart Management"]
  }
];

// ==========================================
// 8. PARTNER BRANDS & HARDWARE
// ==========================================
// Added 'role' property to each brand to satisfy the TypeScript access in Brands.tsx
export const BRANDS = [
  { name: "Livguard", role: "Strategic Partner", desc: "Leading energy storage and solar solutions." },
  { name: "UTL Solar", role: "Technical Partner", desc: "Innovative solar PCUs and high-efficiency panels." },
  { name: "Luminous", role: "Hardware Partner", desc: "Decades of trust in home electrical and solar solutions." },
  { name: "Adani Solar", role: "Module Partner", desc: "India's largest solar cell and module manufacturer." },  
  { name: "Tata Power", role: "Legacy Partner", desc: "Unmatched reliability in India's power sector." }
];

// ==========================================
// 9. PROJECT PORTFOLIO DATA
// ==========================================
export const PROJECTS: Project[] = [
  { id: 1, title: "Heritage Apartments", category: "Society", location: "Gurugram", capacity: "250 kWp", imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=70&w=1000" },
  { id: 2, title: "Modern Plastics Factory", category: "Industrial", location: "Manesar", capacity: "1.2 MWp", imageUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=70&w=1000" },
  { id: 3, title: "Sun City Bungalow", category: "Home", location: "Rohtak", capacity: "15 kWp", imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb5843e03?auto=format&fit=crop&q=70&w=1000" },
  { id: 4, title: "Green Field Estate", category: "Home", location: "Faridabad", capacity: "20 kWp", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=70&w=1000" },
];

// ==========================================
// 10. SOCIAL PROOF & TESTIMONIALS
// ==========================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sanduja",
    role: "Proprietor",
    content: "Our energy overheads dropped by 65% in the first quarter itself. SOLAR FLARE's installation was seamless and professional.",
    rating: 5,
    imageUrl: "https://i.pravatar.cc/150?u=aman"
  }
];

// ==========================================
// 11. FAQ CONTENT
// ==========================================
export const FAQS: FAQItem[] = [
  {
    question: "Do you serve all cities in India?",
    answer: "Yes, SOLAR FLARE provides solar solutions across India, from site evaluation to installation."
  },
  {
    question: "How long has the group been in the energy sector?",
    answer: "The Sanduja Enterprises group has been a trusted partner in power solutions since 2012, collaborating with top brands like Livguard."
  },
  {
    question: "Will solar panels work during cloudy days?",
    answer: "Yes. Solar panels generate electricity on cloudy days, but at reduced efficiency (about 70-80%). They work on sunlight, not heat."
  },
  {
    question: "Is solar a good investment?",
    answer: "Most systems recover their cost within 4–6 years, providing free electricity for 20+ years after that."
  }
];

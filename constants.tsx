
import React from 'react';
import { Service, Project, Testimonial, FAQItem } from './types';

export const COMPANY_NAME = "DRG Power Technology Private Limited";
export const BRAND_NAME = "DRG POWER";
export const TAGLINE = "CLEAN. RENEWABLE. AFFORDABLE.";
export const SUB_TAGLINE = "India's Leading Solar Energy Network.";
export const GROUP_NAME = "Sanduja Enterprises";
export const ESTABLISHED_YEAR = "2021";
export const GROUP_LEGACY_YEAR = "2012";
export const PARTNER_BRAND = "Livguard";

export const PHONE_JATIN = "9211592425";
export const PHONE_DHIRAJ = "9313481712";
export const PHONE_PRIMARY = PHONE_JATIN;
export const PHONE_SECONDARY = PHONE_DHIRAJ;
export const EMAIL_ADDRESS = "drgpower712@gmail.com";
export const ADDRESS = "Khasra No. 246, Gali No. 1, Main Ghari Road Basai, Gurugram Haryana-122006";
export const WHATSAPP_LINK = "https://wa.me/919211592425";

// Official Brand Logo URL
export const LOGO_IMAGE = "https://raw.githubusercontent.com/AnmolMittal09/DRG-Power/main/Untitled%20design%20%282%29.png"; 

export const VISION = "Powering a cleaner, greener tomorrow — one rooftop at a time.";
export const MISSION = "Delivering smart, efficient, and affordable rooftop solar energy solutions that empower our customers and reduce carbon footprints.";

export const LEADERSHIP = [
  { 
    name: "Dhiraj Sanduja", 
    role: "Co-Founder & Director", 
    bio: "Brings extensive technical expertise and strategic vision, guiding DRG toward sustainable growth and a greener future." 
  },
  { 
    name: "Jatin Batheja", 
    role: "Director", 
    bio: "Specializes in project management and operational excellence, ensuring every solar deployment meets the highest standards of reliability." 
  }
];

export const CORE_VALUES = [
  { title: "Customer-centric approach", desc: "Tailoring bespoke solar setups to meet varying energy requirements and budgets.", icon: "🎯" },
  { title: "Quality and Reliability", desc: "Ensuring long-standing commitment to delivering trusted energy solutions.", icon: "🛡️" },
  { title: "Innovation & Technology", desc: "Forward-looking approach to designing and supplying the most efficient solar systems.", icon: "⚙️" },
  { title: "Integrity & Transparency", desc: "Building trust through honest communication and professional excellence.", icon: "💎" },
  { title: "Teamwork & Excellence", desc: "Unified leadership foundation dedicated to high-performance energy infrastructure.", icon: "🤝" }
];

export const ICONS = {
  Sun: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>,
  Home: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  Society: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Commercial: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Check: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
  ChevronRight: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>,
  Quote: <svg className="w-8 h-8 opacity-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V11C6.017 11.5523 5.56929 12 5.017 12H4.017V21H6.017Z" /></svg>
};

export const SERVICES: Service[] = [
  {
    id: "homes",
    title: "Solar for Households",
    description: "Designing, supplying, and installing solar power systems tailored for modern homes across India. Empower your family with renewable energy.",
    icon: ICONS.Home,
    features: ["End-to-end Solutions", "Site Evaluation", "Bespoke System Design", "After-sales Support"],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=70&w=1000"
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    description: "Forward-looking solar solutions for commercial establishments. Reduce operational costs and carbon footprint through smart energy firm expertise.",
    icon: ICONS.Commercial,
    features: ["Cost-effective Solutions", "Scalable Projects", "System Monitoring", "Expert Installation"],
    imageUrl: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=70&w=1000"
  }
];

export const PROJECTS: Project[] = [
  { id: 1, title: "Heritage Apartments", category: "Society", location: "Gurugram", capacity: "250 kWp", imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=70&w=1000" },
  { id: 2, title: "Modern Plastics Factory", category: "Commercial", location: "Manesar", capacity: "1.2 MWp", imageUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=70&w=1000" },
  { id: 3, title: "Sun City Bungalow", category: "Home", location: "Rohtak", capacity: "15 kWp", imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb5843e03?auto=format&fit=crop&q=70&w=1000" },
  { id: 4, title: "Green Field Estate", category: "Home", location: "Faridabad", capacity: "20 kWp", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=70&w=1000" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sanduja",
    role: "Proprietor",
    content: "Our energy overheads dropped by 65% in the first quarter itself. DRG Power Technology's installation was seamless and professional.",
    rating: 5,
    imageUrl: "https://i.pravatar.cc/150?u=aman"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you serve all cities in India?",
    answer: "Yes, DRG Power Technology Pvt Ltd provides end-to-end solar solutions across India, from site evaluation to installation and support."
  },
  {
    question: "How long has the group been in the energy sector?",
    answer: "The Sanduja Enterprises group has been a trusted partner in energy storage and power solutions since 2012, collaborating with top brands like Livguard."
  }
];

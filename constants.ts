import { NavLink, ServiceItem, ServiceTier, Testimonial } from './types';

export const COMPANY_NAME = "Reelin";
export const TAGLINE_MAIN = "Reelin. Business Systems Reimagined with AI";
export const TAGLINE_SECONDARY = "";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Book Now", path: "/book" },
];

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: "foundation",
    level: "Tier 1",
    title: "Foundation",
    subtitle: "The Baseline",
    description: "Designed for simple, service-based businesses that need a professional online presence, automated booking, and never want to miss a customer inquiry.",
    longDescription: "The Foundation tier establishes the core digital system that supports day-to-day operations for service businesses. It provides a consistent structure for handling your online presence, basic client interactions, and appointment booking.\n\nRather than a standalone website, Foundation functions as a practical intake and reception system — keeping your business accessible and organized with minimal manual involvement.",
    features: [
      "Professional website",
      "Online appointment booking",
      "AI phone & chat booking",
      "Automated confirmations & reminders",
      "Basic customer data organization",
      "Service & staff performance insights"
    ],
    detailedCapabilities: [
      {
        title: "Digital Presence",
        description: "A high-performance website with embedded client capture systems designed to establish your brand and convert visitors into clients with minimal friction."
      },
      {
        title: "Appointment Booking System",
        description: "An intuitive appointment booking system that allows clients to book easily while giving businesses a clear, organized way to manage client relationship, basic sales data, schedules and staff."
      },
      {
        title: "AI Receptionist",
        description: "An intelligent agent that handles calls and chats, answers FAQs, and secures appointments 24/7, ensuring you never miss a lead."
      }
    ],
    bestFor: [
      "Barbershops",
      "Hair salons",
      "Nail salons",
      "Lash & brow studios",
      "Fitness trainers"
    ],
  },
  {
    id: "growth",
    level: "Tier 2",
    title: "Growth",
    subtitle: "The Accelerator",
    description: "Engineered for businesses with higher-value services and more complex customer journeys that need better follow-up, conversion tracking, and performance insights.",
    longDescription: "Growth is for businesses ready to scale beyond word-of-mouth. This system introduces intelligence into your pipeline. We don't just capture leads; we nurture them. By tracking user behavior and automating long-term follow-ups, we increase the lifetime value of every prospect. This tier turns your data into a competitive advantage, giving you visibility into what marketing works and what doesn't.",
    features: [
      "Everything in Foundation",
      "Advanced lead tracking automation",
      "Conversion & performance analytics",
      "SEO & optimization tools"
    ],
    detailedCapabilities: [
      {
        title: "Pipeline Architecture",
        description: "Visual dashboards tracking every potential client from 'Lead' to 'Paid'. know exactly where revenue is stuck."
      },
      {
        title: "Multi-Channel Nurturing",
        description: "Automated SMS and email sequences that re-engage old leads, ask for reviews, and upsell services without you lifting a finger."
      },
      {
        title: "Performance Analytics",
        description: "Deep insights into staff performance, service popularity, and revenue trends to inform hiring and pricing decisions."
      },
      {
        title: "Search Authority (SEO)",
        description: "Technical optimization to ensure your business ranks locally, driving organic traffic to your capture engine."
      }
    ],
    bestFor: [
      "Dental clinics",
      "Chiropractic clinics",
      "Med spas",
      "Trades (HVAC, Roofing, Plumbing)",
      "Law firms",
      "Real estate teams"
    ],
    outcome: "Improve visibility, understand behavior, and increase conversions."
  },
  {
    id: "autonomous-enterprise",
    level: "Tier 3",
    title: "Autonomous Enterprise",
    subtitle: "The Singularity",
    highlight: true,
    description: "Architected for complex, data-rich businesses that want AI deeply embedded into operations, finance, and decision-making.",
    longDescription: "The Autonomous Enterprise is the pinnacle of operational efficiency. We create a custom neural network for your organization, connecting disparate systems—finance, operations, HR, and sales—into a single source of truth. This tier involves custom development to automate complex logic, predict operational bottlenecks, and provide real-time business intelligence. It is the shift from managing a business to orchestrating a system.",
    features: [
      "Everything in Growth",
      "Custom AI workflows & automation",
      "Revenue, expense & data integration",
      "Real-time business intelligence dashboards",
      "Continuous performance optimization"
    ],
    detailedCapabilities: [
      {
        title: "Custom Neural Workflows",
        description: "Bespoke automation logic built for your specific operational bottlenecks. If it follows a rule, we automate it."
      },
      {
        title: "Predictive Intelligence",
        description: "AI analysis of historical data to forecast revenue, inventory needs, and staffing requirements."
      },
      {
        title: "Unified Data Warehouse",
        description: "Integration of Expenses, CRM, ERP, and Marketing data into a single, real-time command center."
      },
      {
        title: "Continuous Evolution",
        description: "Our engineers actively monitor and update your algorithms, ensuring your system gets smarter as technology advances."
      }
    ],
    bestFor: [
      "Multi-location businesses",
      "Manufacturing & industrial",
      "Construction & engineering",
      "Property management",
      "Franchise operators"
    ],
    outcome: "Your business runs intelligently, efficiently, and predictably."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "automation",
    title: "AI Automation & Workflow",
    shortDescription: "Eliminate redundancy. Architect efficiency.",
    fullDescription: "We deploy custom neural networks and logic flows to handle the repetitive, allowing your human talent to focus on innovation. From CRM entry to complex operational routing, our systems never sleep.",
    details: ["Custom Zapier/Make Architectures", "CRM Auto-population", "Intelligent Email Sorting", "Automated Invoicing"],
    iconName: "Cpu"
  },
  {
    id: "lead-gen",
    title: "Lead Generation Systems",
    shortDescription: "Precision targeting. High-impact pipelines.",
    fullDescription: "Forget cold calling. Our AI-driven lead engines analyze market signals to identify high-intent prospects before they even start searching. We build self-sustaining pipelines that feed your sales team qualified opportunities.",
    details: ["Predictive Analytics", "Automated Outreach Sequences", "Intent Data Scoring", "Multi-channel Funnels"],
    iconName: "Target"
  },
  {
    id: "branding",
    title: "Portfolio & Branding",
    shortDescription: "Visual identity. Curated for impact.",
    fullDescription: "In a noisy world, clarity is king. We craft minimalist, high-impact digital portfolios and brand identities that resonate with the modern consumer. Clean lines, bold typography, and a futuristic edge.",
    details: ["Visual Identity Systems", "Web Design & Development", "Copywriting & Voice", "Asset Creation"],
    iconName: "Palette"
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    shortDescription: "The blueprint for your data future.",
    fullDescription: "Transitioning to an AI-first company is daunting. We provide the roadmap. From auditing your current data infrastructure to training your leadership team, we guide your evolution into a data engine.",
    details: ["Digital Transformation Audits", "Staff Training", "Tool Stack Selection", "Long-term AI Roadmap"],
    iconName: "Map"
  }
];

export const CONTACT_EMAIL = "info@reelin.ca";
export const CONTACT_PHONE = "+1 604 757 4897";
export const ADDRESS = "Vancouver, BC";
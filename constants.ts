import { NavLink, ServiceItem, ServiceTier, Testimonial } from './types';

export const COMPANY_NAME = "Reelin";
export const TAGLINE_MAIN = "Reelin in the Unlimited Nature of AI.";
export const TAGLINE_SECONDARY = "Turning potential into precision.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Book Now", path: "/book" },
  { label: "Contact", path: "/contact" },
];

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: "foundation",
    level: "Tier 1",
    title: "Foundation",
    subtitle: "The Baseline",
    description: "Designed for simple, service-based businesses that need a professional online presence, automated booking, and never want to miss a customer inquiry.",
    longDescription: "The Foundation tier is the digital bedrock for modern service providers. In an era where 60% of bookings happen outside business hours, relying on manual phone tag is a liability. We deploy a 'always-on' reception infrastructure that captures traffic, answers basic queries, and secures appointments automatically. This isn't just a website; it's a 24/7 capture engine.",
    features: [
      "Professional website",
      "Online appointment booking",
      "AI phone & chat booking",
      "Automated confirmations & reminders",
      "Basic customer data organization"
    ],
    detailedCapabilities: [
      {
        title: "Autonomous Booking Engine",
        description: "Your calendar fills itself. We integrate booking directly into your site and social channels, synced in real-time to prevent double-booking."
      },
      {
        title: "AI Receptionist (Chat & Voice)",
        description: "An intelligent agent that answers calls and chats, answers FAQs, and guides users to book, ensuring you never miss a lead while you work."
      },
      {
        title: "No-Show Protection",
        description: "Automated SMS and email sequences remind clients of their appointments, significantly reducing lost revenue from no-shows."
      },
      {
        title: "Digital Identity",
        description: "A high-performance, mobile-optimized website designed to convert visitors into clients with minimal friction."
      }
    ],
    bestFor: [
      "Barbershops",
      "Hair salons",
      "Nail salons",
      "Lash & brow studios",
      "Massage therapists",
      "Fitness trainers"
    ],
    outcome: "Capture leads automatically and start booking customers."
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
      "Service & staff performance insights",
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
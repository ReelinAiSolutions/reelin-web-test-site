import React from 'react';
import { PricingTier, CaseStudy, FaqItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Process', href: '/#process' },
  { label: 'Results', href: '/results' },
  { 
    label: 'Solutions', 
    href: '/services',
    items: [
      { label: 'Overview', href: '/services', description: 'Compare all solutions' },
      { label: 'Foundation', href: '/solutions/foundation', description: 'Reliable lead capture & booking' },
      { label: 'Pro', href: '/solutions/pro', description: 'Structure & operational precision' },
      { label: 'Enterprise', href: '/solutions/enterprise', description: 'Scale & complex workflows' }
    ]
  },
  { label: 'About', href: '/about' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Foundation',
    price: '$997',
    description: 'Establish a modern digital intake system.',
    features: [
      'Conversion-focused Website',
      '24/7 Online Booking',
      'AI Receptionist',
      'Customer Data Capture'
    ],
    cta: 'Start Foundation',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$2,497',
    description: 'Structure, reliability, and operational precision.',
    features: [
      'Everything in Foundation',
      'AI Phone Booking',
      'Custom AI Agents',
      'Staff Performance Insights'
    ],
    cta: 'Go Pro',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Fully customized infrastructure for scale.',
    features: [
      'Everything in Pro',
      'Cross-system Integration',
      'Advanced Analytics',
      'Custom Governance Logic'
    ],
    cta: 'Consult Architect',
    highlighted: false
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "Metro HVAC",
    industry: "Home Services",
    metric: "100% Automated",
    description: "Engineered a custom dispatching system that handles intake, qualifying, and scheduling without human intervention.",
    tags: ["Process Automation", "Custom Logic"]
  },
  {
    client: "Pure Aesthetics",
    industry: "Med Spa",
    metric: "Data Structured",
    description: "Built a centralized patient data lake, allowing for predictive appointment slotting and inventory management.",
    tags: ["Data Architecture", "Efficiency"]
  },
  {
    client: "Ironclad Roofing",
    industry: "Construction",
    metric: "System Integration",
    description: "Developed a custom API wrapper to sync legacy ERP data with modern frontend tools, eliminating manual data entry.",
    tags: ["API Development", "Legacy Migration"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What systems, applications, and platforms can you integrate with?",
    answer: "We integrate with a wide range of systems and platforms, including legacy software, popular SaaS tools, CRMs, booking systems, marketing platforms, and custom databases. Our solutions support common data formats such as JSON, XML, and EDI, allowing us to connect virtually any system your business relies on—without disrupting your existing workflows."
  },
  {
    question: "How do you ensure data security?",
    answer: "Data security is a top priority. Our infrastructure is built on secure, enterprise-grade cloud architecture and protected by industry-standard encryption. We follow best practices for access control, data handling, and compliance to ensure your information remains private, protected, and fully secure at all times."
  },
  {
    question: "How does your platform handle growth and increased data usage?",
    answer: "Our systems are designed to scale with your business. Whether you experience rapid growth or gradual increases in usage, our architecture automatically adapts to handle higher data volumes without sacrificing performance, speed, or reliability."
  },
  {
    question: "What support and ongoing maintenance do you provide?",
    answer: "We provide ongoing support to ensure everything continues running smoothly after launch. Each client receives dedicated support, regular system check-ins, and proactive maintenance. Our white-glove approach includes ongoing optimization and adjustments as your business evolves."
  },
  {
    question: "How long does implementation take and what does it cost?",
    answer: "Traditional integrations can be slow and expensive. Our streamlined process allows most projects to go live within 1–4 weeks, even for custom setups. We offer transparent, competitive pricing designed to deliver enterprise-level solutions without unnecessary overhead."
  }
];
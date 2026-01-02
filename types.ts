
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface CaseStudy {
  client: string;
  industry: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  items?: { label: string; href: string; description?: string }[];
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

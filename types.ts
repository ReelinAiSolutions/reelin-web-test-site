import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  iconName: string; 
}

export interface DetailedCapability {
  title: string;
  description: string;
}

export interface ServiceTier {
  id: string; // URL slug
  level: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string; // For the detail page
  features: string[];
  detailedCapabilities?: DetailedCapability[]; // For the detail page breakdown
  bestFor: string[];
  outcome: string;
  highlight?: boolean;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  author: string;
  company: string;
  quote: string;
}

export enum ThemeColor {
  Black = 'bg-black',
  DarkGray = 'bg-zinc-900',
  Acccent = 'text-blue-500'
}
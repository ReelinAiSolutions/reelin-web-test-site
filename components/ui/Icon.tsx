import React from 'react';
import { Cpu, Target, Palette, RefreshCw, Map, ArrowRight, Check, ChevronRight, Menu, X, Mail, Globe, Zap, Sun, Moon, Box, Hexagon, Triangle, Circle, Layers, Command, Activity, Shield } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons: { [key: string]: React.ElementType } = {
    Cpu,
    Target,
    Palette,
    RefreshCw,
    Map,
    ArrowRight,
    Check,
    ChevronRight,
    Menu,
    X,
    Mail,
    Globe,
    Zap,
    Sun,
    Moon,
    Box,
    Hexagon,
    Triangle,
    Circle,
    Layers,
    Command,
    Activity,
    Shield
  };

  const LucideIcon = icons[name] || Zap;

  return <LucideIcon className={className} size={size} />;
};
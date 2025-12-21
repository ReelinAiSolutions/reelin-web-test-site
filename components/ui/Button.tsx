import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  to?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withIcon = false,
  className = '',
  to,
  href,
  ...props
}) => {
  // Ultra-safe mobile styles: z-50, pointer-events-auto, no transforms, no hidden overflow
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium focus:outline-none relative z-50 cursor-pointer pointer-events-auto";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.3)] border border-indigo-500/20",
    secondary: "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-700 shadow-[0_0_15px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.1)] hover:border-indigo-500/20",
    ghost: "bg-transparent text-black dark:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.1)] transition-all"
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <span className="flex items-center">
      {children}
      {withIcon && <Icon name="ChevronRight" size={16} className="ml-2" />}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} style={{ WebkitTapHighlightColor: 'transparent' }}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};
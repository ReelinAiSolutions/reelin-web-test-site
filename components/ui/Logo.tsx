
import React from 'react';
import { COMPANY_NAME } from '../../constants';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  iconClassName = "h-8 w-8",
  hideText = false
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src="/images/reelin-logo-new.png"
        alt="Reelin Logo"
        className={`${iconClassName} object-contain rounded-full mix-blend-screen`}
      />

      {!hideText && (
        <span className="font-bold tracking-tighter text-xl text-white transition-colors duration-300">
          {COMPANY_NAME}
        </span>
      )}
    </div>
  );
};

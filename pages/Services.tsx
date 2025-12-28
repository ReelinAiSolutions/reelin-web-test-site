import React, { useEffect, useState, useRef } from 'react';
import { SERVICE_TIERS } from '../constants';
import { Icon } from '../components/ui/Icon';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Reuse ScrollReveal logic locally
const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = "",
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-apple ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12'
        } ${className}`}
    >
      {children}
    </div>
  );
};

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "AI Services & Automation Tiers — Reelin";
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white pt-32 pb-20">

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 overflow-visible py-2">
          <span className="inline-block px-1">Integrate Smarter Systems</span>
        </h1>
        <p className="text-xl text-reflect-subtext max-w-2xl mx-auto fade-in-up delay-100 font-light">
          Customized AI Architectures designed to scale with your business.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_TIERS.map((tier, index) => {
            const isFullStack = index === 2;
            return (
              <ScrollReveal key={index} delay={index * 150} className="h-full">
                <div
                  className={`h-full relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-500 group backdrop-blur-md
                    ${isFullStack
                      ? 'bg-zinc-900/80 text-white border-white/20 shadow-2xl scale-[1.02] z-10'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }
                  `}
                >
                  {/* Highlight Glow for Full Stack */}
                  {isFullStack && (
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-20 pointer-events-none" />
                  )}

                  {/* Level Tag */}
                  <div className={`mb-6 flex justify-between items-center`}>
                    <span className={`text-xs font-bold uppercase tracking-widest text-zinc-500`}>
                      {tier.level}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">{tier.title}</h2>
                    <p className={`text-sm leading-relaxed text-zinc-400`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-8">
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 text-zinc-500`}>Core Capabilities</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <div className={`mt-1 mr-3 flex-shrink-0 text-blue-500`}>
                            <Icon name="Check" size={14} />
                          </div>
                          <span className={`text-sm leading-snug text-zinc-300`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For Section */}
                  <div className="mb-8">
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 text-zinc-500`}>Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {tier.bestFor.map((item, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-md border bg-white/5 border-white/10 text-zinc-400`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Section (Footer of Card) */}
                  <div className={`pt-8 mt-auto border-t border-white/10`}>

                    <Button
                      to={`/services/${tier.id}`}
                      variant={isFullStack ? 'secondary' : 'primary'}
                      className="w-full justify-center"
                    >
                      {isFullStack ? 'Transform Now' : 'Learn More'}
                    </Button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-32 text-center border-t border-white/10 pt-20">
        <h2 className="text-3xl font-bold mb-6 text-white">Lead the transformation.</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          The new economy is here. Secure your place at the forefront of the automated revolution.
        </p>
        <Button variant="ghost" to="/book" className="text-white hover:text-white hover:bg-white/10">Book a Strategy Call</Button>
      </div>
    </div>
  );
};
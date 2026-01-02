import React from 'react';
import { PRICING_TIERS } from '../site-constants';
import { CheckIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-900 to-background opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Investment Tiers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Transparent pricing designed to scale with your revenue. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={tier.name}
              className={`
                relative rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2
                ${tier.highlighted
                  ? 'bg-white/5 border-primary/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] z-10 scale-105'
                  : 'bg-white/5 border-white/5 hover:border-white/10'}
              `}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-medium text-slate-300 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
              </div>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{tier.description}</p>

              <button
                onClick={() => navigate('/book')}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${tier.highlighted
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {tier.cta}
              </button>

              <ul className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
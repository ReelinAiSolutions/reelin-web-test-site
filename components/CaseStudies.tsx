import React from 'react';
import { CASE_STUDIES } from '../site-constants';

export const CaseStudies: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Real Results</h2>
            <p className="text-slate-400">Trusted by forward-thinking service businesses.</p>
          </div>
          <div className="flex -space-x-4 mt-4 md:mt-0">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-surface flex items-center justify-center text-xs font-bold text-slate-500">
                Logo
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-surface flex items-center justify-center text-xs font-bold text-white">
              +40
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="h-full bg-slate-900 border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 uppercase tracking-wide">
                    {study.industry}
                  </div>
                  <div className="text-2xl font-bold text-accent">{study.metric}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {study.client}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Building the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Local Business.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We are not a marketing agency. We are a technology partner dedicated to rebuilding local commerce with automated systems.
          </p>
        </div>

        <div className="space-y-12">
           {/* Section 1 */}
           <div className="glass-card p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">The Mission</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Local businesses are the backbone of the economy, yet they are being left behind by the digital revolution. While tech giants use advanced technology to optimize everything, your local service providers are often stuck doing manual work on spreadsheets.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Reelin exists to bridge this divide. We bring enterprise-level technology to the service sector, empowering small businesses with the same competitive advantage as big corporations.
              </p>
           </div>

           {/* Section 2 */}
           <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                 <h4 className="text-xl font-bold text-white mb-3">Built to Last</h4>
                 <p className="text-sm text-slate-400">
                    We don't sell "magic". We build systems. Our team consists of expert builders who understand that reliability is the most important feature.
                 </p>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                 <h4 className="text-xl font-bold text-white mb-3">Custom Assets</h4>
                 <p className="text-sm text-slate-400">
                    We believe you should own your technology. Unlike platforms that rent you access to your own customers, we build custom assets that belong to your company.
                 </p>
              </div>
           </div>

           {/* CTA */}
           <div className="text-center pt-8">
              <p className="text-slate-400 mb-6">Want to see what we can build for you?</p>
              <button 
                onClick={() => navigate('/book')}
                className="px-8 py-4 bg-white text-surface font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
              >
                Schedule Strategy Call
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
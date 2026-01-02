import React from 'react';

export const Book: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 bg-background relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Consult with an <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Expert.</span>
          </h1>

          <div className="space-y-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Business Review</h4>
                <p className="text-sm text-slate-500">We review your current tools and manual tasks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="text-white font-medium">The Plan</h4>
                <p className="text-sm text-slate-500">We create a custom roadmap for your system.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="text-white font-medium">The Build</h4>
                <p className="text-sm text-slate-500">Receive a clear timeline for implementation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[800px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
          <iframe
            src="https://reelin-bookings-app.vercel.app/reelin"
            className="w-full h-full border-0"
            title="Book a Consultation"
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>
      </div>
    </div>
  );
};
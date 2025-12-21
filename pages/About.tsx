import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';

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

export const About: React.FC = () => {
   useEffect(() => {
      document.title = "The Reelin Protocol — About";
   }, []);

   return (
      <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-300">

         {/* Hero Section */}
         <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
            <div className="max-w-4xl">
               <ScrollReveal>
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black via-zinc-800 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-500 overflow-visible py-2">
                     <span className="inline-block px-1 overflow-visible py-1">We build systems</span> <br />
                     <span className="text-blue-500 dark:text-blue-400 inline-block px-1 overflow-visible py-1">that evolve.</span>
                  </h1>
               </ScrollReveal>
               <ScrollReveal delay={200}>
                  <div className="space-y-8 text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl border-l-2 border-blue-500/20 pl-8 transition-colors">
                     <p>
                        Reelin designs purpose-built AI architectures for businesses that want more than surface-level automation. Our work focuses on building intelligent systems that integrate seamlessly into operations, adapt over time, and create lasting leverage.
                     </p>
                     <p>
                        We don’t chase trends or ship one-size-fits-all solutions. Every system we design is shaped around how a business actually works — its workflows, data, and long-term goals.
                     </p>
                  </div>
               </ScrollReveal>
            </div>
         </section>

         {/* Our Approach */}
         <section className="py-32 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <ScrollReveal>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Our Approach</h2>
                     <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                        AI delivers its greatest value when it’s treated as infrastructure, not a feature.
                     </p>
                     <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                        At Reelin, we design systems that:
                     </p>
                  </ScrollReveal>

                  <div className="space-y-4">
                     {[
                        "Align with real operational workflows",
                        "Learn from usage and data over time",
                        "Scale without adding complexity"
                     ].map((point, i) => (
                        <ScrollReveal key={i} delay={i * 150}>
                           <div className="flex items-center gap-4 p-6 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm transition-all hover:border-blue-500/30">
                              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                              <span className="text-lg font-medium">{point}</span>
                           </div>
                        </ScrollReveal>
                     ))}
                  </div>
               </div>

               <ScrollReveal delay={500} className="mt-16 text-center">
                  <p className="text-xl font-medium text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic">
                     "The result is AI that supports teams quietly and reliably, freeing time and attention for higher-value work."
                  </p>
               </ScrollReveal>
            </div>
         </section>

         {/* What We Believe */}
         <section className="py-32 bg-black text-white dark:bg-zinc-900 dark:text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.1] bg-[size:30px_30px]"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
               <ScrollReveal>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">What We Believe</h2>
                  <div className="space-y-12 mb-16">
                     <div className="space-y-4">
                        <p className="text-2xl md:text-3xl font-light">Technology should reduce friction, not introduce it.</p>
                        <p className="text-2xl md:text-3xl font-light">Automation should create clarity, not noise.</p>
                        <p className="text-2xl md:text-3xl font-light">Systems should compound value, not require constant replacement.</p>
                     </div>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                     We believe the strongest advantage comes from AI that is thoughtfully engineered — designed to grow alongside the business it serves.
                  </p>
               </ScrollReveal>
            </div>
         </section>

         {/* How We Work */}
         <section className="py-32 px-6 max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How We Work</h2>
               <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
               <p className="mt-8 text-zinc-600 dark:text-zinc-400 text-lg font-light">Our process is intentionally structured and collaborative.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                  {
                     title: "1. Understand the Operation",
                     desc: "We start by learning how your business runs today and where leverage matters most.",
                     icon: "Search"
                  },
                  {
                     title: "2. Design the Architecture",
                     desc: "We design AI systems around your workflows, data, and objectives — not templates.",
                     icon: "Layout"
                  },
                  {
                     title: "3. Build & Integrate",
                     desc: "Systems are implemented with care, ensuring stability, usability, and alignment.",
                     icon: "Cpu"
                  },
                  {
                     title: "4. Evolve Over Time",
                     desc: "As your business grows, your system grows with it — adapting through real use and insight.",
                     icon: "RefreshCw"
                  }
               ].map((step, i) => (
                  <ScrollReveal key={i} delay={i * 100} className="relative">
                     {i < 3 && (
                        <div className="hidden lg:block absolute top-8 -right-6 w-12 border-t border-dashed border-zinc-300 dark:border-zinc-800 z-0"></div>
                     )}
                     <div className="relative z-10 space-y-4">
                        <div className="text-blue-500 bg-blue-50 dark:bg-blue-900/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                           <Icon name={step.icon as any} size={32} />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                           {step.desc}
                        </p>
                     </div>
                  </ScrollReveal>
               ))}
            </div>
         </section>

         {/* Who We Work With */}
         <section className="py-32 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 text-center">
               <ScrollReveal>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Who We Work With</h2>
                  <div className="space-y-6 text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                     <p>
                        Reelin partners with businesses that value long-term thinking — founders and teams who want systems that scale, not tools they outgrow.
                     </p>
                     <p>
                        Whether supporting early growth or refining mature operations, our focus remains the same: building AI that fits, lasts, and evolves.
                     </p>
                  </div>
               </ScrollReveal>
            </div>
         </section>

         {/* Looking Ahead */}
         <section className="py-32 px-6 max-w-4xl mx-auto text-center">
            <ScrollReveal>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Looking Ahead</h2>
               <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  AI is not static — and neither are the businesses that rely on it. Our role is to design systems prepared for change, built with flexibility, intelligence, and longevity at their core.
               </p>
            </ScrollReveal>
         </section>

         {/* Final CTA */}
         <section className="py-40 px-6 max-w-7xl mx-auto text-center border-t border-zinc-100 dark:border-zinc-900">
            <ScrollReveal>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-500 dark:from-white dark:to-zinc-500 overflow-visible py-2">
                  Ready to Upgrade?
               </h2>
               <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
                  From tools to systems — AI designed to evolve with your business.
               </p>
               <div className="flex justify-center">
                  <Button
                     size="lg"
                     to="/book"
                     className="px-12"
                  >
                     Book a Strategy Call
                  </Button>
               </div>
            </ScrollReveal>
         </section>

      </div>
   );
};
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICE_TIERS } from '../constants';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';

export const ServiceDetail: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const tier = SERVICE_TIERS.find(t => t.id === id);

   useEffect(() => {
      if (tier) {
         document.title = `${tier.title} — Reelin System Architecture`;
         window.scrollTo(0, 0);
      }
   }, [tier]);

   if (!tier) {
      return <Navigate to="/services" replace />;
   }

   const isFullStack = tier.id === 'autonomous-enterprise';

   return (
      <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white pt-32 pb-20 transition-colors duration-300">

         {/* Back Link */}
         <div className="max-w-7xl mx-auto px-6 mb-12">
            <Link to="/services" className="inline-flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-sm font-medium">
               <Icon name="ArrowRight" className="rotate-180 mr-2" size={16} />
               Return to Roadmap
            </Link>
         </div>

         {/* Hero Section */}
         <div className="max-w-7xl mx-auto px-6 mb-24">
            <div className="max-w-4xl">
               <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-mono mb-6 text-zinc-600 dark:text-zinc-400">
                  SYSTEM LEVEL: {tier.level}
               </span>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-zinc-800 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-500">
                  {tier.title}
               </h1>
               <p className="text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-8">
                  {tier.subtitle}
               </p>
               <div className="flex gap-4">
                  <Button size="lg" to="/book" className={isFullStack ? "bg-white text-black hover:bg-zinc-200 dark:bg-white dark:text-black" : ""}>
                     Deploy System
                  </Button>
               </div>
            </div>
         </div>

         {/* System Overview Content */}
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">

               {/* Long Description */}
               <section>
                  <h3 className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">System Overview</h3>
                  <div className="space-y-6">
                     {(tier.longDescription || tier.description).split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">
                           {paragraph}
                        </p>
                     ))}
                  </div>
               </section>

               {/* Detailed Capabilities */}
               {tier.detailedCapabilities && (
                  <section>
                     <h3 className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8">System Architecture</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tier.detailedCapabilities.map((cap, idx) => (
                           <div key={idx} className="p-6 bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                              <h4 className="text-lg font-bold mb-3">{cap.title}</h4>
                              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                 {cap.description}
                              </p>
                           </div>
                        ))}
                     </div>
                  </section>
               )}

               {/* Target Audience (Mobile Layout usually, but included in flow here) */}
               <section>
                  <h3 className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">Optimized For</h3>
                  <div className="flex flex-wrap gap-3">
                     {tier.bestFor.map((item, idx) => (
                        <span
                           key={idx}
                           className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-sm text-zinc-600 dark:text-zinc-300"
                        >
                           {item}
                        </span>
                     ))}
                  </div>
               </section>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
               <div className={`2xl:sticky 2xl:top-32 p-8 rounded-3xl ${isFullStack ? 'bg-zinc-900 text-white border border-zinc-800' : 'bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800'}`}>
                  {tier.outcome && (
                     <>
                        <h3 className="text-lg font-bold mb-6">Outcome</h3>
                        <p className={`text-2xl font-semibold leading-tight mb-8 ${isFullStack ? 'text-white' : 'text-black dark:text-white'}`}>
                           {tier.outcome}
                        </p>
                        <div className="w-full h-px bg-current opacity-10 mb-8"></div>
                     </>
                  )}

                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Includes</h4>
                  <ul className="space-y-3 mb-8">
                     {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                           <Icon name="Check" size={16} className={`mr-3 mt-0.5 ${isFullStack ? 'text-blue-400' : 'text-blue-500'}`} />
                           <span className="opacity-90">{feature}</span>
                        </li>
                     ))}
                  </ul>

                  <Button to="/book" className="w-full justify-center" variant={isFullStack ? 'secondary' : 'primary'}>
                     Initialize Request
                  </Button>
               </div>
            </div>

         </div>
      </div>
   );
};
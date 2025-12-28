import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { DashboardHero } from '../components/DashboardHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { Starfield } from '../components/Starfield';

import { RadarAnimation } from '../components/RadarAnimation';





// --- Social Proof Marquee ---
const SocialProof = () => (
  <div className="w-full py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden relative z-20">
    <div className="max-w-7xl mx-auto px-6 flex items-center gap-12 animate-[scroll_30s_linear_infinite] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
      {/* Placeholder Logos */}
      {['Acme Corp', 'Global Dynamics', 'Umbrella Inc', 'Cyberdyne', 'Massive Dynamic', 'Stark Ind', 'Wayne Ent'].map((logo, i) => (
        <span key={i} className="text-xl font-bold tracking-widest text-white/40 whitespace-nowrap">{logo.toUpperCase()}</span>
      ))}
      {['Acme Corp', 'Global Dynamics', 'Umbrella Inc', 'Cyberdyne', 'Massive Dynamic', 'Stark Ind', 'Wayne Ent'].map((logo, i) => (
        <span key={`dup-${i}`} className="text-xl font-bold tracking-widest text-white/40 whitespace-nowrap">{logo.toUpperCase()}</span>
      ))}
    </div>
  </div>
);

// --- Deep Dive Section ---
const DeepDiveSection: React.FC<{
  title: string;
  description: string;
  align?: 'left' | 'right';
  image?: string
}> = ({ title, description, align = 'left', image }) => (
  <section className="py-32 relative z-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
      <div className={`flex-1 ${align === 'right' ? 'md:order-2' : ''}`}>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h3>
          <p className="text-lg text-reflect-subtext leading-relaxed">
            {description}
          </p>
          <Button variant="secondary" className="border-white/10 hover:bg-white/10">Learn more</Button>
        </div>
      </div>

      {/* Visual */}
      <div className={`flex-1 relative aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md group ${align === 'right' ? 'md:order-1' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent group-hover:from-violet-500/20 transition-colors duration-500"></div>
        {/* Placeholder for dynamic content or image */}
        <div className="absolute inset-0 flex items-center justify-center text-white/20">
          <Icon name="Monitor" size={64} />
        </div>
      </div>
    </div>
  </section>
);


// --- Main Page ---

export const Home: React.FC = () => {
  const { triggerPulse } = useAnimation();
  const [highlightStage, setHighlightStage] = useState(0);


  // Animation Stages
  const [stage, setStage] = useState('initial');

  useEffect(() => {
    document.title = "Reelin — Intelligent Systems";

    // Animation Sequence
    const sequence = async () => {
      // 1. Initial Black Screen -> Reveal (Fade In)
      await new Promise(r => setTimeout(r, 200));
      setStage('reveal');

      // 2. Wait for reveal to complete
      await new Promise(r => setTimeout(r, 1200));
      setStage('pulse1');
      triggerPulse(); // Global Pulse

      // 3. Pulse 1 triggers Text
      await new Promise(r => setTimeout(r, 400));
      setStage('text');

      // 4. Wait, then Pulse 2
      await new Promise(r => setTimeout(r, 300));
      setStage('pulse2');
      triggerPulse(); // Global Pulse

      // 5. Pulse 2 triggers Buttons
      await new Promise(r => setTimeout(r, 400));
      setStage('buttons');
    };
    sequence();

    // Simple sequence trigger for other highlights (optional)
    setTimeout(() => setHighlightStage(4), 500);

  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-indigo-500/30 selection:text-white overflow-x-hidden font-sans">

      {/* Animation Overlays (Fixed to cover global elements) */}

      {/* 1. Black Overlay -> Fades out to reveal site */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black pointer-events-none"
        initial={{ opacity: 1 }}
        animate={stage === 'initial' ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />


      {/* Hero Content (Animated) */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-0 px-6 z-10">

        <div className="relative text-center max-w-4xl mx-auto z-20 mt-16 flex flex-col items-center">

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={['text', 'pulse2', 'buttons'].includes(stage) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[44px] md:text-[64px] lg:text-[80px] font-bold font-sans tracking-[-0.01em] leading-[1.1] text-white drop-shadow-2xl [text-shadow:_0_0_40px_rgba(255,255,255,0.3)] text-center"
          >
            Reelin
          </motion.h1>

          {/* H2 Wrapper */}
          <div className="mt-6 mb-10 max-w-xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={['text', 'pulse2', 'buttons'].includes(stage) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[20px] font-medium font-sans leading-[28px] tracking-[0.05em] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
            >
              Custom Built AI Systems.
            </motion.h2>
          </div>

          {/* Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={stage === 'buttons' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
          >
            <Button size="lg" to="/book" className="bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-medium text-[15px] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
              Start Now
            </Button>
            <Button variant="secondary" size="lg" to="/services" className="bg-white/5 text-white hover:bg-white/10 border border-white/5 px-6 py-3 rounded-full font-medium text-[15px] backdrop-blur-md transition-all hover:scale-105">
              Explore
            </Button>
          </motion.div>
        </div>

      </section>

      {/* Value Proposition & Radar Section */}
      <section className="relative z-20 w-full py-12">

        {/* Background Masking & Horizon Glow */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* 1. Mask the fixed video: Start transparent, quickly become solid dark to hide black hole */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014] via-20% to-[#030014]"></div>

          {/* 2. Horizon Glow Effect (Mimicking reference) */}
          <div className="absolute top-[20%] left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_100%_50%_at_50%_0%,rgba(50,20,100,0.4),transparent)] blur-3xl opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent pb-4">
            <span className="block">The future belongs to the automated.</span>
            <span className="block">Reel-in a competitive edge ordinary AI tools can’t match.</span>
          </h2>
          <p className="text-2xl text-reflect-subtext font-light leading-relaxed max-w-3xl mx-auto">
            At Reelin, we design purpose-built AI architectures that adapt, learn, and scale with your operation — freeing your team to focus on what actually moves the business forward.
          </p>

          {/* Radar Removed from here */}

        </div>
      </section>

      {/* Lead Capture Section (Side-by-Side) */}
      <section className="py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">

          {/* Text Content */}
          <div className="flex-1">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Never lose a lead.
              </h3>
              <p className="text-lg text-reflect-subtext leading-relaxed">
                Our autonomous agents capture, qualify, and engage every visitor 24/7. No more missed opportunities.
              </p>
              <Button variant="secondary" className="border-white/10 hover:bg-white/10">See how it works</Button>
            </div>
          </div>

          {/* Visual: Radar */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="scale-75 md:scale-100 transform-gpu">
              <RadarAnimation />
            </div>
          </div>

        </div>
      </section>



      {/* Deep Dives */}
      <DeepDiveSection
        title="Intelligent Scheduling"
        description="Forget manual bookings. Our system handles time zones, cancellations, and reminders automatically, syncing seamlessly with your calendar."
      />

      {/* Data-Driven Insights & Analytics Dashboard */}
      <section className="py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          {/* Text Content */}
          <div className="flex-1">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Data-Driven Insights
              </h3>
              <p className="text-lg text-reflect-subtext leading-relaxed">
                Visualize your revenue streams and client retention rates in real-time. Make decisions based on data, not guesswork.
              </p>
              <Button variant="secondary" className="border-white/10 hover:bg-white/10">Learn more</Button>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="flex-1 w-full min-w-0">
            <ScrollReveal>
              <div className="transform scale-90 origin-top">
                <DashboardHero />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 relative overflow-hidden bg-[#030014] text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            Ready to evolve?
          </h2>
          <div className="flex justify-center gap-4">
            <Button size="lg" to="/book" className="bg-white text-black hover:bg-zinc-200 px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
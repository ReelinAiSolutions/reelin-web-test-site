import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { About } from './pages/About';
import { Booking } from './pages/Booking';
import { Chatbot } from './components/Chatbot';
import { GlobalBackground } from './components/GlobalBackground';

import { OpeningV1 } from './pages/prototypes/OpeningV1';
import { OpeningV2 } from './pages/prototypes/OpeningV2';
import { OpeningV3 } from './pages/prototypes/OpeningV3';
import { OpeningV4 } from './pages/prototypes/OpeningV4';
import { OpeningV5 } from './pages/prototypes/OpeningV5';
import { OpeningHybrid } from './pages/prototypes/OpeningHybrid';
import { OpeningV7 } from './pages/prototypes/OpeningV7';
import { OpeningV8 } from './pages/prototypes/OpeningV8';

import { AnimationProvider } from './context/AnimationContext';

// Scroll to top on route change wrapper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AnimationProvider>
      <Router>
        <ScrollToTop />
        <GlobalBackground />
        <div className="relative z-10 flex flex-col min-h-screen bg-transparent text-white font-sans selection:bg-indigo-500/30 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Booking />} />

              {/* Animation Prototypes */}
              <Route path="/v1" element={<OpeningV1 />} />
              <Route path="/v2" element={<OpeningV2 />} />
              <Route path="/v3" element={<OpeningV3 />} />
              <Route path="/v4" element={<OpeningV4 />} />
              <Route path="/v5" element={<OpeningV5 />} />
              <Route path="/v6" element={<OpeningHybrid />} />
              <Route path="/v7" element={<OpeningV7 />} />
              <Route path="/v8" element={<OpeningV8 />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AnimationProvider>
  );
};

export default App;
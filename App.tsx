import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Results } from './pages/Results';
import { Foundation } from './pages/solutions/Foundation';
import { Pro } from './pages/solutions/Pro';
import { Enterprise } from './pages/solutions/Enterprise';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-slate-200 selection:bg-primary/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/solutions/foundation" element={<Foundation />} />
            <Route path="/solutions/pro" element={<Pro />} />
            <Route path="/solutions/enterprise" element={<Enterprise />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
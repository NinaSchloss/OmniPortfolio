import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LowesCaseStudy } from './pages/LowesCaseStudy';
import { BounceRateCaseStudy } from './pages/BounceRateCaseStudy';
import { Home } from 'lucide-react';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Sticky Top Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors font-medium">
            <Home className="w-5 h-5" />
            <span>Nina Schloss</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/lowes-case-study" className="text-gray-600 hover:text-blue-600 transition-colors">
              Lowe's App
            </Link>
            <Link to="/reducing-bounce-rate" className="text-gray-600 hover:text-purple-600 transition-colors">
              Bounce Rate
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area (padding-top to account for fixed nav) */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lowes-case-study" element={<LowesCaseStudy />} />
          <Route path="/reducing-bounce-rate" element={<BounceRateCaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

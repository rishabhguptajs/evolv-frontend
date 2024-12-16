"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      scrolled 
        ? 'bg-[#0A0A0F]/95 backdrop-blur-2xl border-b border-white/5 h-16 sm:h-16 shadow-lg shadow-violet-950/20' 
        : 'bg-[#0A0A0F]/30 backdrop-blur-sm h-16 sm:h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="/" className="group relative flex items-center gap-2 sm:gap-3">
            <div className="relative z-10">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"/>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-[1px] relative">
                <div className="h-full w-full rounded-xl bg-[#0A0A0F] flex items-center justify-center transform group-hover:bg-opacity-50 transition-all duration-500">
                  <span className="text-base sm:text-lg font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">e</span>
                </div>
              </div>
            </div>
            <span className="text-lg sm:text-xl font-bold relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-500 ease-out group-hover:-translate-y-full">evolv</span>
              <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">evolv</span>
              </span>
            </span>
          </a>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}/>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>

          
          <div className="hidden md:flex items-center gap-2">
            {["Features", "Pricing", "About", "Blog"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative px-3 lg:px-5 py-2"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`absolute inset-0 bg-white/5 rounded-lg transform origin-left transition-transform duration-500 ease-out ${
                  hoveredItem === item ? 'scale-x-100' : 'scale-x-0'
                }`}/>
                <div className="absolute bottom-1.5 left-3 right-3 lg:left-5 lg:right-5 h-px">
                  <div className={`absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 transform origin-left transition-transform duration-500 ease-out ${
                    hoveredItem === item ? 'scale-x-100' : 'scale-x-0'
                  }`}/>
                </div>
                <span className={`relative text-xs lg:text-sm transition-colors duration-300 ${
                  hoveredItem === item ? 'text-white' : 'text-white/70'
                }`}>
                  {item}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button className="relative text-xs lg:text-sm text-white/70 hover:text-white transition-colors duration-300 overflow-hidden group">
              <span className="relative z-10">Log in</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
            </button>
            <button className="relative px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600"/>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <span className="relative text-xs lg:text-sm font-medium">Get Started</span>
            </button>
          </div>
        </div>

        <div className={`md:hidden fixed inset-x-0 top-16 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {["Features", "Pricing", "About", "Blog"].map((item) => (
              <a 
                key={item}
                href="#"
                className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Log in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div 
          className="h-full transition-all duration-150 ease-out"
          style={{ 
            width: `${scrollProgress}%`,
            background: `linear-gradient(
              to right,
              rgb(139, 92, 246),
              rgb(168, 85, 247),
              rgb(139, 92, 246)
            )`,
            backgroundSize: '200% 100%',
            animation: 'gradient 2s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>
    </nav>
  );
}
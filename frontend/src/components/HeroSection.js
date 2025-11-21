//Hero section of landing/home page//
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start slow fade-in immediately
    setShowContent(true);
    
    // Start the typed animation sequence after fade-in completes
    setTimeout(() => {
    const typed = new Typed(typedRef.current, {
        strings: ['Nourishing Communities, Preserving Dignity'],
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: true,        
        cursorChar: '|', //I have tried and tried to remove the double cursor, but alas now my brain is fried. It is there for extra spice✨           
        onComplete: () => {
        setCurrentStep(1); // Show "A decentralized..." text
        setTimeout(() => setCurrentStep(2), 500); // Show button
        setTimeout(() => setCurrentStep(3), 1000); // Show scroll text
        }
    });
    }, 2500); // Start typing after 2.5-second fade completes

    return () => {
      if (typedRef.current?.typed) {
        typedRef.current.typed.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden pt-20">
      {/* Beam of Light Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main beam */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-96 bg-gradient-to-b from-green-400/10 via-green-300/5 to-transparent blur-3xl"></div>
        
        {/* Secondary beams */}
        <div className="absolute top-10 left-1/4 w-1/3 h-80 bg-gradient-to-b from-green-500/5 to-transparent blur-2xl rotate-12"></div>
        <div className="absolute top-5 right-1/4 w-1/3 h-72 bg-gradient-to-b from-green-600/5 to-transparent blur-2xl -rotate-12"></div>
      </div>

      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 via-green-700/20 to-green-800/40 animate-gradient-x"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMiIvPjwvc3ZnPg==')] opacity-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl mx-auto">
        {/* Header and Image Container - Slow 3-second fade in */}
        <div className={`transition-all duration-[3000ms] ease-out mb-10 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Main title with oscillating gradient */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
            Little Treasures
          </h1>
          
          {/* Seedling icon that pulses */}
          <div className="text-4xl mb-4 animate-pulse-slow">🌱</div>

          {/* Food bank image - Full image, no cropping, rounded edges */}
          <div className="relative max-w-2xl mx-auto mb-0 flex justify-center">
            <div className="relative">
              <img 
                src="/images/hero/foodbank.jpg" 
                alt="Little Treasures Food Bank Initiative"
                className="max-w-full h-auto max-h-72 object-scale-down rounded-2xl transform transition-all duration-1000"
                style={{
                  filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
                }}
              />
              
              {/* Blurred edge effect */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `
                    0 0 80px 30px rgba(34, 197, 94, 0.2),
                    0 0 120px 50px rgba(34, 197, 94, 0.1),
                    0 0 180px 70px rgba(34, 197, 94, 0.05),
                    inset 0 0 40px rgba(34, 197, 94, 0.1)
                  `,
                }}
              />
              
              {/* Subtle vignette */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-900/30 via-transparent to-green-900/30 pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Typed text */}
        <div className="text-xl md:text-3xl font-light mb-4 h-12 font-serif">
          <span ref={typedRef} className="text-green-100"></span>
        </div>
        
        {/* "A decentralized..." text */}
        <div className={`transition-all duration-1000 ${
          currentStep >= 1 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}>
          <p className="text-lg md:text-xl leading-relaxed text-green-200 max-w-2xl mx-auto font-light mb-10">
            A decentralized, tech-enabled food security initiative fighting hunger 
            through community-powered solutions in Nairobi.
          </p>
        </div>

        {/* Call To Action button */}
        <div className={`transition-all duration-1000 ${
          currentStep >= 2 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}>
          <button 
            onClick={() => {
              sessionStorage.setItem('scrollToVolunteer', 'true');
              document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-10 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl border border-green-400/20 backdrop-blur-sm mb-3"
          >
            Join Our Mission
          </button>
        </div>

        {/* Scroll text */}
        <div className={`transition-all duration-1000 ${
          currentStep >= 3 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}>
          <p className="text-green-300/70 text-xs uppercase tracking-widest font-medium">
            Scroll to learn more
          </p>
        </div>
      </div>

      

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-gradient-x {
          animation: gradient-x 20s ease infinite;
          background-size: 200% 200%;
        }
        .animate-shimmer {
          animation: shimmer 10s ease-in-out infinite;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
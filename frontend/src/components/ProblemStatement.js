import React from 'react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: '🌱',
      title: 'Stigma & Indignity',
      description: 'Traditional food aid requires public gatherings and visible collection, stripping individuals of dignity and forcing them to choose between hunger and self-respect.',
      image: '/images/problem/stigma.jpg' 
    },
    {
      icon: '🌱',
      title: 'Inefficiency & Infrequency',
      description: 'Centralized charity drives create "feast or famine" cycles that don\'t address daily food insecurity, leaving families uncertain about their next meal.',
      image: '/images/problem/inefficiency.jpg'
    },
    {
      icon: '🌱',
      title: 'Barriers to Access',
      description: 'Many cannot travel to central distribution points due to work commitments, disability, or prohibitive transport costs, creating geographic food deserts.',
      image: '/images/problem/accessibility.jpeg'
    },
    {
      icon: '🌱',
      title: 'Politicization of Aid',
      description: 'Food disbursements are sometimes tied to political agendas, forcing recipients to trade their time and dignity for basic sustenance at rallies and events.',
      image: '/images/problem/politicization.jpg'
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The Problem We're Solving
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Traditional food aid systems are fundamentally broken, creating barriers that prevent millions from accessing the nutrition they need with the dignity they deserve.
            </p>
          </div>
        </div>

        {/* Problems grid - Desktop: Image right, content left | Mobile: Image top, content bottom */}
        <div className="space-y-24">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content - Left on desktop, top on mobile */}
              <div className="flex-1 text-left">
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{problem.icon}</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-90">
                  {problem.description}
                </p>
              </div>

              {/* Image - Right on desktop, top on mobile */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative group">
                  {/* Main image */}
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-full h-82 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-105"
                    style={{
                      filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
                    }}
                  />
                  
                  {/* Blurred edge effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `
                        0 0 60px 20px rgba(34, 197, 94, 0.15),
                        0 0 100px 40px rgba(34, 197, 94, 0.1),
                        0 0 150px 60px rgba(34, 197, 94, 0.05)
                      `,
                    }}
                  />
                  
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-900/30 via-transparent to-green-900/30 pointer-events-none"></div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-500 pointer-events-none"></div>
                </div>
                
                {/* Fallback if image not available */}
                {!problem.image && (
                  <div className="w-full h-64 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl text-green-200">{problem.icon}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
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
        .animate-gradient-x {
          animation: gradient-x 20s ease infinite;
          background-size: 200% 200%;
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProblemStatement;
import React from 'react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: '🏪',
      title: 'Decentralized Network',
      description: 'Secure storage banks in high-traffic community locales'
    },
    {
      icon: '📱',
      title: 'Digital Access Layer',
      description: 'USSD system accessible on any mobile phone'
    },
    {
      icon: '🤝',
      title: 'Community Powered',
      description: 'Volunteer-driven model ensuring local ownership'
    },
    {
      icon: '🎯',
      title: 'Dignity First',
      description: 'Anonymous, self-service access preserving individual dignity'
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <div className="mt-4 max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              A network of <strong>secure, branded food storage banks in high traffic community locales</strong>, stocked by volunteers, partnering suppliers, and organized food drives, and accessed/managed via digital platforms.
            </p>
          </div>
        </div>

        {/* Two Pillars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Pillar 1: Physical Network */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Physical Network</h3>
            </div>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span><strong>Secure, branded food storage banks</strong> (lockers, pantries, fridges) placed in strategic locations (churches, community centers, clinics).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span><strong>Stocked by volunteers</strong> through scheduled pickups from donors and organized food drives.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Digital Access Layer */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Digital Access Layer (USSD System and Web Application)</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 text-lg mb-4">
                A dedicated website as well as USSD infrastructure for a shortcode (e.g., <strong>*483*767#</strong>) accessible on any phone. These will offer the following capabilities:
              </p>
            </div>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span><strong>For Beneficiaries</strong>: Quick sign-up, location-based prompts for nearest stocked food bank, and a unique access code to unlock units.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span><strong>For Volunteers</strong>: Sign-up portal, scheduling for pickups, and stock-level notifications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span><strong>For Donors</strong>: Option to get information and schedule a pickup/drop-off.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Cards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Join Our Mission CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Be part of the solution to food insecurity in Nairobi. Your time and skills can help nourish communities and preserve dignity.
          </p>
          <button
            onClick={() => document.getElementById('volunteer').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Become a Volunteer
          </button>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4 text-white">
                <div className="w-8 h-px bg-gray-300"></div>
                <span className="text-sm uppercase tracking-widest">Donor and Partner signup coming soon</span>
                <div className="w-8 h-px bg-gray-300"></div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default SolutionSection;
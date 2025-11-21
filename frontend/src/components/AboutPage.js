import React from 'react';
import TeamSection from './TeamSection';
import ProjectTimeline from './ProjectTimeline';
import NairobiMap from './NairobiMap';
import { RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section for About Page */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
            About Little Treasures
          </h1>
          {/* Seedling icon that pulses */}
          <div className="text-4xl mb-4 animate-pulse-slow">🌱</div>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95">
            Learn about our mission, team, progress, and how we're addressing 
            food insecurity through technology and community partnerships.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <RocketLaunchIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To eliminate food insecurity in urban areas through decentralized, 
                dignified access to nutritious food, powered by technology and 
                community collaboration.
              </p>
            </div>
            <div className="text-center">
              <EyeIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A future where no individual has to choose between dignity and 
                sustenance, and where communities are empowered to support 
                each other through scalable, sustainable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Integration Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            UN Sustainable Development Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: 'SDG 1',
                title: 'No Poverty',
                description: 'Alleviating a key cost burden for vulnerable families',
                color: '#e53935'
              },
              {
                number: 'SDG 2', 
                title: 'Zero Hunger',
                description: 'Providing direct and consistent access to food',
                color: '#d81b60'
              },
              {
                number: 'SDG 3',
                title: 'Good Health & Well-being',
                description: 'Improving nutrition and reducing stress',
                color: '#8e24aa'
              },
              {
                number: 'SDG 10',
                title: 'Reduced Inequalities', 
                description: 'Creating equitable access to food resources',
                color: '#5e35b1'
              },
              {
                number: 'SDG 11',
                title: 'Sustainable Cities',
                description: 'Building resilient urban food systems',
                color: '#3949ab'
              },
              {
                number: 'SDG 17',
                title: 'Partnerships for Goals',
                description: 'Collaborating across sectors for maximum impact',
                color: '#1e88e5'
              }
            ].map((sdg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4" style={{ borderTopColor: sdg.color }}>
                <div className="text-2xl font-bold mb-3" style={{ color: sdg.color }}>
                  {sdg.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sdg.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call in sandalone components for next 3 sections */}
      {/* Team Section */}
      <TeamSection />

      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Nairobi Map Visualization */}
      <NairobiMap />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-95">
            Join our growing community of volunteers and help us fight food insecurity in Nairobi.
          </p>
          <a 
            href="#volunteer"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
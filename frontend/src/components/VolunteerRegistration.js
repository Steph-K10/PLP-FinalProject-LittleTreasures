import React, { useState } from 'react';
import axios from 'axios'; //apparently there is a casing issue somewhere with a cached path that put lowercase 'plp' in the path insttead of 'PLP' i cant find it though :(
import { locationData } from '../utils/locations';
import config from '../config';

const VolunteerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryLocation: '',
    secondaryLocations: [],
    availability: 'flexible',
    skills: ''
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSecondaryLocationChange = (zone) => {
    setFormData(prev => {
      const current = prev.secondaryLocations;
      if (current.includes(zone)) {
        return { ...prev, secondaryLocations: current.filter(loc => loc !== zone) };
      } else if (current.length < 3) {
        return { ...prev, secondaryLocations: [...current, zone] };
      }
      return prev;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill);
      
      const response = await axios.post(`${config.apiUrl}/api/volunteers`, {
        ...formData,
        skills: skillsArray
      });

      setMessage('✅ Thank you for registering as a volunteer! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        primaryLocation: '',
        secondaryLocations: [],
        availability: 'flexible',
        skills: ''
      });
    } catch (error) {
      setMessage('❌ Error registering: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Updated Header with Oscillating Gradient */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 via-green-400 to-green-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          Join Our Volunteer Team
        </h2>
        
        <p className="text-xl text-gray-600 text-center mb-8">
          Help us fight food insecurity in your community
        </p>

        {/* Message Alert */}
        {message && (
          <div className={`p-4 my-5 rounded-lg text-center border ${
            message.includes('❌') 
              ? 'bg-red-50 border-red-300 text-red-800' 
              : 'bg-green-50 border-green-300 text-green-800'
          }`}>
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Primary Location Dropdown */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Primary Location *
            </label>
            <select
              name="primaryLocation"
              value={formData.primaryLocation}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select your primary zone</option>
              {locationData.regions.map(region => (
                <optgroup key={region.name} label={region.name}>
                  {region.zones.map(zone => (
                    <option key={zone} value={zone}>{zone}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Secondary Locations Checkboxes */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Secondary Locations (Optional, max 3)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto p-3 border border-gray-300 rounded-lg">
              {locationData.allZones.map(zone => (
                <label 
                  key={zone} 
                  className={`flex items-center text-sm ${
                    formData.primaryLocation === zone ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.secondaryLocations.includes(zone)}
                    onChange={() => handleSecondaryLocationChange(zone)}
                    disabled={
                      formData.secondaryLocations.length >= 3 && !formData.secondaryLocations.includes(zone) || 
                      formData.primaryLocation === zone  // ← ADD THIS LINE
                    }
                    className={`mr-2 text-green-600 focus:ring-green-500 ${
                      formData.primaryLocation === zone ? 'cursor-not-allowed' : ''
                    }`}
                  />
                  <span className={formData.primaryLocation === zone ? 'text-gray-400' : 'text-gray-700'}>
                    {zone}
                  </span>
                </label>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Selected: {formData.secondaryLocations.length}/3
            </div>
          </div>

          {/* Availability */}
          <div className="mb-5">
            <label className="block text-gray-900 font-bold mb-2">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="flexible">Flexible</option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <label className="block text-gray-900 font-bold mb-2">
              Skills (comma separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., logistics, community outreach, driving"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-700 hover:bg-green-800 transform hover:scale-105'
            }`}
          >
            {isLoading ? 'Registering...' : 'Join as Volunteer'}
          </button>
        </form>
      </div>
      <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-gray-600">
              <div className="w-8 h-px bg-gray-600"></div>
              <span className="text-sm uppercase tracking-widest">learn more about our mission, and see our team's growth on the about page</span>
              <div className="w-8 h-px bg-gray-600"></div>
          </div>
      </div>
    </section>
  );
};

export default VolunteerRegistration;
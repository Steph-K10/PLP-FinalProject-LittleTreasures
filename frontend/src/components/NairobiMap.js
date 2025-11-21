import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { zoneCoordinates } from '../utils/locations';
import config from '../config';

const NairobiMap = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [zoneVolunteerCounts, setZoneVolunteerCounts] = useState({});
  const mapContainerRef = useRef(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0, left: 0, top: 0 });

  useEffect(() => {
    fetchVolunteers();
    updateMapDimensions();
    window.addEventListener('resize', updateMapDimensions);
    
    return () => window.removeEventListener('resize', updateMapDimensions);
  }, []);

  const updateMapDimensions = () => {
    if (mapContainerRef.current) {
      const container = mapContainerRef.current;
      const img = container.querySelector('img');
      if (img) {
        const rect = img.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        setMapDimensions({
          width: rect.width,
          height: rect.height,
          left: rect.left - containerRect.left,
          top: rect.top - containerRect.top
        });
      }
    }
  };

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/api/volunteers`);
      setVolunteers(response.data);
      calculateZoneCounts(response.data);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  /*
  Code below is to determine weighting for primary vs secondary locations. Primary gets one full weight, while secondary gets 0.5
  If weight for a specific zone adds up to a decimal, it is rounded down to a whole number.
  This is to factor in lower likelihood of volunteer availability outside of their primary location, but still consider
  those who can serve or be reassigned to multiple locations
  */
  const calculateZoneCounts = (volunteerData) => {
    const counts = {};
    
    volunteerData.forEach(volunteer => {
      if (volunteer.primaryLocation) {
        counts[volunteer.primaryLocation] = (counts[volunteer.primaryLocation] || 0) + 1;
      }
      
      if (volunteer.secondaryLocations) {
        volunteer.secondaryLocations.forEach(zone => {
          counts[zone] = (counts[zone] || 0) + 0.5;
        });
      }
    });
    
    Object.keys(counts).forEach(zone => {
      counts[zone] = Math.floor(counts[zone]);
    });
    
    setZoneVolunteerCounts(counts);
  };

  const getZoneColor = (count) => {
    if (count === 0) return 'bg-gray-300';
    if (count <= 2) return 'bg-green-300';
    if (count <= 5) return 'bg-green-500';
    if (count <= 10) return 'bg-green-600';
    return 'bg-green-800';
  };

  const getZoneSize = (count) => {
    if (count === 0) return 'w-3 h-3';
    if (count <= 2) return 'w-4 h-4';
    if (count <= 5) return 'w-5 h-5';
    if (count <= 10) return 'w-6 h-6';
    return 'w-7 h-7';
  };

//Interactive heat map:
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Volunteer Distribution Across Nairobi
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Heat map showing volunteer density across different zones.
        </p>

        {/* Map Container */}
        <div 
          ref={mapContainerRef}
          className="relative w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl overflow-hidden"
        >
          {/* Nairobi County Outline Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/images/maps/nairobi-outline.png" 
              alt="Nairobi County Outline"
              className="h-5/6 w-auto opacity-40 object-contain"
              onLoad={updateMapDimensions}
            />
          </div>

          {/* Zone Dots - positioned relative to the image */}
          {mapDimensions.width > 0 && Object.entries(zoneCoordinates).map(([zone, coords]) => {
            const count = zoneVolunteerCounts[zone] || 0;
            
            // Calculate position relative to the image
            const left = mapDimensions.left + (coords.x / 100) * mapDimensions.width;
            const top = mapDimensions.top + (coords.y / 100) * mapDimensions.height;
            
            return (
              <div
                key={zone}
                className={`absolute ${getZoneColor(count)} ${getZoneSize(count)} rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  selectedZone === zone 
                    ? 'border-2 border-yellow-400 shadow-lg z-10 ring-2 ring-yellow-200' 
                    : 'border border-white shadow-md hover:scale-110'
                }`}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                }}
                onMouseEnter={() => setSelectedZone(zone)}
                onMouseLeave={() => setSelectedZone(null)}
                onClick={() => setSelectedZone(selectedZone === zone ? null : zone)}
              >
                {/* Tooltip */}
                {selectedZone === zone && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap mb-2 z-20 shadow-xl">
                    <div className="font-bold text-yellow-300">{zone}</div>
                    <div className="text-green-200">{count} volunteer(s)</div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Volunteer Density</h4>
            {[
              { color: 'bg-gray-300', label: '0' },
              { color: 'bg-green-300', label: '1-2' },
              { color: 'bg-green-500', label: '3-5' },
              { color: 'bg-green-600', label: '6-10' },
              { color: 'bg-green-800', label: '10+' }
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-2 text-xs">
                <div className={`w-3 h-3 ${item.color} rounded-full mr-2 border border-gray-300`}></div>
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Selected Zone Info */}
          {selectedZone && (
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-48 z-10">
              <h4 className="font-bold text-green-700 mb-2 text-lg">{selectedZone}</h4>
              <p className="text-gray-700">
                <strong className="text-green-600">{zoneVolunteerCounts[selectedZone] || 0}</strong> volunteer(s)
              </p>
              <p className="text-xs text-gray-500 mt-2">Click anywhere to close</p>
            </div>
          )}

          {/* Map Title */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <span className="text-sm font-semibold text-green-800">Nairobi County</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 text-sm">Volunteer Density</h4>
            {[
              { color: 'bg-gray-300', label: '0' },
              { color: 'bg-green-300', label: '1-2' },
              { color: 'bg-green-500', label: '3-5' },
              { color: 'bg-green-600', label: '6-10' },
              { color: 'bg-green-800', label: '10+' }
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-2 text-xs">
                <div className={`w-3 h-3 ${item.color} rounded-full mr-2 border border-gray-300`}></div>
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {selectedZone && (
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-48 z-10">
              <h4 className="font-bold text-green-700 mb-2 text-lg">{selectedZone}</h4>
              <p className="text-gray-700">
                <strong className="text-green-600">{zoneVolunteerCounts[selectedZone] || 0}</strong> volunteer(s)
              </p>
              <p className="text-xs text-gray-500 mt-2">Click anywhere to close</p>
            </div>
          )}

          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <span className="text-sm font-semibold text-green-800">Nairobi County</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NairobiMap;
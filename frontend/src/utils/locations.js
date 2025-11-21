//location utility data for interactive map and signup sheet
export const locationData = {
  regions: [
    {
      name: 'West/Central-West',
      zones: ['Kawangware', 'Kibera', 'Kangemi', 'Langata']
    },
    {
      name: 'Central/North-Central', 
      zones: ['Mathare', 'Huruma', 'Eastleigh']
    },
    {
      name: 'North/Northeast',
      zones: ['Githurai', 'Kahawa West']
    },
    {
      name: 'East/Southeast',
      zones: ['Dandora', 'Kayole']
    },
    {
      name: 'South/Industrial South',
      zones: ['Mukuru kwa Njenga']
    }
  ],
  allZones: [
    'Kawangware', 'Kibera', 'Kangemi', 'Langata',
    'Mathare', 'Huruma', 'Eastleigh', 
    'Githurai', 'Kahawa West',
    'Dandora', 'Kayole',
    'Mukuru kwa Njenga'
  ]
};

// Coordinates that work with the actual Nairobi outline image
export const zoneCoordinates = {
  'Kawangware': { x: 20, y: 39 }, 
  'Kangemi': { x: 25, y: 32 },     
  'Kibera': { x: 31, y: 50 },      
  'Langata': { x: 38, y: 62 },
  'Mathare': { x: 45, y: 36 },
  'Huruma': { x: 50, y: 32 },
  'Eastleigh': { x: 45, y: 42 },
  'Githurai': { x: 58, y: 18 },
  'Kahawa West': { x: 56, y: 10 },
  'Dandora': { x: 57, y: 30 },
  'Kayole': { x: 60, y: 42 },
  'Mukuru kwa Njenga': { x: 50, y: 60 }
};
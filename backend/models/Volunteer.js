const mongoose = require('mongoose');

// Define the locations array once to ensure consistency
const locations = [
  'Kawangware', 'Kibera', 'Kangemi', 'Langata',
  'Mathare', 'Huruma', 'Eastleigh', 
  'Githurai', 'Kahawa West',
  'Dandora', 'Kayole', 
  'Mukuru kwa Njenga'
];

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  primaryLocation: {
    type: String,
    required: true,
    enum: locations  // ← Using the shared array
  },
  secondaryLocations: [{  // ← Fixed: This is an array of strings
    type: String,
    enum: locations  // ← Using the shared array
  }],
  availability: {
    type: String,
    enum: ['weekdays', 'weekends', 'both', 'flexible'],
    default: 'flexible'
  },
  skills: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
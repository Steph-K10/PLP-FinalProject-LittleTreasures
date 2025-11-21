const mongoose = require('mongoose');

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
    enum: [
      'Kawangware', 'Kibera', 'Kangemi', 'Langata',
      'Mathare', 'Huruma', 'Eastleigh', 
      'Githurai', 'Roysambu', 'Kariobangi',
      'Dandora', 'Kayole', 'Umoja', 'Embakasi',
      'Mukuru kwa Njenga', 'Mukuru Kwa Reuben'
    ]
  },
  secondaryLocations: [{
    type: String,
    enum: [
      'Kawangware', 'Kibera', 'Kangemi', 'Langata',
      'Mathare', 'Huruma', 'Eastleigh', 
      'Githurai', 'Roysambu', 'Kariobangi',
      'Dandora', 'Kayole', 'Umoja', 'Embakasi',
      'Mukuru kwa Njenga', 'Mukuru Kwa Reuben'
    ]
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
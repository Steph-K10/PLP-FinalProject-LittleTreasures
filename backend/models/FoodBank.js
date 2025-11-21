const mongoose = require('mongoose');

const foodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    lat: Number,
    lng: Number
  },
  currentStock: {
    type: Number,
    default: 0
  },
  capacity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'maintenance', 'full', 'empty'],
    default: 'active'
  },
  contactPerson: {
    name: String,
    phone: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('FoodBank', foodBankSchema);
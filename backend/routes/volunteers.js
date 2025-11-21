const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// We'll need to get the io instance - we'll handle this differently
let io;

// Function to set io instance from server.js
const setIO = (socketIO) => {
  io = socketIO;
};

// GET all volunteers
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new volunteer (registration)
router.post('/', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    const savedVolunteer = await volunteer.save();
    
    // Emit socket event if io is available - WITHOUT PERSONAL INFO
    if (io) {
      io.emit('new-volunteer', {
        message: `New volunteer registered in ${savedVolunteer.primaryLocation}`,
        location: savedVolunteer.primaryLocation,
        timestamp: new Date()
      });
    }
    
    res.status(201).json(savedVolunteer);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already registered' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

// GET volunteer by ID
router.get('/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { router, setIO };
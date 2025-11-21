const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // Add this
const socketIo = require('socket.io'); // Add this
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server for Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/little-treasures')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Socket.io Connection Handling
io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  // Listen for new volunteer registrations
  socket.on('volunteer-registered', (volunteerData) => {
    console.log('📝 New volunteer registered:', volunteerData.name);
    
    // Broadcast to all connected clients (admin dashboard)
    io.emit('new-volunteer-notification', {
      message: `New volunteer: ${volunteerData.name} from ${volunteerData.location}`,
      volunteer: volunteerData,
      timestamp: new Date().toISOString()
    });
  });

  // Listen for stock updates
  socket.on('stock-update', (data) => {
    io.emit('stock-changed', data);
  });

  socket.on('disconnect', () => {
    console.log('🔌 Client disconnected:', socket.id);
  });
});

// Routes
const volunteerRoutes = require('./routes/volunteers');
volunteerRoutes.setIO(io); // Pass io instance to routes
app.use('/api/volunteers', volunteerRoutes.router);

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Little Treasures API is running!',
    version: '1.0',
    purpose: 'Food Security Volunteer Platform'
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});


// Update to use server.listen instead of app.listen
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log('🔌 Socket.io is ready for real-time connections');
});
# 🌱 Little Treasures - Food Security Initiative

A decentralized, tech-enabled solution to urban food insecurity in Nairobi. This web application facilitates volunteer registration and community engagement for a dignified approach to food distribution.

> **Final Project** - Power Learn Project (PLP) July 2025 Cohort, Full Stack MERN Specialization

## 🚀 Live Demo
- **Frontend**: [Coming soon - Vercel deployment]
- **Backend**: [Coming soon - Render deployment]

## 📋 Project Overview
Little Treasures addresses food insecurity through a two-pronged approach:
- **Physical Network**: Secure food storage banks in community locations
- **Digital Access**: USSD-based system for anonymous, dignified access

This Phase 1 web application focuses on volunteer registration and community awareness.

## 🛠️ Tech Stack

### Frontend
- **React** with functional components & hooks
- **React Router** for navigation
- **Tailwind CSS** for responsive styling
- **Axios** for API communication
- **Socket.io-client** for real-time features

### Backend
- **Node.js** & **Express.js** server
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time notifications
- **CORS** for cross-origin requests
- **dotenv** for environment configuration

## ✨ Key Features

### 🔔 Real-time Notifications
- Live admin notifications for new volunteer registrations
- Socket.io implementation for instant updates
- Non-intrusive notification system

### 🗺️ Interactive Nairobi Heat Map
- Geographically accurate volunteer distribution visualization
- Constituency-based positioning of zones
- Hover interactions with volunteer counts
- Primary (1.0) and secondary (0.5) location weighting

### 📱 Responsive Design
- Mobile-first approach throughout
- Adaptive Gantt chart → card layout transformation
- Cross-device compatibility

### 📊 Project Timeline Visualization
- Interactive Gantt-style project timeline
- Responsive design that stacks on mobile devices
- Phase-based project progression display

### 🎯 Robust Form Handling
- Comprehensive volunteer registration
- Form validation and error handling
- Location preference selection (primary & secondary)

## 🏗️ Project Structure
little-treasures/
├── frontend/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── utils/ # Helper functions & data
│ │ └── config/ # Configuration files
│ └── public/ # Static assets
├── backend/
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── config/ # Database configuration
│ └── server.js # Express server
└── README.md


## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Setup
# Backend(.env)
1. Copy `.env.example` to `.env` #sample template, no url exposed 
2. Update `.env` with your actual values: #make sure to add .env to .gitignore
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: Server port (default: 5000)


## 🎮 Usage
1. Volunteer Registration: Access the registration form to join the initiative
2. Explore About Page: Learn about mission, team, and project timeline
3. View Volunteer Heat Map: See volunteer distribution across Nairobi constituencies, immediately updates with new registrations.
4. Live Notifications: Monitor new registrations with real-time notifications, powered by Socket.io

## 🔧 Debugging & Development
1. React Dev Tools for component inspection
2. Console logging for API response tracking
3. Network tab for request/response monitoring
4. VS Code debugging with proper launch configurations

## 🚀 Deployment
### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Render)
- Connect GitHub repository
- Set environment variables
- Deploy automatically on push

## 📈 Future Enhancements
- Donor & partner supplier registration
- Food pantry stock level monitoring
- Donation pickup scheduling system
- USSD integration for beneficiary access
- Real-time inventory management
- Advanced analytics dashboard
- Mobile application development

## 👥 Team
Stephanie Khaguli - Project Lead & Full Stack Developer

## 📄 License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE file](PLP-FinalProject-LittleTreasures/LICENSE) for details.

## 🙏 Acknowledgments
- Power Learn Project (PLP) for the learning opportunity and entrepreneural focus
- MERN Module Lead Instructor, Dedan Okware, for the tireless efforts, encouragement and inspirational proficiency.
- My adopive deskie, Frank, for the constant check-ins and encouragement
- Open source community for tools and libraries

<p style="text-align:center;">🌱 Little Treasures: Nourishing Communities, Preserving Dignity 🌱</p>
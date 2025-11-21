const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-url.onrender.com' // We'll update this later
    : 'http://localhost:5000'
};

export default config;
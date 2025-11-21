const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://little-treasures-backend-a7xj.onrender.com' //render backend URL
    : 'http://localhost:5000'
};

export default config;
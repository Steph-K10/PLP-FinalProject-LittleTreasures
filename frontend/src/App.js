import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AdminNotifications from './components/AdminNotifications';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="bg-green-900 text-white py-3 px-5 fixed top-0 w-full z-50 border-b border-green-700/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center cursor-pointer no-underline">
            <span className="text-xl mr-2">🌱</span>
            <h1 className="text-lg font-semibold text-white">Little Treasures</h1>
          </Link>
          <nav className="flex gap-5">
            <Link to="/" className="text-sm text-white hover:text-green-200 transition-colors no-underline">Home</Link>
            <Link to="/about" className="text-sm text-white hover:text-green-200 transition-colors no-underline">About</Link>
          </nav>
        </div>
      </header>

      <main style={{ marginTop: '0px' }}>
        {children}
      </main>

      <footer className="bg-green-900 text-white py-10 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-2">🌱Little Treasures</h3>
          <p className="text-green-100 mb-6">Nourishing Communities, Preserving Dignity</p>
          <div className="flex justify-center space-x-4">
            <Link to="/" className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-green-900 transition-colors duration-300 no-underline">Home</Link>
            <Link to="/about" className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-green-900 transition-colors duration-300 no-underline">About</Link>
          </div>
        </div>
      </footer>

      <AdminNotifications />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
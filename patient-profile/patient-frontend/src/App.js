import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Welcome from './components/Welcome';
import Patients from './components/Patients';
import BookAppointment from './components/BookAppointment';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name, password) => {
    if (name && password) {
      setUsername(name);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // 🔐 LOGIN PAGE
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // 🏠 AFTER LOGIN → ONLY HOME PAGE LOADS
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/patients">Patients</Link>
          <Link to="/book">Book Appointment</Link>

          <span className="user-name">👤 {username}</span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        <Routes>
          {/* ✅ DEFAULT HOME PAGE */}
          <Route path="/" element={<Welcome username={username} />} />

          {/* ❌ These load ONLY on click */}
          <Route path="/patients" element={<Patients />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

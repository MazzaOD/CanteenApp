// src/components/Login.js
import React, { useState } from 'react';
import '../App.css';

function Login({ setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to check if the current time is within working hours
  const isWithinWorkingHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hours = now.getHours();

    // Allow login only Monday to Friday, from 8 AM (08:00) to 6 PM (18:00)
    const isWeekday = day >= 1 && day <= 5;
    const isWithinHours = hours >= 8 && hours < 23;

    return isWeekday && isWithinHours;
  };

  const handleLogin = () => {
    // Check if the current time is within working hours
    if (!isWithinWorkingHours()) {
      setError('Login is allowed only during working hours: Monday to Friday, 8 AM to 6 PM.');
      return;
    }

    // Proceed with login validation if within working hours
    if (username === 'staff' && password === 'password') {
      setView('banner'); // Go to the banner page after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card card shadow-lg p-4">
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary w-100">Login</button>
        
        {error && <p className="text-danger text-center mt-3">{error}</p>}
        
        <div className="text-center mt-4">
          <p className="opening-hours">
            <strong>Opening Hours:</strong><br />
            Monday to Friday, 8 AM to 6 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

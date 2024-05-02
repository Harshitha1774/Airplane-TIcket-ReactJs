import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    // For now, just redirect to the AirplaneForm component
    navigate('/planebook');
  };

  return (
    <div style={{ 
      textAlign: 'center',
      backgroundColor: '#f2f2f2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <img src="/img/logo.jpg" alt="Flightbooking Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <form style={{ width: '100%', maxWidth: '300px' }} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} /><br />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '14px' }}>Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: '#008CBA' }}>Signup</Link></p>
    </div>
  );
};

export default Login;

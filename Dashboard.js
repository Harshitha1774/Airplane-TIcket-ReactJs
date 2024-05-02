import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ 
      textAlign: 'center',
      backgroundImage: `url("/img/photo_2024-05-01_23-41-13.jpg")`, // Replace '/path/to/your/image.jpg' with the path to your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white'
    }}>
      <img src="/img/logo.jpg" alt="Flightbooking Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h2>Welcome to Flightbooking App</h2>
      <p>Book your flights easily with Flightbooking App. Whether it's a business trip or a vacation, we've got you covered!</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

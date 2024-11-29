import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      padding: '15px 30px',
      backgroundColor: '#FFD700', // Yellow background
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderBottom: '3px solid #FFA500' // Slight orange tint for contrast
    }}>
      <Link 
        to="/" 
        style={{ 
          marginRight: '25px',
          color: '#333', // Dark text for contrast
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: 'color 0.3s ease'
        }}
      >
        Home
      </Link>
      <Link 
        to="/add-blog" 
        style={{ 
          color: '#333', // Dark text for contrast
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: 'color 0.3s ease'
        }}
      >
        Add Blog
      </Link>
    </nav>
  );
};

export default Navbar;

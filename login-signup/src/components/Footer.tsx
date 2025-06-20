import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#764ba2',
      padding: '1rem 2rem',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      position: 'sticky',
      bottom: 0,
      width: '100%',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
    }}>
      © 2024 My App. All rights reserved.
    </footer>
  );
};

export default Footer;

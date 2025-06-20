import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#764ba2',
      padding: '1rem 2rem',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.75rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/vercel.svg" alt="Logo" style={{ height: '40px', marginRight: '1rem' }} />
        <span>My App Header</span>
      </div>
      <nav>
        <a href="/" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: '600' }}>Home</a>
        <a href="/auth/login" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: '600' }}>Login</a>
        <a href="/auth/signup" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none', fontWeight: '600' }}>Signup</a>
      </nav>
    </header>
  );
};

export default Header;

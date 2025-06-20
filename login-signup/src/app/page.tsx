'use client';

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
}

const HomePage = () => {


    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '2rem',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Please login or signup to continue.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/auth/login" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            color: '#764ba2',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            Login
          </a>
          <a href="/auth/signup" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            color: '#764ba2',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            Signup
          </a>
        </div>
      </div>
    );
  

  
};

export default HomePage;

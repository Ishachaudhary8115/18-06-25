'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Login successful! Redirecting...');
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        setTimeout(() => {
          router.push('/auth/verify');
        }, 2000);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Login failed: ' + error.message);
      } else {
        toast.error('Login failed: Unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
 
      <div style={{
        maxWidth: 400,
        margin: '14rem auto',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        backgroundColor: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#764ba2' }}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#764ba2',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = '#5a3680')}
            onMouseLeave={e => !loading && (e.currentTarget.style.backgroundColor = '#764ba2')}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <ToastContainer />
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don't have an account? <a href="/auth/signup" style={{ color: '#764ba2', fontWeight: 'bold' }}>Signup here</a>
        </p>
      </div>

    </>
  );
};

export default LoginPage;

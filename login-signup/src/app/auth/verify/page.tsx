'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface User {
  id: number;
  email: string;
}

const VerifyPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState('Verifying user...');
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/auth/verify', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setUser(data.user);
          setMessage('');
          // Redirect to home page after 6 seconds
          setTimeout(() => {
            router.push('/');
          }, 10000);
        } else {
          setUser(null);
          setMessage(data.message || 'User not verified');
        }
      } catch (error) {
        setUser(null);
        setMessage('Verification failed');
      }
    };
    verifyUser();
  }, [router]);

  return (
<>
  <Header />
    <div style={{ display: 'flex', height: '80vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#2c3e50',
          padding: '20px',
          color: '#fff',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Dashboard</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '20px' }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <a href="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <a href="/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#ecf0f1',
          padding: '30px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Title */}
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Verification Status</h1>

        {/* Verification Message */}
        {message && (
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#764ba2' }}>{message}</p>
        )}

        {/* User Information */}
        {user ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              padding: '2rem',
              textAlign: 'center',
              borderRadius: '12px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              maxWidth: '600px',
              margin: '2rem auto',
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome, {user.email}</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Verification successful! Redirecting to home page...
            </p>
            <div
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3)',
                fontSize: '1.25rem',
                fontWeight: '500',
              }}
            >
              User ID: {user.id}
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#764ba2' }}>
            User not logged in.
          </p>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VerifyPage;

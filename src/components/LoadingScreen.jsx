import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 800); // match transition duration
      return () => clearTimeout(removeTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#030712',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.8s',
      opacity: fadeOut ? 0 : 1,
      visibility: fadeOut ? 'hidden' : 'visible',
      pointerEvents: 'none'
    }}>
      {/* Visual glowing ring container */}
      <div style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Ring 1 */}
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#6366f1',
          borderBottomColor: '#06b6d4',
          animation: 'spin 1.5s linear infinite'
        }} />
        {/* Ring 2 */}
        <div style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '3px solid transparent',
          borderLeftColor: '#a855f7',
          borderRightColor: '#6366f1',
          animation: 'spin-reverse 1.2s linear infinite'
        }} />
        {/* Core Dot */}
        <div style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#06b6d4',
          borderRadius: '50%',
          boxShadow: '0 0 15px #06b6d4'
        }} />
      </div>

      {/* Text logo */}
      <h1 className="gradient-text" style={{
        marginTop: '2rem',
        fontSize: '2rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        Abinaya Udaiyar
      </h1>
      <p style={{
        color: '#6b7280',
        fontFamily: 'Outfit, sans-serif',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        marginTop: '0.5rem'
      }}>
        Portfolio Loading
      </p>

      {/* CSS definitions inline for the preloader */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}} />
    </div>
  );
}

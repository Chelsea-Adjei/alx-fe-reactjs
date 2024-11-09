import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        padding: '15px 0',
        backgroundColor: '#593',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>About</Link>
        <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Services</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
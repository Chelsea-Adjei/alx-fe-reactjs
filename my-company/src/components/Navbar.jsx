import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#593', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff', fontWeight: 'bolder' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: '#fff', fontWeight: 'bolder' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: '#fff', fontWeight: 'bolder' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: '#fff', fontWeight: 'bolder' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
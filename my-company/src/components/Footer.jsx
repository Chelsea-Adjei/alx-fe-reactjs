import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;

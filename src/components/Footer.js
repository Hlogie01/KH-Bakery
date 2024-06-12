import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure you import the CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Fantasy Flavor. All rights reserved.</p>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;


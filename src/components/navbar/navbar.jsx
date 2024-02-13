import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/assets/images/logo-2.png" alt="Globaal Travel" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <div className="navbar-up">
        <div className="navbar-top">
            <img src="/assets/images/top_arrow.png" alt="slant" className="navbar-slant" />
          </div>
          <div className="navbar-up-item">
            <img src="/assets/images/1.png" alt="Icon" className="icon" />
            <span>145, street road new York</span>
          </div>
          <div className="navbar-up-item">
            <img src="/assets/images/2.png" alt="Icon" className="icon" />
            <span>+71 5678954378</span>
          </div>
          <div className="navbar-up-item">
            <img src="/assets/images/3.png" alt="Icon" className="icon" />
            <span>Demo@hmail.com</span>
          </div>
        </div>
        <div className="navbar-down">
          <a href="/" className="nav-link active">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/travel" className="nav-link">Travel</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

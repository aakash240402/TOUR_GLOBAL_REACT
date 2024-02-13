import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const comment = event.target.elements.comment.value;

    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert('Please fill in all fields: Name, Email, and Comment');
      return;
    }
    alert('We will get back to you soon');
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com" className="icon-link">
          <img src="/assets/icon/facebook.png" alt="Facebook" className="icon-image" />
        </a>
        <a href="https://twitter.com" className="icon-link">
          <img src="/assets/icon/twitter.png" alt="Twitter" className="icon-image" />
        </a>
        <a href="https://www.linkedin.com" className="icon-link">
          <img src="/assets/icon/linkedin.png" alt="LinkedIn" className="icon-image" />
        </a>
        <a href="https://www.google.com" className="icon-link">
          <img src="/assets/icon/instagram.png" alt="Instagram" className="icon-image" />
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-section">
        <div className="contact-section">
          <h3>CONTACT US</h3>
          <p>123 Second Street Fifth Avenue</p>
          <p>Manhattan, New York</p>
          <p>+987-654-3210</p>
        </div>
        <div className="links-section">
          <h3>ADDITIONAL LINKS</h3>
          <ul>
            <li>About us</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>News</li>
            <li>Contact us</li>
          </ul>
        </div>
        </div>
        <div className="footer-form">
          <h3>CONTACT</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group1">
            <input type="text" placeholder="Name" name="name" required/>
            <input type="email" placeholder="Email" name="email"required />
            </div>
            <textarea placeholder="Comment" name="comment" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

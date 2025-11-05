import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Bug className="footer-logo-icon" />
              <span className="footer-logo-text">Cappas Insectozoo</span>
            </div>
            <p className="footer-description">
              Discover the fascinating world of social insects in Vila Ruiva, Cuba, Portugal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contacts" className="footer-link">Contacts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+351 XXX XXX XXX</span>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>info@cappasinsectozoo.pt</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Vila Ruiva, Cuba, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="footer-section">
            <h3 className="footer-heading">Visit Hours</h3>
            <p className="footer-hours">Open 7 days a week</p>
            <p className="footer-hours-note">By reservation only</p>
            <p className="footer-hours-details">Perfect for families and small groups (up to 15 people)</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Cappas Insectozoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
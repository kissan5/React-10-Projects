import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <img
              src="/logo.png"
              alt="ANPR Logo"
              className="footer-logo"
            />
            <p className="footer-tagline">
              Leading the way in automatic number plate recognition technology
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">About ANPR</h3>
            <p className="footer-text">
              Automatic Number Plate Recognition (ANPR) uses optical character
              recognition to read vehicle plates. Ideal for law enforcement and
              traffic management.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <a href="mailto:info@anpr.com" className="footer-contact-link">
                <Mail className="footer-icon" />
                info@anpr.com
              </a>
              <a href="tel:+1234567890" className="footer-contact-link">
                <Phone className="footer-icon" />
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Automatic Number Plate Recognition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

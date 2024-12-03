import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-banner">
        <h2>Contact Us</h2>
        <p className='p'>We'd love to hear from you! Please reach out with any questions, suggestions, or feedback.</p>
      </div>
      
      <div className="contact-content">
        <div className="form-section">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="info-section">
          <h3>Contact Information</h3>
          <p>If you prefer, you can also contact us directly through the details below.</p>
          <ul>
            <li><strong>Email:</strong> support@anpr.com</li>
            <li><strong>Phone:</strong> +91 9898989898</li>
            <li><strong>Address:</strong> RK University Rajkot 360020</li>
          </ul>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h3>Our Location</h3>
        <p>Come visit us at our headquarters to discuss how we can assist you.</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.233424011987!2d70.78257441590497!3d22.303894585319704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca6b4a6fb4d7%3A0x701d20687f2d36d5!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1698675677890!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{ border: '0' }} 
          allowFullScreen="" 
          loading="lazy"
          title="Our Location">
        </iframe>
      </div>
    </section>
  );
};

export default Contact;

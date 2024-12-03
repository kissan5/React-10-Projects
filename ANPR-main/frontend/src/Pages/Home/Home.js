import React from "react";
import "./Home.css";
import feature1 from "../../assets/1.jpeg";
import feature2 from "../../assets/2.jpeg";
import feature3 from "../../assets/6.jpeg";
import howItWorks from "../../assets/4.jpeg";
import admin1Image from "../../assets/fb.jpg";
import admin2Image from "../../assets/pp3.jpg";
import carImage from "../../assets/f5.webp";
import { CheckCircle } from 'lucide-react';
import { IoMdCheckmarkCircle } from "react-icons/io";

import {
  FaGlobe,
  FaCamera,
  FaBolt,
  FaCloud,
  FaBullseye,
  FaAward,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Automatic Number Plate Recognition (ANPR)</h1>
        <p>Revolutionizing vehicle identification with advanced technology.</p>
        <a href="/camera" className="cta-button">
          Get Started
        </a>
      </header>

      <section className="features-grid">
        <div className="container">
          <div className="grid">
            <div className="feature-item">
              <FaBullseye className="feature-icon" size={24} />
              <h3>Try It Out</h3>
              <p>
                Our algorithm handles plates that are blurry, dark, angled, and
                much more! See our ANPR in action across regions.
              </p>
            </div>
            <div className="feature-item">
              <FaCamera className="feature-icon" size={24} />
              <h3>Images & Videos</h3>
              <p>
                We handle both. Snapshot decodes plates from images. Stream
                processes live camera or video files.
              </p>
            </div>
            <div className="feature-item">
              <FaAward className="feature-icon" size={24} />
              <h3>Feature-Rich</h3>
              <p>
                Get vehicle make, model, color, region, direction of travel,
                Webhooks, Dashboard, and more! Blur plates too!
              </p>
            </div>

            <div className="feature-item">
              <FaBolt className="feature-icon" size={24} />
              <h3>Fast, Nimble</h3>
              <p>
                Snapshot's inference speed is 50-100 ms and Stream processes
                5-10 cameras on a mid-range CPU. No GPU needed!
              </p>
            </div>    
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src={feature1} alt="Fast Recognition" />
            <h3>Fast Recognition</h3>
            <p>
              Quick and accurate number plate detection for seamless operations.
            </p>
          </div>
          <div className="feature">
            <img src={feature2} alt="User-Friendly Interface" />
            <h3>User-Friendly Interface</h3>
            <p>Intuitive design enhances user experience and ease of access.</p>
          </div>
          <div className="feature">
            <img src={feature3} alt="Real-Time Monitoring" />
            <h3>Real-Time Monitoring</h3>
            <p>Monitor vehicles live for enhanced security and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          <img src={howItWorks} alt="How it works" />
          <p>
            Using advanced algorithms and high-resolution cameras, our ANPR
            system accurately detects and extracts vehicle number plates. Ideal
            for traffic management, parking, toll booths, and security, it
            offers real-time processing, efficient multi-vehicle handling, and
            reliable performance across varied conditions.
          </p>
        </div>
      </section>

      <section className="pr-snapshot">
      <div className="pr-container">
        <h2 className="pr-title">Plate Recognizer Snapshot ANPR</h2>
        <div className="pr-content-grid">
          <div className="pr-image-wrapper">
            <img
              src={carImage}
              alt="Dark car with brake lights on in a city street"
              className="pr-feature-image"
            />
          </div>
          <div className="pr-features">
            <ul className="pr-feature-list">
              <li className="pr-feature-item">
                <CheckCircle className="pr-icon" />
                <div>
                  <span className="pr-feature-label">INPUT: </span>
                  Takes image in any format
                </div>
              </li>
              <li className="pr-feature-item">
                <CheckCircle className="pr-icon" />
                <div>
                  <span className="pr-feature-label">OUTPUT: </span>
                  Decodes license plate, vehicle make, model, color, and more!
                </div>
              </li>
              <li className="pr-feature-item">
                <CheckCircle className="pr-icon" />
                <div>
                  <span className="pr-feature-label">HARDWARE: </span>
                  Runs via Cloud or On-Premise SDK (no Internet required) on Windows, Linux, Jetson, Pi, and more.
                </div>
              </li>
              <li className="pr-feature-item">
                <CheckCircle className="pr-icon" />
                <div>
                  <span className="pr-feature-label">SPEED: </span>
                  Fast inference speed for SDK (50 ms) and Cloud (200 ms).
                </div>
              </li>
              <li className="pr-feature-item">
                <CheckCircle className="pr-icon" />
                <div>
                  <span className="pr-feature-label">MORE: </span>
                  Sample code in 8 languages, Webhooks, detection zones, and more!
                </div>
              </li>
            </ul>
            <button className="pr-learn-more-button">Learn more</button>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-section">
  <div className="container">
    <div className="content-grid">
      <div className="text-content">
        <h2>Let's Stay Connected</h2>
        <p>We'd love to hear from you! Reach out to discuss how we can assist.</p>
      </div>
      <div className="form-container">
        <form id="contactForm" className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Business Email</label>
              <input type="email" id="email" placeholder="Enter your business email" required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" required></textarea>
            </div>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>
            </label>
          </div>
          <button type="submit" id="submitButton">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>


      <section className="anpr-section">
      <div className="anpr-container">
        <h2 className="anpr-title">Some ANPR Applications</h2>
        <div className="anpr-grid">
          <div className="anpr-card">
            <h3 className="anpr-card-title">Parking Management</h3>
            <p className="anpr-card-text">
              Ensure that vehicles are abiding to your parking policy. Get alerts when there's a violation. Check out our{' '}
              <a href="#" className="anpr-link">
                Parking Enforcement
              </a>{' '}
              solution!
            </p>
          </div>
          <div className="anpr-card">
            <h3 className="anpr-card-title">Highway Monitoring</h3>
            <p className="anpr-card-text">
              Monitor vehicles at different junctions of the highway, identify stolen vehicles and more!
            </p>
          </div>
          <div className="anpr-card">
            <h3 className="anpr-card-title">Toll Management</h3>
            <p className="anpr-card-text">
              Collect toll automatically based on plate number without the need for RFID!
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* <section className="admins">
        <h2>Meet Our Admins</h2>
        <div className="admin-list">
          <div className="admin-card">
            <img src={admin1Image} alt="Admin 1" />
            <h3>Admin Name 1</h3>
            <p>
              Dedicated to optimizing performance and ensuring user
              satisfaction.
            </p>
          </div>
          <div className="admin-card">
            <img src={admin2Image} alt="Admin 2" />
            <h3>Admin Name 2</h3>
            <p>Focused on innovation and seamless user experience.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

function FeatureItem({ title, description }) {
  return (
    <div className="feature-item">
      <span className="feature-icon">&#10004;</span>
      <div>
        <span className="feature-title">{title}</span>
        <span className="feature-description">{description}</span>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./About.css";
import admin1 from "../../assets/fb.jpg";
import admin2 from "../../assets/admin2.jpg";

const About = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="banner-section">
        <h1>About Us</h1>
        <p>
          Building the future of intelligent transportation systems with
          cutting-edge ANPR technology.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to transform the way vehicles are identified, tracked,
          and managed through advanced Automatic Number Plate Recognition (ANPR)
          technology. By making transportation systems smarter, we aim to
          contribute to safer roads, streamlined traffic management, and
          innovative security solutions.
        </p>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              Continuously evolving and integrating new technologies to improve
              efficiency and accuracy.
            </p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>
              Maintaining trust through honest and transparent interactions with
              our clients and partners.
            </p>
          </div>
          <div className="value-item">
            <h3>Commitment</h3>
            <p>
              Ensuring the highest quality standards in all our products and
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="technology-section">
        <h2>Our Technology</h2>
        <p>
          Leveraging state-of-the-art optical character recognition and machine
          learning algorithms, our ANPR system ensures high precision in vehicle
          recognition. With real-time processing and cloud integration, our
          technology scales seamlessly to meet the demands of modern traffic
          management.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src={admin1} alt="Team Member" />
            <h4>Pawan </h4>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src={admin2} alt="Team Member" />
            <h4>Kishan</h4>
            <p>Developer</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            “The ANPR system has been a game-changer for our parking management
            operations. It's highly accurate and has streamlined our processes
            significantly.”
          </p>
          <p>- Alex Johnson, Parking Solutions Inc.</p>
        </div>
        <div className="testimonial">
          <p>
            “With ANPR, monitoring traffic has never been easier. The real-time
            alerts have helped us catch multiple violations and manage traffic
            efficiently.”
          </p>
          <p>- Sarah Lee, Highway Authority</p>
        </div>
      </div>
    </section>
  );
};

export default About;

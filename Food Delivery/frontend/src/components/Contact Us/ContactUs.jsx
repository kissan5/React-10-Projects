import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Send data to the server or API

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Show thank you message
    setSubmitted(true);

    // Reset the thank-you message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-us">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <div className="contact-details">
          <div>
            <strong>Address:</strong>
            <p>123 Food Street, Food City, Country</p>
          </div>
          <div>
            <strong>Phone:</strong>
            <p>(+123) 456-7890</p>
          </div>
          <div>
            <strong>Email:</strong>
            <p>support@fooddelivery.com</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>

        {/* Show Thank you message if the form is submitted */}
        {submitted && <div className="thank-you-message">Thank you for reaching out to us! We'll get back to you soon.</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

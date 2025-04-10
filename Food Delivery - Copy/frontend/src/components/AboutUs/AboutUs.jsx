import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to FoodDel, your trusted partner for delicious and fast food
          delivery! We are committed to providing you with the best food from
          your favorite restaurants, delivered straight to your doorstep.
        </p>
        <p>
          At FoodDel, we understand the importance of enjoying great food without
          leaving the comfort of your home. Our mission is to make ordering food
          as easy, fast, and affordable as possible.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to connect people with the food they love by providing
          a seamless delivery experience. We work with local restaurants to bring
          you fresh, tasty meals, delivered in no time.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast and reliable delivery service.</li>
          <li>Wide selection of restaurants and cuisines.</li>
          <li>Affordable prices and amazing deals.</li>
          <li>Easy-to-use mobile app and website.</li>
          <li>24/7 customer support.</li>
        </ul>

        <h2>Our Values</h2>
        <p>
          We believe in quality, convenience, and customer satisfaction. Our team
          works hard to ensure that every order is delivered promptly and with
          the highest level of service.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? Feel free to <a href="/contact-us">contact us</a>. We're always happy to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

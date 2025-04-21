import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: April 21, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>FOODDEL</strong>. This Privacy Policy describes how
          we collect, use, and protect your personal information when you use
          our food delivery services. By using our platform, you agree to the
          terms outlined here.
        </p>
      </section>

      <section>
        <h2>2. What We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>Full name and delivery address</li>
          <li>Mobile number and email address</li>
          <li>Order history and preferences</li>
          <li>Payment information via Stripe (secure payment gateway)</li>
          <li>Device and browser data for analytics</li>
        </ul>
      </section>

      <section>
        <h2>3. Why We Collect Your Data</h2>
        <p>We collect your data to:</p>
        <ul>
          <li>Process and deliver your food orders to your doorstep</li>
          <li>Provide seamless and secure online payments using Stripe</li>
          <li>Offer personalized recommendations</li>
          <li>Improve the overall performance and user experience of our site</li>
          <li>Send order confirmations and customer service updates</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing</h2>
        <p>
          Your personal data is only shared with trusted services like Stripe
          for payment processing and delivery partners to fulfill your orders.
          We do not sell your data to any third parties.
        </p>
      </section>

      <section>
        <h2>5. Cookies & Tracking</h2>
        <p>
          FOODDEL uses cookies to remember your preferences, track order status,
          and improve user experience. You can manage or disable cookies in your
          browser settings.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>You can:</p>
        <ul>
          <li>Request a copy of your personal information</li>
          <li>Update or correct your data</li>
          <li>Delete your account and associated data</li>
          <li>Withdraw consent to data collection</li>
        </ul>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally to reflect changes in
          our practices or for legal reasons. We will notify you by posting the
          updated policy on this page.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          For questions or concerns about your privacy, contact us at:{" "}
          <strong>support@fooddel.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"; // ✅ import Link

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At FoodDel, we are committed to delivering your favorite meals from
            the best local restaurants straight to your doorstep. With a focus
            on quality, speed, and convenience, we make sure your cravings are
            satisfied effortlessly. From easy ordering to real-time tracking,
            enjoy a seamless food delivery experience every time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link> 
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link> 
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 12345 67890</li>
            <li>Contact@foodDel</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2025 © FoodDel - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

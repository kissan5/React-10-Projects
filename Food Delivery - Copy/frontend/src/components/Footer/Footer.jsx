import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="fopter">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptates fuga quibusdam, maiores magni nam unde nulla, vel quidem
            aliquid totam voluptate quisquam, voluptatibus voluptatum. Totam,
            magni. Libero itaque totam aut fugiat hic accusamus odit deserunt
            vitae, ullam veniam exercitationem quod rem, autem reprehenderit
            dignissimos? Consectetur esse impedit fuga aliquid?
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
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8210951464</li>
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

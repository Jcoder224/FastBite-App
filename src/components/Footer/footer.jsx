import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="logoImage" src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sapiente unde praesentium expedita iste ipsam quam laudantium natus sunt nulla quibusdam dolorem, facilis nihil magnam fugiat ipsa maiores quia. Consequatur!</p>
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
                <li>+91-930-550-4804</li>
                <li>gulshansoni0204@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 &copy; FastBite.com - All Right Reserved</p>
    </div>
  );
};

export default footer;

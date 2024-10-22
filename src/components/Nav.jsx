import React from "react";
import "../css/Nav.css";

import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav_bg">
      <div className="split_nav">
        <Link to="/">
          <img
            src="/images/suveraFresh_logo.jpeg"
            alt="brand logo"
            className="brand_logo"
          />
        </Link>

        <Link to="about-us">
          <h3>About Us</h3>
        </Link>
        <Link to="contact-us">
          <h3>Contact Us</h3>
        </Link>
        <Link className="split_nav">
          <h3> ₹0.00 </h3>
          <img src="/images/cart.png" alt="cart image" className="cart_img" />
        </Link>
      </div>
    </div>
  );
}

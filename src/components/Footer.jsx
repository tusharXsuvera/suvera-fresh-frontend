import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import "../css/Footer.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer_bg">
      <div className="split_footer">
        <Link to="/">
          <img
            src="/images/suveraFresh_logo.jpeg"
            alt="brand logo"
            className="brand_logo"
          />
        </Link>
        <Link to="/about-us">
          <h3>About Us</h3>
        </Link>
        <Link to="/contact-us">
          <h3>Contact Us</h3>
        </Link>
        <div className="social_links">
          <Link
            to="https://www.facebook.com/profile.php?id=61563567441744"
            target="_blank"
          >
            <FaFacebookF size={20} color="blue" />
          </Link>
          <Link to="https://www.instagram.com/suverafoods/" target="_blank">
            <FaSquareInstagram size={25} color="darkred" />
          </Link>
          <Link to="https://x.com/suverafoods" target="_blank">
            <FaXTwitter size={20} color="black" />
          </Link>
          <Link
            to="https://youtube.com/@suverakitchen?si=dnmew6NHMF5dRK5Q"
            target="_blank"
          >
            <FaYoutube size={25} color="red" />
          </Link>
        </div>
      </div>
    </div>
  );
}

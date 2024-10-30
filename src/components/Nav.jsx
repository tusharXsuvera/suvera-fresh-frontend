import React, { useEffect } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="nav_bg">
      <div className="split_nav">
        <div className="location_flex">
          <Link to="/">
            <img
              src="/images/suveraFresh_logo.jpeg"
              alt="brand logo"
              className="brand_logo"
            />
          </Link>

          <div style={{ padding: "5px" }}>
            <FaLocationDot size={15} />
          </div>
          <div>
            <h1>Kanpur</h1>
            <h2>Westcott Building</h2>
          </div>
        </div>

        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/category">
          <h3>Category</h3>
        </Link>
        <Link to="/about-us">
          <h3>About Us</h3>
        </Link>
        <Link to="/contact-us">
          <h3>Contact Us</h3>
        </Link>
        <Link to="/" className="split_nav">
          <BsCart3 size={20} />
          <span className="value"> {quantity.value > 0 && quantity.value}</span>
        </Link>
      </div>
    </div>
  );
}

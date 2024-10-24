import React, { useEffect } from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <h3> ({quantity.value}) </h3>
          <img src="/images/cart.png" alt="cart image" className="cart_img" />
        </Link>
      </div>
    </div>
  );
}

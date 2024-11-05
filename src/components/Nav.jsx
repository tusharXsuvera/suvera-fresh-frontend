import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  const [showMenu, setShowMenu] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      });
    } else {
      console.log("Not found");
    }
  }

  useEffect(() => {
    // getLocation();
  }, []);
  return (
    <div className="global_layout nav_bg">
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
        <div className="pages_flex">
          <Link to="/" className="pages">
            <h3>Home</h3>
          </Link>
          <Link to="/category" className="pages">
            <h3>Category</h3>
          </Link>
          <Link to="/about-us" className="pages">
            <h3>About Us</h3>
          </Link>
          <Link to="/contact-us" className="pages">
            <h3>Contact Us</h3>
          </Link>
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <Link to="/cart" className="split_nav">
              <BsCart3 size={20} />
              {quantity.value > 0 && (
                <div className="handle_value">
                  <span className="value">{quantity.value}</span>
                </div>
              )}
            </Link>
          </div>
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <RxHamburgerMenu size={20} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className={showMenu ? "ham_menu " : "ham_menu hidden"}>
        <div className="circle_remove" onClick={() => setShowMenu(!showMenu)}>
          <CiCircleRemove size={40} />
        </div>
        <Link to="/">
          <div className="ham_links">
            <h3>Home </h3>
            <FaArrowRightLong size={20} />
          </div>
        </Link>
        <Link to="/category">
          <div className="ham_links">
            <h3>Category </h3>
            <FaArrowRightLong size={20} />
          </div>
        </Link>
        <Link to="/about-us">
          <div className="ham_links">
            <h3>About us </h3>
            <FaArrowRightLong size={20} />
          </div>
        </Link>
        <Link to="/contact-us">
          <div className="ham_links">
            <h3>Contact us </h3>
            <FaArrowRightLong size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

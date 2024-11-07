import React, { useEffect, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { handleGetAPI } from "../apiCall/api";
export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  const [showMenu, setShowMenu] = useState(false);
  const [currentLocation, setCurretLocation] = useState({
    userArea: "Laxmi Nagar",
    userCity: "New Delhi",
  });

  function getLocation() {
    if (navigator.geolocation) {
      // 26.482267, 80.343887;
      //26.479879, 80.342646
      // 26.483368, 80.342177

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        let url = `https://suverafresh-backend.onrender.com/api/shops/area-shop?latitude=${latitude}&longitude=${longitude}`;
        const userDetails = await handleGetAPI(url);
        if (userDetails.area) {
          setCurretLocation({
            ...currentLocation,
            userArea: userDetails.area.name,
            userCity: userDetails.area.city,
          });
        }
      });
    }
  }

  useEffect(() => {
    getLocation();
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
            <h1>{currentLocation.userCity}</h1>
            <h2>{currentLocation.userArea}</h2>
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
        <div className="flex_wrap">
          <div>
            <Link to="/cart" className="split_nav">
              <BsCart3 size={20} />
              {quantity.value.length > 0 && (
                <div className="handle_value">
                  <span className="value">{quantity.value.length}</span>
                </div>
              )}
            </Link>
          </div>
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <RxHamburgerMenu size={20} className="cursor" />
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

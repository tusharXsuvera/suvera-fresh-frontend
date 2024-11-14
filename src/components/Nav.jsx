import React, { useEffect, useState, useMemo } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { handleGetAPI } from "../apiCall/api";
import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";
import debounce from "lodash.debounce";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import axios from "axios";

export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [placeValue, setPlaceValue] = useState([]);
  const [olaAddress, setOlaAddress] = useState("");
  const [currentLocation, setCurretLocation] = useState({
    userArea: "Laxmi Nagar",
    userCity: "New Delhi",
  });
  const [currentLocationOla, setCurretLocationOla] = useState({
    userArea: "Laxmi Nagar",
    userCity: "New Delhi",
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        let endpoint = `shops/area-shop?latitude=${latitude}&longitude=${longitude}`;

        // shop & area
        // const userDetails = await handleGetAPI(endpoint);
        // if (userDetails && userDetails.area) {
        //   setCurretLocation({
        //     ...currentLocation,
        //     userArea: userDetails.area.name,
        //     userCity: userDetails.area.city,
        //   });
        //   let userLocation = {
        //     shopId: userDetails.area.shop.id,
        //     latitude: latitude,
        //     longitude: longitude,
        //   };
        //   localStorage.setItem("userLocation", JSON.stringify(userLocation));
        // }

        // ola maps location
        axios
          .get(
            `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${latitude},${longitude}
            &api_key=98ZZf8NXgYGwFOpKBe5uqJh3LySMEboUjqe09mN1`
          )
          .then((res) => {
            if (res.data.status === "ok") {
              setOlaAddress(res.data.results[0]);
            }
          });
      });
    }
  }

  // ola map autoplaces
  const fetchPlaces = async (searchQuery) => {
    if (!searchQuery) {
      setPlaceValue([]);
      return null;
    }
    try {
      const response = await axios.get(
        `https://api.olamaps.io/places/v1/autocomplete?input=${searchQuery}&api_key=98ZZf8NXgYGwFOpKBe5uqJh3LySMEboUjqe09mN1`
      );
      if (response.data) {
        setPlaceValue(response.data.predictions);
      }
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  const debouncedFetchPlaces = useMemo(() => debounce(fetchPlaces, 500), []);
  const placeSearch = (e) => {
    debouncedFetchPlaces(e.target.value);
  };

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        const token = await getToken(messaging, {
          vapidKey:
            "BFvAxht7GRrP5Q2Rhbp1iU3QYWRctz4GQ-DG-nB6DGMTSODHbPJmY0O9b0q7IGI4UtCuHQMeU-MgL5lF5i7MKHY",
        });
        // Here, you can send the token to your backend server if needed
      } else {
        console.log("Unable to get permission to notify.");
      }
    } catch (error) {
      console.error("Error requesting notification permission", error);
    }
  };
  useEffect(() => {
    getLocation();
    requestPermission();
  }, []);

  return (
    <nav className="global_layout nav_bg">
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
            {/* <h1>{currentLocation.userCity}</h1> */}
            {(olaAddress && (
              <h1>{`${olaAddress.address_components[2].short_name}`} </h1>
            )) || <h1> New Delhi </h1>}

            {olaAddress && placeValue.length === 0 ? (
              <h2>{`${olaAddress.name}, ${olaAddress.address_components[3].short_name}`}</h2>
            ) : (
              <h2>
                {currentLocationOla.userArea.length > 29
                  ? currentLocationOla.userArea.slice(0, 30)
                  : currentLocationOla.userArea}
                ...
              </h2>
            )}
          </div>
          <div onClick={() => setShowSearch(!showSearch)}>
            <IoIosArrowDropdownCircle size={25} className="cursor" />
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
      {showSearch && (
        <div className="place_search">
          <input
            type="text"
            name="placeSearch"
            id="search"
            className="search_input"
            placeholder="Search your place..."
            // value={currentLocationOla.userArea}
            onChange={(e) => placeSearch(e)}
          />
          <ul className="flex_column">
            {placeValue.length > 0 &&
              placeValue.map((item, id) => {
                const { description, terms } = item;
                return (
                  <li
                    className="search_heading"
                    key={id}
                    onClick={() => {
                      setCurretLocationOla({
                        ...currentLocationOla,
                        userArea: description,
                        userCity: terms[4].value,
                      }),
                        setShowSearch(false);
                    }}
                  >
                    {description}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </nav>
  );
}

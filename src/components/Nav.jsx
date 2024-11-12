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
import debounce from "lodash.debounce";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import axios from "axios";
export default function Nav() {
  const quantity = useSelector((state) => state.cartSlice);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [placeValue, setPlaceValue] = useState([]);
  const [olaAddress, setOlaAddress] = useState("");
  const [address, setAddress] = useState("");
  const [currentLocation, setCurretLocation] = useState({
    userArea: "Laxmi Nagar",
    userCity: "New Delhi",
  });
  const [currentLocationOla, setCurretLocationOla] = useState({
    userArea: "",
    userCity: "New Delhi",
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        let endpoint = `shops/area-shop?latitude=${latitude}&longitude=${longitude}`;
        // const userDetails = await handleGetAPI(endpoint);
        let apiKey = `74a57e2076e542f0b757ae44c197f312`;
        var query = `${latitude},${longitude}`;
        // open cage implementation
        // const userExactAddress = await axios
        //   .get(
        //     `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${query}&pretty=1`
        //   )
        //   .then((res) => {
        //     if (res.data.status.code === 200) {
        //       setAddress(res.data.results[0]);
        //     }
        //     console.log(res.data, "res location");
        //   });
        // ola maps implementation
        const ola_map = await axios
          .get(
            `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${latitude},${longitude}
            &api_key=98ZZf8NXgYGwFOpKBe5uqJh3LySMEboUjqe09mN1`
          )
          .then((res) => {
            if (res.data.status === "ok") {
              setOlaAddress(res.data.results[0]);
              // console.log(res.data.results[0], " ola res location");
            }
          });
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
      });
    }
  }

  const fetchPlaces = async (searchQuery) => {
    // console.log(searchQuery, "serach querys");
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
  useEffect(() => {
    getLocation();
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
            )) || <h1>New Delhi </h1>}
            {/* 
            open cage implementation
            <h1> {(address && address.components.state) || "New Delhi"} </h1> */}
            {/* 
           open cage implementation
            <h2>
              {`${(address && address.components.road) || "Bikaner road"}, ${
                (address && address.components.state_district) || "Laxmi Nagar"
              }  `}
            </h2> */}

            {olaAddress && placeValue.length === 0 ? (
              <h2>{`${olaAddress.name}, ${olaAddress.address_components[3].short_name}`}</h2>
            ) : (
              <h2>{currentLocationOla.userArea.slice(0, 30)}...</h2>
            )}
          </div>
          <div onClick={() => setShowSearch(true)}>
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
                const { description } = item;
                return (
                  <li
                    className="search_heading"
                    key={id}
                    onClick={() => {
                      setCurretLocationOla({
                        ...currentLocationOla,
                        userArea: description,
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

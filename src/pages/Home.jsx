import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Global.css";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import { category } from "../utils/categories";
import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";
export default function Home() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Notification permission
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
    // requestPermission();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/fish.jpg" alt="fish image" className="banner_img" />
        </div>
        <div>
          <img
            src="/images/mutton.jpg"
            alt="mutton image"
            className="banner_img"
          />
        </div>
        <div>
          <img
            src="/images/chicken.jpg"
            alt="chicken image"
            className="banner_img"
          />
        </div>
        <div>
          <img src="/images/egg.jpg" alt="egg image" className="banner_img" />
        </div>
      </Slider>
      <div className="global_layout">
        <div className="outer_section">
          <h1>Pick From Your Favourite Category </h1>
          <section className="two_section">
            <div className="category_flex">
              {category.map((item, key) => {
                return (
                  <Link
                    to={`/category?selected_cat=${item.id}`}
                    key={key}
                    className="category_cards"
                  >
                    <div className="category_cards__text">
                      <h2>{item.name}</h2>
                      <h3>{item.title}</h3>
                    </div>
                    <img
                      src={item.coverImage}
                      alt="category image"
                      className="category_img"
                    />
                    <div className="explore_more">
                      <span className="explore_more__btn">Explore More</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="parallax_section"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

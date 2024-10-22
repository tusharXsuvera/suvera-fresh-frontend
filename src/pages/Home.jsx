import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/Global.css";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
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
  return (
    <div>
      <Nav />
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
      <div className="category_section">
        <h1>Pick From Your Favorite Category </h1>
      </div>
      <Footer />
    </div>
  );
}

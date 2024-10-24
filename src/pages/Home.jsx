import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/global.css";
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import { category } from "../utils/categories";
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
        <h1>Pick From Your Favourite Category </h1>
        <div className="two_section">
          <div className="category_flex">
            {category.map((item, key) => {
              return (
                <div key={key} className="category_cards">
                  {/* <div className="category_cards__text">
                    <h2>{item.name}</h2>
                    <h3>{item.title}</h3>
                  </div> */}
                  <Link to="/category" state={{ id: item.id }}>
                    <img
                      src={item.coverImage}
                      alt="category image"
                      className="category_img"
                    />
                    {/* <div className="explore_more__flex">
                      <span className="explore_more__btn">Explore More</span>
                    </div> */}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="parallax_section"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

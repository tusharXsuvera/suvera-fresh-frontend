import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/About.css";

export default function Aboutus() {
  return (
    <>
      <Nav />
      <div className="global_layout ">
        <div className="header_msg">
          <h1>About us</h1>
          <hr />
        </div>
        <section className="video_section">
          <div className="section_left">
            <iframe
              className="play"
              src="https://www.youtube.com/embed/50NPFL1Hfe8?mute=1"
            ></iframe>
          </div>
          <div className="section_rgt">
            <h1 className="main_heading">
              Foodchow - Free Food Ordering Solution
            </h1>
            <p className="para">
              Foodchow is an online and mobile food ordering system which we
              have developed for restaurant owners and food lovers. Through
              Foodchow we are helping customers to discover the best restaurants
              in city. If you are restaurant owner, you can easily register your
              restaurant and upload restaurant menu to start receiving online
              orders through this fast growing portal without any cost.
            </p>
          </div>
        </section>
      </div>
      <div className="mobile_section">
        <div className="quotes">
          <h1 className="main_heading">Our Promise</h1>
          <p className="para">
            Quality You Can Trust: We source our meats from trusted local farms
            that prioritize animal welfare and sustainable practices. Freshness
            Guaranteed: Our products are processed and packaged with care,
            ensuring you receive only the freshest cuts. Variety for Every
            Taste: From grass-fed eggs, fish, and organic chicken to specialty
            meats and seasonal selections, our diverse range caters to every
            palate.
          </p>
        </div>
        <img src="/images/vision.jpg" alt="mobile screen" className="vision" />
        <div className="quotes">
          <h1 className="main_heading">Why Choose Us?</h1>
          <p className="para">
            Convenience: No more trips to the grocery store. Enjoy the ease of
            having fresh meat delivered straight to you. Expert Advice: Our team
            is here to help! Whether you need cooking tips or recipe ideas,
            we're just a message away. Satisfaction Guaranteed: If you're not
            completely satisfied with your order, let us know, and we'll make it
            right.
          </p>
        </div>
      </div>
      <div className="global_layout">
        <section className="ceo_section">
          <div className="ceo_details">
            <h1 className="main_heading">Salim Khan, CEO</h1>
            <p className="para">
              Salim Khan is the founder and CEO of SuveraFresh. He has developed
              Foodchow for Restaurants’ owners around the world to help them
              connect with their customers. He has spent 10+ years in Australia
              and finally decided to start his own FoodTech Startup. He is young
              and enthusiastic and always looking for innovative ways to
              increase productivity.
            </p>
            <br />
            <p className="para">
              Mr. Salim is also a professional development trainer with subject
              expertise in Online Marketing, Developing Mobile Apps and Website
              Designs.
            </p>
          </div>
          <img src="/images/ceo.jpg" alt="ceo image" className="ceo_image" />
        </section>
      </div>
      <section className="ordering_methods">
        <h1 className="main_heading about-title">
          FoodChow has introduced three different methods in ordering the food.
        </h1>
        <p className="para about-title">
          Customer of FoodChow can select any method for food ordering.
          <br />
          FoodChow is also providing facility to offer all there or any of them
          ordering method to restaurant owner.
        </p>
        <div className="methods_img__flex">
          <img
            src="/images/mutton.jpg"
            alt="methods image"
            className="methods_img"
          />
          <img
            src="/images/chicken.jpg"
            alt="methods image"
            className="methods_img"
          />
          <img
            src="/images/delivery.jpg"
            alt="methods image"
            className="methods_img"
          />
        </div>
        <div className="signup_btn__flex">
          <Link to="/" className="signup_btn__flex signup_btn__about">
            <span>Sign up in 60 seconds</span>
            <MdLogin width={100} />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

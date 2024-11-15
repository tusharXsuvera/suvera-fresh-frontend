import React, { useEffect } from "react";

import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/About.css";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
            <h1 className="main_heading">SuveraFresh - Fresh Everyday</h1>
            <p className="para">
              Welcome to SuveraFresh, your go-to website and app for the
              freshest meats and eggs delivered right to your doorstep! We
              specialize in providing top-quality, fresh chicken, mutton, and
              eggs, ensuring you have the best ingredients for your meals. With
              our commitment to freshness, we guarantee that every product you
              receive is of the highest standard, straight from farm to table.
              Our tagline, “Fresh Everyday,” reflects our promise to deliver
              freshness daily, making it easier for you to enjoy nutritious and
              delicious meals. Whether you’re planning a family dinner or a
              special gathering, SuveraFresh is here to meet your needs.
            </p>
          </div>
        </section>
      </div>
      <div className="mobile_section">
        <div
          className="mobile_flex global_layout"
          style={{ paddingTop: "0px", paddingBottom: "0px" }}
        >
          <div className="quotes_left">
            <h1 className="main_heading">Our Promise</h1>
            <p className="para">
              <b> Quality You Can Trust: </b>
              We source our meats from trusted local farms that prioritize
              animal welfare and sustainable practices.
              <br />
              <b>Freshness Guaranteed: </b>
              Our products are processed and packaged with care, ensuring you
              receive only the freshest cuts.
              <br />
              <b>Variety for Every Taste: </b>
              From grass-fed eggs, fish, and organic chicken to specialty meats
              and seasonal selections, our diverse range caters to every palate.
            </p>
          </div>
          <img
            src="/images/appfront.jpg"
            alt="mobile screen"
            className="vision"
          />
          <div className="quotes_rgt">
            <h1 className="main_heading">Why Choose Us?</h1>
            <p className="para">
              <b>Convenience: </b>
              No more trips to the grocery store. Enjoy the ease of having fresh
              meat delivered straight to you.
              <br />
              <b>Expert Advice: </b>Our team is here to help! Whether you need
              cooking tips or recipe ideas, we're just a message away.
              <br />
              <b>Satisfaction Guaranteed: </b>
              If you're not completely satisfied with your order, let us know,
              and we'll make it right.
            </p>
          </div>
        </div>
      </div>
      <div className="global_layout">
        {/* <section className="ceo_section">
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
        </section> */}
        <section className="ordering_methods">
          <h1 className="main_heading about-title">
            SuveraFresh has introduced different categories in ordering.
          </h1>
          <p className="para about-title">
            Customer of SuveraFresh can select any category for food ordering.
            <br />
            SuveraFresh is also providing facility to offer all there or any of
            them ordering method to restaurant owner.
          </p>
          <div className="methods_img__flex">
            <img
              src="/images/muttonbone.JPG"
              alt="methods image"
              className="methods_img"
            />
            <img
              src="/images/fishnormal.JPG"
              alt="methods image"
              className="methods_img"
            />
            <img
              src="/images/bonelesschicken.JPG"
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
      </div>
    </>
  );
}

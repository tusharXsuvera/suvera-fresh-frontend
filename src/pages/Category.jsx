import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/Global.css";
import "../css/Category.css";

export default function Category() {
  return (
    <div>
      <Nav />
      <div className="global_layout">
        <h1>Order From Your Favourite Category!</h1>
        <div className="category_bar">
          <div>
            <span className="categor_bar_options">Chicken</span>
          </div>
          <div>
            <span className="categor_bar_options">Mutton</span>
          </div>
          <div>
            <span className="categor_bar_options">Fish</span>
          </div>
          <div>
            <span className="categor_bar_options"> Eggs</span>
          </div>
        </div>
        <h2 style={{ fontWeight: 400 }}>Showing 5 Results</h2>
      </div>
      <Footer />
    </div>
  );
}

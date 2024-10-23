import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "../css/Global.css";
import "../css/Category.css";
import { category } from "../utils/categories";

export default function Category() {
  const location = useLocation();
  const [selectedCat, setSelectedCat] = useState(
    (location.state && location.state.id) || 0
  );

  return (
    <div>
      <Nav />
      <div className="global_layout">
        <h1>Order From Your Favourite Category!</h1>
        <div className="category_bar">
          {category.map((item, key) => {
            return (
              <div key={key}>
                <span
                  className={
                    item.id == selectedCat
                      ? "categor_bar_options active"
                      : "categor_bar_options"
                  }
                  onClick={() => setSelectedCat(item.id)}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
        <h2 style={{ fontWeight: 400 }}>
          Showing {category[selectedCat].products.length} Results
        </h2>
        {category[selectedCat].products.map((item, key) => {
          return (
            <div key={key} className="product_flex">
              <img
                src={item.image}
                alt="product image"
                className="product_img"
              />
              <div className="prod_text">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h2>₹ {item.price}</h2>
                <div className="prod_btn__flex">
                  <span className="add_btn">Add</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
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
                    item.id === selectedCat
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
              <Link
                to={`/product-detail/${item.name}?selected_cat=${selectedCat}&prod_id=${item.id}`}
                className="prod_img__outer"
              >
                <img
                  src={item.image}
                  alt="product image"
                  className="product_img"
                />
              </Link>
              <div className="prod_text">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h2>₹ {item.price}</h2>
                <Link
                  to={`/product-detail/${item.name}?selected_cat=${selectedCat}&prod_id=${item.id}`}
                  className="prod_btn__flex"
                >
                  <span className="add_btn">Explore</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

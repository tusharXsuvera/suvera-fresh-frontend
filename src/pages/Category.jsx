import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/Category.css";
import "../css/Global.css";
import { category } from "../utils/categories";

export default function Category() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [selected_cat, setSelectedCat] = useState(
    queryParams.get("selected_cat") || 0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="global_layout">
      <h1>Order From Your Favourite Category!</h1>
      <div className="category_bar">
        {category.map((item, key) => {
          return (
            <div key={key}>
              <Link
                to={`/category?selected_cat=${item.id}`}
                className={
                  item.id == selected_cat
                    ? "categor_bar_options active"
                    : "categor_bar_options"
                }
                onClick={() => setSelectedCat(item.id)}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <h2 style={{ fontWeight: 400 }}>
        Showing {category[selected_cat].products.length} Results
      </h2>
      {category[selected_cat].products.map((item, key) => {
        return (
          <div key={key} className="product_flex">
            <Link
              to={`/product-detail/${item.name}?selected_cat=${selected_cat}&prod_id=${item.id}`}
              className="prod_img__outer"
            >
              <img
                src={item.image}
                alt="product image"
                className="product_img"
              />
            </Link>
            <div className="prod_text">
              <h2>{item.name} (1000gm Pack )</h2>
              <p>{item.description}</p>
              <h2>₹ {item.price.toFixed(2)} / Pack</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

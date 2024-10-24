import React, { useRef } from "react";
import Nav from "../components/Nav";
import NoPage from "./NoPage";
import Footer from "../components/Footer";
import "../css/global.css";
import "../css/category.css";
import "../css/productDetail.css";
import { useLocation } from "react-router-dom";
import { category } from "../utils/categories";

export default function ProductDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selected_cat = queryParams.get("selected_cat");
  const prod_id = queryParams.get("prod_id");
  const prodDetails = useRef(
    selected_cat && prod_id ? category[selected_cat].products[prod_id] : 0
  );
  const similarProducts = useRef(
    selected_cat && prod_id ? category[selected_cat].similar_prod : 0
  );
  if (!prodDetails.current) return <NoPage />;
  return (
    <div>
      <Nav />
      <div className="global_layout">
        <div className="product_flex">
          <div className="prod_img__outer">
            <img
              src={`/${prodDetails.current.image}`}
              alt="product image"
              className="product_img prod_detail_img"
            />
          </div>
          <div className="prod_text">
            <h2>{prodDetails.current.name}</h2>
            <p>{prodDetails.current.description}</p>
            <h2>₹ {prodDetails.current.price}</h2>
            <div className="quantity_flex">
              <div className="quantity_btn">+</div>
              <b>0</b>
              <div className="quantity_btn">-</div>
            </div>
          </div>
        </div>
        <div>
          <h1>Similar Products </h1>
          <div className="similar_flex">
            {similarProducts.current.map((item, key) => {
              return (
                <div className="similar_prod__card" key={key}>
                  <img
                    src={item.image}
                    alt="similar products"
                    className="similar_prod__img"
                  />
                  <div className="prod_text">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <h2>₹ {item.price}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

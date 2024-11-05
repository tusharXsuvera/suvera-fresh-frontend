import React, { useRef, useState, useEffect } from "react";
import NoPage from "./NoPage";
import "../css/Global.css";
import "../css/Category.css";
import "../css/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeToCart } from "../reduxStore/slices/addToCart";
import { category } from "../utils/categories";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
export default function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cartSlice);
  const [selectedWgt, setSelectedWgt] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const selected_cat = queryParams.get("selected_cat");
  const prod_id = queryParams.get("prod_id");
  const prodDetails = useRef(
    selected_cat && prod_id ? category[selected_cat].products[prod_id] : 0
  );
  const similarProducts = useRef(
    selected_cat && prod_id ? category[selected_cat].similar_prod : 0
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!prodDetails.current) return <NoPage />;
  return (
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
            <div className="quantity_btn" onClick={() => dispatch(addToCart())}>
              +
            </div>
            <b>{quantity.value}</b>
            <div
              className="quantity_btn"
              onClick={() => dispatch(removeToCart())}
            >
              -
            </div>
            <div className="prod_btn__flex">
              <span className="add_btn">Add to Cart</span>
            </div>
          </div>
          {selectedWgt ? (
            <div>
              <TextField
                placeholder="Enter weight in grams"
                id="outlined-start-adornment"
                sx={{ width: "50ch" }}
                type="number"
                // slotProps={{
                //   input: {
                //     startAdornment: (
                //       <InputAdornment position="start">gm</InputAdornment>
                //     ),
                //   },
                // }}
              />
            </div>
          ) : (
            <Stack direction="row" spacing={1}>
              <Chip
                label="250 gm"
                variant="outlined"
                clickable
                style={{ fontSize: "1.4em" }}
              />
              <Chip
                label="500 gm"
                variant="outlined"
                clickable
                style={{ fontSize: "1.4em" }}
              />
              <Chip
                label="1000 gm"
                variant="outlined"
                clickable
                style={{ fontSize: "1.4em" }}
              />
              <Chip
                label="1500 gm"
                variant="outlined"
                clickable
                style={{ fontSize: "1.4em" }}
              />
              <Chip
                label="More"
                variant="outlined"
                onClick={() => setSelectedWgt(true)}
                clickable
                style={{ fontSize: "1.4em" }}
              />
            </Stack>
          )}
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
  );
}

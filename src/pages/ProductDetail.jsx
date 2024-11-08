import React, { useRef, useState, useEffect, useCallback } from "react";
import NoPage from "./NoPage";
import "../css/Global.css";
import "../css/Category.css";
import "../css/Product.css";
import { useLocation, Link } from "react-router-dom";
import { category } from "../utils/categories";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { addToCart } from "../reduxStore/slices/addToCart";
import { useDispatch, useSelector } from "react-redux";
export default function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedWgt, setSelectedWgt] = useState(false);
  const [handlePrice, setHandlePrice] = useState(1);
  const [quantities, setQuantities] = useState(1);
  const [chipsColor, setChipsColor] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
  });
  const queryParams = new URLSearchParams(location.search);
  const selected_cat = queryParams.get("selected_cat");
  const prod_id = queryParams.get("index");
  const prodDetails = useRef(
    selected_cat && prod_id ? category[selected_cat].products[prod_id] : 0
  );
  const similarProducts = useRef(
    selected_cat && prod_id ? category[selected_cat].similar_prod : 0
  );
  const cartProducts = useSelector((state) => state.cartSlice.value);
  const [checkProduct, setCheckProduct] = useState(false);

  const AddCartInfo = () => {
    const productDetail = {
      prodDetails: prodDetails.current,
      quantity: quantities,
      handleWgtPrice: handlePrice,
    };
    dispatch(addToCart(productDetail));
    setCheckProduct(true);
  };
  const checkAdded = () => {
    const existingProduct = cartProducts.find(
      (item) => item.prodDetails.id === prodDetails.current.id
    );
    if (existingProduct) setCheckProduct(true);
  };
  useEffect(() => {
    checkAdded();
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
          <h2>{prodDetails.current.name} (1000gm Pack )</h2>
          <p>{prodDetails.current.description}</p>
          <h2>
            ₹{" "}
            {selectedWgt
              ? (prodDetails.current.price * handlePrice).toFixed(2)
              : (prodDetails.current.price * handlePrice * quantities).toFixed(
                  2
                )}
          </h2>
          {checkProduct ? (
            <div>
              <Link className="add_btn" to="/cart">
                Product added ! Go to cart
              </Link>
            </div>
          ) : (
            <div className="chips_gaps">
              <div className="quantity_flex">
                {!selectedWgt && (
                  <div className="quantity_flex">
                    <div
                      className="add_btn quantity_btn"
                      onClick={() =>
                        setQuantities((prevQuantity) =>
                          prevQuantity < 10 ? prevQuantity + 1 : 10
                        )
                      }
                    >
                      +
                    </div>
                    <input
                      type="number"
                      name="quantiy"
                      value={quantities}
                      className="quantity_input"
                      disabled
                    />
                    <div
                      className="add_btn quantity_btn"
                      onClick={() =>
                        setQuantities((prevQuantity) =>
                          prevQuantity > 1 ? prevQuantity - 1 : 1
                        )
                      }
                    >
                      -
                    </div>
                  </div>
                )}
                <button
                  className="add_btn"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    AddCartInfo();
                  }}
                >
                  Add to Cart
                </button>
              </div>

              {selectedWgt ? (
                <div>
                  <TextField
                    placeholder="Enter weight in grams"
                    id="outlined-start-adornment"
                    sx={{ width: "40ch" }}
                    type="number"
                    onChange={(e) => setHandlePrice(e.target.value / 1000)}
                  />
                </div>
              ) : (
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="250gm"
                    variant="outlined"
                    clickable
                    className={
                      chipsColor.value1 ? "chips highlight_chips" : "chips"
                    }
                    onClick={() => {
                      setHandlePrice(250 / 1000),
                        setChipsColor({
                          ...chipsColor,
                          value1: true,
                          value2: false,
                          value3: false,
                          value4: false,
                          value5: false,
                        });
                    }}
                  />
                  <Chip
                    label="500gm"
                    variant="outlined"
                    clickable
                    className={
                      chipsColor.value2 ? "chips highlight_chips" : "chips"
                    }
                    onClick={() => {
                      setHandlePrice(500 / 1000),
                        setChipsColor({
                          ...chipsColor,
                          value2: true,
                          value1: false,
                          value3: false,
                          value4: false,
                          value5: false,
                        });
                    }}
                  />
                  <Chip
                    label="1000gm"
                    variant="outlined"
                    clickable
                    className={
                      chipsColor.value3 ? "chips highlight_chips" : "chips"
                    }
                    onClick={() => {
                      setHandlePrice(1000 / 1000),
                        setChipsColor({
                          ...chipsColor,
                          value3: true,
                          value2: false,
                          value1: false,
                          value4: false,
                          value5: false,
                        });
                    }}
                  />
                  <Chip
                    label="1500gm"
                    variant="outlined"
                    clickable
                    className={
                      chipsColor.value4 ? "chips highlight_chips" : "chips"
                    }
                    onClick={() => {
                      setHandlePrice(1500 / 1000),
                        setChipsColor({
                          ...chipsColor,
                          value4: true,
                          value2: false,
                          value3: false,
                          value1: false,
                          value5: false,
                        });
                    }}
                  />

                  <Chip
                    label="2000gm"
                    variant="outlined"
                    clickable
                    className={
                      chipsColor.value5 ? "chips highlight_chips" : "chips"
                    }
                    onClick={() => {
                      setHandlePrice(2000 / 1000),
                        setChipsColor({
                          ...chipsColor,
                          value5: true,
                          value2: false,
                          value3: false,
                          value4: false,
                          value1: false,
                        });
                    }}
                  />
                  <Chip
                    label="More"
                    variant="outlined"
                    onClick={() => {
                      setSelectedWgt(true);
                      setHandlePrice(1);
                    }}
                    clickable
                    className="chips"
                  />
                </Stack>
              )}
            </div>
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
                  <h2>₹ {item.price.toFixed(2)}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

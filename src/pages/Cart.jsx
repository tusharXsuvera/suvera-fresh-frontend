import React, { useEffect } from "react";
import "../css/Cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../reduxStore/slices/addToCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartSlice.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="global_layout">
      <div className="header_msg">
        <h1>My Cart </h1>
        <hr />
      </div>
      {cartProducts.length === 0 ? (
        <div className="add_prod__quote">
          <h1 style={{ marginBottom: "1.5em" }}>
            Your shopping cart is empty !!!
          </h1>
          <Link to="/category">
            <b className="continue_shop__text">Click to add products </b>
          </Link>
        </div>
      ) : (
        <>
          <div style={{ overflowX: "auto" }}>
            <table className="cart_table">
              <thead>
                <tr>
                  <th>
                    <span className="theading">Product</span>
                  </th>
                  <th></th>
                  <th>
                    <span className="theading">Unit Price</span>
                  </th>
                  <th>
                    <span className="theading">Qty</span>
                  </th>
                  <th>
                    <span className="theading">Weight</span>
                  </th>
                  <th>
                    <span className="theading">Subtotal</span>
                  </th>
                  <th>
                    <span className="theading">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.length > 0 &&
                  cartProducts.map((item, key) => {
                    const { prodDetails, quantity, handleWgtPrice } = item;
                    return (
                      <tr key={key}>
                        <td>
                          <img
                            src={prodDetails.image}
                            alt="product"
                            className="cart_prod__img"
                          />
                        </td>
                        <td>
                          <span className="handle_tbody">
                            {prodDetails.name}
                          </span>
                        </td>
                        <td>
                          <span className="handle_tbody">
                            {prodDetails.price.toFixed(2)}
                          </span>
                        </td>
                        <td>
                          <div className="quantity_flex">
                            {/* <div
                            className="add_btn quantity_btn"
                            // onClick={() =>
                            //   setQuantities((prevQuantity) =>
                            //     prevQuantity < 10 ? prevQuantity + 1 : 10
                            //   )
                            // }
                          >
                            +
                          </div> */}
                            <input
                              type="number"
                              name="quantiy"
                              value={quantity}
                              className="quantity_input"
                              disabled
                            />
                            {/* <div
                            className="add_btn quantity_btn"
                            // onClick={() =>
                            //   setQuantities((prevQuantity) =>
                            //     prevQuantity > 1 ? prevQuantity - 1 : 1
                            //   )
                            // }
                          >
                            -
                          </div> */}
                          </div>
                        </td>
                        <td>
                          <span className="handle_tbody">
                            {handleWgtPrice * 1000}gm
                          </span>
                        </td>
                        <td>
                          <span className="handle_tbody">
                            {(
                              prodDetails.price *
                              handleWgtPrice *
                              quantity
                            ).toFixed(2)}
                          </span>
                        </td>
                        <td>
                          <RiDeleteBin6Line
                            size={25}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch(removeToCart(prodDetails.id))
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="flex_wrap justify_end ">
              <hr className="hr_line" />
            </div>
          </div>
          <div className="flex_wrap justify_btw">
            <div>
              <div className="flex_wrap">
                <input
                  type="text"
                  placeholder="REDEEM COUPON CODE"
                  className="global_input"
                />
                <button className="add_btn">Apply</button>
              </div>
              <div style={{ paddingTop: "1em" }}>
                <h6>* Only one offer/coupon can be applied</h6>
              </div>
            </div>
            <table className="total_table">
              <tbody>
                <tr>
                  <td>
                    <span className="handle_tbody">Item subtotal</span>
                  </td>
                  <td className="text_right">
                    <span className="handle_tbody">₹279.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="handle_tbody">Grand total</span>
                  </td>
                  <td className="text_right">
                    <span className="handle_tbody">₹279.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="handle_tbody">Amount to pay</span>
                  </td>
                  <td className="text_right">
                    <span className="handle_tbody">₹279.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex_wrap justify_end checkout_btn">
            <button className="add_btn">Proceed to checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

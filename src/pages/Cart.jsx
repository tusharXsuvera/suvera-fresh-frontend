import React, { useEffect } from "react";
import "../css/Cart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../reduxStore/slices/addToCart";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartSlice.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(cartProducts, "products on cart");
  return (
    <div className="global_layout">
      <div className="header_msg">
        <h1>My Cart </h1>
        <hr />
      </div>
      {cartProducts.length === 0 ? (
        <h1 className="add_prod__quote">Please Add Some Products !!!</h1>
      ) : (
        <table>
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
                const {
                  prodDetails,
                  quantity,
                  handleWgtPrice,
                  selected_cat,
                  prod_id,
                } = item;
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
                      <span className="handle_tbody">{prodDetails.name}</span>
                    </td>
                    <td>
                      <span className="handle_tbody">
                        {prodDetails.price.toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <div className="quantity_flex">
                        <div
                          className="quantity_btn"
                          // onClick={() =>
                          //   setQuantities((prevQuantity) =>
                          //     prevQuantity < 10 ? prevQuantity + 1 : 10
                          //   )
                          // }
                        >
                          +
                        </div>
                        <input
                          type="number"
                          name="quantiy"
                          value={quantity}
                          className="quantity_input"
                          disabled
                        />
                        <div
                          className="quantity_btn"
                          // onClick={() =>
                          //   setQuantities((prevQuantity) =>
                          //     prevQuantity > 1 ? prevQuantity - 1 : 1
                          //   )
                          // }
                        >
                          -
                        </div>
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
                          dispatch(
                            removeToCart({
                              prod_id,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {/* <tfoot>
          <tr>
            <td>
              <div className="prod_btn__flex">
                <span className="add_btn">Update Cart</span>
              </div>
            </td>
            <td>
              <div className="prod_btn__flex">
                <span className="add_btn">Clear Cart</span>
              </div>
            </td>
            <td>
              <div className="prod_btn__flex">
                <span className="add_btn">Continue Shopping</span>
              </div>
            </td>
          </tr>
        </tfoot> */}
        </table>
      )}
    </div>
  );
}

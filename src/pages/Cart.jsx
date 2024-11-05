import React, { useEffect } from "react";
import "../css/Cart.css";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="global_layout">
      <div className="header_msg">
        <h1>My Cart </h1>
        <hr />
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th></th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="/images/mutton.jpg"
                alt="product"
                className="cart_prod__img"
              />
            </td>
            <td>Mutton Soup Bones </td>
            <td>₹100.00</td>
            <td>
              <div className="quantity_flex">
                <div className="quantity_btn">+</div>
                <b>0</b>
                <div className="quantity_btn">-</div>
              </div>
            </td>
            <td>₹1,100.00</td>
          </tr>
          <tr>
            <td>
              <img
                src="/images/mutton.jpg"
                alt="product"
                className="cart_prod__img"
              />
            </td>
            <td>Mutton Soup Bones </td>
            <td>₹100.00</td>
            <td>
              <div className="quantity_flex">
                <div className="quantity_btn">+</div>
                <b>0</b>
                <div className="quantity_btn">-</div>
              </div>
            </td>
            <td>₹1,100.00</td>
          </tr>
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </div>
  );
}

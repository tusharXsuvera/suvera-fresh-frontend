import React, { useState } from "react";
import "../css/Checkout.css";
import { handleGetAPI, handlePostAPI } from "../apiCall/api";
import { useSelector } from "react-redux";

export default function Checkout() {
  const [username, setUserName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const cartProducts = useSelector((state) => state.cartSlice.value);

  const placeOrder = async (event) => {
    event.preventDefault();
    const storedUser = localStorage.getItem("userLocation");

    // Convert the string back to an object
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      let formdata = {
        name: username,
        delivery_address: deliveryAddress,
        products: cartProducts,
        shopId: userObj.shopId,
        latitude: userObj.latitude,
        longitude: userObj.longitude,
      };
      let endpoint = "place-order";
      // const result = await handlePostAPI(endpoint, formdata);
    }
  };
  return (
    <div className="global_layout width_manage">
      <div className="header_msg">
        <h1>Checkout</h1>
        <hr />
      </div>
      <div className="text_center" style={{ marginBottom: "20px" }}>
        <h1> Fill the details to proceed further !</h1>
      </div>
      <form className="flex_wrap justify_center" onSubmit={placeOrder}>
        <div>
          <input
            type="text"
            name="username"
            className="global_input"
            placeholder="Enter the name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="userAdrress"
            className="global_input"
            placeholder="Enter the address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </div>
        <div>
          <input className="add_btn" type="submit" value="Checkout" />
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "../css/Checkout.css";
import { handlePostAPI } from "../apiCall/api";

export default function Checkout() {
  const [username, setUserName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const placeOrder = (event) => {
    event.preventDefault();
    let formdata = {
      name: username,
      delivery_address: deliveryAddress,
      products: "",
      shopId: "",
      latitude: "",
      longitude: "",
    };
    // let endpoint =""
    // const result = handlePostAPI(endpoint, formdata);
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

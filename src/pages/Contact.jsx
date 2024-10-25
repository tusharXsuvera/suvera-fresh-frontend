import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GoogleMapReact from "google-map-react";
import "../css/Contact.css";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);
export default function Contact() {
  const defaultProps = {
    center: {
      lat: 26.4717394,
      lng: 80.3545043,
    },
    zoom: 13,
  };

  return (
    <div>
      <Nav />
      <div className="global_layout">
        <div className="form_div">
          <h1>We've been waiting for you.</h1>

          <form className="form">
            <h2>Send us a Message</h2>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                className="input_type"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input_type"
              />
            </div>
            <div>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter your number"
                className="input_type"
              />
            </div>
            <div>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Enter your message"
                className="input_type"
              />
            </div>
          </form>
          <button type="submit" value="Submit" className="submit_btn">
            Submit
          </button>

          <div style={{ height: "100vh", width: "100%", marginTop: "20px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={26.4717394}
                lng={80.3545043}
                text="My Location"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

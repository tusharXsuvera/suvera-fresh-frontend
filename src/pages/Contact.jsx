import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="global_layout">
      <div>
        <div className="header_msg">
          <h1>Contact us </h1>
          <hr />
        </div>
        <div className="contact_types__flex">
          <div className="contact_types">
            <img src="/images/call.png" alt="email us" />
            <h1>By Email</h1>
            <span>suverafresh@gmail.com</span>
          </div>
          <div className="contact_types">
            <img src="/images/call.png" alt="email us" />
            <h1>By Call</h1>
            <span>1800-4190-788</span>
          </div>
          <div className="contact_types">
            <img src="/images/location.png" alt="email us" />
            <h1>Locate me</h1>
            <span>WestCott Building, The Mall</span>
          </div>
        </div>
      </div>
      <div className="form_div">
        <section className="map_section">
          <div className="form_outer">
            <form className="form">
              <h1>Send us your query</h1>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Name"
                  className="input_type"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input_type"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter Your Number"
                  className="input_type"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input_type"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter Your Message/Requirement"
                  className="input_type"
                />
              </div>
            </form>
            <button type="submit" value="Submit" className="submit_btn">
              Submit
            </button>
          </div>
          <div style={{ aspectRatio: 1.3, width: "100%" }}>
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
        </section>
      </div>
    </div>
  );
}

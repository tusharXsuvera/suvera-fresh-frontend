import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { welcome_para, welcome_para_ans } from "../utils/statements";
import { about_us__json } from "../utils/aboutusjson";
import "../css/About&contact.css";

export default function Aboutus() {
  return (
    <>
      <Nav />
      <div className="main_layout ">
        <b>About Us </b>
        <div className="layout">
          <h1>{welcome_para}</h1>
          <p className="welcome_para_ans">{welcome_para_ans}</p>
        </div>
        {about_us__json.map((item, key) => {
          const { heading, options } = item;
          return (
            <div key={key} className="layout">
              <ul>
                <h1>{heading}</h1>
              </ul>
              {options.map((items, ids) => {
                return (
                  <li key={ids} className="welcome_para_ans">
                    {items.para}
                  </li>
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

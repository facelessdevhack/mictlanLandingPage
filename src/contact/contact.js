import React, { Component } from "react";
import "./contact.css";
import bg from "../assets/contact.png";
export class Contact extends Component {
  render() {
    return (
      <div className="home-4" style={{ backgroundImage: `url(${bg})` }}>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <p>Do you have a question not found in our FAQ?</p>
            <div className="contact-details">
              <h3>Contact Us:</h3>
              <p>Press: press@mictlanthegame.com</p>
              <p>Jobs: jobs@mictlanthegame.com</p>
              <p>Sales: sales@mictlanthegame.com</p>
              <p>Genera: info@mictlanthegame.com</p>
            </div>
            <div className="address">
              <h3>Meta Studios Creative Agency K.K 株式会社</h3>
              <p>6F Tobu Building 6-28-9 Jingumae</p>
              <p>Shibuya, Tokyo Japan</p>
              <p>+81-505-539-META [6382]</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Contact;

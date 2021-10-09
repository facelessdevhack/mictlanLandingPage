import React, { Component } from "react";
import "./contact.css";
import bg from "../assets/contact.png";
export class Contact extends Component {
  state = {
    email: "",
    findus: "",
    reason: "",
    name: "",
    selectedOption: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onValueChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

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
          {/* <form
            action="https://formsubmit.co/newsletter@mictlanthegame.com"
            method="POST"
          > */}
          <form
            action="https://formsubmit.co/facelessdevhack@gmail.com"
            method="POST"
            className="contact-right"
          >
            <p>SEND US AN EMAIL</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
              value={this.state.name}
            />
            <div className="contact-two">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                value={this.state.email}
              />
              <input
                type="text"
                name="findus"
                placeholder="How you found us?"
                onChange={this.onChange}
                value={this.state.findus}
              />
            </div>
            <textarea
              rows={4}
              name="findus"
              placeholder="Your message"
              onChange={this.onChange}
              value={this.state.findus}
            />
            <div>
              <input
                type="text"
                name="reason"
                placeholder="Reason"
                onChange={this.onChange}
                value={this.state.reason}
              />
              <input
                type="hidden"
                name="_next"
                value="https://facelessdevhack.github.io/mictlanLandingPage/"
              />
              <input type="hidden" name="_captcha" value="false" />
            </div>
            <div className="contact-sub">
              <div className="contact-radio">
                <p>Change Your Department</p>
                <label className="container">
                  Press
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="Press"
                    value="press"
                    checked={this.state.selectedOption === "press"}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="container">
                  Sales
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="sales"
                    value="sales"
                    checked={this.state.selectedOption === "sales"}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="container">
                  NPC
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="NPC"
                    value="NPC"
                    checked={this.state.selectedOption === "NPC"}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="container">
                  Investment
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="investment"
                    value="investment"
                    checked={this.state.selectedOption === "investment"}
                  />
                  <span class="checkmark"></span>
                </label>
                <br />
                <label className="container">
                  Jobs
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="jobs"
                    value="jobs"
                    checked={this.state.selectedOption === "jobs"}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="container">
                  Music
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="music"
                    value="music"
                    checked={this.state.selectedOption === "music"}
                  />
                  <span class="checkmark"></span>
                </label>
                <label className="container">
                  Sponsorship
                  <input
                    onChange={this.onValueChange}
                    type="radio"
                    name="sponsorship"
                    value="sponsorship"
                    checked={this.state.selectedOption === "sponsorship"}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;

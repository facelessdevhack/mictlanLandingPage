import React, { Component } from 'react';
import './contact.css';
import bg from '../assets/contact.png';
export class Contact extends Component {
  state = {
    email: '',
    findus: '',
    reason: '',
    name: '',
    message: '',
    selectedOption: '',
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
    const { email, findus, reason, name, message, selectedOption } = this.state;
    return (
      <div className="home-4" style={{ backgroundImage: `url(${bg})` }}>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <p>Do you have a question not found in our FAQ?</p>
            <div className="contact-details">
              <h3>Contact Us:</h3>
              <a href='mailto:press@mictlanthegame.com'>Press: press@mictlanthegame.com</a>
              <a href='mailto:jobs@mictlanthegame.com'>Jobs: jobs@mictlanthegame.com</a>
              <a href='mailto:sales@mictlanthegame.com'>Sales: sales@mictlanthegame.com</a>
              <a href='mailto:info@mictlanthegame.com'>General: info@mictlanthegame.com</a>
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
            action = 
            {selectedOption === 'press'
              ? 'https://formsubmit.co/press@mictlanthegame.com'
              : selectedOption === 'jobs'
              ? 'https://formsubmit.co/jobs@mictlanthegame.com'
              : selectedOption === 'sales' || 'NPC'
              ? 'https://formsubmit.co/sales@mictlanthegame.com'
              : selectedOption === 'investment'
              ? 'https://formsubmit.co/investment@mictlanthegame.com'
              : selectedOption === 'music'
              ? 'https://formsubmit.co/sound@mictlanthegame.com'
              : 'https://formsubmit.co/galarcon@mictlanthegame.com'}
            method="POST"
            className="contact-right"
          >
            <p>SEND US AN EMAIL</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
              value={name}
            />
            <div className="contact-two">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onChange}
                value={email}
              />
              <input
                type="text"
                name="findus"
                placeholder="How you found us?"
                onChange={this.onChange}
                value={findus}
              />
            </div>
            <textarea
              rows={4}
              name="message"
              placeholder="Your message"
              onChange={this.onChange}
              value={message}
            />
            <div>
              <input
                type="text"
                name="reason"
                placeholder="Reason"
                onChange={this.onChange}
                value={reason}
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
                    checked={selectedOption === 'press'}
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
                    checked={selectedOption === 'sales'}
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
                    checked={selectedOption === 'NPC'}
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
                    checked={selectedOption === 'investment'}
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
                    checked={selectedOption === 'jobs'}
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
                    checked={selectedOption === 'music'}
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
                    checked={selectedOption === 'sponsorship'}
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

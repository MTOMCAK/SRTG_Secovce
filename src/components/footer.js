import React, { Component } from "react";
import FBlogo from "../images/logo/facebook.svg";
import YouTube from "../images/logo/youtube.svg";

export default class Navbar extends Component {
  facebookPage = () => {
    window.open("https://sk-sk.facebook.com/stgsecovce/", "_blank");
  };

  youTubePage = () => {
    window.open("https://www.youtube.com/channel/UCROIr9wWNLv5RfeANXV7adw", "_blank");
  };

  render() {
    return (  
        <div className="footer">
        <div className="created-by">
        <span>#</span>Created by Tomcato 2018
        </div>
        <address className="contact-info">
         Jan Vajda, jan.vajda@gmail.com, +421 902 123 456
        </address>
        <div className="social">
          <img
            src={FBlogo}
            className="social-logo"
            alt="Facebook"
            onClick={this.facebookPage}
          />
          <img
            src={YouTube}
            className="social-logo"
            alt="YouTube"
            onClick={this.youTubePage}
          />
        </div>
        </div>
    );
  }
}
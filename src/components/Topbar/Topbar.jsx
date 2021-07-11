import "./topbar.scss";
import React, { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "topbar scrolled" : "topbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List Movie</span>
        </div>
        <div className="right">
          <Search className="icon"></Search>
          <span>KID</span>
          <Notifications className="icon"></Notifications>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon"></ArrowDropDown>
            <div className="options">
              <span>Setting</span>
              <span>Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

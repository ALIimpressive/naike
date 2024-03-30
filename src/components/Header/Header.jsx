import React from "react";
import "./Header.css";
import logimg from "../img/342_jordan.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Header = ({ dark }) => {
  
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="hed-img">
            <Link to="/admin">
              <FingerprintIcon />
            </Link>
            <Link to="/">
              <img src={logimg} alt="" />
            </Link>
            <DoubleArrowIcon />
          </div>
          <div className="hed-text">
            <a
              
              style={{
                color: dark ? "white" : "",
              }}
              href=""
            >
              Find a Store
            </a>
            <div className="s"></div>
            <a href="">Helps</a>
            <div className="s"></div>
            <a href="">Join Us</a>
            <div className="s"></div>
            <a href="">Sign in</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;

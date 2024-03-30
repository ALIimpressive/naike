import React from "react";
import joss from "../img/air-jordan-6-retro-yellow-ochre-mens-shoes-QLGPHR.png";
import "./Nike.css";

const Nike = () => {
  return (
    <div
      style={
        {
          //   backdropFilter:"blur(7px)"
        }
      }
      id="nike"
    >
      <div className="container">
        <div className="blockk">
          <div className="must">
            <div className="reals1">
            <h3>Shoes</h3>
            <h3>Tops & T-Shirts</h3>
            <h3>Hoodies & Vests</h3>
            <h3>Pants & Tights</h3>
            <h3>Shorts</h3>
            <h3>Socks</h3>
            <h3>Accessories & Equipment</h3>
            <div className="s1"></div>
            </div>
            
          </div>
          <div className="nike">
            <img src={joss} alt="" />
            <img src={joss} alt="" />
            <img src={joss} alt="" />
            <img src={joss} alt="" />
            <img src={joss} alt="" />
            <img src={joss} alt="" />
            <img src={joss} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nike;

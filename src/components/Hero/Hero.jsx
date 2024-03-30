import React from "react";
import niklog from "../img/Logo_NIKE.svg.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Hero = ({ setDark, dark }) => {
  const [newFeatured, setNewFeatured] = useState(false);
  const [time, setTime] = useState(false);
  const [end, setEnd] = useState(0);
  IF();
  function IF() {
    if (newFeatured) {
      setTimeout(() => {
        setTime(true);
      }, 400);
    } else {
      setTimeout(() => {
        setTime(false);
        setEnd(0);
      }, 0);
    }
  }
  return (
    <div
      style={{
        position: newFeatured ? "sticky" : "",
        top: newFeatured ? "1px" : "",
        zIndex: newFeatured ? "11" : "",
      }}
      id="hero"
    >
      <div className="container">
        <div className="hero">
          <div className="nik">
            <img src={niklog} alt="" />
          </div>
          <div
            onMouseOver={() => {
              setNewFeatured(true);
            }}
            onMouseLeave={() => {
              setNewFeatured(false);
            }}
            className="her-text"
          >
            <h4
              onMouseOver={() => {
                setEnd(1);
              }}
              className="new-featured"
              style={{
                color: dark ? "black" : "",
                borderBottom: end === 1 ? "2px solid black" : "",
              }}
            >
              New & Featured
            </h4>
            <h4
              onMouseOver={() => {
                setEnd(2);
              }}
              style={{
                color: dark ? "white" : "",
                borderBottom: end === 2 ? "2px solid black" : "",
              }}
            >
              Men
            </h4>
            <h4
              onMouseOver={() => {
                setEnd(3);
              }}
              style={{
                color: dark ? "white" : "",
                borderBottom: end === 3 ? "2px solid black" : "",
              }}
            >
              Women
            </h4>
            <h4
              onMouseOver={() => {
                setEnd(4);
              }}
              style={{
                color: dark ? "white" : "",
                borderBottom: end === 4 ? "2px solid black" : "",
              }}
            >
              Kids
            </h4>
            <h4
              onMouseOver={() => {
                setEnd(5);
              }}
              style={{
                color: dark ? "white" : "",
                borderBottom: end === 5 ? "2px solid black" : "",
              }}
            >
              Accessories
            </h4>
            <h4
              onMouseOver={() => {
                setEnd(6);
              }}
              style={{
                color: dark ? "white" : "",
                borderBottom: end === 6 ? "2px solid black" : "",
              }}
            >
              Sale
            </h4>
          </div>
          <div className="her-ser">
            <SearchIcon className="search" />
            <input placeholder="Search" type="text" />
            <FavoriteBorderIcon className="for" />
            <WorkOutlineIcon />
            {/* <button onClick={() => setDark(!dark)}>
            <Brightness4Icon sx={{ paddingLeft: "20px", }} />
             </button> */}
            <input
              onClick={() => setDark(!dark)}
              type="checkbox"
              id="checkboxInput"
            />
            <label for="checkboxInput" class="toggleSwitch"></label>
          </div>
        </div>
      </div>
      {/* sas */}
      <div className="blur">
        <div
          className="newReatured"
          onMouseOver={() => {
            setNewFeatured(true);
          }}
          onMouseLeave={() => {
            setNewFeatured(false);
          }}
          style={{
            height: newFeatured ? "" : "0px",
            // transform: newFeatured ? "translateY(-300%)" : "translateY(0)",
          }}
        ></div>
      </div>
      {/* sas */}
      <div
          style={{
            display: !time ? "none" : "block",
          }}
          id="reat"
        >
          <div className="container">
            <div style={{
              display:end === 1 ? 'block' &&  "flex" : 'none'
            }} className="reat">
              <div className="reat-ar">
                <a href="">Valentine `s day Shop</a>
                <a href="">Shop All</a>
                <a href="">Gifts Under $30</a>  
                <a href="">Limited Time</a>
                <a href="">Last Chance Sale: Up to 40%</a>
                <a href="">Off</a>
              </div>
              <div className="reat-ar">
                <a href="">Valentine `s day Shop</a>
                <a href="">Shop All</a>
                <a href="">Gifts Under $30</a>
                <a href="">Limited Time</a>
                <a href="">Last Chance Sale: Up to 40%</a>
                <a href="">Off</a>
              </div>
              <div className="reat-ar">
                <a href="">Valentine `s day Shop</a>
                <a href="">Shop All</a>
                <a href="">Gifts Under $30</a>
                <a href="">Limited Time</a>
                <a href="">Last Chance Sale: Up to 40%</a>
                <a href="">Off</a>
              </div>
              <div className="reat-ar">
                <a href="">Valentine `s day Shop</a>
                <a href="">Shop All</a>
                <a href="">Gifts Under $30</a>
                <a href="">Limited Time</a>
                <a href="">Last Chance Sale: Up to 40%</a>
                <a href="">Off</a>
              </div>
              <div className="reat-ar">
                <a href="">Valentine `s day Shop</a>
                <a href="">Shop All</a>
                <a href="">Gifts Under $30</a>
                <a href="">Limited Time</a>
                <a href="">Last Chance Sale: Up to 40%</a>
                <a href="">Off</a>
              </div>
            </div>
            <div style={{
              display:end === 2 ? 'block' : 'none'
            }} className="reat1">
              <h1>2</h1>
            </div>
            <div style={{
              display:end === 3 ? 'block' : 'none'
            }} className="reat2">
              <h1>3</h1>
            </div>
            <div style={{
              display:end === 4 ? 'block' : 'none'
            }} className="reat3">
              <h1>4</h1>
            </div>
            <div style={{
              display:end === 5 ? 'block' : 'none'
            }} className="reat4">
              <h1>5</h1>
            </div>
            <div style={{
              display:end === 6 ? 'block' : 'none'
            }} className="reat5">
              <h1>6</h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;

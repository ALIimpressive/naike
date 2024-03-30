import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Seder from "./components/Seder/Seder";
import Sero from "./components/Sero/Sero";
import Nike from "./components/Nike.jsx/Nike";


let Darks = JSON.parse(localStorage.getItem("dark")) || false;
const Main = () => {


  const [dark, setDark] = useState(Darks || false);
  localStorage.setItem("dark", JSON.stringify(dark));
  return (
    <div
      style={{
        background: dark ? "black" : "",
        transition: "0.7s",
      }}
      className="Main"
    >
      <div className="bg"></div>

      <Hero setDark={setDark} dark={dark} />
      <Seder dark={dark} />
      <Sero dark={dark} />
      <Nike dark={dark} />
      
    </div>
  );
};

export default Main;

import React, { useRef, useState } from "react";
import "../components/css/styles.css";

const Aim = () => {
  return (
    <div
      style={{
        marginTop: 200,
      }}
    >
      <div className="aimContainer">
        <text className="text aText">
          Our aim is to implement the playfair cipher and show its simulation.
        </text>
        <text className="text psText">
          User have to enter the plain text and key to encrypt the text and get
          cipher text as a result.
        </text>
      </div>
    </div>
  );
};

export default Aim;

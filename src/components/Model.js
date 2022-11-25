import React, { useState } from "react";
import "./Model.css";
const Model = (props) => {
  return (
    <div className="model">
      <div className="model_Container">
        <div className="header">
          <h2>Plain Text : {props.plaintext}</h2>
          <h2>Key : {props.keyy}</h2>
        </div>
        <div className="body">
          <p>Abhay Ambule lorem50</p>
        </div>
        <div className="footer">
          <button
            className="button cancel_btn"
            onClick={() => {
              props.setModel(false);
            }}
          >
            cancel
          </button>
          <button className="button next_btn">start</button>
        </div>
      </div>
    </div>
  );
};

export default Model;

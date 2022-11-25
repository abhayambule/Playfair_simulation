import React, { useState } from "react";
import "./Playfair.css";
import Model from "./Model";
import PlayfairAlgp from "./PlayfairAlgp";

const Playfair = () => {
  const [plaintext, setplaintext] = useState("");
  const [key, setKey] = useState("");
  const [model, setModel] = useState(false);
  const [ctext, setCtext] = useState(false);
  const onChangeptext = (event) => {
    setplaintext(event.target.value);
  };
  const onChangeKey = (event) => {
    setKey(event.target.value);
  };

  const closeCtextBox = () => {
    setCtext(false);
  };

  return (
    <div className="maindiv">
      <p>PlayFair Cipher</p>
      <div className="header_input">
        <p> Enter Plain Text : </p>
        <input onChange={onChangeptext} onFocus={closeCtextBox} />
      </div>
      <div className="header_input">
        <p> Enter Key : </p>
        <input onChange={onChangeKey} onFocus={closeCtextBox} />
      </div>
      <div className="button_div">
        <button
          onClick={() => {
            console.log(plaintext);
            console.log(key);
            setCtext(true);
          }}
          className="buttons button_ctext"
        >
          Result
        </button>
        <button
          className="buttons button_simulation"
          onClick={() => {
            setModel(true);
            closeCtextBox();
          }}
        >
          Simulation
        </button>
        {model && (
          <Model keyy={key} plaintext={plaintext} setModel={setModel} />
        )}
      </div>
      {ctext && <PlayfairAlgp keyy={key} plaintext={plaintext} />}
    </div>
  );
};

export default Playfair;

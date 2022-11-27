import React, { useState } from "react";
import "./Playfair.css";
import Model from "./Model";
import PlayfairAlgp from "./PlayfairAlgp";

const Playfair = () => {
  const [plaintext, setplaintext] = useState("");
  const [key, setKey] = useState("");
  const [model, setModel] = useState(false);
  const [ctext, setCtext] = useState(false);
  const [modifiedptext, setModifiedptext] = useState(plaintext);
  const [modifiedkey, setModifiedkey] = useState(plaintext);
  const [outputctext, setOutputctext] = useState("");
  const [keymatix, setKeymatix] = useState([]);
  const onChangeptext = (event) => {
    setplaintext(event.target.value);
  };
  const onChangeKey = (event) => {
    setKey(event.target.value);
  };

  const closeCtextBox = () => {
    setCtext(false);
  };

  const calculation = (key, ptext) => {
    //remove duplicate from key
    let temp = "";
    for (let i = 0; i < key.length; i++) {
      let flag = true;
      for (let j = 0; j < i; j++) {
        if (key.charAt(i) === key.charAt(j)) {
          flag = false;
          break;
        }
      }
      if (flag) {
        temp += key.charAt(i);
      }
    }
    //set modified key
    setModifiedkey(temp);

    //add all alphabates to a temp variable
    let alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    for (let i = 0; i < alpha.length; i++) {
      let flag = true;
      for (let j = 0; j < temp.length; j++) {
        if (temp.charAt(j) === alpha[i]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        temp += alpha[i];
      }
    }

    //complet add alphabates

    //to stor in 2d array
    let count = 0;
    let arr = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        arr[i][j] = temp.charAt(count);
        count++;
      }
    }

    // System.out.println("key matrix Table : ");
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // System.out.print(arr[i][j]+" ");
        // document.write(arr[i][j] + " ");
      }
      // document.writeln();
      // System.out.println();
    }
    // store and print of 2d array

    //to make plain text in correct order
    let newptext = "";
    for (let i = 0; i < ptext.length - 1; i++) {
      newptext += ptext.charAt(i);
      if (ptext.charAt(i) === ptext.charAt(i + 1)) {
        newptext += "x";
      }
    }
    newptext += ptext.charAt(ptext.length - 1);
    if (newptext.length % 2 !== 0) {
      newptext += "z";
    }

    //complet ptext and final store in newptext

    //set modified plaintext
    setModifiedptext(newptext);

    //cipher text output

    let cnt = 0;
    let ctext = "";
    let a = 0,
      b = 0,
      c = 0,
      d = 0;
    while (cnt < newptext.length - 1) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (newptext.charAt(cnt) === arr[i][j]) {
            a = i;
            b = j;
          }
          if (newptext.charAt(cnt + 1) === arr[i][j]) {
            c = i;
            d = j;
          }
        }
      }
      //for diagonal element
      if (a !== c && b !== d) {
        ctext += arr[a][d];
        ctext += arr[c][b];
      }
      //for row wise element
      if (a === c) {
        if (b !== 4 && d !== 4) {
          ctext += arr[a][b + 1];
          ctext += arr[c][d + 1];
        } else if (b === 4 && d !== 4) {
          ctext += arr[a][0];
          ctext += arr[c][d + 1];
        } else if (b !== 4 && d === 4) {
          ctext += arr[a][b + 1];
          ctext += arr[c][0];
        } else if (b === 4 && d === 4) {
          ctext += arr[a][0];
          ctext += arr[c][0];
        }
      }
      //for col wise element
      if (b === d) {
        if (a !== 4 && c !== 4) {
          ctext += arr[a + 1][b];
          ctext += arr[c + 1][d];
        } else if (a === 4 && c !== 4) {
          ctext += arr[0][b];
          ctext += arr[c + 1][d];
        } else if (a !== 4 && c === 4) {
          ctext += arr[a + 1][b];
          ctext += arr[0][d];
        } else if (a === 4 && c === 4) {
          ctext += arr[0][b];
          ctext += arr[0][d];
        }
      }

      cnt++;
      cnt++;
    }

    //set key matrix table
    setKeymatix(temp);
    //set output cipher text
    setOutputctext(ctext);
  };

  return (
    <div className="maindiv">
      <p>PlayFair Cipher</p>
      <div className="header_input">
        <p> Enter Plain Text : </p>
        <input
          className="inputBox"
          onChange={onChangeptext}
          onFocus={closeCtextBox}
        />
      </div>
      <div className="header_input">
        <p> Enter Key : </p>
        <input onChange={onChangeKey} onFocus={closeCtextBox} />
      </div>
      <div className="button_div">
        <button
          onClick={() => {
            setCtext(true);
            calculation(key, plaintext);
          }}
          className="buttons button_ctext"
        >
          Result
        </button>
        <button
          className="buttons button_simulation"
          onClick={() => {
            setModel(true);
            setCtext(true);
            calculation(key, plaintext);
            closeCtextBox();
          }}
        >
          Simulation
        </button>
        {model && (
          <Model
            keyy={key}
            plaintext={plaintext}
            modifiedptext={modifiedptext}
            modifiedkey={modifiedkey}
            keymatix={keymatix}
            setModel={setModel}
            outputctext={outputctext}
          />
        )}
      </div>
      {ctext && <PlayfairAlgp outputctext={outputctext} />}
    </div>
  );
};

export default Playfair;

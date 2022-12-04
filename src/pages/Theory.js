import React from "react";
import "../components/css/Theory.css";
import img1 from "../components/images/Picture1.jpg";
import img2 from "../components/images/Picture2.jpg";
import img3 from "../components/images/Picture3.jpg";
import example from "../components/images/example.png";

const Theory = () => {
  return (
    <div className="theoryContainer">
      <h1 style={{ textAlign: "left" }}>Playfair Cipher</h1>
      <p>
        The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is
        a manual symmetric encryption technique and was the first literal
        diagram substitution cipher. The scheme was invented in 1854 Charles
        Wheatstone . The technique encrypts pairs of letters (bigrams or
        diagrams), instead of single letters as in the simple substitution
        cipher.
      </p>
      <p>
        The main idea is to perform encryption and decryption of a given plain
        text based on given key using playfair cipher which is a substitution
        cipher.
      </p>
      <h2>The Playfair Cipher Encryption Algorithm:</h2>
      <h3>1.Generate the key Square(5x5): </h3>
      <p style={{ marginLeft: 10 }}>
        🎯The key square is a 5x5 grid of alphabets that acts as the key for
        encrypting the plaintext. Each of the 25 alphabets must be unique and
        one letter of the alphabet (usually J) is omitted from the table (as the
        table can hold only 25 alphabets). If the plaintext contains J, then it
        is replaced by I.
      </p>
      <p style={{ marginLeft: 10 }}>
        🎯The initial alphabets in the key square are the unique alphabets of
        the key in the order in which they appear followed by the remaining
        letters of the alphabet in order.
      </p>
      <h3>2.Algorithm to encrypt the plain text: </h3>
      <p style={{ marginLeft: 10 }}>
        The plaintext is split into pairs of two letters (digraphs). If there is
        an odd number of letters, a bogus character is added to the last letter.
      </p>
      <h3 style={{ marginLeft: 10 }}>For example:-</h3>
      <div
        style={{
          textAlign: "left",
          marginLeft: 40,
          display: "block",
        }}
      >
        <p>PlainText: "instruments"</p>
        <p>After Split: 'in' 'st' 'ru' 'me' 'nt' 'sz'</p>
        <p>
          1. Pair cannot be made with same letter. Break the letter in single
          and add a bogus letter to the previous letter.
        </p>
        <p>Plain Text: “hello”</p>
        <p>After Split: ‘he’ ‘lx’ ‘lo’ Here ‘x’ is the bogus letter.</p>
        <p>
          2. If the letter is standing alone in the process of pairing, then add
          an extra bogus letter with the alone letter.
        </p>
        <p>Plain Text: “helloe”</p>
        <p>AfterSplit: ‘he’ ‘lx’ ‘lo’ ‘ez’ Here ‘z’ is the bogus letter.</p>
      </div>
      <h2>Rules for Encryption: </h2>
      <p>
        1. If both the letters are in the same column: Take the letter below
        each one (going back to the top if at the bottom).
      </p>
      <h3 style={{ marginLeft: 10 }}>For example:-</h3>
      <div
        style={{
          textAlign: "left",
          marginLeft: 40,
          display: "block",
        }}
      >
        <p>Diagraph: "me"</p>
        <p>Encrypted Text: cl</p>
        <p>
          Encryption: m {`->`} c e {`->`} l
        </p>
      </div>
      <img style={{ marginLeft: 40, height: 150, width: 200 }} src={img1} />
      <p>
        2. If both the letters are in the same row: Take the letter to the right
        of each one (going back to the leftmost if at the rightmost position).
      </p>
      <h3 style={{ marginLeft: 10 }}>For example:-</h3>
      <div
        style={{
          textAlign: "left",
          marginLeft: 40,
          display: "block",
        }}
      >
        <p>Diagraph: "st"</p>
        <p>Encrypted Text: tl</p>
        <p>
          Encryption: s {`->`} t t {`->`} l
        </p>
      </div>
      <img style={{ marginLeft: 40, height: 150, width: 200 }} src={img2} />
      <p>
        3. If neither of the above rules is true: Form a rectangle with the two
        letters and take the letters on the horizontal opposite corner of the
        rectangle.
      </p>
      <h3 style={{ marginLeft: 10 }}>For example:-</h3>
      <div
        style={{
          textAlign: "left",
          marginLeft: 40,
          display: "block",
        }}
      >
        <p>Diagraph: "nt"</p>
        <p>Encrypted Text: rq</p>
        <p>
          Encryption: n {`->`} r t {`->`} q
        </p>
      </div>
      <img style={{ marginLeft: 40, height: 150, width: 200 }} src={img3} />

      <h3>Example:-</h3>
      <div
        style={{
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        <p>Plain Text: "instrumentsz"</p>
        <p>Encrypted Text: gatlmzclrqtx</p>
        <p> Encryption: </p>
        <div
          style={{
            textAlign: "left",
            marginLeft: 20,
            marginRight: 400,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <p style={{ marginRight: 50 }}>i {`->`} g</p>
          <p style={{ marginRight: 50 }}>n {`->`} a</p>
          <p style={{ marginRight: 50 }}>s {`->`} t</p>
          <p style={{ marginRight: 50 }}>t {`->`} l</p>
          <p style={{ marginRight: 50 }}>r {`->`} m</p>
          <p style={{ marginRight: 50 }}>u {`->`} z</p>
          <p style={{ marginRight: 50 }}>m {`->`} c</p>
          <p style={{ marginRight: 50 }}>e {`->`} l</p>
          <p style={{ marginRight: 50 }}>n {`->`} r</p>
          <p style={{ marginRight: 50 }}>t {`->`} q </p>
          <p style={{ marginRight: 50 }}>s {`->`} t</p>
          <p style={{ marginRight: 50 }}>z {`->`} x</p>
        </div>
        <img
          style={{ marginLeft: 20, height: "40%", width: "80%" }}
          src={example}
        />
      </div>
      <div className="theoryButton">
        <h2>Try Simulation</h2>
        <button
          className="buttons button_simulation"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Simulation
        </button>
      </div>
    </div>
  );
};

export default Theory;

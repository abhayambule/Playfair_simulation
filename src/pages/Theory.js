import React from "react";
import "../components/css/Theory.css";

const Theory = () => {
  return (
    <div>
      <h2>The Playfair Cipher Encryption Algorithm:</h2>
      <h3>1.Generate the key Square(5×5): </h3>
      <p>
        :The key square is a 5×5 grid of alphabets that acts as the key for
        encrypting the plaintext. Each of the 25 alphabets must be unique and
        one letter of the alphabet (usually J) is omitted from the table (as the
        table can hold only 25 alphabets). If the plaintext contains J, then it
        is replaced by I.  
      </p>
      <p>
        :The initial alphabets in the key square are the unique alphabets of the
        key in the order in which they appear followed by the remaining letters
        of the alphabet in order. 
      </p>
      <h3>2.Algorithm to encrypt the plain text: </h3>
    </div>
  );
};

export default Theory;

import React from "react";
import "./PlayfairAlgp.css";

const calculation = (key, ptext) => {
  //remove duplicate from key
  let temp = "";
  for (let i = 0; i < key.length; i++) {
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (key.charAt(i) == key.charAt(j)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      temp += key.charAt(i);
    }
  }
  //
  // console.log(temp);

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
      if (temp.charAt(j) == alpha[i]) {
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
    if (ptext.charAt(i) == ptext.charAt(i + 1)) {
      newptext += "x";
    }
  }
  newptext += ptext.charAt(ptext.length - 1);
  if (newptext.length % 2 != 0) {
    newptext += "z";
  }
  //   System.out.print("Intermidiate Text : ");
  //   System.out.println(newptext);
  //complet ptext and final store in newptext

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
        if (newptext.charAt(cnt) == arr[i][j]) {
          a = i;
          b = j;
        }
        if (newptext.charAt(cnt + 1) == arr[i][j]) {
          c = i;
          d = j;
        }
      }
    }
    //for diagonal element
    if (a != c && b != d) {
      ctext += arr[a][d];
      ctext += arr[c][b];
    }
    //for row wise element
    if (a == c) {
      if (b != 4 && d != 4) {
        ctext += arr[a][b + 1];
        ctext += arr[c][d + 1];
      } else if (b == 4 && d != 4) {
        ctext += arr[a][0];
        ctext += arr[c][d + 1];
      } else if (b != 4 && d == 4) {
        ctext += arr[a][b + 1];
        ctext += arr[c][0];
      } else if (b == 4 && d == 4) {
        ctext += arr[a][0];
        ctext += arr[c][0];
      }
    }
    //for col wise element
    if (b == d) {
      if (a != 4 && c != 4) {
        ctext += arr[a + 1][b];
        ctext += arr[c + 1][d];
      } else if (a == 4 && c != 4) {
        ctext += arr[0][b];
        ctext += arr[c + 1][d];
      } else if (a != 4 && c == 4) {
        ctext += arr[a + 1][b];
        ctext += arr[0][d];
      } else if (a == 4 && c == 4) {
        ctext += arr[0][b];
        ctext += arr[0][d];
      }
    }

    cnt++;
    cnt++;
  }

  return ctext;
  // System.out.print("Cipher Text : "+ctext);
};

const PlayfairAlgp = (props) => {
  // console.log(calculation(props.keyy, props.plaintext));
  return (
    <div id="output">
      <p className="p1">Cipher Text </p>
      <p className="p2">{calculation(props.keyy, props.plaintext)}</p>
    </div>
  );
};

export default PlayfairAlgp;

import React from "react";
import "./PlayfairAlgp.css";

const PlayfairAlgp = (props) => {
  return (
    <div id="output">
      <p className="p1">Cipher Text </p>
      <p className="p2">{props.outputctext}</p>
    </div>
  );
};

export default PlayfairAlgp;

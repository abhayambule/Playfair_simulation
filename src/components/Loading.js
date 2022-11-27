import React from "react";
import "./Loading.css";

const Loading = (props) => {
  return (
    <div className="content">
      <div class="loader-div">
        <span class="loader">
          <span></span>
          <span></span>
        </span>
      </div>
      <p id="loadingmessage">{props.message}</p>
    </div>
  );
};

export default Loading;

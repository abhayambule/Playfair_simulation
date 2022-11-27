import React, { useState } from "react";
import "./Model.css";
import { motion } from "framer-motion";
import Loading from "./Loading";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      // ease: "easeOut",
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Model = (props) => {
  const matrixarr = [...props.keymatix];

  const [isModifiedPtextVisible, setIsModifiedPtextVisible] = useState(false);

  const [isModifiedkeyVisible, setIsModifiedkeyVisible] = useState(false);

  const [startAnimation, setStartAnimation] = useState(false);
  const [isOutputvisible, setIsOutputvisible] = useState(false);

  const [firstLoading, setFirstLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [thirtLoading, setThirtLoading] = useState(false);
  const [fourthLoading, setFourthLoading] = useState(false);

  //animation function
  const func = () => {
    // setTimeout(function () {
    //   document.getElementById("modified_id").style.display = "none";
    // }, 5000);

    //first Loading screen start in 1st sec
    setTimeout(() => {
      setFirstLoading(true);
    }, 1000);

    // hide  first loading screen
    setTimeout(function () {
      document.getElementById("firstloading").style.display = "none";
    }, 6000);

    //display modi plaintext
    setTimeout(() => {
      setIsModifiedPtextVisible(true);
    }, 6000);

    //2nd Loading screen start
    setTimeout(() => {
      setSecondLoading(true);
    }, 7000);

    // hide  2nd loading screen
    setTimeout(function () {
      document.getElementById("secondloading").style.display = "none";
    }, 12000);

    //display modi key
    setTimeout(() => {
      setIsModifiedkeyVisible(true);
    }, 12000);

    //3rd Loading screen start
    setTimeout(() => {
      setThirtLoading(true);
    }, 13000);

    // hide  3rd loading screen
    setTimeout(function () {
      document.getElementById("thirdloading").style.display = "none";
    }, 18000);

    //display animation
    setTimeout(() => {
      setStartAnimation(true);
    }, 18000);

    //4th Loading screen start
    setTimeout(() => {
      setFourthLoading(true);
    }, 24000);

    // hide  4th loading screen
    setTimeout(function () {
      document.getElementById("fourloading").style.display = "none";
    }, 29000);

    //display output
    setTimeout(() => {
      setIsOutputvisible(true);
    }, 29000);
  };

  return (
    <div className="model">
      <div className="model_Container">
        <div className="header">
          <h2>Plain Text : {props.plaintext}</h2>
          <h2>Key : {props.keyy}</h2>
        </div>

        <div id="modified_id" className="modified_div">
          {firstLoading && (
            <div id="firstloading">
              <Loading message="generating modified plaintext" />
            </div>
          )}
          {isModifiedPtextVisible && (
            <p>Modified Plain Text : {props.modifiedptext} </p>
          )}
          {secondLoading && (
            <div id="secondloading">
              <Loading message="deleting duplicate element from key " />
            </div>
          )}
          {isModifiedkeyVisible && <p>Modified Key : {props.modifiedkey} </p>}
        </div>

        {thirtLoading && (
          <div id="thirdloading">
            <Loading message="generating matrix table" />
          </div>
        )}
        {startAnimation && (
          <motion.div
            variants={container}
            animate="visible"
            initial="hidden"
            className="body"
            id="motion_id"
          >
            {matrixarr.map((x) => (
              <motion.div variants={item} className="box">
                <text style={{ fontSize: 24, fontWeight: "bold" }}>{x}</text>
              </motion.div>
            ))}
          </motion.div>
        )}

        {fourthLoading && (
          <div id="fourloading">
            <Loading message="calculating ciphertext" />
          </div>
        )}

        <div id="output_id">
          {isOutputvisible && <p>Output : {props.outputctext}</p>}
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
          <button
            className="button next_btn"
            onClick={() => {
              // setStartAnimation(true);
              func();
            }}
          >
            start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;

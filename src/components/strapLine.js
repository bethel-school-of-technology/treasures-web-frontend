import React from "react";
import "./strapLine.css"

function StrapLine() {

  function repeatStringNumTimes() {
    var phrase = "- Wholeness Through a Journey of Love "
    var times = parseInt(window.innerWidth / 130)
    console.log("times = " + times)
    return phrase.repeat(times);
  };
  
  window.onresize = repeatStringNumTimes

  // const heightOutput = document.querySelector('#height');
  // const widthOutput = document.querySelector('#width');
  // function reportWindowSize() {
  //   heightOutput.textContent = window.innerHeight;
  //   widthOutput.textContent = window.innerWidth;
  // };
  // window.onresize = reportWindowSize;

  return (
    <div className="container-fluid">
      {/* <div className="row">
        <p>Window height: <span id="height"></span></p>
        <p>Window width: <span id="width"></span></p>
      </div> */}
      <div className="row">
        <div className="strapLine text-nowrap col align-self-center">
          {repeatStringNumTimes()} -
        </div>
      </div>
    </div>
  )
}

export default StrapLine
import React from "react";
import './GetStarted.css'

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="innerWidth paddings g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quote with us.
            <br />
            Find your residence soon
          </span>
          <div className="button">
            <a href="mailto:hudaansaricode@gmail.com">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

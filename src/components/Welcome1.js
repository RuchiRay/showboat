import React from "react";
import { Heading } from "./Heading";
import ninIcon from '../images/nin-icon.png'
import "../style/welcome1.css";
export const Welcome1 = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
          <button className="btn orange-btn">Batman</button>
          <button className="btn-nin">Ninjazzy</button>
         <div className="nin-icon-wrapper">
             <img src={ninIcon} alt="" />
         </div>
          <div className="welcome1-btns">
            <button className="welcome1-btn orange-shadow">Who’s on my team?</button>
            <button className="welcome1-btn green-shadow">Scoreboard</button>
            <button className="welcome1-btn blue-shadow">Rules</button>
            <button className="welcome1-btn purple-shadow">Mini Game Types</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

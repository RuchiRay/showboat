import React from "react";
import { Heading } from "./Heading";
import ninIcon from "../images/ninjazzy.png";
import birthday from "../images/birthday.png";
import reptilian from "../images/reptilians.png";
import slay from "../images/slay.png";
import cross from "../images/cross.png";

import "../style/scoreboard.css";
export const Scoreboard = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent no-border">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
        </div>
        <div className="bg-white green-shadow">
          <button className="welcome1-btn green-shadow heading-btn">
            Scoreboard
          </button>
          <img src={cross} alt="" className="cross-btn" />
          <div className="scoreboard">
            <div className="player-type-wrap">
              <div className="player-icon" style={{borderRadius:"15px 0px 0px 0px"}}>
                <img src={birthday} alt="" />
                <p className="player-type">Birthday</p>
              </div>
              <div className="score-box" style={{borderRadius:"0px 0px 0px 25px"}}></div>
            </div>
            <div className="player-type-wrap">
              <div className="player-icon">
                <img src={ninIcon} alt="" />
                <p className="player-type">Ninjazzy</p>
              </div>
              <div className="score-box"></div>
            </div>
            <div className="player-type-wrap">
              <div className="player-icon">
                <img src={reptilian} alt="" />
                <p className="player-type"> Reptitlians</p>
              </div>
              <div className="score-box"></div>
            </div>
            <div className="player-type-wrap">
              <div className="player-icon" style={{borderRadius:"0px 25px 0px 0px"}}>
                <img src={slay} alt="" />
                <p className="player-type">Slayyy</p>
              </div>
                <div style={{borderRadius:"0px 0px 25px 0px"}} className="score-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

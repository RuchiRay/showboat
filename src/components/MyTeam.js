import React from "react";
import { Heading } from "./Heading";
import ninIcon from "../images/nin-icon.png";
import cross from "../images/cross.png";
import orange from "../images/Bobble Orange.png";

import "../style/myTeam.css";
export const MyTeam = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent no-border">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
          </div>
          <div className="bg-white orange-shadow">
            <button className="welcome1-btn orange-shadow heading-btn">
              Who’s on my team?
            </button>
            <img src={cross} alt="" className="cross-btn" />
            <div className="players">
              <div className="ninjazzy">
                <p>Ninjazzy</p>
                <img src={ninIcon} alt="" />
              </div>
              <div className="player-btn you-btn">
                  <p>Batman</p> 
                  <img className='sticker' src={orange} alt="" />
                  <p className="you">You</p>
                  </div>
              <button className="player-btn">Hamburgler</button>
              <button className="player-btn">Morty</button>
              <button className="player-btn">John Wick</button>
              <button className="player-btn">Kirby</button>
              <button className="player-btn">Zesus</button>
              <button className="player-btn">Kim possible</button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

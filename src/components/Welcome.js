import React from "react";
import blue from "../images/Bobble Blue.png";
import greem from "../images/Bobble Green.png";
import orange from "../images/Bobble Orange.png";
import purple from "../images/Bobble Purple.png";
import { Heading } from "./Heading";
export const Welcome = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
          <button className="btn">Batman</button>
          <div className="desc">
            <div className="desc1">
              <p>Want to be particular time?</p>
              <p>Go ahead and click on </p>
              <p>the Bobble color you like</p>
            </div>
            <div className="desc2">
              <p>No guarantees you will be on </p>
              <p>that team but it helps. You will be</p>
              <p>assigned when the game starts</p>
            </div>
          </div>
          <div className="bobbles">
            <div className="bob">
              <img src={greem} alt="" />
            </div>
            <div className="bob bob-selected">
              <img src={orange} alt="" />
            </div>
            <div className="bob">
              <img src={blue} alt="" />
            </div>
            <div className="bob">
              <img src={purple} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Heading } from "./Heading";
import cross from "../images/cross.png";
import orange from "../images/Bobble Orange.png";
import green from "../images/green.png";

import "../style/rules.css";
export const Rules = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent no-border">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
        </div>
        <div className="bg-white blue-shadow">
          <button className="welcome1-btn blue-shadow heading-btn">
            Rules
          </button>
          <img src={cross} alt="" className="cross-btn" />
          <div className="rules-wrapper">
            <div className="rule1 rule">
              <div className="rule-desc">
                When mini-games as a team to earn Bobbles.
              </div>
              <img
                src={orange}
                alt=""
                className="img-absolute orange"
                style={{
                  left: "30px",
                  bottom: "30px",
                  transform: "rotate(180deg)",
                }}
              />
              <div
                className="img-absolute elipse"
                style={{ left: "75px", bottom: "70px" }}
              >
                <p
                  className="img-absolute"
                  style={{
                    left: "26px",
                    bottom: "31px",
                    fontSize: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  I'm a bobble!
                </p>
              </div>
              <div
                className="img-absolute quad"
                style={{ right: "80px", bottom: "30px" }}
              >
                <p className="img-absolute win-me">Win me</p>
              </div>
              <img
                src={green}
                alt=""
                style={{ right: "15px", bottom: "5px" }}
                className="img-absolute"
              />
            </div>
            <div className="rule2 rule">
              <div className="rule-desc">
                We play as many mini games as we can in an hour....
              </div>
            </div>
            <div className="rule3 rule" style={{ marginBottom: "0px" }}>
              <div className="rule-desc">Have the most at the end to win!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

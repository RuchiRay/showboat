import React from "react";
import bobbleGroup from "../images/BobblesGroup.svg";
import blue from "../images/Bobble Blue.png";
import greem from "../images/Bobble Green.png";
import orange from "../images/Bobble Orange.png";
import purple from "../images/Bobble Purple.png";
export const ScreenOne = () => {
  return (
    <div className="screen-one">
      <div className="bg-gray">
        <p className="welcome">Welcome</p>
        <div className="bg-abstract">
          <div className="bg-transparent">
            <p className="curve-text">
              <span className='B'>B</span>
              <span className='o'>o</span>
              <span className='b1'>b</span>
              <span className='b2'>b</span>
              <span className='l'>l</span>
              <span className='e'>e</span>
              <span className='p'>P</span>
              <span className='a'>a</span>
              <span className='r'>r</span>
              <span className='t'>t</span>
              <span className='y'>y</span>
            </p>
            <img className="gp-blob" src={bobbleGroup} alt="bobble" />
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
    </div>
  );
};

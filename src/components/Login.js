import React from "react";
import { Heading } from "./Heading";
import '../style/login.css'
export const Login = () => {
  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="heading-two">
          <Heading />
        </div>
        <div className="bg-transparent-login">
            <p>Ready to play?</p>
            <p>Enter your name and</p>
            <p>the PIN below!</p>
        </div>
        <div className="login-btns">
            <button className="login-btn">Real Name</button>
            <button className="login-btn">PIN</button>
            <button className="login-btn play-btn">Play!</button>
        </div>
        <div className='login-desc'>
            <p>Dont know the PIN?</p>
            <p>Ask the host</p>
        </div>
      </div>
    </div>
  );
};

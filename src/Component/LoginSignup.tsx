import React, { useState } from "react";
import Login from "./Login";
import "./../Styles/LoginSignup.css";
import Signup from "./signup";

function LoginSignup() {
  const [isSignup,setIssignup]=useState(false);
  const toggleSignup=()=>{
    setIssignup(!isSignup);
  }
  return (
    <div className="cont">
      <div className="container con">
      {isSignup?<Signup toggle={toggleSignup}/>:<Login toggle={toggleSignup}/>}
      </div>
    </div>
  );
}

export default LoginSignup;

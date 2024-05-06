import React from "react";
import { LockKeyhole, Mails } from "lucide-react";
import google from "../Assets/google.png";
import github from "../Assets/github.png";

function Login(props:any) {
  return (
    <div className="login">
      <div className="header">
        <h3>Hi 👋, Login To Do-it</h3>
        <p>Manage your todos with Do-it</p>
      </div>
      <div className="Login-form">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <div className="input">
            <Mails className="Mails" />
            <input type="text" />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <div className="input">
            <LockKeyhole className="Mails" />
            <input type="password" />
          </div>
        </div>
        <button>Login to your account</button>
        <div className="or">
          <span>Or Login Using</span>
        </div>
        <div className="auth">
          <div className="google-icon">
            <img src={google} alt="" width={35} height={35} />
            Google
          </div>
          <div className="google-icon">
            <img src={github} alt="" width={46} height={46} />
            Github
          </div>
        </div>
        <p>Don't have an account? <span onClick={props.toggle}>Signup</span></p>
      </div>
    </div>
  );
}

export default Login;

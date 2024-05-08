import React, { ChangeEvent, useState } from "react";
import { LockKeyhole, Mails, User } from "lucide-react";
import google from "../Assets/google.png";
import github from "../Assets/github.png";
import axios from "axios";

function Signup(props:any) {
  const [name, setName] = useState("");
  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState("");
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };


  const signup = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://todo-app-backend-88ss.onrender.com/api/users/signup",
        data: {
          name,
          email,
          password,
          confirmPassword,
        },
      });
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.reload();
      console.log(res.data);
    } catch (e: any) {
      console.log(e.response.data);
    }
  };

  return (
    <div className="login">
      <div className="header">
        <h3>Hi 👋, Signup To Do-it</h3>
        <p>Manage your todos with Do-it</p>
      </div>
      <div className="Login-form">
        <div className="input-box">
          <label htmlFor="email">Names</label>
          <div className="input">
            <User className="Mails" />
            <input type="text" onChange={nameHandler} value={name}  />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <div className="input">
            <Mails className="Mails" />
            <input type="text" onChange={emailHandler} value={email}  />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <div className="input">
            <LockKeyhole className="Mails" />
            <input type="password" onChange={passwordHandler} value={password}  />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="password">Confirm Password</label>
          <div className="input">
            <LockKeyhole className="Mails" />
            <input type="password" onChange={confirmPasswordHandler} value={confirmPassword}  />
          </div>
        </div>
        <button onClick={signup}>Signup</button>
        <div className="or">
          <span>Or Signup Using</span>
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
        <p>Have an account? <span onClick={props.toggle}>Login</span></p>
      </div>
    </div>
  );
}

export default Signup;

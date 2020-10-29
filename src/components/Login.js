import { Button } from "@material-ui/core";
import React from "react";
import "../assets/css/login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__telegram">
        <img
          src="https://image.flaticon.com/icons/png/128/124/124019.png?ga=GA1.2.2110131722.1599634992"
          alt=""
        />
        <h1>Telegram</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;

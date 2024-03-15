import React from "react";
import "./login.css";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <div className="LoginContainer">
        <div className="Login">
          <Navbar />
        </div>
        <h1>Login</h1>
      </div>
    </>
  );
};

export default Login;

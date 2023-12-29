import React from "react";
import Navbar from "../components/Navbar";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>
      </div>
      <p>
        Don't have an account? <a href="">Register here</a>
      </p>
    </>
  );
}

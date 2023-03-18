import React, { useState } from "react";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const [SignInUserName, setSignInUserName] = useState("");
  const [SignInPassword, setSignInPassword] = useState("");

  return (
    <div className="SignIn">
      <input value={SignInUserName} onChange={(e) => setSignInUserName(e.target.value)} placeholder="username" />
      <input value={SignInPassword} onChange={(e) => setSignInPassword(e.target.value)} placeholder="password" />
      <button type="submit">Sign in</button>
    </div>
  );
};

export default SignIn;

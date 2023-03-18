import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="authWrapper">
        <div>Chat</div>
        <SignIn />
        <div>o</div>
        <SignUp />
      </div>
    </div>
  );
};

export default App;

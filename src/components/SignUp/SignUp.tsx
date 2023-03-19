import React, { useRef, useState } from "react";
import auth from "../../services/auth/auth";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = usernameRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (username === "" || password === "") {
      setError("Error");
      return;
    } else {
      setError(undefined);
    }

    try {
      const { response } = await auth.signUp({ username, password });

      if (response === "Error") {
        setError("Error");
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <input
        type="text"
        alt="Write username"
        ref={usernameRef}
        placeholder="username"
      />
      <input
        type="text"
        alt="Write password"
        ref={passwordRef}
        placeholder="password"
      />
      <button type="submit">Sign up</button>
      {error}
    </form>
  );
};

export default SignUp;

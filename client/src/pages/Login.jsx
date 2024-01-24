import { useState } from "react";
// import { login } from "../api/authService";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   try {
  //     const token = login(username, password);
  //     console.log("Login successful. Token:", token);
  //     // Save token to localStorage or cookies
  //     localStorage.setItem("token", token);
  //   } catch (error) {
  //     console.error("Login failed", error.message);
  //   }
  // };

  return (
    <div className="login-bg">
      <div className="login-container">
        <input
          type="text"
          name="username"
          id="username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn submit-btn">Login</button>
        {/* <button className="btn submit-btn" onClick={handleLogin}>
          Login
        </button> */}
      </div>
    </div>
  );
};

export default LoginComponent;

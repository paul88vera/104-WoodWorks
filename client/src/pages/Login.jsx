import { useState } from "react";
import { createPortal } from "react-dom";
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

  return createPortal(
    <div id="login-bg">
      <div className="login-container">
        <h3>Admin Only</h3>
        <label htmlFor="username">
          Username
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            type="text"
            name="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn login-btn">Login</button>
        {/* <button className="btn submit-btn" onClick={handleLogin}>
          Login
        </button> */}
      </div>
    </div>,
    document.getElementById("alert-message")
  );
};

export default LoginComponent;

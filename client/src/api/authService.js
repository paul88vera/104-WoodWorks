// // authService.js
// import jwt from "jsonwebtoken";

// const SECRET_KEY = import.meta.env.VITE_SECRET; // Replace with your secret key

// export const login = (username, password) => {
//   // Implement your authentication logic here
//   // Example: Check credentials and generate JWT token
//   if (username === "user" && password === "password") {
//     const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
//     return token;
//   } else {
//     throw new Error("Invalid credentials");
//   }
// };

// export const logout = () => {
//   localStorage.removeItem("token");
//   console.log("Successful logout");
// };

// export const verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     return decoded;
//   } catch (error) {
//     console.error("Token verification failed", error);
//     return null;
//   }
// };

// // AuthorizedComponent.js
// import { useEffect } from "react";
// import axios from "axios";
// import { verifyToken } from "./authService";

// // eslint-disable-next-line react/prop-types
// const AuthorizedComponent = ({ token }) => {
//   useEffect(() => {
//     const decodedToken = verifyToken(token);

//     if (decodedToken) {
//       // Token is valid, make an authorized request using Axios
//       axios
//         .get(import.meta.env.VITE_API_URL, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           console.log("Authorized request successful:", response.data);
//         })
//         .catch((error) => {
//           console.error("Authorized request failed:", error);
//         });
//     } else {
//       console.error("Invalid token");
//     }
//   }, [token]);

//   return (
//     <div>
//       {/* Render your authorized component content here */}
//       <p>Authorized Component</p>
//     </div>
//   );
// };

// export default AuthorizedComponent;

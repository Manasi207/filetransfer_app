
// // File: client/src/socket.js
// import { io } from "socket.io-client";
// const socket = io("http://localhost:5000", {
//   auth: { token: localStorage.getItem("token") },
// });
// export default socket;



// File: client/src/socket.js
import { io } from "socket.io-client";
const socket = io("http://localhost:5000", {
  auth: { token: localStorage.getItem("token") },
});
export default socket;
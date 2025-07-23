// // File: client/src/context/AuthContext.js
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "../api/axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (credentials) => {
//     const res = await axios.post("/auth/login", credentials);
//     localStorage.setItem("token", res.data.token);
//     setUser(res.data.user);
//   };

//   const register = async (data) => {
//     const res = await axios.post("/auth/register", data);
//     localStorage.setItem("token", res.data.token);
//     setUser(res.data.user);
//   };

//   useEffect(() => {
//     // Optional: Fetch current user using token
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// File: client/src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const res = await axios.post("/auth/login", credentials);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (data) => {
    const res = await axios.post("/auth/register", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  useEffect(() => {
    // Optional: Fetch current user using token
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
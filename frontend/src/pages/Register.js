
// // File: client/src/pages/Register.js
// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await register(form);
//     navigate("/");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// }


import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
       <h1>SignIn</h1>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" className="black-button">Register</button>
    </form>
  );
}

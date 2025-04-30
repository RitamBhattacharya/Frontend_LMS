
// import React, { useState, useEffect } from "react";
// import "../../styles/LoginPage.css";
// import logo from "../../Assets/images/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [loginType, setLoginType] = useState("Admin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.message) {
//       setPopupMessage(location.state.message);
//       window.history.replaceState({}, document.title);
//     }
//   }, [location.state]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     try {
//       const apiUrl =
//         loginType === "Admin"
//           ? "http://localhost:8080/api/admins"
//           : "http://localhost:8080/api/employees";

//       const response = await axios.get(apiUrl);
//       const users = response.data;

//       const foundUser = users.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (foundUser) {
//         // Store the logged-in user in localStorage
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({
//             name: foundUser.name,
//             email: foundUser.email,
//           })
//         );

//         // Login successful
//         const redirectPath =
//           loginType === "Admin" ? "/admin-dashboard" : "/leave-application";
//         navigate(redirectPath, { state: { user: foundUser } });
//       } else {
//         setErrorMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-logo">
//         <img src={logo} alt="Company Logo" />
//       </div>
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>{loginType} Login</h2>
//         {popupMessage && <div className="popup-message">{popupMessage}</div>}
//         {errorMessage && <div className="error-message">{errorMessage}</div>}

//         <div className="form-group">
//           <label htmlFor="loginType">Login As:</label>
//           <select
//             id="loginType"
//             value={loginType}
//             onChange={(e) => setLoginType(e.target.value)}
//           >
//             <option value="Admin">Admin</option>
//             <option value="Employee">Employee</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//           />
//         </div>

//         <button type="submit" className="login-btn">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState, useEffect } from "react";
// import "../../styles/LoginPage.css";
// import logo from "../../Assets/images/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [loginType, setLoginType] = useState("Admin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.message) {
//       setPopupMessage(location.state.message);
//       window.history.replaceState({}, document.title);
//     }
//   }, [location.state]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     try {
//       const apiUrl =
//         loginType === "Admin"
//           ? "http://localhost:8080/api/admins"
//           : "http://localhost:8080/api/employees";

//       const response = await axios.get(apiUrl);
//       const users = response.data;

//       const foundUser = users.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (foundUser) {
//         // Save to localStorage
//         localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

//         const redirectPath =
//           loginType === "Admin" ? "/admin-dashboard" : "/leave-application";
//         navigate(redirectPath, { state: { user: foundUser } });
//       } else {
//         setErrorMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-logo">
//         <img src={logo} alt="Company Logo" />
//       </div>
//       <form className="login-form" onSubmit={handleLogin}>
//         <div className="tabs">
//           <button
//             type="button"
//             className={`tab ${loginType === "Admin" ? "active" : ""}`}
//             onClick={() => setLoginType("Admin")}
//           >
//             Admin
//           </button>
//           <button
//             type="button"
//             className={`tab ${loginType === "Employee" ? "active" : ""}`}
//             onClick={() => setLoginType("Employee")}
//           >
//             Employee
//           </button>
//         </div>

//         <h2>{loginType} Login</h2>

//         <label>Email address</label>
//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login →</button>

//         {popupMessage && <p className="popup">{popupMessage}</p>}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from "react";
import "../../styles/LoginPage.css";
import logo from "../../Assets/images/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginType, setLoginType] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setPopupMessage(location.state.message);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const apiUrl =
        loginType === "Admin"
          ? "http://localhost:8080/api/admins"
          : "http://localhost:8080/api/employees";

      const response = await axios.get(apiUrl);
      const users = response.data;

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        // Save to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        const redirectPath =
          loginType === "Admin" ? "/admin-dashboard" : "/leave-application";
        navigate(redirectPath, { state: { user: foundUser } });
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Login Type</label>
          <select
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <h2>{loginType} Login</h2>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Login →</button>

        {popupMessage && <p className="popup">{popupMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginPage;

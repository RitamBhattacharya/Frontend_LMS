// import React, { useState, useEffect } from "react";
// import "../../styles/LoginPage.css";
// import logo from "../../Assets/images/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";


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

//   const handleAdminCreateAccount = () => {
//     navigate("/create-account");
//   };

//   const handleEmployeeCreateAccount = () => {
//     navigate("/employee-create-account");
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (loginType === "Admin") {
//       if (email === "Ratan@gmail.com" && password === "Ratan@123") {
//         setPopupMessage("Admin login successful! Redirecting to Admin Dashboard...");
//         setTimeout(() => {
//           navigate("/admin-dashboard");
//         }, 2000);
//       } else {
//         setErrorMessage("Invalid Admin email or password.");
//       }
//     } else if (loginType === "Employee") {
//       if (email === "Ram@gmail.com" && password === "Ram@123") {
//         setPopupMessage("Login successful! Redirecting to Leave Application...");
//         setTimeout(() => {
//           navigate("/leave-application");
//         }, 2000);
//       } else {
//         setErrorMessage("Invalid Employee email or password.");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="header">
//         <img src={logo} alt="Logo" className="logo" />
//         <nav>
//           <a href="#">Home</a>
//           <a href="#">Contacts</a>
//           <a href="#">About Us</a>
//         </nav>
//       </div>
//       <div className="login-form">
//         {popupMessage && (
//           <div className="popup">
//             <p>{popupMessage}</p>
//             <button onClick={() => setPopupMessage("")}>Close</button>
//           </div>
//         )}
//         <div className="tabs">
//           <button
//             className={`tab ${loginType === "Admin" ? "active" : ""}`}
//             onClick={() => setLoginType("Admin")}
//           >
//             Admin
//           </button>
//           <button
//             className={`tab ${loginType === "Employee" ? "active" : ""}`}
//             onClick={() => setLoginType("Employee")}
//           >
//             Employee
//           </button>
//         </div>
//         <form onSubmit={handleLogin}>
//           <h2>{loginType} Login</h2>
//           <div className="form-group">
//             <label>Email address</label>
//             <input
//               type="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-options">
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <button type="submit" className="login-button">
//             Login →
//           </button>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </form>
//         <br/>
//         <p>
//           Admin?{" "}
//           <span className="create-account-link" onClick={handleAdminCreateAccount}>
//             Create Account
//           </span>
//         </p>
//         <p>
//           Employee?{" "}
//           <span className="create-account-link" onClick={handleEmployeeCreateAccount}>
//             Create Account
//           </span>
//         </p>
//       </div>
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
//         // Login successful
//         const redirectPath = loginType === "Admin" ? "/admin-dashboard" : "/leave-application";
//         navigate(redirectPath, { state: { user: foundUser } });
//       } else {
//         setErrorMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Server error. Please try again later.");
//     }
//   };

//   localStorage.setItem("loggedInUser", JSON.stringify({
//     name: response.data.name,
//     email: response.data.email
//   }));

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
        // Store the logged-in user in localStorage
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            name: foundUser.name,
            email: foundUser.email,
          })
        );

        // Login successful
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
        <h2>{loginType} Login</h2>
        {popupMessage && <div className="popup-message">{popupMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="form-group">
          <label htmlFor="loginType">Login As:</label>
          <select
            id="loginType"
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

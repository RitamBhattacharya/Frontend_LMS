// import React, { useState, useEffect } from "react";
// import "../../styles/LoginPage.css";
// import logo from "../../Assets/images/logo.jpg";
// import { useNavigate, useLocation } from "react-router-dom";

// const LoginPage = () => {
//   const [loginType, setLoginType] = useState("Admin"); // State to track login type
//   const [email, setEmail] = useState(""); // State to track email input
//   const [password, setPassword] = useState(""); // State to track password input
//   const [popupMessage, setPopupMessage] = useState(""); // State to manage popup message
//   const [errorMessage, setErrorMessage] = useState(""); // State for login error message
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Display popup message if navigated from account creation
//     if (location.state?.message) {
//       setPopupMessage(location.state.message);
//       window.history.replaceState({}, document.title); // Clear state to prevent re-display on refresh
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


import React, { useState, useEffect } from "react";
import "../../styles/LoginPage.css";
import logo from "../../Assets/images/logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

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

  const handleAdminCreateAccount = () => {
    navigate("/create-account");
  };

  const handleEmployeeCreateAccount = () => {
    navigate("/employee-create-account");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginType === "Admin") {
      if (email === "Ratan@gmail.com" && password === "Ratan@123") {
        setPopupMessage("Admin login successful! Redirecting to Admin Dashboard...");
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 2000);
      } else {
        setErrorMessage("Invalid Admin email or password.");
      }
    } else if (loginType === "Employee") {
      if (email === "Ram@gmail.com" && password === "Ram@123") {
        setPopupMessage("Login successful! Redirecting to Leave Application...");
        setTimeout(() => {
          navigate("/leave-application");
        }, 2000);
      } else {
        setErrorMessage("Invalid Employee email or password.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">About Us</a>
        </nav>
      </div>
      <div className="login-form">
        {popupMessage && (
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={() => setPopupMessage("")}>Close</button>
          </div>
        )}
        <div className="tabs">
          <button
            className={`tab ${loginType === "Admin" ? "active" : ""}`}
            onClick={() => setLoginType("Admin")}
          >
            Admin
          </button>
          <button
            className={`tab ${loginType === "Employee" ? "active" : ""}`}
            onClick={() => setLoginType("Employee")}
          >
            Employee
          </button>
        </div>
        <form onSubmit={handleLogin}>
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
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login →
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <br/>
        <p>
          Admin?{" "}
          <span className="create-account-link" onClick={handleAdminCreateAccount}>
            Create Account
          </span>
        </p>
        <p>
          Employee?{" "}
          <span className="create-account-link" onClick={handleEmployeeCreateAccount}>
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

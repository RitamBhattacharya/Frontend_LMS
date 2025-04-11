import React from "react";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="admin-info">
        <span className="admin-icon">👤</span>
        <div>
          <h4>Ram Sharma</h4>
          <p>Ram@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

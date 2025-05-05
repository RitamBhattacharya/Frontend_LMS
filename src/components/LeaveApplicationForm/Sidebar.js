import React from "react";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import "../../styles/Sidebar.css"; // Optional: put your sidebar styles here

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Employee Leave Management</h2>
      <ul>
        <li
          className={location.pathname === "/apply" ? "active" : ""}
          onClick={() => navigate("/apply")}
        >
          <FaUserCircle /> Apply For Leave
        </li>
        <li
          className={location.pathname === "/remaining" ? "active" : ""}
          onClick={() => navigate("/remaining")}
        >
          <FaCalendarAlt /> View Remaining Leaves
        </li>
        <li
          className={location.pathname === "/history" ? "active" : ""}
          onClick={() => navigate("/history")}
        >
          <FaCalendarAlt /> Show Leave History
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;



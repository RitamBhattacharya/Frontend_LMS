// import React from "react";
// import "../../styles/Sidebar.css";

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2>Employee Leave Management</h2>
//       <ul>
//         <li className="active">Apply For Leave</li>
//         <li>View Remaining Leaves</li>
//         <li>Show Leave History</li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";

import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import "../../styles/Sidebar.css"; // Optional: put your sidebar styles here



function Sidebar() {
  const location=useLocation();

  return (
    <div className="sidebar">
      <h2>Employee Leave Management</h2>
      <ul>

        <li className={location.pathname === "/apply" ? "active" : ""}>
          <Link to="/apply" className="link">
            <FaUserCircle /> Apply For Leave
          </Link>
        </li>
        <li className={location.pathname === "/remaining" ? "active" : ""}>
          <Link to="/remaining" className="link">
            <FaCalendarAlt /> View Remaining Leaves
          </Link>
        </li>
        <li className={location.pathname === "/history" ? "active" : ""}>
          <Link to="/history" className="link">
            <FaCalendarAlt /> Show Leave History
          </Link>
        </li>
      </ul>
    </div>
  );
};



export default Sidebar;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/LeaveDetails.css";

const LeaveDetails = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams(); // Example usage of dynamic route
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // Dummy data – replace with real API/data logic
  const leave = {
    name: "John Doe",
    designation: "Software Engineer",
    duration: "2025-04-10 to 2025-04-15",
    type: "Sick Leave",
    reason: "Medical Emergency",
    status: "Pending",
    employeeId: employeeId,
  };

  return (
    <div className="leave-details-container">
      <header className="details-header">
        <h1>Leave Details</h1>
        <div className="employee-badge">
          <span className="icon">👤</span>
          <div>
            {user ? (
              <>
                <p>
                  <strong>{user.name}</strong>
                </p>
                <p>
                  {user.email}
                </p>
              </>
            ) : (
              <p>Loading admin info...</p>
            )}
            <p className={`status-badge ${leave.status.toLowerCase()}`}>
              {leave.status}
            </p>
          </div>
        </div>
      </header>

      <div className="leave-details-card">
        <p>
          <strong>Employee Name:</strong> {leave.name}
        </p>
        <p>
          <strong>Designation:</strong> {leave.designation}
        </p>
        <p>
          <strong>Duration of Leave:</strong> {leave.duration}
        </p>
        <p>
          <strong>Leave Type:</strong> {leave.type}
        </p>
        <p>
          <strong>Reason:</strong> {leave.reason}
        </p>

        <button
          className="history-button"
          onClick={() => navigate("/admin/leave-history")}
        >
          Show Leave History
        </button>

        <div className="action-buttons">
          <button
            className="approve-button"
            onClick={() => navigate("/admin/leave/approved")}
          >
            ✔️ Approve
          </button>

          <button
            className="reject-button"
            onClick={() => navigate("/admin/leave/rejected")}
          >
            🚫 Reject
          </button>
        </div>

        <div className="remarks-section">
          <label>Remarks:</label>
          <input type="text" placeholder="Enter remarks here..." />
        </div>
      </div>
    </div>
  );
};

export default LeaveDetails;

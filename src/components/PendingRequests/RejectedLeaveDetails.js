import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/LeaveDetails.css";

const RejectedLeaveDetails = () => {
  const { requestId } = useParams(); // get requestId from route
  const [user, setUser] = useState(null);
  const [leave, setLeave] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    // Fetch rejected leave data
    fetch(`http://localhost:8080/api/leave-requests/rejected/${requestId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Leave not rejected or not found");
        }
        return res.json();
      })
      .then((data) => {
        setLeave(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [requestId]);

  if (error) {
    return <div className="leave-details-container"><p className="error">{error}</p></div>;
  }

  if (!leave) {
    return <div className="leave-details-container"><p>Loading leave details...</p></div>;
  }

  return (
    <div className="leave-details-container">
      <header className="details-header">
        <h1>Leave Details</h1>
        <div className="employee-badge rejected-badge">
          <span className="icon">👤</span>
          <div>
            {user ? (
              <>
                <p><strong>{user.name}</strong></p>
                <p>{user.email}</p>
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
        <p><strong>Employee Name:</strong> {leave.employee?.name}</p>
        <p><strong>Designation:</strong> {leave.employee?.designation}</p>
        <p><strong>Duration of Leave:</strong> {leave.startDate} to {leave.endDate}</p>
        <p><strong>Leave Type:</strong> {leave.leaveType}</p>
        <p><strong>Reason:</strong> {leave.reason}</p>

        <div className="action-buttons">
          <button className="reject-button approved" disabled>
            🚫 Rejected
          </button>
        </div>

        <div className="remarks-section">
          <label><strong>Remarks:</strong></label>
          <input
            type="text"
            value={leave.remarks || "No remarks provided"}
            readOnly
            className="remarks-readonly"
          />
        </div>
      </div>
    </div>
  );
};

export default RejectedLeaveDetails;

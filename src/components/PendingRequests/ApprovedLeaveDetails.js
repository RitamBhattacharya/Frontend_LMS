import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/LeaveDetails.css";

const ApprovedLeaveDetails = () => {
  const { requestId } = useParams(); // use requestId from URL
  const [user, setUser] = useState(null);
  const [leave, setLeave] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/leave-requests/approved/${requestId}`)
      .then((response) => {
        setLeave(response.data);
      })
      .catch((error) => {
        console.error("Error fetching approved leave details:", error);
      });
  }, [requestId]);

  if (!leave) return <p>Loading approved leave details...</p>;

  const { employee } = leave;

  return (
    <div className="leave-details-container">
      <header className="details-header">
        <h1>Leave Details</h1>
        <div className="employee-badge approved-badge">
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
        <p><strong>Employee Name:</strong> {employee?.name || "—"}</p>
        <p><strong>Designation:</strong> {employee?.designation || "—"}</p>
        <p>
          <strong>Duration of Leave:</strong>{" "}
          {new Date(leave.startDate).toLocaleDateString()} to{" "}
          {new Date(leave.endDate).toLocaleDateString()}
        </p>
        <p><strong>Leave Type:</strong> {leave.leaveType}</p>
        <p><strong>Reason:</strong> {leave.reason}</p>

        <div className="action-buttons">
          <button className="approve-button approved" disabled>
            ✔️ Approved
          </button>
        </div>

        <div className="remarks-section">
          <label><strong>Remarks:</strong></label>
          <input
            type="text"
            value={leave.adminComments || ""}
            readOnly
            className="remarks-readonly"
          />
        </div>
      </div>
    </div>
  );
};

export default ApprovedLeaveDetails;

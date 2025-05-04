import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/LeaveDetails.css";

const LeaveDetails = () => {
  const navigate = useNavigate();
  const { requestId } = useParams();
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
      .get(`http://localhost:8080/api/leave-requests/${requestId}`)
      .then((response) => {
        setLeave(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave details:", error);
      });
  }, [requestId]);

  const handleApprove = () => {
    axios
      .put(`http://localhost:8080/api/leave-requests/${requestId}/approve`)
      .then(() => {
        setLeave((prev) => ({ ...prev, status: "Approved" }));
        navigate("/admin/leave/approved");
      })
      .catch((err) => console.error("Approval failed", err));
  };

  const handleReject = () => {
    axios
      .put(`http://localhost:8080/api/leave-requests/${requestId}/reject`)
      .then(() => {
        setLeave((prev) => ({ ...prev, status: "Rejected" }));
        navigate("/admin/leave/rejected"); 
      })
      .catch((err) => console.error("Rejection failed", err));
  };

  if (!leave) return <p>Loading leave details...</p>;

  return (
    <div className="leave-details-container">
      <header className="details-header">
        <h1>Leave Details</h1>
        <div className="employee-badge">
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
            {/* <p className={`status-badge ${leave.status.toLowerCase()}`}>
              {leave.status}
            </p> */}
          </div>
        </div>
      </header>

      <div className="leave-details-card">
        <p><strong>Employee Name:</strong> {leave.employee?.name || "—"}</p>
        <p><strong>Designation:</strong> {leave.employee?.designation || "—"}</p>
        <p>
          <strong>Duration of Leave:</strong>{" "}
          {new Date(leave.startDate).toLocaleDateString()} to{" "}
          {new Date(leave.endDate).toLocaleDateString()}
        </p>
        <p><strong>Leave Type:</strong> {leave.leaveType}</p>
        <p><strong>Reason:</strong> {leave.reason}</p>

        {leave.status === "Pending" ? (
          <>
            <button
              className="history-button"
              onClick={() => navigate("/admin/leave-history")}
            >
              Show Leave History
            </button>

            <div className="action-buttons">
              <button className="approve-button" onClick={handleApprove}>
                ✔️ Approve
              </button>
              <button className="reject-button" onClick={handleReject}>
                🚫 Reject
              </button>
            </div>
          </>
        ) : (
          <div className="action-buttons">
            {leave.status === "Approved" && (
              <button className="approve-button" disabled>
                ✔️ Approved
              </button>
            )}
            {leave.status === "Rejected" && (
              <button className="reject-button" disabled>
                🚫 Rejected
              </button>
            )}
          </div>
        )}



        {leave.status === "Pending" && (
          <div className="remarks-section">
            <label>Remarks:</label>
            <input type="text" placeholder="Enter remarks here..." />
          </div>
        )}

      </div>
    </div>
  );
};

export default LeaveDetails;

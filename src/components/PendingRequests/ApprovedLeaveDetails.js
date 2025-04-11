import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/LeaveDetails.css"; // Reuse styling or create a new one if needed

const ApprovedLeaveDetails = () => {
  const { employeeId } = useParams();

  // Dummy data for the approved leave — replace this with real data
  const leave = {
    name: "Ratan Roy",
    email: "Ratan@gmail.com",
    designation: "Software Engineer",
    duration: "2025-04-10 to 2025-04-15",
    type: "Sick Leave",
    reason: "Medical Emergency",
    status: "Approved",
    remarks: "Take care and get well soon.",
  };

  return (
    <div className="leave-details-container">
      <header className="details-header">
        <h1>Leave Details</h1>
        <div className="employee-badge approved-badge">
          <span className="icon">👤</span>
          <div>
            <p><strong>{leave.name}</strong></p>
            <p>{leave.email}</p>
            <p className="status-badge approved">{leave.status}</p>
          </div>
        </div>
      </header>

      <div className="leave-details-card">
        <p><strong>Employee Name:</strong> {leave.name}</p>
        <p><strong>Designation:</strong> {leave.designation}</p>
        <p><strong>Duration of Leave:</strong> {leave.duration}</p>
        <p><strong>Leave Type:</strong> {leave.type}</p>
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
            value={leave.remarks}
            readOnly
            className="remarks-readonly"
          />
        </div>
      </div>
    </div>
  );
};

export default ApprovedLeaveDetails;

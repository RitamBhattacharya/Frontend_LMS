import React, { useState, useEffect } from "react";
import "../../styles/ApplicationForm.css";

const ApplicationForm = () => {
  const [employee, setEmployee] = useState(null);
  const [leaveType, setLeaveType] = useState("SICK");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setEmployee(loggedInUser);
    } else {
      alert("No employee found. Please login.");
      window.location.href = "/"; // Redirect to login
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!leaveType || !startDate || !endDate || !reason) {
      alert("Please fill all fields.");
      return;
    }

    const payload = {
      leaveType,
      startDate,
      endDate,
      reason,
      status: "Pending",
      employee: { employeeID: employee.employeeID }
    };

    try {
      const response = await fetch("http://localhost:8080/api/leave-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Leave request submitted successfully.");
        setLeaveType("SICK");
        setStartDate("");
        setEndDate("");
        setReason("");
      } else {
        alert("Error submitting leave request.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>

        <div>
          <label>Leave Type:</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          >
            <option value="SICK">Sick Leave</option>
            <option value="CASUAL">Casual Leave</option>
            <option value="EMERGENCY">Emergency Leave</option>
          </select>
        </div>

        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Reason:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit" className="submit-btn">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

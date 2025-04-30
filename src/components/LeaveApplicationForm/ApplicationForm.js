import React, { useState, useEffect } from "react";
import "../../styles/ApplicationForm.css";

const ApplicationForm = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [leaveType, setLeaveType] = useState("SICK");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    // Fetch all employees to populate dropdown
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedEmployeeId || !leaveType || !startDate || !endDate || !reason) {
      alert("Please fill all fields.");
      return;
    }

    const payload = {
      leaveType,
      startDate,
      endDate,
      reason,
      status: "Pending",
      employee: { employeeID: selectedEmployeeId }
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
        setSelectedEmployeeId("");
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
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee:</label>
          <select
            value={selectedEmployeeId}
            onChange={(e) => setSelectedEmployeeId(e.target.value)}
            required
          >
            <option value="">-- Select Employee --</option>
            {employees.map((emp) => (
              <option key={emp.employeeID} value={emp.employeeID}>
                {emp.name} ({emp.employeeID})
              </option>
            ))}
          </select>
        </div>

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
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

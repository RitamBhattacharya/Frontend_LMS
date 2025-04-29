// import React from "react";
// import "../../styles/ApplicationForm.css";

// function ApplicationForm() {
//   return (
//     <div className="form-container">
//       <h2>Leave Application Form</h2>
//       <form>
//         <div className="form-group">
//           <label>Starting Date</label>
//           <input type="date" />
//         </div>
//         <div className="form-group">
//           <label>End Date</label>
//           <input type="date" />
//         </div>
//         <div className="form-group">
//           <label>Duration</label>
//           <input type="text" placeholder="e.g., 3 days" />
//         </div>
//         <div className="form-group">
//           <label>Leave Type</label>
//           <select>
//             <option value="sick">Sick Leave</option>
//             <option value="casual">Casual Leave</option>
//             <option value="earned">Earned Leave</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Reason</label>
//           <textarea placeholder="Enter your reason"></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ApplicationForm;

import React, { useState } from "react";
import "../../styles/ApplicationForm.css";

function ApplicationForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("sick");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      startDate,
      endDate,
      leaveType,
      reason,
    };

    try {
      const response = await fetch("http://localhost:8080/api/leave-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Leave request submitted successfully!");
        // Optionally reset the form or show success message
      } else {
        const errorResponse = await response.json();
        console.error("Error submitting leave request:", errorResponse);
      }
    } catch (error) {
      console.error("Error:", error);
    }
};


  return (
    <div className="form-container">
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Starting Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Leave Type</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="earned">Earned Leave</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter your reason"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;

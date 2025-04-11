import React from "react";
import "../../styles/ApplicationForm.css";

function ApplicationForm() {
  return (
    <div className="form-container">
      <h2>Leave Application Form</h2>
      <form>
        <div className="form-group">
          <label>Starting Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input type="text" placeholder="e.g., 3 days" />
        </div>
        <div className="form-group">
          <label>Leave Type</label>
          <select>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="earned">Earned Leave</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reason</label>
          <textarea placeholder="Enter your reason"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;

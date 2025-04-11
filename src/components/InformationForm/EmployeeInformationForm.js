import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeInformationForm.css";

function EmployeeInformationForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate account creation logic
    alert("Employee account created!");
    navigate("/", { state: { message: "Employee account created successfully!" } });
  };

  return (
    <div className="employee-form-container">
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name</label>
          <input type="text" placeholder="Enter Employee name" required />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" placeholder="Enter email ID" required />
        </div>
        <div className="form-group">
          <label>Employee ID</label>
          <input type="text" placeholder="Enter Employee ID" required />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input type="text" placeholder="Enter designation" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select required>
            <option value="">Select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default EmployeeInformationForm;

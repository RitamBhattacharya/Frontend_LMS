import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminInformationForm.css";

function AdminInformationForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin account created!");
    navigate("/", { state: { message: "Admin account created successfully!" } });
  };

  return (
    <div className="employee-form-container">
      <h2>Admin Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Admin Name</label>
          <input type="text" placeholder="Enter Admin name" required />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" placeholder="Enter email ID" required />
        </div>
        <div className="form-group">
          <label>Admin ID</label>
          <input type="text" placeholder="Enter Admin ID" required />
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

export default AdminInformationForm;

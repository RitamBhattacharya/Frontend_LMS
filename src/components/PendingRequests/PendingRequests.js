import React from "react";
import "../../styles/PendingRequests.css";
import { useNavigate } from "react-router-dom";

const pendingData = [
  { status: "Pending" },
  { status: "Approved" },
  { status: "Declined" },
  { status: "" },
  { status: "" },
  { status: "" },
  { status: "" }
];

const getStatusTag = (status) => {
  switch (status) {
    case "Pending":
      return <span className="status pending">⏰ Pending</span>;
    case "Approved":
      return <span className="status approved">✔️ Approved</span>;
    case "Declined":
      return <span className="status declined">🚫 Declined</span>;
    default:
      return <span className="status empty">—</span>;
  }
};

const PendingRequests = () => {
  const navigate = useNavigate();
  return (
    <div className="pending-requests-container">
      <aside className="sidebar">
        <h2>Employee Leave Management</h2>
        <ul>
        <li onClick={() => navigate("/admin-dashboard")}>Dashboard</li>
          <li className="active">Pending Requests</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="admin-info">
            <span className="admin-icon">👤</span>
            <div>
              <h4>Ratan Roy</h4>
              <p>Ratan@gmail.com</p>
            </div>
          </div>
        </header>

        <section className="table-section">
          <h2>Pending Requests</h2>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Applied On</th>
                <th>Current Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pendingData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.empId || ""}</td>
                  <td>{row.name || ""}</td>
                  <td>{row.appliedOn || ""}</td>
                  <td>{getStatusTag(row.status)}</td>
                  <td>
                  <button onClick={() => navigate(`/admin/leave/1`)}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PendingRequests;

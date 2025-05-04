import React, { useEffect, useState } from "react";
import "../../styles/PendingRequests.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const getStatusTag = (status) => {
  switch (status) {
    case "Pending":
      return <span className="status pending">⏰ Pending</span>;
    case "Approved":
      return <span className="status approved">✔️ Approved</span>;
    case "Rejected":
      return <span className="status declined">🚫 Declined</span>;
    default:
      return <span className="status empty">—</span>;
  }
};

const PendingRequests = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/leave-requests")
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave requests:", error);
      });
  }, []);

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
          <div className="navbar">
            {user ? (
              <div className="admin-info">
                <span className="admin-icon">👤</span>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            ) : (
              <p>Please log in to see the user details.</p>
            )}
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
              {leaveRequests.map((request, index) => (
                <tr key={request.requestID}>
                  <td>{index + 1}</td>
                  <td>{request.employee?.employeeID || "—"}</td>
                  <td>{request.employee?.name || "—"}</td>
                  <td>{new Date(request.startDate).toLocaleDateString()}</td>
                  <td>{getStatusTag(request.status)}</td>
                  <td>
                    <button onClick={() => navigate(`/admin/leave/${request.requestID}`)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br/>
        </section>
      </main>
    </div>
  );
};

export default PendingRequests;



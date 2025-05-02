import React, { useEffect, useState } from "react";
import "../../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    employees: 0,
    pending: 0,
    approved: 0,
    declined: 0,
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    axios.get("http://localhost:8080/api/dashboard/stats")
      .then(response => setStats(response.data))
      .catch(error => console.error("Error fetching dashboard stats", error));
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Employee Leave Management</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={() => navigate("/pending")}>Pending Requests</li>
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

        <section className="dashboard-grid">
          <div className="card">
            <span className="icon">👥</span>
            <h3>Registered Employees</h3>
            <p>{stats.employees}</p>
          </div>
          <div className="card">
            <span className="icon">⏳</span>
            <h3>Pending Applications</h3>
            <p>{stats.pending}</p>
          </div>
          <div className="card">
            <span className="icon">🚫</span>
            <h3>Declined Applications</h3>
            <p>{stats.declined}</p>
          </div>
          <div className="card">
            <span className="icon">✔️</span>
            <h3>Approved Applications</h3>
            <p>{stats.approved}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
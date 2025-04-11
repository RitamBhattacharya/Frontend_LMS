import React from "react";
import "../../styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const navigate = useNavigate();
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
            <div className="admin-info">
              <span className="admin-icon">👤</span>
              <div>
                <h4>Ratan Roy</h4>
                <p>Ratan@gmail.com</p>
              </div>
            </div>
          </header>
          <section className="dashboard-grid">
            <div className="card">
              <span className="icon">👥</span>
              <h3>Registered Employees</h3>
              <p>51</p>
            </div>
            <div className="card">
              <span className="icon">⏳</span>
              <h3>Pending Applications</h3>
              <p>7</p>
            </div>
            <div className="card">
              <span className="icon">🚫</span>
              <h3>Declined Applications</h3>
              <p>3</p>
            </div>
            <div className="card">
              <span className="icon">✔️</span>
              <h3>Approved Applications</h3>
              <p>20</p>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default AdminDashboard;

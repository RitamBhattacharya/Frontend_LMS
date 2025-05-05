import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import "../../styles/RemainingLeaves.css";

function RemainingLeaves() {
  const [leaveData, setLeaveData] = useState(null);

  const employeeId = localStorage.getItem("loggedInUserId"); // assuming you store employeeID after login

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/employees/${employeeId}/leave-summary`);
        setLeaveData(response.data);
      } catch (error) {
        console.error("Failed to fetch leave data", error);
      }
    };

    if (employeeId) fetchLeaveData();
  }, [employeeId]);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="leave-details">
          <h2>Leave Details</h2>
          {leaveData ? (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Casual Leave (CL)</th>
                  <th>Sick Leave (SL)</th>
                  <th>Emergency Leave (EL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Leaves Taken</td>
                  <td>{leaveData.Taken.CL}</td>
                  <td>{leaveData.Taken.SL}</td>
                  <td>{leaveData.Taken.EL}</td>
                </tr>
                <tr>
                  <td>Remaining Leaves</td>
                  <td>{leaveData.Remaining.CL}</td>
                  <td>{leaveData.Remaining.SL}</td>
                  <td>{leaveData.Remaining.EL}</td>
                </tr>
                <tr>
                  <td>Total Leaves</td>
                  <td>{leaveData.Total.CL}</td>
                  <td>{leaveData.Total.SL}</td>
                  <td>{leaveData.Total.EL}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>Loading leave details...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemainingLeaves;

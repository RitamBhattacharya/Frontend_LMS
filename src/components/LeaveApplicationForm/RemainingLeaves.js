import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/RemainingLeaves.css"; // Create this CSS file for styling

function RemainingLeaves() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="leave-details">
          <h2>Leave Details</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Casual Leave (CL)</th>
                <th>Sick Leave (SL)</th>
                <th>Earned Leave (EL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leaves Taken</td>
                <td>7</td>
                <td>3</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Remaining Leaves</td>
                <td>8</td>
                <td>6</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Total Leaves</td>
                <td>15</td>
                <td>9</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RemainingLeaves;
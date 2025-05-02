import React, { useState } from "react";
import "../../styles/LeaveHistory.css";
import { FaUserCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sidebar from "../LeaveApplicationForm/Sidebar"; // Make sure the path is correct
import Navbar from "../LeaveApplicationForm/Navbar";

const LeaveHistory = () => {
  const [month, setMonth] = useState("June");
  const [year, setYear] = useState(2024);

  const leaveData = {
    "2024-06-28": "SL",
    "2024-06-13": "EL",
    "2024-06-25": "CL",
  };

  const getLeaveClass = (date) => {
    const key = `2024-06-${date.toString().padStart(2, "0")}`;
    return leaveData[key] || "";
  };

  const renderCalendar = () => {
    const daysInMonth = 30;
    const firstDay = new Date(year, 5, 1).getDay();
    const calendarCells = [];

    for (let i = 0; i < firstDay; i++) {
      calendarCells.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const leaveType = getLeaveClass(day);
      calendarCells.push(
        <td key={day} className={`day ${leaveType}`}>
          {day}
        </td>
      );
    }

    const rows = [];
    for (let i = 0; i < calendarCells.length; i += 7) {
      rows.push(<tr key={i}>{calendarCells.slice(i, i + 7)}</tr>);
    }

    return rows;
  };

  return (
    <div className="leave-history-container">
      <Sidebar />

      <div className="main-content">
        {/* Top Bar */}
              <Navbar />

        {/* Title */}
        <br/>
        <h1 className="title">Leave History</h1>

        {/* Calendar Navigation */}
        <div className="calendar-navigation">
          <button>
            <FaArrowLeft /> Prev
          </button>
          <h2>
            {month.toUpperCase()} {year}
          </h2>
          <button>
            Next <FaArrowRight />
          </button>
        </div>

        {/* Calendar */}
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>

        {/* Legend */}
        <div className="legend">
          <p>
            <span className="SL"></span> Sick Leave (SL)
          </p>
          <p>
            <span className="CL"></span> Casual Leave (CL)
          </p>
          <p>
            <span className="EL"></span> Earned Leave (EL)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;

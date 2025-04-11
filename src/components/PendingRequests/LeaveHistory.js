import React, { useState } from "react";
import "../../styles/LeaveHistory.css";
import { FaUserCircle, FaArrowLeft, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const LeaveHistory = () => {
  const [month, setMonth] = useState("June");
  const [year, setYear] = useState(2024);

  const leaveData = {
    "2024-06-28": "SL",
    "2024-06-13": "EL",
    "2024-06-25": "CL",
  };

  const getLeaveClass = (date) => {
    const key = `2024-06-${date.toString().padStart(2, '0')}`;
    return leaveData[key] || "";
  };

  const renderCalendar = () => {
    const daysInMonth = 30;
    const firstDay = new Date(year, 5, 1).getDay(); // 0 = Sunday, June = 5
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
   

      <div className="main-content">
        <div className="header">
          <h1>Leave History</h1>
          <div className="user-info">
            <FaUserCircle size={30} />
            <div>
              <p>Employee Name</p>
              <p>abc@xyz.com</p>
            </div>
          </div>
        </div>

        <div className="calendar-navigation">
          <button><FaArrowLeft /> Prev</button>
          <h2>{month.toUpperCase()} {year}</h2>
          <button>Next <FaArrowRight /></button>
        </div>

        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {renderCalendar()}
          </tbody>
        </table>

        <div className="legend">
          <p><span className="SL"></span> Sick Leave (SL)</p>
          <p><span className="CL"></span> Casual Leave (CL)</p>
          <p><span className="EL"></span> Earned Leave (EL)</p>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
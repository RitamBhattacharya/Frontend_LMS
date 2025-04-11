import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ApplicationForm from "./ApplicationForm";
import "../../styles/LeaveApplicationForm.css";

function LeaveApplicationForm() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <ApplicationForm />
      </div>
    </div>
  );
}

export default LeaveApplicationForm;

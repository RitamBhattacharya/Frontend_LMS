import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage"; 
import AdminInformationForm from "./components/InformationForm/AdminInformationForm";
import EmployeeInformationForm from "./components/InformationForm/EmployeeInformationForm";
import LeaveApplicationForm from "./components/LeaveApplicationForm/LeaveApplicationForm";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import PendingRequests from "./components/PendingRequests/PendingRequests";
import LeaveDetails from "./components/PendingRequests/LeaveDetails";
import LeaveHistory from "./components/PendingRequests/LeaveHistory";
import ApprovedLeaveDetails from "./components/PendingRequests/ApprovedLeaveDetails";
import RejectedLeaveDetails from "./components/PendingRequests/RejectedLeaveDetails";
import RemainingLeaves from "./components/LeaveApplicationForm/RemainingLeaves";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<AdminInformationForm />} />
        <Route path="/employee-create-account" element={<EmployeeInformationForm />} />
        <Route path="/leave-application" element={<LeaveApplicationForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/pending" element={<PendingRequests />} />
        <Route path="/admin/leave/:requestId" element={<LeaveDetails />} />
        <Route path="/admin/leave-history" element={<LeaveHistory />} />
        <Route path="/admin/leave/approved" element={<ApprovedLeaveDetails />} />
        <Route path="/admin/leave/rejected" element={<RejectedLeaveDetails />} />
        <Route path="/remaining" element={<RemainingLeaves />} />
        <Route path="/apply" element={<LeaveApplicationForm />} />
        <Route path="/history" element={<LeaveHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

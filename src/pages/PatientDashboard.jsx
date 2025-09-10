import { Routes, Route, Navigate } from "react-router-dom";
import { FaCalendarCheck, FaPills, FaEnvelope, FaHome } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";

// Patient pages
import PatientHome from "./patient/PatientHome";
import Appointments from "./patient/Appointments";
import Medications from "./patient/Medications";
import Messages from "./patient/Messages";

export default function PatientDashboard() {
  const sidebarItems = [
    { path: "/patient-dashboard", icon: <FaHome />, label: "Dashboard" },
    { path: "/patient-dashboard/appointments", icon: <FaCalendarCheck />, label: "Appointments" },
    { path: "/patient-dashboard/medications", icon: <FaPills />, label: "Medications" },
    { path: "/patient-dashboard/messages", icon: <FaEnvelope />, label: "Messages" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      <Routes>
        {/* Dashboard Home */}
        <Route path="/" element={<PatientHome />} />
        {/* Pages */}
        <Route path="appointments" element={<Appointments />} />
        <Route path="medications" element={<Medications />} />
        <Route path="messages" element={<Messages />} />
        {/* Fallback: redirect to dashboard */}
        <Route path="*" element={<Navigate to="/patient-dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}

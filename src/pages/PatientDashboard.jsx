import { Routes, Route, Navigate } from "react-router-dom";
import { FaCalendarCheck, FaPills, FaEnvelope, FaHome, FaHeartbeat } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";

// Patient pages
import PatientHome from "./patient/PatientHome";
import Appointments from "./patient/Appointments";
import Medications from "./patient/Medications";
import Messages from "./patient/Messages";

export default function PatientDashboard() {
  const sidebarItems = [
  { icon: <FaHeartbeat />, label: "Dashboard", path: "/patient-dashboard" },
  { icon: <FaCalendarCheck />, label: "Appointments", path: "/patient-dashboard/appointments" },
  { icon: <FaPills />, label: "Medications", path: "/patient-dashboard/medications" },
  { icon: "📄", label: "Reports", path: "/patient-dashboard/reports" },
  { icon: "💬", label: "Messages", path: "/patient-dashboard/messages" },
];


  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      <Routes>
        {/* Dashboard Home */}
        <Route index element={<PatientHome />} />
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

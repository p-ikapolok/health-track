import { FaHeartbeat, FaPills, FaCalendarCheck } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout.jsx";

export default function PatientDashboard() {
  const sidebarItems = [
    { icon: <FaHeartbeat />, label: "Dashboard", path: "/patient" },
    { icon: <FaCalendarCheck />, label: "Appointments", path: "/patient/appointments" },
    { icon: <FaPills />, label: "Medications", path: "/patient/medications" },
    { icon: "📄", label: "Reports", path: "/patient/reports" },
    { icon: "💬", label: "Messages", path: "/patient/messages" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      <Outlet /> {/* <- where child pages render */}
    </DashboardLayout>
  );
}

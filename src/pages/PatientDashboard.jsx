import { FaHeartbeat, FaPills, FaCalendarCheck } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout.jsx";

export default function PatientDashboard() {
  // Sidebar items specific for patients
  const sidebarItems = [
    { icon: <FaHeartbeat />, label: "Dashboard", path: "/patient-dashboard" },
    { icon: <FaCalendarCheck />, label: "Appointments", path: "/patient-dashboard/appointments" },
    { icon: <FaPills />, label: "Medications", path: "/patient-dashboard/medications" },
    { icon: "📄", label: "Reports", path: "/patient-dashboard/reports" },
    { icon: "💬", label: "Messages", path: "/patient-dashboard/messages" },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      {/* Default Dashboard Content */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold">Hello Jane Doe, Welcome Back</h2>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Health Metrics
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Heart Rate</p>
            <p className="text-2xl">72 bpm</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Blood Pressure</p>
            <p className="text-2xl">120/80 mmHg</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Glucose Level</p>
            <p className="text-2xl">95 mg/dl</p>
          </div>
        </div>
      </div>

      {/* Outlet for Nested Pages */}
      <Outlet />
    </DashboardLayout>
  );
}

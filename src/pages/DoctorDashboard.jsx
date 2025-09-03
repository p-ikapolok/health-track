import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout.jsx";

export default function DoctorDashboard() {
  // Sidebar items specific for doctor
  const sidebarItems = (
    <>
      <li className="flex items-center gap-2 bg-gray-700 p-2 rounded cursor-pointer">
        <Link to="/" className="flex items-center gap-2">
          <FaUserMd />
          Home
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
        <Link to="/patients" className="flex items-center gap-2">
          👥 Patients
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
        <Link to="/appointments" className="flex items-center gap-2">
          <FaCalendarCheck />
          Appointments
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
        <Link to="/reports" className="flex items-center gap-2">
          📄 Reports
        </Link>
      </li>
      <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
        <Link to="/messages" className="flex items-center gap-2">
          💬 Messages
        </Link>
      </li>
    </>
  );

  return (
    <DashboardLayout sidebarItems={sidebarItems}>
      {/* -- Dashboard Content -- */}

      {/* Dashboard Header */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>

      {/* Patient Summary */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Patient Summary
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Total Patients</p>
            <p className="text-2xl">250</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Active Patients</p>
            <p className="text-2xl">200</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">New Patients This Month</p>
            <p className="text-2xl">15</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          AI-Powered Insights
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Trend Analysis</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Outcome Predictions</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Treatment Recommendations</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Upcoming Appointments
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="pb-2">Patient Name</th>
              <th className="pb-2">Time</th>
              <th className="pb-2">Reason</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="py-2">Ethan Walker</td>
              <td>10:00 AM</td>
              <td>Routine Check Up</td>
              <td>
                <span className="bg-gray-600 text-sm px-2 py-1 rounded">
                  Scheduled
                </span>
              </td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Isabella Reed</td>
              <td>11:30 AM</td>
              <td>Follow Up</td>
              <td>
                <span className="bg-green-600 text-sm px-2 py-1 rounded">
                  Confirmed
                </span>
              </td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="py-2">Noah Parker</td>
              <td>02:00 PM</td>
              <td>Consultation</td>
              <td>
                <span className="bg-yellow-600 text-sm px-2 py-1 rounded">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Urgent Alerts */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Urgent Alert
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Ava Bennett</p>
              <p className="text-sm text-gray-400">
                High Blood Pressure Detected
              </p>
            </div>
            <span className="text-sm">8:00 AM</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Liam Hughes</p>
              <p className="text-sm text-gray-400">
                Irregular Heartbeat Reported
              </p>
            </div>
            <span className="text-sm">7:00 PM</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck, FaCog, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import AvatarSVG from "../components/AvatarSVG";

export default function DoctorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-black border-r border-gray-800 flex flex-col transition-all duration-300`}
      >

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2 p-2">
            <li className="flex items-center gap-2 bg-gray-700 p-2 rounded cursor-pointer">
              <Link to="/" className="flex items-center gap-2">
                <FaUserMd />
                {isSidebarOpen && "Home"}
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <Link to="/patients" className="flex items-center gap-2">
                👥 {isSidebarOpen && "Patients"}
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <Link to="/appointments" className="flex items-center gap-2">
                <FaCalendarCheck />
                {isSidebarOpen && "Appointments"}
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <Link to="/reports" className="flex items-center gap-2">
                📄 {isSidebarOpen && "Reports"}
              </Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <Link to="/messages" className="flex items-center gap-2">
                💬 {isSidebarOpen && "Messages"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-gray-800 flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 relative">
        {/* Top bar with Hamburger + Logo + Profile */}
        <div className="flex justify-between items-center mb-6">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaBars />
            </button>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <h1 className="font-bold text-lg">HEALTHTRACK</h1>
            </div>
          </div>

          {/* Right: Profile Avatar */}
          <div
            className="relative"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <div className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer">
              <AvatarSVG name="Dr. Olivia Harper" size={48} />
            </div>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    View Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    Support
                  </li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer text-red-300">
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

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
      </main>
    </div>
  );
}

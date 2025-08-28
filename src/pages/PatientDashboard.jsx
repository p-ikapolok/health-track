import { useState } from "react";
import { FaHeartbeat, FaPills, FaCalendarCheck, FaCog, FaBars } from "react-icons/fa";
import NineDots from "../components/NineDots.jsx";
import logo from "./assets/logo.png";
import AvatarSVG from "./components/AvatorSVG.jsx";

export default function PatientDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar (fixed) */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-black flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-40`}
      >
        {/* Logo + App Name */}
        <div className="flex items-center gap-2 p-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isSidebarOpen && <span className="font-bold text-lg">HEALTHTRACK</span>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            <li className="flex items-center gap-2 bg-gray-700 p-2 rounded cursor-pointer">
              <FaHeartbeat /> {isSidebarOpen && "Dashboard"}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FaCalendarCheck /> {isSidebarOpen && "Appointments"}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              <FaPills /> {isSidebarOpen && "Medications"}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              📄 {isSidebarOpen && "Reports"}
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              💬 {isSidebarOpen && "Messages"}
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Header (fixed top, no divider lines) */}
        <header className="flex items-center justify-between bg-black px-6 py-3 fixed top-0 left-0 right-0 z-30 ml-20 md:ml-64">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaBars />
            </button>
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Right: NineDots + Avatar */}
          <div className="flex items-center gap-4 relative">
            <button className="p-2 rounded-lg hover:bg-gray-800">
              <NineDots size={24} color="white" />
            </button>
            <div
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="relative"
            >
              <div className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer">
                <AvatarSVG name="Jane Doe" size={40} />
              </div>

              {/* Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
                  <ul className="text-sm">
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">View Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Support</li>
                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer text-red-300">Log Out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto">
          {/* Dashboard Header */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-bold">Hello Jane Doe, Welcome Back</h2>
          </div>

          {/* Health Metrics */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Health Metrics</h3>
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

          {/* AI Insights */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">AI-Powered Insights</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-semibold">Personalized Health Recommendations</p>
                <p className="text-sm text-gray-400">The long wait is over</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-semibold">Potential Health Risk Prediction</p>
                <p className="text-sm text-gray-400">The long wait is over</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-semibold">Customized Fitness Plan</p>
                <p className="text-sm text-gray-400">The long wait is over</p>
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Upcoming Appointments</h3>
            <p>🫀 Cardiology Checkup — Tomorrow, 10:00 AM</p>
            <p>👨‍⚕️ Annual Physical Exam — Next week, 02:00 PM</p>
          </div>

          {/* Medication Reminders */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Medication Reminders</h3>
            <p>💊 Annual Physical Exam 25mg — 8:00 AM</p>
            <p>💊 Annual Physical Exam 50mg — 6:00 PM</p>
            <p>💊 Annual Physical Exam 100mg — 7:00 PM</p>
          </div>
        </main>
      </div>
    </div>
  );
}


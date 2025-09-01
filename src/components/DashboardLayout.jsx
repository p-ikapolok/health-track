// src/components/DashboardLayout.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCog, FaUserMd, FaCalendarCheck } from "react-icons/fa";
import AvatarSVG from "./AvatarSVG.jsx";
import logo from "../assets/logo.png";

export default function DashboardLayout({ children, role = "doctor" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close profile dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-black flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-40`}
      >
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-2 p-4 border-b border-gray-800">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaBars />
          </button>
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isSidebarOpen && <span className="font-bold text-lg">HEALTHTRACK</span>}
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-800">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-900 text-sm focus:outline-none"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto p-2">
          {role === "doctor" ? (
            <>
              <Link to="/doctor-dashboard" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                <FaUserMd /> {isSidebarOpen && "Dashboard"}
              </Link>
              <Link to="/appointments" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                <FaCalendarCheck /> {isSidebarOpen && "Appointments"}
              </Link>
              <Link to="/reports" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                 {isSidebarOpen && "Reports"}
              </Link>
            </>
          ) : (
            <>
              <Link to="/patient-dashboard" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                🫀 {isSidebarOpen && "Health"}
              </Link>
              <Link to="/appointments" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                <FaCalendarCheck /> {isSidebarOpen && "Appointments"}
              </Link>
              <Link to="/medications" className="flex items-center gap-2 hover:bg-gray-800 p-2 rounded">
                 {isSidebarOpen && "Medications"}
              </Link>
            </>
          )}
        </nav>

        {/* Settings */}
        <div className="p-4 flex items-center gap-2 cursor-pointer hover:text-gray-400 border-t border-gray-800">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end bg-black px-6 py-3 fixed top-0 right-0 z-30 ml-20 md:ml-64">
          <div
            ref={menuRef}
            className="relative"
          >
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer"
            >
              <AvatarSVG name={role === "doctor" ? "Dr. Olivia Harper" : "Jane Doe"} size={40} />
            </div>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">View Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Support</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer text-red-300">Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}


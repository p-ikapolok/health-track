import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserMd, FaUserInjured, FaCog } from "react-icons/fa";
import AvatarSVG from "../AvatarSVG.jsx";
import logo from "../assets/logo.png";

export default function DashboardLayout({ role, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
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
        } bg-black border-r border-gray-800 flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-40`}
      >
        {/* Top: Hamburger + Logo + Name */}
        <div className="flex items-center gap-2 p-4">
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
        <div className="p-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-lg bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
              >
                <FaUserMd />
                {isSidebarOpen && "Home"}
              </Link>
            </li>

            {role === "doctor" && (
              <li>
                <Link
                  to="/doctor-dashboard"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                >
                  <FaUserMd />
                  {isSidebarOpen && "Doctor Panel"}
                </Link>
              </li>
            )}

            {role === "patient" && (
              <li>
                <Link
                  to="/patient-dashboard"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                >
                  <FaUserInjured />
                  {isSidebarOpen && "Patient Panel"}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-gray-800 flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end bg-gray-900 px-6 py-3 fixed top-0 left-20 md:left-64 right-0 z-30">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-gray-400 overflow-hidden">
                <AvatarSVG size={40} />
              </div>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
                <ul className="flex flex-col text-sm text-white">
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
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}


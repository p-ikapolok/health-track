import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../Sidebar.jsx";
import AvatarSVG from "../AvatarSVG.jsx";

export default function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown if clicked outside
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end bg-white shadow px-6 py-3 relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-gray-400 overflow-hidden">
              <AvatarSVG size={40} />
            </div>
          </button>

          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute right-6 top-14 w-48 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
            >
              <ul className="flex flex-col text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Support</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Log Out</li>
              </ul>
            </div>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">Doctor’s Dashboard</h1>
          <p className="text-gray-600">Welcome back, manage your patients here.</p>
        </main>
      </div>
    </div>
  );
}


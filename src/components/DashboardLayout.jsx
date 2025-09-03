import { useState } from "react";
import { FaBars, FaCog } from "react-icons/fa";
import logo from "../assets/logo.png";
import AvatarSVG from "./AvatarSVG.jsx";

export default function DashboardLayout({ children, navLinks, userName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-black border-r border-gray-800 flex flex-col transition-all duration-300 fixed top-0 left-0 h-full z-40`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 p-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isSidebarOpen && <span className="font-bold text-lg">HEALTHTRACK</span>}
        </div>

        {/* Search Box */}
        {isSidebarOpen && (
          <div className="px-4 pb-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        )}

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">{navLinks}</ul>
        </nav>

        {/* Settings */}
        <div className="p-4 flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-black px-6 py-3 fixed top-0 left-0 right-0 z-30 ml-20 md:ml-64">
          {/* Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaBars />
            </button>
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Profile Avatar */}
          <div className="relative">
            <div
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer"
            >
              <AvatarSVG name={userName} size={40} />
            </div>

            {/* Dropdown */}
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
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}


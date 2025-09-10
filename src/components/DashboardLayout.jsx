import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCog, FaBell, FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs"; // nine-dots menu
import logo from "../assets/logo.png";
import AvatarSVG from "./AvatarSVG.jsx";

export default function DashboardLayout({ children, sidebarItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  const sidebarWidth = isSidebarOpen ? "w-64" : "w-20";

  // keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        const searchInput = document.getElementById("sidebar-search");
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${sidebarWidth} bg-black fixed top-0 left-0 h-full z-40 transition-all duration-300`}
      >
        {/* Logo + App Name */}
        <div className="flex items-center gap-2 p-4 border-b border-gray-800">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isSidebarOpen && (
            <span className="font-bold text-lg">HEALTHTRACK</span>
          )}
        </div>

        {/* Search */}
        <div className="px-4 pb-4 mt-4">
          {isSidebarOpen ? (
            <input
              id="sidebar-search"
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <button className="text-gray-400 hover:text-white text-xl">
              <FaSearch />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto border-t border-gray-800">
          <ul className="space-y-2 p-2">
            {Array.isArray(sidebarItems) &&
              sidebarItems.map((item, idx) => {
                const active = location.pathname.includes(item.path);
                return (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition 
                      ${
                        active
                          ? "bg-gray-800 text-white"
                          : "hover:bg-gray-800 text-gray-300"
                      }`}
                    >
                      {item.icon}
                      {isSidebarOpen && <span>{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 flex items-center gap-2 cursor-pointer hover:text-gray-400 border-t border-gray-800">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main section */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <header
          className={`flex items-center justify-between bg-black px-6 py-3 fixed top-0 right-0 z-30 border-b border-gray-800 transition-all duration-300 ${
            isSidebarOpen ? "left-64" : "left-20"
          }`}
        >
          {/* Left: Hamburger + Name */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaBars />
            </button>
            <span className="font-bold text-lg">HEALTHTRACK</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white text-xl">
              <BsGrid3X3Gap />
            </button>
            <button className="relative text-gray-400 hover:text-white text-xl">
              <FaBell />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="relative"
            >
              <div className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer">
                <AvatarSVG name="User" size={40} />
              </div>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
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
        </header>

        {/* Content */}
        <main className="p-6 mt-16 space-y-6">{children}</main>
      </div>
    </div>
  );
}

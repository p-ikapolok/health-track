import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaCog, FaBell, FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import logo from "../assets/logo.png";
import AvatarSVG from "./AvatarSVG.jsx";

export default function DashboardLayout({ children, sidebarItems = [] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const sidebarWidth = isSidebarOpen ? 256 : 80; // px

  // keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "/") {
        if (
          document.activeElement &&
          /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)
        ) {
          return;
        }
        e.preventDefault();
        const searchInput = document.getElementById("sidebar-search");
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // helper for sidebar items
  const renderSidebarItem = (item, idx) => {
    if (item && item.$$typeof) return <div key={idx}>{item}</div>;

    if (item && (item.path || item.icon || item.label)) {
      return (
        <li key={idx}>
          <NavLink
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className={`${isSidebarOpen ? "inline" : "hidden"} truncate`}>
              {item.label}
            </span>
          </NavLink>
        </li>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-gray-800 h-16 flex items-center px-4">
        {/* Left: Hamburger + Logo + Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setIsSidebarOpen((s) => !s)}
            aria-label="Toggle sidebar"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaBars />
          </button>
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-lg">HEALTHTRACK</span>
        </div>

        {/* Right: icons */}
        <div className="ml-auto flex items-center gap-4">
          <button
            className="text-gray-400 hover:text-white text-xl"
            aria-label="Apps"
          >
            <BsGrid3X3Gap />
          </button>
          <button
            className="relative text-gray-400 hover:text-white text-xl"
            aria-label="Notifications"
          >
            <FaBell />
            <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-500" />
          </button>
          <div className="relative">
            <div
              onClick={() => setIsProfileMenuOpen((s) => !s)}
              className="border-2 border-gray-600 rounded-full hover:opacity-90 cursor-pointer"
            >
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

      {/* Layout below header */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } bg-black border-r border-gray-800 h-[calc(100vh-64px)] fixed left-0 top-16 transition-all duration-300 overflow-hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="px-4 py-3">
              {isSidebarOpen ? (
                <input
                  id="sidebar-search"
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
              ) : (
                <button
                  onClick={() => {
                    const el = document.getElementById("sidebar-search");
                    if (el) el.focus();
                  }}
                  className="text-gray-400 hover:text-white text-xl"
                  aria-label="Open search"
                >
                  <FaSearch />
                </button>
              )}
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="p-2 space-y-1">
                {sidebarItems.map((it, i) => renderSidebarItem(it, i))}
              </ul>
            </nav>
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                <FaCog />
                <span className={`${isSidebarOpen ? "inline" : "hidden"}`}>
                  Settings
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main
          className="flex-1 transition-all duration-300 p-6"
          style={{ marginLeft: sidebarWidth }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

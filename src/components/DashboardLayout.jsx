import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCog, FaBell, FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import logo from "../assets/logo.png";
import AvatarSVG from "./AvatarSVG.jsx";

export default function DashboardLayout({ children, sidebarItems = [] }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  // header is 4rem tall (Tailwind top-16 / mt-16)
  // sidebar widths: w-64 (256px) when open, w-20 (80px) when closed

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

  // helper to render each sidebar item
  const renderSidebarItem = (item, idx) => {
    // if item is a React element (legacy JSX passed in), just render it
    if (item && item.$$typeof) {
      // user passed <li>...</li> fragments — render as-is (no auto-collapsing)
      return <div key={idx}>{item}</div>;
    }

    // if item is an object with path/icon/label
    if (item && (item.path || item.icon || item.label)) {
      const active = item.path && location.pathname.startsWith(item.path);
      const baseClasses =
        "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm";
      const activeClasses = active
        ? "bg-gray-800 text-white"
        : "hover:bg-gray-800 text-gray-300";

      // If there's a path, use Link; otherwise just a div/button
      const inner = (
        <>
          <span className="text-lg">{item.icon}</span>
          {/* label shown only when sidebar is open */}
          <span className={`${isSidebarOpen ? "inline" : "hidden"} truncate`}>
            {item.label}
          </span>
        </>
      );

      return item.path ? (
        <li key={idx}>
          <Link to={item.path} className={`${baseClasses} ${activeClasses}`}>
            {inner}
          </Link>
        </li>
      ) : (
        <li key={idx} className={`${baseClasses} ${activeClasses}`}>
          {inner}
        </li>
      );
    }

    // fallback
    return null;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header (full width) */}
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-gray-800"
        style={{ height: 64 }} // 4rem
      >
        <div
          className="h-full px-6 flex items-center justify-between"
          // note: header content is full-width and sits on top of the left edge
        >
          {/* Left: hamburger + logo + name */}
          <div className="flex items-center gap-3">
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

          {/* Right: nine-dots, bell, avatar */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white text-xl" aria-label="Apps">
              <BsGrid3X3Gap />
            </button>

            <button className="relative text-gray-400 hover:text-white text-xl" aria-label="Notifications">
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
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">View Profile</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
                    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Support</li>
                    <li className="px-4 py-2 hover:bg-red-600 cursor-pointer text-red-300">Log Out</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Layout row (sidebar sits below header) */}
      <div className="flex" style={{ paddingTop: 64 }}>
        {/* Sidebar (starts below header) */}
        <aside
          className={`${
            isSidebarOpen ? "w-64" : "w-20"
          } bg-black border-r border-gray-800 h-[calc(100vh-64px)] transition-all duration-300 fixed left-0 top-16 overflow-hidden`}
          aria-hidden={false}
        >
          {/* Sidebar inner content starts immediately (we set top:16 for the element itself) */}
          <div className="flex flex-col h-full">
            {/* Search area */}
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

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="p-2 space-y-1">
                {Array.isArray(sidebarItems) && sidebarItems.length > 0
                  ? sidebarItems.map((it, i) => renderSidebarItem(it, i))
                  : // fallback: render whatever JSX was passed
                    sidebarItems}
              </ul>
            </nav>

            {/* Settings at bottom */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                <FaCog />
                <span className={`${isSidebarOpen ? "inline" : "hidden"}`}>Settings</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main
          className={`flex-1 transition-all duration-300`}
          style={{
            // shift the content area to the right so it's not under the sidebar
            marginLeft: isSidebarOpen ? 256 : 80, // 64*4=256px, 20*4=80px
            paddingTop: 16, // small extra spacing below header area (header already accounted by container paddingTop)
          }}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

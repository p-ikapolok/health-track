import { useState, useRef, useEffect } from "react";
import { FaBars, FaCog, FaBell, FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs"; // nine-dots menu
import logo from "../assets/logo.png";
import AvatarSVG from "./AvatarSVG.jsx";

export default function DashboardLayout({ children, sidebarItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

  const sidebarWidth = isSidebarOpen ? "w-64" : "w-20";

  // Keyboard shortcut `/` focuses search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${sidebarWidth} bg-black fixed top-0 left-0 h-full z-40 transition-all duration-300`}
      >
        {/* Logo + App Name */}
        <div className="flex items-center gap-2 p-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          {isSidebarOpen && (
            <span className="font-bold text-lg">HEALTHTRACK</span>
          )}
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          {isSidebarOpen ? (
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search... (/)"
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <button
              onClick={() => searchInputRef.current?.focus()}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaSearch />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-2">
            {sidebarItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
                {item.icon}
                {isSidebarOpen && <span>{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaCog /> {isSidebarOpen && "Settings"}
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1">
        {/* Header */}
        <header
          className="flex items-center justify-between bg-black px-6 py-3 fixed top-0 left-0 right-0 z-30 transition-all duration-300"
          style={{ paddingLeft: isSidebarOpen ? "16rem" : "5rem" }}
        >
          {/* Left: Hamburger + App Name (only when sidebar collapsed) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaBars />
            </button>
            {!isSidebarOpen && (
              <span className="font-bold text-lg">HEALTHTRACK</span>
            )}
          </div>

          {/* Right: Nine Dots + Notification + Avatar */}
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

        {/* Main Content */}
        <main
          className="p-6 mt-16 space-y-6 transition-all duration-300"
          style={{ paddingLeft: isSidebarOpen ? "16rem" : "5rem" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}


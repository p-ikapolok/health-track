import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import AvatarSVG from "./AvatarSVG";
import NineDots from "./NineDots"; // ✅ custom 9-dot icon
import logo from "../assets/logo.png";

export default function Header({ collapsed, setCollapsed }) {
  const [menuOpen, setMenuOpen] = useState(false); // avatar dropdown
  const [gridOpen, setGridOpen] = useState(false); // nine dots dropdown
  const menuRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (gridRef.current && !gridRef.current.contains(e.target)) {
        setGridOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-black text-white px-6 py-3 relative shadow">
      {/* Left side: Hamburger → Logo → HealthTrack */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-800"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-7" />
          <span className="font-bold text-sm tracking-wide uppercase">
            HealthTrack
          </span>
        </div>
      </div>

      {/* Center: Welcome text */}
      <div className="hidden md:block bg-gray-800 text-white px-6 py-2 rounded-lg font-medium text-sm">
        Hello Dr. Olivia Harper, Welcome back
      </div>

      {/* Right side: Nine-dots + Avatar */}
<div ref={gridRef} className="relative">
  <button
    onClick={() => {
      console.log("NineDots clicked ");
      setGridOpen(!gridOpen);
    }}
    className="p-2 rounded-lg hover:bg-gray-800"
  >
    <NineDots className="w-6 h-6 text-white" />
  </button>

  {gridOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden z-50">
      <ul className="flex flex-col">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Share First Aid
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Support
        </li>
      </ul>
    </div>
  )}
</div>


        {/* Avatar */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <AvatarSVG name="Dr. Olivia Harper" size={40} />
            </div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg overflow-hidden z-[9999]">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Support
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


import React from "react";
import { NavLink } from "react-router-dom";
import { Users, Calendar, FileText, MessageSquare, Settings } from "lucide-react";

const navItems = [
  { path: "patients", label: "Patients", icon: <Users size={20} /> },
  { path: "appointments", label: "Appointments", icon: <Calendar size={20} /> },
  { path: "reports", label: "Reports", icon: <FileText size={20} /> },
  { path: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
  { path: "settings", label: "Settings", icon: <Settings size={20} /> },
];

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-56"
      } bg-white shadow-md h-full transition-all duration-300 flex flex-col`}
    >
      <nav className="flex-1 mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition 
              ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}


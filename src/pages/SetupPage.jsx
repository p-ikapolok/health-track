import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SetupPage({ onFinish }) {
  const location = useLocation();
  const { userName = "Jane Doe", role = "patient" } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // ✅ tell App.jsx that setup is done
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Hi {role === "doctor" ? `Dr. ${userName}` : userName}, we’re setting
          up your dashboard...
        </h1>
        <p className="text-gray-300">This might take a while...</p>
        <div className="mt-6 flex justify-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

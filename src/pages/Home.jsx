import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      {/* Logo */}
      <img
        src={logo}
        alt="Health-Track Logo"
        className="w-32 h-32 mb-6 object-contain"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700">
        Welcome to Health-Track
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-lg">
        Track your health, manage medications, and stay connected with your doctor.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Log In
        </Link>
        <Link
          to="/doctor-registration"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

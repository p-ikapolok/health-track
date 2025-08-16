import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo

export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img
            src={logo}
            alt="Health-Track Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold tracking-wide">HEALTHTRACK</h1>
        </div>
        <Link
          to="/doctor-registration" // You can change this to /patient-registration if needed
          className="bg-sky-200 text-black px-5 py-1 rounded-full text-sm font-semibold"
        >
          Sign up
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20">
          {/* Google Login */}
          <button className="flex items-center justify-center gap-2 bg-pink-200 text-black px-6 py-3 rounded-full font-semibold">
            <FaGoogle className="text-red-500" /> Log in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-4 text-gray-400">Or</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Username */}
          <label className="text-sm mb-1">USERNAME</label>
          <input
            type="text"
            className="mb-4 p-2 w-full border border-gray-500 bg-transparent rounded-sm"
          />

          {/* Password */}
          <label className="text-sm mb-1">PASSWORD</label>
          <input
            type="password"
            className="p-2 w-full border border-gray-500 bg-transparent rounded-sm"
          />

          {/* Forgot Password */}
          <a href="#" className="text-sm text-sky-400 mt-2 inline-block">
            Forgot password?
          </a>

          {/* Role Checkboxes */}
          <div className="flex gap-6 mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-sky-400" />
              <span>Doctor</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-sky-400" />
              <span>Patient</span>
            </label>
          </div>

          {/* Login Button */}
          <button className="mt-6 bg-sky-200 text-black px-6 py-2 rounded-full font-semibold">
            Login
          </button>

          {/* Signup Link */}
          <p className="mt-4 text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link to="/doctor-registration" className="text-white underline">
              Sign up.
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-r from-purple-500 to-sky-400 rounded-lg m-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-lg">Your Health is our Priority</p>
            <p className="text-lg">Lets stay safe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

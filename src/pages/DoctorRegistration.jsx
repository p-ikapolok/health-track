import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo image

export default function DoctorRegistration() {
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
        <button className="bg-sky-200 text-black px-5 py-1 rounded-full text-sm font-semibold">
          Login
        </button>
      </nav>

      {/* Switch Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Link
          to="/patient-registration"
          className="px-6 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition"
        >
          Patient Registration
        </Link>
        <Link
          to="/doctor-registration"
          className="px-6 py-2 bg-sky-200 text-black rounded-full font-semibold hover:bg-sky-300 transition"
        >
          Doctor Registration
        </Link>
      </div>

      {/* Form Container */}
      <div className="flex flex-col items-center px-4 py-8">
        <h2 className="text-3xl font-bold mb-10">Doctor Registration</h2>

        <form className="w-full max-w-md space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="uppercase font-semibold mb-2 text-sm text-gray-400">
              Personal Information
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <select className="w-full p-2 border border-gray-500 bg-transparent rounded-sm">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="uppercase font-semibold mb-2 text-sm text-gray-400">
              Contacts Details
            </h3>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm"
            />
          </div>

          {/* Professional Details */}
          <div>
            <h3 className="uppercase font-semibold mb-2 text-sm text-gray-400">
              Professional Details
            </h3>
            <input
              type="text"
              placeholder="Specialisation"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <input
              type="text"
              placeholder="Credentials"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <input
              type="text"
              placeholder="Practice Name"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <input
              type="text"
              placeholder="Practice Address"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm"
            />
          </div>

          {/* Account Security */}
          <div>
            <h3 className="uppercase font-semibold mb-2 text-sm text-gray-400">
              Account Security
            </h3>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm mb-4"
            />
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full p-2 border border-gray-500 bg-transparent rounded-sm"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-sky-200 text-black py-2 rounded-full font-semibold"
          >
            sign up
          </button>

          {/* Already Registered Link */}
          <p className="text-center text-sm mt-4 text-gray-400">
            Already Registered?{" "}
            <a href="/login" className="text-white underline">
              Log in here.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

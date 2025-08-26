import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DoctorDashboard.jsx";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import DoctorRegistration from "./pages/DoctorRegistration.jsx";
import PatientRegistration from "./pages/PatientRegistration.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-registration" element={<DoctorRegistration />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />

        {/* 404 Page */}
        <Route path="/404" element={<NotFound />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;


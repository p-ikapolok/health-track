import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { FaUserMd, FaUserInjured, FaCalendarCheck, FaChartBar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import DoctorRegistration from "./pages/DoctorRegistration.jsx";
import PatientRegistration from "./pages/PatientRegistration.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import SetupPage from "./pages/SetupPage.jsx"; // splash screen
import DashboardLayout from "./components/DashboardLayout.jsx";

function App() {
  const [doctorSetupDone, setDoctorSetupDone] = useState(false);
  const [patientSetupDone, setPatientSetupDone] = useState(false);

  // Sidebar items for Doctor Dashboard
  const doctorSidebarItems = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <FaUserMd />, label: "Patients" },
    { icon: <FaCalendarCheck />, label: "Appointments" },
    { icon: <FaChartBar />, label: "Reports" },
  ];

  // Sidebar items for Patient Dashboard
  const patientSidebarItems = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <FaUserInjured />, label: "My Doctors" },
    { icon: <FaCalendarCheck />, label: "Appointments" },
    { icon: <FaChartBar />, label: "Health Stats" },
  ];

  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-registration" element={<DoctorRegistration />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />

        {/* Doctor Dashboard with setup screen */}
        <Route
          path="/doctor-dashboard/*"
          element={
            doctorSetupDone ? (
              <DashboardLayout sidebarItems={doctorSidebarItems}>
                <DoctorDashboard />
              </DashboardLayout>
            ) : (
              <SetupPage
                doctorName="Dr. John"
                onFinish={() => setDoctorSetupDone(true)}
              />
            )
          }
        />

        {/* Patient Dashboard with setup screen */}
        <Route
          path="/patient-dashboard/*"
          element={
            patientSetupDone ? (
              <DashboardLayout sidebarItems={patientSidebarItems}>
                <PatientDashboard />
              </DashboardLayout>
            ) : (
              <SetupPage
                doctorName="Patient"
                onFinish={() => setPatientSetupDone(true)}
              />
            )
          }
        />

        {/* 404 Page */}
        <Route path="/404" element={<NotFound />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;


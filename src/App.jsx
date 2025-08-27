import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import DoctorRegistration from "./pages/DoctorRegistration";
import PatientRegistration from "./pages/PatientRegistration";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import NotFound from "./pages/NotFound";
import SetupPage from "./pages/SetupPage"; // splash screen

function App() {
  const [doctorSetupDone, setDoctorSetupDone] = useState(false);
  const [patientSetupDone, setPatientSetupDone] = useState(false);

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
              <DoctorDashboard />
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
              <PatientDashboard />
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


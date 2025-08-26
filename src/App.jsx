import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import DoctorRegistration from "./pages/DoctorRegistration.jsx";
import PatientRegistration from "./pages/PatientRegistration.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import SetupPage from "./pages/SetupPage.jsx"; // splash screen

function App() {
  const [doctorSetupDone, setDoctorSetupDone] = useState(false);

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

        {/* Patient Dashboard only shows SetupPage */}
        <Route
          path="/patient-dashboard/*"
          element={
            <SetupPage
              doctorName="Patient"
              onFinish={() => console.log("Patient setup done")}
            />
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

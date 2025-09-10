export default function PatientHome() {
  return (
    <>
      {/* Dashboard Header */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold">Hello Jane Doe, Welcome Back</h2>
      </div>

      {/* Health Metrics */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Health Metrics
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Heart Rate</p>
            <p className="text-2xl">72 bpm</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Blood Pressure</p>
            <p className="text-2xl">120/80 mmHg</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <p className="font-semibold">Glucose Level</p>
            <p className="text-2xl">95 mg/dl</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          AI-Powered Insights
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Personalized Health Recommendations</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Potential Health Risk Prediction</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold">Customized Fitness Plan</p>
            <p className="text-sm text-gray-400">The long wait is over</p>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Upcoming Appointments
        </h3>
        <p>🫀 Cardiology Checkup — Tomorrow, 10:00 AM</p>
        <p>👨‍⚕️ Annual Physical Exam — Next week, 02:00 PM</p>
      </div>

      {/* Medication Reminders */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Medication Reminders
        </h3>
        <p>💊 Annual Physical Exam 25mg — 8:00 AM</p>
        <p>💊 Annual Physical Exam 50mg — 6:00 PM</p>
        <p>💊 Annual Physical Exam 100mg — 7:00 PM</p>
      </div>
    </>
  );
}

// Placeholder pages
export function Appointments() {
  return <h2 className="text-white text-2xl">Appointments Page</h2>;
}

export function Medications() {
  return <h2 className="text-white text-2xl">Medications Page</h2>;
}

export function Reports() {
  return <h2 className="text-white text-2xl">Reports Page</h2>;
}

export function Messages() {
  return <h2 className="text-white text-2xl">Messages Page</h2>;
}

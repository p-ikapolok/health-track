export default function Appointments() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Appointments</h1>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-700 mb-6">
        <button className="pb-2 border-b-2 border-blue-500">Upcoming</button>
        <button className="pb-2">Past</button>
        <button className="pb-2">Cancelled</button>
      </div>

      {/* Upcoming Appointments */}
      <h2 className="font-semibold mb-4">Upcoming Appointments</h2>

      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-3">
        <div>
          <p className="font-semibold">General Checkup</p>
          <p className="text-sm text-gray-400">Dr. Emilly Carter</p>
        </div>
        <button className="bg-gray-600 px-4 py-1 rounded-lg">View</button>
      </div>

      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-6">
        <div>
          <p className="font-semibold">Dermatology Consultation</p>
          <p className="text-sm text-gray-400">Dr. Ethan Clerk</p>
        </div>
        <button className="bg-gray-600 px-4 py-1 rounded-lg">View</button>
      </div>

      {/* Smart Scheduling */}
      <h2 className="font-semibold mb-4">Smart Scheduling Suggestions</h2>
      <p className="text-sm text-gray-400 mb-4">
        Based on your availability and Dr. Clerk’s schedule, the AI suggest the
        following optional appointment times:
      </p>

      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-3">
        <div>
          <p className="font-semibold text-white">
            Wednesday, July 10, 2024, 02:00 PM
          </p>
          <p className="text-xs text-gray-400">AI Suggested Time</p>
        </div>
        <button className="bg-blue-600 px-4 py-1 rounded-lg">Schedule</button>
      </div>

      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
        <div>
          <p className="font-semibold text-white">
            Friday, July 12, 2024, 10:00 AM
          </p>
          <p className="text-xs text-gray-400">AI Suggested Time</p>
        </div>
        <button className="bg-blue-600 px-4 py-1 rounded-lg">Schedule</button>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Note: AI Prediction suggest a low-no show probability for these times.
      </p>
    </div>
  );
}

export default function Medications() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Medications</h1>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-700 mb-6">
        <button className="pb-2 border-b-2 border-blue-500">Upcoming</button>
        <button className="pb-2">Past</button>
        <button className="pb-2">Cancelled</button>
      </div>

      {/* Upcoming Medications */}
      <h2 className="font-semibold mb-4">Upcoming Medications</h2>

      {["Medication A - 20mg, Once daily", "Medication B - 10mg, Twice daily", "Medication C - 5mg, Once daily"].map((med, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-3"
        >
          <p>{med}</p>
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
        </div>
      ))}

      {/* Add Medication */}
      <h2 className="font-semibold mt-6 mb-4">Add New Medication</h2>
      <div className="space-y-3 mb-6">
        <input
          placeholder="Enter Medication Name"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none"
        />
        <input
          placeholder="Dosage (eg. 20mg)"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none"
        />
        <input
          placeholder="Frequency (eg. Once Daily)"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none"
        />
        <input
          placeholder="Timing (eg. 8:00AM)"
          className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 outline-none"
        />
        <button className="bg-blue-600 px-4 py-2 rounded-lg">
          Add New Medication
        </button>
      </div>

      {/* Tips */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Medication Tips</h3>
        <p className="text-sm text-gray-400">
          Always take your medications as prescribed by your doctor. If you have
          any questions or concerns, please contact your healthcare provider.
          Consider enabling any AI-powered optimization for personalized reminder
          schedules based on your adherence and potential drug interactions.
        </p>
      </div>
    </div>
  );
}

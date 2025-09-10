export default function Messages() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Sidebar Chat List */}
        <div className="bg-gray-900 rounded-lg p-3 space-y-3">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-600" />
              <p className="text-sm text-red-400">Cancelled</p>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className="col-span-2 flex flex-col bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Cancelled</h2>
          <div className="flex-1 space-y-3 mb-4">
            <div className="bg-gray-700 p-3 rounded-lg self-start w-max">
              Message 1
            </div>
            <div className="bg-gray-600 p-3 rounded-lg self-end w-max">
              Message 2
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type here"
              className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-lg">Send</button>
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Emergency</h2>
        <p className="text-gray-400 mb-4">
          In case of a medical emergency, describe your symptoms below. Our AI
          will assess the urgency and provide immediate guidance or connect you
          with the most appropriate emergency service. Please use this feature
          only for genuine emergencies.
        </p>
        <textarea
          placeholder="Describe your symptoms"
          className="w-full h-32 bg-gray-800 text-white rounded-lg p-3 mb-4 outline-none"
        />
        <button className="bg-blue-600 px-6 py-2 rounded-lg">
          Assess Urgency
        </button>
      </div>
    </div>
  );
}

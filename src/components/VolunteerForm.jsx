// VolunteerForm.jsx
export default function VolunteerForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 my-12">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Volunteer With Us
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g., Satvik Shukla"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
            <textarea
              id="reason"
              placeholder="Tell us about your motivation..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              rows={5}
            />
          </div>
          <div className="text-center pt-2">
            {/* Use the primary theme color for the button */}
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
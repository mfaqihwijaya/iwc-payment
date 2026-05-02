export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Welcome Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500">Router Status</p>
          <h2 className="text-xl font-semibold">
            Connected ✅
          </h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500">Active Users</p>
          <h2 className="text-xl font-semibold">
            12 Users
          </h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500">Profiles</p>
          <h2 className="text-xl font-semibold">
            5 Profiles
          </h2>
        </div>
      </div>
    </div>
  );
}
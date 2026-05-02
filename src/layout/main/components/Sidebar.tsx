import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">
        Mikhmon React
      </h1>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-500" : "hover:bg-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-500" : "hover:bg-gray-700"
            }`
          }
        >
          Manajemen User
        </NavLink>
      </nav>
    </aside>
  );
}
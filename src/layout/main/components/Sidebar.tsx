import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">
        Inayatullah WiFi Center
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
          to="/santri"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-500" : "hover:bg-gray-700"
            }`
          }
        >
          Santri
        </NavLink>

        <NavLink
          to="/kamar"
          className={({ isActive }) =>
            `p-2 rounded ${
              isActive ? "bg-blue-500" : "hover:bg-gray-700"
            }`
          }
        >
          Kamar
        </NavLink>
      </nav>
    </aside>
  );
}
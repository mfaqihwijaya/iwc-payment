import type { User } from "../types/user.type";

type Props = {
  users: User[];
};

export default function UserTable({ users }: Props) {
  return (
    <div className="bg-white rounded shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Profile</th>
            <th className="p-3 text-left">Uptime</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-3">{u.username}</td>
              <td className="p-3">{u.profile}</td>
              <td className="p-3">{u.uptime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import type { User } from "./types/user.type";
import { getUsers } from "./services/user.service";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Manajemen User
      </h1>

      <UserTable users={users} />
    </div>
  );
}
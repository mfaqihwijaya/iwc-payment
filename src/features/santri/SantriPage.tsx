import { useEffect, useState } from "react";
import SantriTable from "./components/SantriTable";
import type { Santri } from "./types/santri.type";
import { getSantri } from "./services/santri.service";

export default function UsersPage() {
  const [santriList, setSantriList] = useState<Santri[]>([]);

  useEffect(() => {
    getSantri().then(setSantriList);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Manajemen User
      </h1>

      <SantriTable santriList={santriList} />
    </div>
  );
}
import type { Santri } from "../types/santri.type";

type Props = {
  santriList: Santri[];
};

export default function SantriTable({ santriList }: Props) {
  return (
    <div className="bg-white rounded shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Putra/Putri</th>
            <th className="p-3 text-left">Kamar</th>
            <th className="p-3 text-left">Jumlah Device</th>
            <th className="p-3 text-left">No HP</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {santriList.map((s) => (
            <tr
              key={s.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.gender.toUpperCase()}</td>
              <td className="p-3">{s.room_id}</td>
              <td className="p-3">{s.devices_count}</td>
              <td className="p-3">{s.phone_no}</td>
              <td className="p-3">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
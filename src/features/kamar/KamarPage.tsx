import { useEffect, useState } from "react";
import Td from "./components/Td";
import Th from "./components/Th";
import { getKamar } from "./services/kamar.service";
import type { Kamar } from "./types/kamar.type";

export default function KamarPage() {
  const [search, setSearch] = useState("");
  const [kamarList, setKamarList] = useState<Kamar[]>([]);
  
  useEffect(() => {
    getKamar().then(setKamarList);
  }, []);

  return (
    <div className="bg-[#F4F5F7] min-h-screen">
      <div className="mx-auto px-8 py-8 space-y-6">

        {/* HEADER */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Kamar
            </h1>
            <p className="text-sm text-gray-500">
              Dashboard manajemen kamar
            </p>
          </div>

          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Tambah Kamar +
          </button>
        </header>

        {/* TOOLBAR */}
        <div className="bg-white border border-gray-200 rounded-md p-4 flex justify-between">
          <input
            placeholder="Cari kamar..."
            className="w-80 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span className="text-sm text-gray-500">
            {kamarList.length} kamar
          </span>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
          <table className="w-full text-sm">

            {/* HEADER */}
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <Th>Nama Kamar</Th>
                <Th>Putra / Putri</Th>
                <Th align="right">Action</Th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {kamarList.map((kamar) => (
                <tr
                  key={kamar.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <Td strong>{kamar.name}</Td>
                  <Td>{kamar.gender}</Td>

                  <Td align="right">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
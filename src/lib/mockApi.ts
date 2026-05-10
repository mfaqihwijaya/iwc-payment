type MockPath = "?service=getSantri" | "?service=getKamar";

const mockResponseData = {
  "?service=getSantri": [
    {
      id: 1,
      name: "Ahmad Fauzan",
      gender: "putra",
      room_id: "A01",
      status: "aktif",
      devices_count: 2,
      phone_no: "081234567801",
    },
    {
      id: 2,
      name: "Muhammad Rizky",
      gender: "putra",
      room_id: "A02",
      status: "aktif",
      devices_count: 1,
      phone_no: "081234567802",
    },
    {
      id: 3,
      name: "Nur Aisyah",
      gender: "putri",
      room_id: "B01",
      status: "aktif",
      devices_count: 2,
      phone_no: "081234567803",
    },
    {
      id: 4,
      name: "Siti Khadijah",
      gender: "putri",
      room_id: "B02",
      status: "Inaktif",
      devices_count: 0,
      phone_no: "081234567804",
    },
    {
      id: 5,
      name: "Abdul Rahman",
      gender: "putra",
      room_id: "A03",
      status: "aktif",
      devices_count: 3,
      phone_no: "081234567805",
    },
    {
      id: 6,
      name: "Zainab Hasanah",
      gender: "putri",
      room_id: "B03",
      status: "aktif",
      devices_count: 1,
      phone_no: "081234567806",
    },
    {
      id: 7,
      name: "Fajar Hidayat",
      gender: "putra",
      room_id: "A04",
      status: "Inaktif",
      devices_count: 0,
      phone_no: "081234567807",
    },
    {
      id: 8,
      name: "Dewi Lestari",
      gender: "putri",
      room_id: "B04",
      status: "aktif",
      devices_count: 2,
      phone_no: "081234567808",
    },
    {
      id: 9,
      name: "Ali Akbar",
      gender: "putra",
      room_id: "A05",
      status: "aktif",
      devices_count: 1,
      phone_no: "081234567809",
    },
    {
      id: 10,
      name: "Nabila Putri",
      gender: "putri",
      room_id: "B05",
      status: "aktif",
      devices_count: 2,
      phone_no: "081234567810",
    },
  ],
  "?service=getKamar": [
    {
      id: 1,
      name: "Umar 1",
      gender: "putra"
    },
    {
      id: 2,
      name: "Umar 2",
      gender: "putra"
    },
    {
      id: 3,
      name: "Umar 3",
      gender: "putra"
    },
    {
      id: 4,
      name: "Umar 4",
      gender: "putra"
    },
    {
      id: 5,
      name: "Umar 5",
      gender: "putra"
    },
  ],
}

const mockApi = {
  async get(path: MockPath) {
    return {
      data: mockResponseData[path]
    };
  },
};

export default mockApi;
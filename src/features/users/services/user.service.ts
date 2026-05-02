// import api from "../../../lib/api";

// export const getUsers = async () => api.get("/users");
export const getUsers = async () => [
  { id: 1, username: "voucher01", profile: "1H", uptime: "10m" },
  { id: 2, username: "voucher02", profile: "2H", uptime: "1h" },
];
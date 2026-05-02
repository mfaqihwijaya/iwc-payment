const API_URL = "https://api.example.com";

const api = {
  async get(path: string) {
    const res = await fetch(API_URL + path);
    return res.json();
  },
};

export default api;
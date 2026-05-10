const API_URL = "https://script.google.com/macros/s/AKfycbz3m-zfafO7SyozYKfmrt3-Im2BY3n8Ivvso-_TyUNOylpeValH4a0f5SSqcOecBiq6/exec";

const appsScriptApi = {
  async get(path: string) {
    const res = await fetch(API_URL + path);
    const parsed = await res.json();
    return parsed;
  },
};

export default appsScriptApi;
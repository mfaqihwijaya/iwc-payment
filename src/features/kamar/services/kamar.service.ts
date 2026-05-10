// import api from "../../../lib/appsScriptApi";
import api from "../../../lib/mockApi";
import type { Kamar } from "../types/kamar.type";

export const getKamar = async () => {
  const resData = await api.get("?service=getKamar")
  return resData?.data as Kamar[]
}
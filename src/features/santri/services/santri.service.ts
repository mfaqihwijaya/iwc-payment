// import api from "../../../lib/appsScriptApi";
import api from "../../../lib/mockApi"
import type { Santri } from "../types/santri.type"

export const getSantri = async () => {
  const resData = await api.get("?service=getSantri")
  return resData?.data as Santri[]
}
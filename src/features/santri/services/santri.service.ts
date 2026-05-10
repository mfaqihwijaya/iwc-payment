import api from "../../../lib/appsScriptApi";

export const getSantri = async () => {
  const resData = await api.get("?service=getSantri")
  return resData?.data
}
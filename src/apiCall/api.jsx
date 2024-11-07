import axios from "axios";
export const handleGetAPI = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

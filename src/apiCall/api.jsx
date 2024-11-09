import axios from "axios";
const host = `https://suvera-backend.vercel.app/api/`;
export const handleGetAPI = async (endpoint) => {
  const url = `${host}${endpoint}`;
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const handlePostAPI = async (endpoint, formdata) => {
  const url = `${host}${endpoint}`;
  try {
    const result = await axios.post(url, formdata);
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};

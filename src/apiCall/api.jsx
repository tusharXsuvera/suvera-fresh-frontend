import axios from "axios";
export const handleGetAPI = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const handlePostAPI = async (url, formdata) => {
  try {
    const result = await axios.post(url, formdata);
    return result.data;
  } catch (err) {
    console.log(err.message);
  }
};

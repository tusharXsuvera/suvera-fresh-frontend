import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleGetAPI = async (endpoint, token) => {
  try {
    const result = await axios.get(
      `${import.meta.env.VITE_DEV_HOST}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, //
        },
      }
    );
    return result.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 3000 });
  }
};
export const handlePostAPI = async (endpoint, formdata, token) => {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_DEV_HOST}${endpoint}`,
      formdata,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    );
    return result.data;
  } catch (err) {
    toast.error(err.response.data.message, { autoClose: 3000 });
  }
};
export const thirdPartAPI = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 3000 });
  }
};

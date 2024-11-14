import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const host = `https://suvera-backend.vercel.app/api/`;
export const handleGetAPI = async (endpoint) => {
  try {
    const result = await axios.get(`${host}${endpoint}`);
    return result.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 1000 });
  }
};
export const handlePostAPI = async (endpoint, formdata) => {
  try {
    const result = await axios.post(`${host}${endpoint}`, formdata);
    return result.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 1000 });
  }
};
export const thirdPartAPI = async (url) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    toast.error(err.message, { autoClose: 1000 });
  }
};

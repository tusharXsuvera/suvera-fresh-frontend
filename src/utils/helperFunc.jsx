import Cookies from "js-cookie";

export const setToken = (authToken) => {
  Cookies.set("authToken", authToken, { expires: 7 }); // Set cookie with 7-day expiration
  return true;
};

export const getToken = () => {
  const token = Cookies.get("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const deleteToken = () => {
  Cookies.remove("authToken");
  return true;
};

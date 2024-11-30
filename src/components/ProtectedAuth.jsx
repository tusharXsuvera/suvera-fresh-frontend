import React, { useEffect } from "react";
import { handleGetAPI } from "../apiCall/api";
import { getToken } from "../utils/helperFunc";

export default function ProtectedAuth() {
  const handleUser = async () => {
    const token = getToken();
    console.log(token);
    let endPoint = "/auth/session";
    const result = await handleGetAPI(endPoint, token);
    if (result) {
      console.log(result);
    } else {
      console.log("not get details");
    }
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <div>
      <h1>Protected Route</h1>
    </div>
  );
}

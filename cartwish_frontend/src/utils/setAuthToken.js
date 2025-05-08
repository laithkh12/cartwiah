import apiClient from "./api-client";

const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["x-auth-token"] = token; // Assign token
  } else {
    delete apiClient.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;

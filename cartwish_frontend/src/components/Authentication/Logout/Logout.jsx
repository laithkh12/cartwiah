import React, { useEffect } from "react";
import { logout } from "../../../services/userServices";
const Logout = () => {
  useEffect(() => {
    try {
      logout();
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  }, []);

  return null;
};

export default Logout;

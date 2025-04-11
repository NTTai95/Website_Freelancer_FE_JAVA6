import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import authenticationApi from "@api/authenticationApi";

const PrivateRoute = ({ element, requireStaff = false }) => {
  const token = sessionStorage.getItem("token");
  const [isStaff, setIsStaff] = useState(false);
  const [isLoading, setIsLoading] = useState(requireStaff); // chỉ cần chờ nếu cần kiểm tra isStaff

  useEffect(() => {
    const fetchStaffStatus = async () => {
      try {
        const res = await authenticationApi.isStaff();
        setIsStaff(res.data.isStaff);
      } catch (error) {
        console.error("Error checking staff status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token && requireStaff) {
      fetchStaffStatus();
    }
  }, [token, requireStaff]);

  const urlPrev = window.location.pathname;

  if (!token) {
    sessionStorage.setItem("urlPrev", urlPrev);
    return <Navigate to="/login" />;
  }

  if (isLoading) {
    return null; // hoặc loading spinner nếu muốn
  }

  if (requireStaff && !isStaff) {
    return <Navigate to="/404" />;
  }

  return element;
};

export default PrivateRoute;

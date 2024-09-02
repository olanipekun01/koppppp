import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = "/login" }) => {
  const isAuthenticated = useSelector((state: any) => state.userLogin.isAuthenticated);
  console.log("userLogin", useSelector((state: any) => state.userLogin))
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;


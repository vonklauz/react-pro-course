import { useAuth } from "shared/features/authRouting";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

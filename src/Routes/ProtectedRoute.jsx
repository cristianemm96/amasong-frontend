import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({user, children, redirectTo='/'}) => {
  if (!user) {
    return <Navigate to={redirectTo} replace/>
  }
  return children;
};

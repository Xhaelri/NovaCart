import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { hasRole } from "../../Services/UserAuthFirebase";

const PrivateRoute = ({ requiredRole }) => {
  const user = useSelector((state) => state.auth.user);
  
  // Check if user exists and has the required role
  if (!user) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" replace />;
  }
  
  // Use the hasRole utility function to check if the user has the required role
  if (!hasRole(user, requiredRole)) {
    // If user doesn't have the required role, redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }
  
  // If user exists and has the required role, render the children
  return <Outlet />;
};

export default PrivateRoute;
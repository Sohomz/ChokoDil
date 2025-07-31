import { useState } from "react";
import Login from "./Login";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    children
  ) : (
    <Login onSuccess={() => setIsAuthenticated(true)} />
  );
};

export default ProtectedRoute;

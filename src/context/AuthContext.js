import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Function to check auth status, possibly by sending a request to your backend
    const checkAuth = async () => {
      try {
        // Implement the logic to check if the user is authenticated
        // For example, checking if a valid JWT exists in cookies or making an API call
        // setIsAuthenticated(true) if the user is authenticated
      } catch (error) {
        console.error("Authentication check failed", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

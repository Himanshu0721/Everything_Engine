import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storAdmin = localStorage.getItem("adminToken");
    return storAdmin ? { token: storAdmin } : null;
  });
  const [loading, setLoading] = useState(false);

  const adminLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login, Invalid email or password.");
      }
      const data = await response.json();
      console.log(data);
      setAdmin(data);
      localStorage.setItem("adminToken", data.token);
    } catch (error) {
      console.log("Login error", error.message);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const adminLogout = () => {
    setAdmin(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AuthContext.Provider value={{ admin, loading, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

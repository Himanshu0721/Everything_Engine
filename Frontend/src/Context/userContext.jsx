import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const fetchUser = async (userId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/auth/user/${userId}`
      );
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (userId, username, email) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/user/update/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email }),
        }
      );

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

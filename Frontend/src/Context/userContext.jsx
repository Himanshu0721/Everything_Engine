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

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

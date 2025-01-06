import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import AuthScreen from "./AuthScreen";
const Home = () => {
  const [user, setUser] = useState(true);

  return <>{user ? <Dashboard /> : <AuthScreen />}</>;
};

export default Home;

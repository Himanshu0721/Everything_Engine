import React, { useState } from "react";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
const Home = () => {
  const [user, setUser] = useState(false);

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};

export default Home;

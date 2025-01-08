import React, { useEffect, useState } from "react";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
const Home = () => {
  const user = localStorage.getItem("userToken");

  const [isUser, setIsUser] = useState(user);

  return <>{isUser ? <HomeScreen /> : <AuthScreen />}</>;
};

export default Home;

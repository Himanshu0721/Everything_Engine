import Login from "@/Components/Login/Login";
import Privacy from "../privacy/Privacy";
import TermCondition from "../termCondition/TermCondition";
import Register from "../../Components/Login/Register";
import { Route, Routes } from "react-router-dom";
import React from "react";

const AuthScreen = () => {
  return (
    <>
      <Login />
      <Routes>
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/term-condition" element={<TermCondition />} />
      </Routes>
    </>
  );
};

export default AuthScreen;

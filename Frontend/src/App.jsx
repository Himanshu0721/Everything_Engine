import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Dashboard from "./Components/Login/Dashboard";
import Register from './Components/Login/Register';




function App() {
  return (

    <BrowserRouter>
    
   
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    
     
    </Routes>
  
    </BrowserRouter>
 
 
                
  )
}

export default App;
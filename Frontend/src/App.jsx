import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';




function App() {
  return (

    <BrowserRouter>
   <Sidebar />
    <Routes>
      <Route path="/"  element={<Home />} />

     
    </Routes>
    <Footer/>
    </BrowserRouter>
 
 
                
  )
}

export default App;
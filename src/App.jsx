import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserDetails from "./UserDetails";
import Navbar from "./Navbar";
import Edit from "./Edit";
import Create from "./Create";



const App = () => {
  const [id,setId]=useState(0);
  return (
    <BrowserRouter>
          <Navbar />    
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/userDetails" element={<UserDetails setId={setId}/>}/>
        <Route path="/edit/:id" element={<Edit id={id}/>}/>
        <Route path="/create" element={<Create />}/>
       </Routes>
    </BrowserRouter>
   
  );
};

export default App;

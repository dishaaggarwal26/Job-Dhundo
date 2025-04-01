import React from 'react'
import Home  from "./Components/Home";
import  Signup  from "./Components/SignupLogin";
import LostPassword from "./Components/LostPassword"

import {  Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      

            <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/Home" element={<Home/>} />
                      <Route path="/Login" element={<Signup />} />
                      <Route path="/lost-password" element={<LostPassword />}/>
                  </Routes>
    </div>
  )
}

export default App

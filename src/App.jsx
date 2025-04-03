import React from 'react'
import Home  from "./Components/Home";
import  SignupLogin  from "./Components/SignupLogin";
import LostPassword from "./Components/LostPassword"

import {  Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      

            <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/Home" element={<Home/>} />
                      <Route path="/Login" element={<SignupLogin />} />
                      <Route path="/lost-password" element={<LostPassword />}/>
                  </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Home  from "./Components/Home";
import  SignupLogin  from "./Components/SignupLogin";
import LostPassword from "./Components/LostPassword"

import {  Route, Routes } from "react-router-dom";
import Job_Post from './Components/JobPost';


const App = () => {
  return (
    <div>
      

            <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/Home" element={<Home/>} />
                      <Route path="/Login" element={<SignupLogin />} />
                      <Route path="/lost-password" element={<LostPassword />}/>
                      <Route path="/job-post" element={<Job_Post/>} />
                      
                  </Routes>
    </div>
  )
}

export default App

<<<<<<< HEAD
import React from 'react';
import Home from './Components/Home';
import Signup from './Components/SignupLogin';
import LostPassword from './Components/LostPassword';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Job from'./Components/Job';
import { Route, Routes } from 'react-router-dom';



const  App=()=>{
  return (
<div>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Job" element={<Job />} />
=======
import React from 'react'
import Home from "./Components/Home";
import Signup from "./Components/SignupLogin";
import LostPassword from "./Components/LostPassword"
import Profile from './Components/Profile';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Signup />} />
        <Route path="/lost-password" element={<LostPassword />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  )
}
>>>>>>> ad182f414dec03c87ddf4df1ec41a2b63a63efdb

        <Route path="/login" element={<Signup/>} />
        <Route path="/lost-password" element={<LostPassword />} />
      </Routes>
      <Footer />
</div>
  );
};

export default App;

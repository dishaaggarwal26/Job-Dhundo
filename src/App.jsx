import React from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Components/SignupLogin';
import LostPassword from './Components/LostPassword';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Footer from './Components/Footer';
import Job from'./Components/Job';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PostCompany from './Components/PostCompany';
const  App=()=>{
  return (
<main className='overflow-x'>
        <Navbar/>
      <ScrollToTop/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Jobs" element={<Job/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Join" element={<Signup/>} />
        <Route path="/Companies" element={<PostCompany/>}/>
        <Route path="/lost-password" element={<LostPassword />} />
      
      </Routes>
      <Footer/>
</main>
  );
};

export default App;

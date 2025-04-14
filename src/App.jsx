import React from 'react';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Components/SignupLogin';
import LostPassword from './Components/LostPassword';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Footer from './Components/Footer';
import Job from './Components/Job';
import Blogs from './Components/Blogs';
import BlogDetail from './blog-component/BlogDetail';
import NotificationPanel from './Components/NotificationPanel';
import Settings from './Components/Settings';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import PostCompany from './Components/PostCompany';
import BlogPost from './Components/BlogPost';
import Help from './Components/Help';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Jobs" element={<Job />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/new-blogpost" element={<BlogPost />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/Join" element={<Signup />} />
        <Route path="/NotificationPanel" element={<NotificationPanel />} />
        <Route path="/Companies" element={<PostCompany />} />
        <Route path="/lost-password" element={<LostPassword />} />
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

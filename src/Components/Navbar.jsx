import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarMenu } from '../NavData/navdata';
import { MdComputer, MdMenu } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from "../Assets/avatar.jpg";
import ProfileMenu from './ProfileMenu';
import { IoIosNotifications } from "react-icons/io";
import NotificationPanel from './NotificationPanel'; 
import ResNav from '../NavData/ResNav';

  const Navbar = ({ profileImage }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
    
  
  
  return (
    <motion.div className='sticky top-0 z-50 opacity-90 bg-pink-200'>
      <div className='flex justify-between p-3 items-center'>
        <Link to="/">
          <div className='text-2xl flex items-center gap-2 font-bold'>
            <img className='w-15 rounded-full object-cover' src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-organization-icon-in-trendy-style-isolated-background-png-image_4844381.jpg" alt="logo" />
            <p className='text-25px font-serif lg:text-xl'> Job Dhundo</p>
          </div>
        </Link>

        <div className='hidden lg:block'>
          <ul className='flex items-center gap-6'>
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className='touch text-gray-900 text-xl xl:text-base py-1 px-2 xl:px-3 hover:text-amber-50'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden lg:block space-x-6'>
          <div className='flex items-center gap-7'>
            {/* Toggle Notification Panel */}
            <IoIosNotifications
              className='text-pink-600 text-3xl cursor-pointer hover:text-amber-50' onClick={() => setShowNotification(prev => !prev)} />

            <Link to="/Join">
              <button className='font-semibold bg-pink-600 text-white rounded px-6 py-2'>Join Now</button>
            </Link>

            <button onClick={() => setOpenMenu((prev) => !prev)}>
          
        <img
          src={
            profileImage
              ? URL.createObjectURL(profileImage)
              : profilePic
          }
          className="h-10 w-10 rounded-full"
          alt="Profile"
        />
         </button>
            {openMenu && <ProfileMenu closeMenu={() => setOpenMenu(false)} />}
          </div>
        </div>

        <div className='lg:hidden' onClick={() => setisOpen(!isOpen)}>
          <MdMenu className='text-4xl lg:hidden' />
          <ResNav isOpen={isOpen} profileImage={profileImage} />
          </div>
      </div>

      {/* 🔔 Notification Panel with Animation */}
      <AnimatePresence>
        {showNotification && (
          <NotificationPanel onClose={() => setShowNotification(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
  }

export default Navbar;

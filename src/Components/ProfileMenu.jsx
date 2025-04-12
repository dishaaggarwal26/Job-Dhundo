import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const ProfileMenu = ({ closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu]);

    return (
        <div
            ref={menuRef}
            className="absolute right-3.5  mt-70 bg-pink-100 shadow-lg rounded z-50 w-48">
            <ul className="text-left">
                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <FaRegUser />
                    <Link to="/Profile" onClick={closeMenu}>Profile</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                <FaPlus />
                    <Link to="/Blog Post" onClick={closeMenu}>Create Post</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                <BiSupport />
                    <a href='https://wa.me/9873496767?text=Hello How can I help you ?' target='_blank'>
                    Help & Support</a></li>
                    
                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer"><IoSettingsOutline />Settings </li>
                <hr className="my-1 border-gray-400" />
                <li className="flex items-center gap-2 px-4 py-2 font-bold text-red-600 hover:bg-gray-100 cursor-pointer"><MdLogout />Logout</li>
            </ul>
        </div>
    );
};

export default ProfileMenu;

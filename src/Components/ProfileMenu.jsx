import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

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
            className="absolute right-3 mt-50 bg-gray-300 shadow-lg rounded-md z-50 w-48">
            <ul className="text-left">
                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <FaRegUser />
                    <Link to="/Profile" onClick={closeMenu}>Profile</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer"><FaRegFileLines />Resume</li>
                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer"><IoSettingsOutline />Settings </li>
                <hr className="my-1 border-gray-400" />
                <li className="flex items-center gap-2 px-4 py-2 font-bold text-red-600 hover:bg-gray-100 cursor-pointer"><MdLogout />Logout</li>
            </ul>
        </div>
    );
};

export default ProfileMenu;

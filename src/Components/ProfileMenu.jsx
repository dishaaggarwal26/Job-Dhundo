import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const ProfileMenu = ({ closeMenu }) => {
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeMenu]);

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        if (confirmed) {
            localStorage.removeItem("token");
            navigate("/Join");
        }
    };


    return (
        <div
            ref={menuRef}
            className="absolute w-35 text-sm  text-gray-800 bg-pink-100 shadow-lg rounded z-30 md:w-48  md:right-2 md:mt-70">
            <ul className="text-left">
                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <FaRegUser />
                    <Link to="/Profile" onClick={closeMenu}>Profile</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <FaPlus />
                    <Link to="/new-blogpost" onClick={closeMenu}>Create Post</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <BiSupport />
                    <Link to="/Help" onClick={closeMenu}>Help & Support</Link>
                </li>

                <li className="flex items-center gap-2 px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer">
                    <IoSettingsOutline />
                    <Link to="/settings" onClick={closeMenu}>Settings</Link>
                </li>

                <hr className="my-1 border-gray-400" />
                <li onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 font-bold text-red-600 hover:bg-gray-100 cursor-pointer">
                    <MdLogout />
                    Logout
                </li>

            </ul>
        </div>
    );
};

export default ProfileMenu;

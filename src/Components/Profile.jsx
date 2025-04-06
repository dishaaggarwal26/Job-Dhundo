import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../Assets/avatar.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBriefcaseBold } from "react-icons/pi";
import { LuPencil } from "react-icons/lu";
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import Footer from './Footer';

const Profile = () => {
    return (
    <div className="min-h-screen bg-gray-200  absolute">
      <Navbar /> 
      <div className='w-4/5 mx-auto '>
        <div className='relative'>
          <img className='h-65 w-300 mt-2 ml-4 rounded-t-2xl'
            src='https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg'

            alt='Technology Banner' />
          <img className='h-58 w-58 rounded-full -bottom-1/3 absolute left-8 border-mine-shaft-950 border-8 '
            src={profilePic} alt='Profile' />
        </div>
        <div className='px-8 mt-22 text-black'>
          <div className='text-3xl font-bold flex justify-between'>PRANITA GUPTA
            <Link to="" ><LuPencil className='h-4/5 w-4/5 stroke-{1.5} '/></Link>
          </div>
          <div className='text-xl flex gap-1 items-center '>
            <PiBriefcaseBold className='h-5 w-5' stroke={1.5} />Software Engineer &bull; Google
          </div>
          <div className='text-lg flex gap-1 items-center '>
            <FaMapMarkerAlt className='h-5 w-5' stroke={1.5} /> Delhi, India
          </div>
        </div>
        <hr className="ml-5 my-5 border-gray-400" />

        <div className='px-8 ' >
          <div className='text-2xl font-bold mb-3'> About</div>
          <div className='text-m text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia enim odit, sunt a reiciendis voluptatibus, libero quasi repellat, excepturi ipsa ad beatae ipsam laboriosam? Veritatis eos facere nobis sapiente commodi? Repudiandae error sapiente maxime quasi, nam ut labore architecto corrupti consectetur esse, aperiam sed perspiciatis suscipit reiciendis explicabo modi officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fugit perferendis assumenda, deleniti illo, ipsam quam quis eius nemo omnis deserunt ipsum temporibus ullam rem nihil laboriosam aliquam placeat animi.</div>
        </div>
        <hr className="ml-5 my-5 border-gray-400" />

        <div className='px-8 ' >
          <div className='text-2xl font-bold mb-3'> Skills</div>
          <div className='flex flex-wrap gap-2.5'>
            <div className='bg-blue-300 bg-opacity-15 rounded-3xl font-medium text-black px-3 py-1'>
              JavaScript
            </div>
            <div className='bg-blue-300 bg-opacity-15 rounded-3xl font-medium text-black px-3 py-1'>
              React
            </div>
            <div className='bg-blue-300 bg-opacity-15 rounded-3xl font-medium text-black px-3 py-1'>
              SpringBoot
            </div>
          </div>
        </div>

        <hr className="ml-5 my-5 border-gray-400" />
        <div className='px-8 ' >
          <div className='text-2xl font-bold mb-5'> Experience</div>
          <ExpCard />
        </div>

        <hr className="ml-5 my-5 border-gray-400" />
        <div className='px-8 ' >
          <div className='text-2xl font-bold mb-5'> Certifications</div>
          <CertiCard />
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Profile

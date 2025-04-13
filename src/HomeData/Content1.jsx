import React from 'react';
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { SlideRight } from '../Utility/Animation';
import {Link} from 'react-router-dom'
const Content1 = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 min-h-[650px] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      
      {/* Left Text Section */}
      <div className="flex flex-col justify-center py-10 md:py-0 space-y-6 text-center md:text-left">
        <motion.p
          variants={SlideRight(0.6)}
          initial='hidden'
          animate='visible'
          className='text-pink-700 uppercase font-semibold'
        >
          100% Satisfaction Guarantee
        </motion.p>

        <motion.h1
          variants={SlideRight(0.6)}
          initial='hidden'
          animate='visible'
          className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'
        >
          Find Your <span className='text-pink-700'>Dream Job</span> Here
        </motion.h1>

        <motion.p
          variants={SlideRight(0.6)}
          initial='hidden'
          animate='visible'
          className="text-base md:text-lg text-gray-700"
        >
          We help you to find the perfect fit for you
        </motion.p>

        <motion.div
          variants={SlideRight(0.6)}
          initial='hidden'
          animate='visible'
          className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start items-center pt-4'
        >
         <Link to="/Join"> <button className='primary cursor-pointer text-white px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition'>
            Get Started
          </button></Link>
          <button className='flex items-center gap-2 font-semibold text-pink-700 hover:text-pink-800 transition'>
            <span className='w-10 h-10 bg-pink-200/20 rounded-full flex justify-center items-center'>
              <FaPlayCircle className='text-2xl' />
            </span>
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className='flex justify-center items-center'>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          src="https://media.istockphoto.com/id/1365133077/vector/flat-employment-agency-search-new-employees-to-hire.jpg?s=612x612&w=0&k=20&c=jjYOtMmneaIvKuG2hV2sMpFla7SEuzqhDG1wkJR1lCU="
          alt="hero"
          className='w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px]'
        />
      </div>
    </div>
  );
};

export default Content1;

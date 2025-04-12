import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { SlideRight } from '../Utility/Animation';
const Content1 = () => {

  return (
    <>
      <div className=" container  ml-0 grid grid-cols-1 items-center justify-center  md:grid-cols-2  md:ml-30 min-h-[650px] relative">

        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
          <div className="text-center  md:text-left space-y-6">

            <motion.p
            variants={SlideRight(0.6)}
            initial='hidden'
            animate='visible'
             className='text-pink-700 uppercase font-semibold'
             >
              100% Satisfaction Guarantee

            </motion.p>


            < motion.h1  
             variants={SlideRight(0.6)}
            initial='hidden'
            animate='visible'
            className=' text-5xl font-semibold lg:text-6xl !leading-tight'>
              Find Your 
              <span className='text-pink-700 text-6xl font-bold'>Dream Job </span>
              Here</motion.h1>

            <motion.p 
             variants={SlideRight(0.6)}
             initial='hidden'
             animate='visible'>We help you to find perfect fit for you
             </motion.p>
            <motion.div
             variants={SlideRight(0.6)}
             initial='hidden'
             animate='visible'
              className='flex gap-8 justify-center md:justify-start !mt-8 items-center '>



            <button className='primary text-white'>Get Started</button>
            <button className='flex justify-end  items-center gap-2 font-semibold'><span className='w-10 h-10 bg-pink-200/15 rounded-full flex justify-center items-center'>
            <FaPlayCircle className='text-pink-400 text-2xl' />
            </span>See how it works</button>
            </motion.div>
          </div>


        </div>


        <div className='flex justify-center items-center'>
          < motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://media.istockphoto.com/id/1365133077/vector/flat-employment-agency-search-new-employees-to-hire.jpg?s=612x612&w=0&k=20&c=jjYOtMmneaIvKuG2hV2sMpFla7SEuzqhDG1wkJR1lCU="        
               alt="hero"
            className='w-[350px]  md:w-[550px] xl:[700px]'>


          </motion.img>
        </div>
      </div>

    </>
  )
}

export default Content1;

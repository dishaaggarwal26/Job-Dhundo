import React, { useState } from 'react'
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaCircleChevronUp } from "react-icons/fa6";

const FAQ = () => 
{


const [select,setselect]=useState(null);
const toggle=(i)=>{

  if(select===i)
  {
    setselect(null);
  }
  setselect(i);
}


  return (
<div>
<p className='text-5xl mt-30 mb-10 text-center text-yellow-700 font-bold font-serif md:text-6xl'>FAQs</p>
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      {data.map((item,i)=>(
      <div className=' border border-gray-300 m-3  rounded-xl shadow-xl p-4 bg-gray-50 md:h-fit cursor-pointer '>
   <div className='flex justify-between items-center'onClick={()=>{toggle(i)}} > <p className='text-lg font-semibold ' >{item.question}</p> {select===i?<FaCircleChevronUp/>:<TbTriangleInvertedFilled/>}</div>
    <div className= {select===i?' font-light text-lg ':'hidden'} >{ item.answer}</div>
  </div>))}
</div>
</div>
  )}
  const data=[
    {id:1,
      question:"What is Job Dhundo?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    },
    {id:2,
      question:"where can we post for job roles?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    },
    {id:3,
      question:"Resume updation is compulsory?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    },
    {id:4,
      question:"how to signin without pasword?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    },
    {id:5,
      question:"where do we connect directly with recruiter?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    },
    {id:6,
      question:"how to reset Password?",
      answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut blanditiis sit ex, ipsa eum magni amet est ab tenetur? Magnam officiis perspiciatis ullam dolor obcaecati nesciunt odit! Ea, aliquam."
    }
  ]
  
export default FAQ

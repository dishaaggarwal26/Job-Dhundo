import React from 'react'
import '../data.js'
const JobCard = ({job}) => {
  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex justify-between items-center'> 
        <img className='h-8 ' src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="" srcset="" />
        </div>
            < h4 className='font-medium text-xl mt-2'>{job.title}</h4>
        <div className='flex items-center gap-3 mt-2 text-xs'>
<span className='cursor-pointer border-amber-950 bg-red-200 rounded px-4 py-1.5  hover:bg-red-300 '>{job.location}</span>
<span className=' cursor-pointer bg-blue-100 border-blue-900 rounded px-4 py-1.5'>{job.level}</span>

      </div>
      <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='flex mt-4 gap-4 text-sm'>
        <button className='cursor-pointer bg-blue-200 rounded font-semibold px-4 py-2 border-blue-900'>Apply Now</button>
      <button className='bg-pink-200 cursor-pointer  rounded font-semibold text-gray-700 px-4 py-2 border-pink-800' >Know More</button></div>
    </div>
  )
}

export default JobCard

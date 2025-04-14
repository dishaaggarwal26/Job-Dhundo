import React from 'react';
import { useState } from 'react';


const JobCard = ({ job }) => {


  return (
    <div className='w-full max-w-md mx-auto border p-6 shadow rounded bg-white sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
      <div className='flex justify-between items-center'>
        <img
          className='h-10 w-auto object-contain'
          src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
          alt={`${job.company} logo`}
        />
      </div>

      <h4 className='font-medium text-lg sm:text-xl mt-2'>{job.title}</h4>
      <h5 className='font-medium text-md sm:text-lg mt-1 text-gray-700'>{job.company}</h5>

      <div className='flex flex-wrap items-center gap-2 sm:gap-3 mt-3 text-xs sm:text-sm'>
        <span className='cursor-pointer bg-red-200 rounded px-3 py-1 hover:bg-red-300'>
          {job.location}
        </span>
        <span className='cursor-pointer bg-blue-100 rounded px-3 py-1'>
          {job.level}
        </span>
        <span className='cursor-pointer bg-pink-200 rounded px-3 py-1'>
          {job.type}
        </span>
      </div>

      <p className='text-gray-500 text-sm mt-4 line-clamp-3'>
        {job.description.replace(/<[^>]*>?/gm, '').slice(0, 150)}...
      </p>

      {job.salary && (
        <p className='text-black text-base font-semibold mt-4'>₹{job.salary}</p>
      )}

      {job.skill && (
        <p className='text-gray-800 text-sm font-semibold mt-2'>{job.skill}</p>
      )}

      <div className='flex flex-wrap mt-4 gap-3 text-sm'>
        <button className='bg-blue-200 hover:bg-blue-300 transition rounded font-semibold px-4 py-2 text-blue-900'>Apply Now</button>
        <button className='bg-pink-200 hover:bg-pink-300 transition rounded font-semibold text-gray-700 px-4 py-2'>
          Know More
        </button>
      </div>
    </div>
  );
};

export default JobCard;

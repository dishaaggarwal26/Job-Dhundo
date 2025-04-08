import React from 'react'

const CertiCard = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-1.5 bg-blue-200 rounded-md'>
            <img className='h-10' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" alt='' />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>Google Cloud Certification</div>
            <div className='text-gray-600'>Google </div>
          </div>
        </div>
        <div className='text-gray-600'>July 2023</div>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-1 bg-blue-200 rounded-md'>
            <img className='h-8' src="https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg" alt='' />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold'>Google Cloud Certification</div>
            <div className='text-gray-600'>Microsoft </div>
          </div>
        </div>
        <div className='text-gray-600'>Jan 2023</div>
      </div>
    </div>

  )
}

export default CertiCard

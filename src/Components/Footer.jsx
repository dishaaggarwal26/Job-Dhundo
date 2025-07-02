import React from 'react'
import { FaInstagramSquare, FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" pt-10">
     
      <div className='p-15 bg-pink-100 flex flex-col items-center gap-10 px-5 md:px-10 md:flex-row md:justify-evenly'>
       
        <div className='flex flex-col items-center md:items-start max-w-md text-center md:text-left'>
          <img className='w-20 h-20 mt-5 rounded-full object-cover' src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-organization-icon-in-trendy-style-isolated-background-png-image_4844381.jpg" alt="Logo" />
          <h1 className='font-bold text-2xl mt-2'>Job Dhundo</h1>
          <p className='font-semibold mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat laudantium similique laborum eligendi cum consequatur nihil.</p>
          <div className='flex mt-4 items-center gap-5 text-3xl'>
            <FaInstagramSquare className='text-pink-400' />
            <FaTwitter className='text-blue-400' />
            <FaYoutube className='text-red-600' />
            <FaFacebookSquare className='text-blue-400' />
          </div>
        </div>

        {/* About */}
        <div>
          <h1 className='text-2xl font-extrabold'>About</h1>
          <ul className='mt-4 font-bold text-gray-800 space-y-2'>
            <li>Job</li>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Application</li>
            <li>Candidates</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className='text-2xl font-extrabold'>Quick Links</h1>
          <ul className='mt-4 font-bold text-gray-800 space-y-2'>
            <li>All Job</li>
            <li>Job Details</li>
            <li>How to Apply</li>
            <li>Resume</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h1 className='text-2xl font-extrabold'>Get in Touch</h1>
          <ul className='mt-4 font-bold text-gray-800 space-y-2'>
            <li><a href="mailto:aggarwaldisha26@gmail.com">aggarwaldisha26@gmail.com</a></li>
            <li><a href="mailto:deepibhatt03@gmail.com">deepibhatt03@gmail.com</a></li>
            <li><a href="mailto:pranita2413@gmail.com">pranita2413@gmail.com</a></li>
            <li><a href="mailto:preetiverma0204@gmail.com">preetiverma0204@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Our Products Section */}
      <div className='mt-12 text-center px-4'>
        <h2 className='text-4xl text-black font-bold '>Our Products</h2>
        <p className='text-lg text-gray-600 font-semibold mt-3'>Our other brands and products, you might be interested</p>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10'>
          {[
            { name: 'Cutshort', img: 'https://play-lh.googleusercontent.com/wiAQAX41pAP7n4MN6Jk90lo_A3HqsYk_x-7Fkd8T6ryNl9bgOOyF5zF4McUhk_o1iQ' },
            { name: 'SnapHunt', img: 'https://www.onlinemarketplaces.com/wp-content/uploads/2021/07/snaphunt.png' },
            { name: 'Upwork', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s' },
            { name: 'GlassDoor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoA9cO-yJCqCfH0Mf-8zeig7kZwvExfaxVA&s' },
            { name: 'Naukri', img: 'https://play-lh.googleusercontent.com/76gEFhQto5xMHr2Qf8nWLvm1s0O60clhkwHvxQDSeI3hthf7Zs05JJQeyg5H347DGQ' },
            { name: 'Indeed', img: 'https://avatars.slack-edge.com/2022-06-08/3628164267735_7035d65564bb181b33f7_512.png' },
            { name: 'TimesJob', img: 'https://yt3.googleusercontent.com/vmpMU5zsNrS8_NqkdwJP48h75YuhtbtUjUcmmXyxbpmopSMx51RiNIA47n5hqrMZ4PRjTX-d4Mc=s900-c-k-c0x00ffffff-no-rj' },
            { name: 'Foundit', img: 'https://pimwp.s3-accelerate.amazonaws.com/2023/02/Untitled-design-2022-12-19T101207.258.jpg.webp' }
          ].map((item, idx) => (
            <div key={idx} className='flex items-center gap-2 justify-center'>
              <img src={item.img} alt={item.name} className='w-10 h-10 rounded-full' />
              <p className='font-bold text-lg'>{item.name}</p>
            </div>
          ))}
        </div>

        <hr className='my-6 border-gray-300 opacity-30' />
        <p className='text-sm text-gray-500 mb-5'>&copy; 2025 - Job Dhundo | A Product by 4th year students</p>
      </div>
    </div>
  )
}

export default Footer

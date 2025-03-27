import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { MdOutlineContentPasteSearch } from "react-icons/md";

const Home = () => {
  return (

    <div>
      <Navbar />
      <div>
        <div className='flex-col text-center  items-center'>
          <div className='text-4xl mt-25 md:text-6xl text-yellow-500 font-bold'>Find Your <span className=' text-6xl mt-10 md:text-7xl fill-pink-900 font-extrabold text-pink-700'>Dream <br /> Job </span> Here! </div>
          <div className=' text-10px mt-10 text-amber-950 font-bold'>Job dhundo is india bet job finding platform which is <br />easy to use,require just your resume to find the best fit for you.</div>
          <div className=' w-110  px-2.5 m-3 flex h-15 mt-20 bg-amber-50 shadow-xl   items-center justify-center rounded-xl   border-1 md:ml-60 md:w-200  '><MdOutlineContentPasteSearch className=' text-5xl md:text-3xl text-gray-900 ' /><input type="text" placeholder="eg. frondend developer " className=" border-0 text-center text-xl md:w-130  h-10 md:text-2xl p-4" />
            <button className='text-xl w-50 
         h-9 mr-0.5  font-bold rounded-xl bg-green-200 border-2  text-black-300'>
              Search</button></div>
          <p className='mt-20 text-lime-700 text-4xl font-bold'>Popular Search</p>
          <div className='grid grid-cols-1 ml-20  gap-5 md:flex mt-10 items-center justify-evenly'>
            <div className='flex-col py-3 bg-amber-50 w-80 rounded-2xl shadow-gray-500 border-1 text-yellow-500'>
              <div className='flex gap-7   '>
                <div><img className='w-40 h-40 p-2.5 rounded-2xl' src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/engineering_ucr/2022/08/15054617/product-design-engineer.jpg" alt="description" /></div>
                <div className='py-5'><p className='text-4xl font-extrabold shadow-2xs py-5'>HCL</p>
                  <p className='bg-lime-300 p-1.5 shadow-xl text-gray-500 font-bold rounded-4xl px-5'>Design</p>
                </div>
              </div>
              <div className='ml-6 flex font-mono text-xl gap-6'><p>Product Designer</p>
                <p className='text-gray-700 text-sm font-bold'>4 min ago.</p></div>
            </div>
            <div className='flex-col py-3 bg-amber-50 w-80 rounded-2xl shadow-gray-500 border-1 text-yellow-500'>
              <div className='flex gap-7'>
                <div><img className='w-40 h-40 p-2.5 rounded-2xl' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg" alt="description" /></div>
                <div className='py-5'><p className='text-4xl text-cyan-800 font-extrabold shadow-2xs py-5'>TCS</p>
                  <p className='bg-amber-300 p-1.5 shadow-xl text-gray-500 font-bold rounded-4xl px-5'>Software</p>
                </div>
              </div>              <div className='ml-6 flex font-mono text-xl gap-6'><p>Software Engineer                     </p>
                <p className='text-gray-700 text-sm font-bold'>8 min ago.</p></div>
            </div>
            <div className='flex-col py-3 bg-amber-50 w-80 rounded-2xl shadow-gray-500 border-1 text-yellow-500'>
              <div className='flex gap-7   '>
                <div><img className='w-40 h-40 p-2.5 rounded-2xl' src="https://lsuonline-static.s3.amazonaws.com/media/images/2020/04/29/news-data-analyst.jpg" alt="description" /></div>
                <div className='py-5'><p className='text-4xl text-amber-950 font-extrabold shadow-2xs py-5'>Wipro</p>
                  <p className='bg-purple-400 p-1.5 shadow-xl text-gray-800 font-bold rounded-4xl px-5'>Data</p>
                </div>
              </div>
              <div className='ml-6 flex font-mono text-xl gap-6'><p>Data Engineer</p>
                <p className='text-gray-700 text-sm font-bold'>7 min ago.</p></div>  </div>
          </div>
        </div>
      </div>
      <div className='mt-25'>
        <div className="grid grid-rows-1 md:flex gap-7  justify-evenly">
          <h1 className='text-6xl ml-10 text-amber-600  font-semibold '>OverView</h1>
          <div className='w-100 text-xl font-mono p-5  text-amber-950 md:w-200 font-bold'>Job dhundo is Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa non placeat est minima amet repellat error nemo quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi itaque voluptate, numquam magni hic omnis, et quibusdam officiis blanditiis magnam harum repellendus ipsum modi expedita debitis molestias deleniti ex. Distinctio, enim! Quam, magni molestias repellendus, dolorem modi tenetur nam ipsa quia quasi veniam id. dolore, et, quidem eligendi impedit, ea distinctio reiciendis porro temporibus illum!
          </div></div>
        <div className=' flex flex-col gap-3  md:flex-row justify-evenly items-center mt-20'><img className='shadow-2xl rounded-2xl w-80 h-60' src="https://media.istockphoto.com/id/1394701218/photo/job-search-concept-find-your-career-woman-looking-at-online-website-by-laptop-computer-people.jpg?s=612x612&w=0&k=20&c=V32cT3dAoI7plQSnV-i7YxP43YvaoyA0jLS4729gNWM=" alt="" srcset="" />
          <img className='w-80 h-60 rounded-2xl shadow-2xl' src="https://thumbs.dreamstime.com/b/text-sign-showing-re-hiring-conceptual-photo-advertising-employment-workforce-placement-new-job-woman-wear-formal-work-suit-161388358.jpg" alt="" srcset="" /></div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

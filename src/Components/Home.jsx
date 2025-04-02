import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import FAQ from "./FAQ";
import { MdOutlineContentPasteSearch } from "react-icons/md";
const Home = () => {
  return (

    <div>
      <Navbar />
      <div>
        <div className='flex-col text-center  items-center'>
          <div className='text-4xl mt-25 md:text-6xl text-yellow-500 font-bold'>Find Your <span className=' text-6xl mt-10 md:text-7xl fill-pink-900 font-extrabold text-pink-700'>Dream <br /> Job </span> Here! </div>
          <div className=' text-10px mt-10 text-amber-950 font-bold'>Job dhundo is india best job finding platform which is <br />easy to use,require just your resume to find the best fit for you.</div>
          <div className=' w-110  px-2.5 m-3 flex h-15 mt-20 bg-amber-50 shadow-xl   items-center justify-center rounded-xl   border-1 md:ml-60 md:w-200  '><MdOutlineContentPasteSearch className=' text-5xl md:text-3xl text-gray-900 ' /><input type="text" placeholder="eg. frontend developer " className=" border-0 text-center text-xl md:w-130  h-10 md:text-2xl p-4" />
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
      <div className='flex flex-col  mt-30 bg-blue-100  md:flex md:flex-row justify-evenly items-center'>
        <div>
          <p className='text-4xl text-black mt-16 font-bold w-100 md:w-130 md:text-6xl'>Looking for Job in your city?</p>
          <button className='w-50 mt-10 h-10  rounded-full bg-blue-500 text-white text-xl p-0.5 font-semibold  md:mb-8'>Post a job for free</button>
        </div>
        <div className='grid mb-1.5 grid-cols-3 mt-10 gap-2 md:mb-5'>
          <img className='rounded-xl w-40 h-30 ' src="https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png" alt="" srcset="" />
          <img className='rounded-xl w-40 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviIewOJYhPWycs2EcfS8cAznXsS3BQYgirRJRaCxkPnL_nToQFAlrTTA-syW_eCIZQlQ&usqp=CAU" alt="" srcset="" />
          <img className='rounded-xl w-40 h-30' src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/08/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" srcset="" />
          <img className='rounded-xl w-40 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEsJ5pHJ8tsGNEPUTGrl1SuGLdtcfzBDAag&s" alt="" srcset="" />
          <img className='rounded-xl w-40 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibywTsVdlGUUM3JQIN3jf4p0MfSxEQ1EMi-BwcyWl366y48RzcE3KhcTBgeKgWDQsFno&usqp=CAU" alt="" srcset="" />
          <img className='rounded-xl w-40 h-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FODdRcN6U4_vEcz_lXSmvXX2oSVBPJ4K-Kebb5FJfKsvDvgX7_WpHs80bVr20uBaURY&usqp=CAU" alt="" srcset="" />
        </div>
      </div>
      <div> <p className='text-center text-pink-950   text-5xl mt-20 mb-15 font-medium  underline font-mono'>Our Happy Recruiters</p>
      <div className='grid grid-cols-1 w-80 ml-20  md:flex md:ml-40 justify-evenly items-center '>
        <div className='border-1 rounded-2xl shadow-xl font-serif m-2 p-3  flex flex-col justify-evenly '><p className='w-70 text-violet-500 font-mono h-full'>" I participated in the Virtual Job Fair by Job Hai to hire 100 Telecallers in Noida. I got around 300 applications and could easily shortlist 52 candidates out of 191 candidates I called within 2 days. The process was very simple and the team kept sharing regular updates. It would be a no brainer to participate again. Cheers!"</p>
          <p className='font-bold mt-5'>Nidhi kumari</p>
          <p className='font-sans'>Abc Company</p>
          </div>
          <div className='border-1 rounded-2xl shadow-xl font-serif m-2 p-3  flex flex-col justify-evenly '><p className='w-70 text-violet-500 font-mono h-full'>" I participated in the Virtual Job Fair by Job Hai to hire 100 Telecallers in Noida. I got around 300 applications and could easily shortlist 52 candidates out of 191 candidates I called within 2 days. The process was very simple and the team kept sharing regular updates. It would be a no brainer to participate again. Cheers!"</p>
          <p className='font-bold mt-5'>Nidhi kumari</p>
          <p className='font-sans'>Abc Company</p>
          </div>
          <div className='border-1 rounded-2xl shadow-xl font-serif m-2 p-3  flex flex-col justify-evenly '><p className='w-70 text-violet-500 font-mono h-full'>" I participated in the Virtual Job Fair by Job Hai to hire 100 Telecallers in Noida. I got around 300 applications and could easily shortlist 52 candidates out of 191 candidates I called within 2 days. The process was very simple and the team kept sharing regular updates. It would be a no brainer to participate again. Cheers!"</p>
          <p className='font-bold mt-5'>Nidhi kumari</p>
          <p className='font-sans'>Abc Company</p>
          </div>
        </div>
        </div>
        <div>
        <p className='text-4xl font-serif font-extrabold mt-25 mb-5 text-lime-900 text-center'>How to hire in less then 48 hours</p>
        <div className='  grid grid-cols-1  gap-5 md:flex justify-evenly items-center '>
        <div className='flex flex-col items-center ' ><img className='w-30 h-30 ' src="https://cdn-icons-png.flaticon.com/512/2924/2924574.png" alt="" srcset="" />
        <p  className='ml-10 text-xl font-bold w-80 text-amber-900'>post a free job in less then 1 min</p>
        </div>
        <div className='flex flex-col items-center ' ><img className='w-30 h-30 ' src="https://cdn-icons-png.freepik.com/512/9772/9772419.png" alt="" srcset="" />
        <p className='ml-10 text-xl font-bold w-80 text-amber-900'>Get direct phone calls from relevant candidates</p>
        </div>
        <div className='flex flex-col items-center '><img className='w-30 h-30 ' src="data:image/png;base64,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" alt="" srcset="" />
        <p className='ml-10 text-xl font-bold w-80 text-amber-900'>Interview and hire the right staff</p>
        </div>
        </div>
        </div>
      <FAQ/>
      <Footer />

    </div>
  )
}

export default Home

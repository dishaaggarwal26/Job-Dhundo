import React, { useContext, useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';

const Searchbar = () => {
  const {setSearchFilter,SetIsSearched}=useContext(AppContext);
  const titleref=useRef(null)
  const locationref=useRef(null)
  
 const onpress=()=>{
  setSearchFilter({
    title:titleref.current.value,
    location:locationref.current.value,

  })
  SetIsSearched(true)
  
  
 }
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
<div className=' bg-gradient-to-r shadow-2xs from-pink-300  to-pink-200 text-white py-16 text-centre mx-2 rounded-xl'>
<h1 className='text-2xl md:text-3xl lg:text-5xl font-medium mb-4 text-center  '>Over 10,000+ jobs to Apply</h1>
<p className='mb-8 max-w-xl mx-auto text-md  px-5 text-center text-gray-800 font-semibold '>Unleash your potential and find your dream career today! <br /> Our job portal connects ambitious professionals like you.
</p>
<div className='flex items-center justify-between bg-amber-50 rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
    <div className='flex justify-evenly items-center'><FaSearch className='h-4 sm:h-5'/>
    <input type="text" ref={titleref} placeholder='SerachJob Title'   className='max-sm:text-xs rounded p-2 outline-none w-full'/>
    </div>
    <div className='flex justify-evenly items-center'><FaLocationDot className='h-4 sm:h-5'/>
    <input type="text" placeholder='Loction'   className='max-sm:text-xs rounded p-2 outline-none w-full' ref={locationref}/>
    </div>
    <button onClick={onpress} className='bg-pink-300 px-6 py-2 rounded text-white m-1'>Search</button>
</div>
</div>
<div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
  <div className='flex justify-center gap-10 lg:gap-10 flex-wrap '>
    <p className='font-medium'>Trusted By</p>
    <img className='h-10  '  src="https://static.vecteezy.com/system/resources/previews/027/127/592/original/microsoft-logo-microsoft-icon-transparent-free-png.png" alt="" />
    <img className='h-10  '  src="https://passionateaboutoss.com/directory/wp-content/uploads/2019/09/Accenture-Logo-3969515967.png" alt="" />
    <img className='h-10 '  src=" https://www.thestatesman.com/wp-content/uploads/2022/06/TCS.jpg"alt="" />
    <img className='h-10  '  src="https://www.pngall.com/wp-content/uploads/15/EY-Logo-No-Background-180x180.png" alt="" />
    <img className='h-10  '  src="https://hellopartner.com/content/images/size/w1200/2024/01/Youtube-Light-Website.jpg" alt="" />
    <img  className='h-10  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDGosfLr7BzH-fy5UGMjzk-FBjMm04EEl9m8-YrNJrT8yH1PfjJHPLvml8dxJSF5kSTI&usqp=CAU" alt="" />
    <img className='h-10  '  src="https://globalgreen.org/wp-content/uploads/Google-Logo.png"alt="" />
    <img className='h-10  '  src="https://speedmedia.jfrog.com/08612fe1-9391-4cf3-ac1a-6dd49c36b276/media.jfrog.com/wp-content/uploads/2017/11/06025750/Atlassian-Logo.jpg" alt="" />
  </div>
</div>
    </div>
  )
}

export default Searchbar

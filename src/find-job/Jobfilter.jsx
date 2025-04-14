import React, { use, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { MdAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import '../data.js';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import JobCard from './JobCard.jsx';
import { JobCategories, JobLocations } from '../data.js';
import { useState } from 'react';
const Jobfilter = () => {
    const {isSearched,SearchFilter,setSearchFilter,jobs}=useContext(AppContext)
    const [showfilter, setshowfilter]=useState(false)
    const [currentpage,setcurrentpage]=useState(1)
    const [select, setselect]=useState([])
    const[filterjob , setfilterjob]=useState(jobs)

    const[selectlocation , setselectlocation]=useState([])
    const handlechange=(category)=>{
        setselect(
            prev=>prev.includes(category)? prev.filter(c=>c!==category):[...prev,category]
        )
    }
    const handlelocation=(location)=>{
        setselectlocation(
            prev=>prev.includes(location)? prev.filter(c=>c!==location):[...prev,location]
        )
    }


    useEffect(
        ()=>{
const mactchcat= job=>select.length===0|| select.includes(job.category)
const mactchloc= job=>selectlocation.length===0|| selectlocation.includes(job.location)
const mactchtitle= job=>SearchFilter.title==="" || job.title.toLowerCase().includes(SearchFilter.title.toLowerCase())
const matchlocation=job=>SearchFilter.location==="" || job.location.toLowerCase().includes(SearchFilter.location.toLowerCase())
       const newfilter=jobs.slice().reverse().filter(
        job=>matchlocation(job) && mactchcat(job) && mactchloc(job) && mactchtitle(job)
       )


       setfilterjob(newfilter)
       setcurrentpage(1)


},[jobs,selectlocation,SearchFilter,select])
  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {
        isSearched&&(SearchFilter.title!==""||SearchFilter.location!=="")&&
        <>
        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
        <div className='mb-4 text-gray-600'>
            {SearchFilter.title &&(<span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
            {SearchFilter.title}
            <ImCross className='cursor-pointer' onClick={e=>setSearchFilter(prev=>({...prev,title:""}))}/>
        </span>)}
        {SearchFilter.location &&(<span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
            {SearchFilter.location}
            <ImCross className='cursor-pointer' onClick={e=>setSearchFilter(prev=>({...prev,location:""}))}/>

        </span>)}
        </div>
        </>
        }
       <button className= ' block lg:hidden bg-purple-200 font-bold border-1 py-2 px-4 rounded' onClick={e=> setshowfilter(prev=>!prev)}>{ showfilter ?"Close":"Filters"}</button>
        <div className={showfilter ?" ":"max-lg:hidden"}>
            <h4 className='font-medium text-lg py-4'>Search By Categories</h4>
            <ul className='space-y-4 text-gray-600'>
                { JobCategories.map((category,index)=>
                <li  key={index}>
                    <input  className='scale-125 mr-2 '
                     type="checkbox" 
                     onChange={()=>handlechange(category)} 
                    checked={select.includes(category) }/>
                    {category}
                </li>
                )}
            </ul>
        </div>

        <div className={showfilter?" ":"max-lg:hidden"}>         
               <h4 className='font-medium text-lg py-4'>Search By Location</h4>
            <ul className='space-y-4 text-gray-600'>
                { JobLocations.map((location,index)=>
                <li  key={index}>
                    <input   className='scale-125 mr-2 ' 
                       type="checkbox" 
                     onChange={()=>handlelocation(location)} 
                    checked={selectlocation.includes(location) }/>
                    {location}
                </li>
                )}
            </ul>
        </div>
</div>

            <section className='w-full lg:w-3/4 text-gray-900 max-lg:px-4'>
           <div className="flex justify-between items-center gap-2"> 
            <div>

<h3 className='font-medium  text-xl py-2 md:text-3xl' id='job-list'>Latest Jobs</h3>
<p className='mb-4 w-50 text-sm text-gray-700 md:mb-8 md:w-100 md:text-xl'>Get Your desired job from our top companies </p>
</div>

<div><Link to="/Companies">
<button className='flex items-center text-sm py-0.5 cursor-pointer  bg-pink-400 md:py-3 px-2 rounded'><MdAddBox className='font-bold text-sm text-amber-50'/><span className='w-full font-semibold p-0.5  text-amber-50'>Add Job</span>
</button>
</Link></div>

</div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'> 
                
{filterjob.slice((currentpage-1)*6,currentpage*6).map((job,index)=>
    (<JobCard key={index} job={job}/>))}


            </div>




            {filterjob.length>0&&(
                <div className=' mt-4 flex justify-center items-center space-x-2'> 
                    <a href="#job-list">
<MdOutlineKeyboardArrowLeft  onClick={()=> setcurrentpage(Math.max(currentpage-1),1)}/>
                    </a>
                    {Array.from({length:Math.ceil(filterjob.length/6)}).map((_,index)=>(
                        <a href="#job-list">

                            <button onClick={()=>setcurrentpage(index+1)} className={`w-10 h-10 items-center justify-center border border-gray-500 rounded ${currentpage===index+1? 'bg-blue-300 text-gray-500':'text-gray-500'}`}>
                                {index+1}
                            </button>
                        </a>
                    ))
                    }
                     <a href="#job-list">
<MdOutlineKeyboardArrowRight onClick={()=> setcurrentpage(Math.min(currentpage+1,Math.ceil(filterjob.length/6)))}/>
                    </a>
                </div>
            )}
            </section>




        </div>
    
    
  )
}

export default Jobfilter

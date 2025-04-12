import { motion } from 'framer-motion'
import React from 'react'


const Content4data=[
  {
    id:1,
    name:"Dell",
   img:"https://cdn.iconscout.com/icon/free/png-256/free-dell-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029944.png?f=webp&w=256",
   bgColor:"#008080",
delay:0.2,
  },
  {
    id:2,
    name:"Google",
   img:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg",
   bgColor:"#058000",
delay:0.2,
  },
  {
    id:3,
    name:"Jp Morgan",
   img:"https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Emblem.png",
   bgColor:"#485b9b",
delay:0.2,
  },
  {
    id:4,
    name:"Microsoft",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9Nzs4SiiuIppGOTKQM9uscOBmfVg42rYTA&s",
   bgColor:"#76aa76",
delay:0.2,
  },
  {
    id:5,
    name:"Amazon",
   img:"https://m.media-amazon.com/images/I/51HCHFclmmL.jpg",
   bgColor:"#b35e9710",
delay:0.2,
  },
  {
    id:6,
    name:"tcs",
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IRfcDZ9GJhvgD8rnhOV6YIYORmzUl9xPc8VYz3FaRIexpyveNlmD19sHSyahMG-kP40&usqp=CAU",
   bgColor:"#c580b7",
delay:0.2,
  },  {
    id:7,
    name:"Accenture",
   img:"https://crystalpng.com/wp-content/uploads/2024/09/Accenture-Logo.png",
   bgColor:"#008000",
delay:0.2,
  },
 { id:8,
  name:"Atlassian",
 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FLou0VyF4kaYOdM-3nEzIGlXfLc9VRdyn0XMnFFJeiukePBvJKcnFEdhL4IlCt2sbgM&usqp=CAU",
 bgColor:"#008000",
delay:0.2,
},
  
]
const Content4 = () => {
  return (
    <div className='container py-10 md:py-24 md:ml-25 lg:ml-30'>
      <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
        <h1 className="uppercase font-semibold text-pink-500">Our Partners</h1>
        <p className="font-semibold text-3xl">
            choose any company or apply fast </p>


      </div>
      <div className=' grid grid-cols-1  dm:grid-cols-2 md:grid-cols-4 gap-6 md:w-full md:ml-0'>

        {Content4data.map((item)=>
        {return(
            <div 
            key={item.id}
            initial={{opacity:0, x:-200}}
            whileInView={{type:"spring",stiffness:100,delay:item.delay}}
            className='border rounded-lg border-amber-950 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer'
            >
<div >
    <img className='w-20 h-15 rounded-md flex justify-center items-center' src={item.img} alt="" srcset="" />
</div>
<p>{item.name}</p>
            </div>
        )})}
      </div>
    </div>
  )
}

export default Content4

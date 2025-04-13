import React from 'react'
import {Link} from 'react-router-dom'
import profilePic from "../Assets/avatar.jpg"
import ProfileMenu from '../Components/ProfileMenu'
import {motion,AnimatePresence} from "framer-motion"
import {useState} from "react";




const ResNav = ({isOpen}) => {
  const [openMenu, setOpenMenu] = useState(false);



  return (
    <AnimatePresence mode='wait'>
{isOpen &&
 <motion.div 
 initial={{opacity:0 ,y:-100}}
 animate={{opacity:1 ,y:0}}
 exit={{opacity:0 ,y:-100}}
 transition={{duration:0.3}}
 className='absolute top-20  left-0 w-5/5 h-screen z-20 lg:hidden'
>
    <div className='text-xl  bg-pink-300  font-semibold uppercase m-6 rounded-3xl text-white py-10'>


        <ul className='flex flex-col  justify-center items-center gap-10'>
            <Link className='touch  text-gray-900  hover:text-amber-50'  to="/Home"><li >Home</li></Link>
           <Link className='touch  text-gray-900  hover:text-amber-50'  to="/Blogs"> <li>Blogs</li></Link>
           <Link  className='touch  text-gray-900  hover:text-amber-50'  to="/Jobs"><li >Jobs</li></Link>
           <Link  className='touch  text-gray-900  hover:text-amber-50'  to="/Profile"><li ><button onClick={() => setOpenMenu ((prev) => !prev)}>
            <img className='w-10  rounded-full border-1 cursor-pointer' src={profilePic} alt="Profile" />
            </button>
             {openMenu && <ProfileMenu closeMenu={() => setOpenMenu(false)} />}
          </li></Link>

        </ul>
    </div>
</motion.div>

}
    </AnimatePresence>
   
  )
}

export default ResNav

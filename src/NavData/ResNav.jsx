import React from 'react'
import {Link} from 'react-router-dom'
import {motion,AnimatePresence} from "framer-motion"
const ResNav = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait'>
{isOpen &&
 <motion.div 
 initial={{opacity:0 ,y:-100}}
 animate={{opacity:1 ,y:0}}
 exit={{opacity:0 ,y:-100}}
 transition={{duration:0.3}}
 className='absolute top-20  left-15 w-4/5 h-screen z-20 lg:hidden'
>
    <div className='text-xl  bg-pink-300  font-semibold uppercase m-6 rounded-3xl text-white py-10'>


        <ul className='flex flex-col  justify-center items-center gap-10'>
            <Link className='touch'  to="/Home"><li >Home</li></Link>
           <Link className='touch'  to="/Blogs"> <li>Blogs</li></Link>
           <Link  className='touch'  to="/Jobs"><li >Jobs</li></Link>
        </ul>
    </div>
</motion.div>

}
    </AnimatePresence>
   
  )
}

export default ResNav

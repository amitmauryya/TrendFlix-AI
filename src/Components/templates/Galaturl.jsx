import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Galaturl = () => {
   const navigate= useNavigate()
  return (
      <div className=' text-white italic bg-black text-5xl flex items-center justify-center w-screen h-screen'>
             <Link onClick={() => navigate(-1)} className='text-xl absolute right-[2%] top-[9%] text-white rounded-full font-semibold mr-10 border-0 px-2 py-1 bg-[#6556CD]'>
                  <i className="ri-close-line"></i>
        </Link>
         Bhai galat url likh rhe ho 😭 !
    </div>
  )
}

export default Galaturl

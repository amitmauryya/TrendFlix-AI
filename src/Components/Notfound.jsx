import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Notfound = () => {
  const navigate=useNavigate()
  return (
    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,1)] text-5xl justify-center items-center flex w-screen h-screen text-white'>
       <Link onClick={() => navigate(-1)} className='text-xl absolute right-[2%] top-[9%] text-white rounded-full font-semibold mr-10 border-0 px-2 py-1 bg-[#6556CD]'>
                  <i className="ri-close-line"></i>
        </Link>
       WRONG URL HAI BHAI 😞 !
    </div>
  )
}

export default Notfound

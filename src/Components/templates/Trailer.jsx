import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../Notfound'
const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos); 
  return ytvideo ? (
      <div className='bg-[rgba(0,0,0,.9)] top-0 z-[100] left-0 absolute w-screen h-screen flex items-center justify-center text-white'>
           <Link onClick={() => navigate(-1)} className='text-xl absolute right-[2%] top-[9%] text-white rounded-full font-semibold mr-10 border-0 px-2 py-1 bg-[#6556CD]'>
                  <i className="ri-close-line"></i>
        </Link>
          <ReactPlayer controls height={600} width={1300} src={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
    </div>
  ):<Notfound/>
}

export default Trailer

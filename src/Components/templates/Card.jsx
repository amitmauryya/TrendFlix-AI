import React from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.jpg'
const Card = ({data ,title}) => {
  return (
    <div className='flex flex-wrap w-full justify-center  bg-[#1F1E24] '>
      {data.map((c, i) => <Link to={`/${c.media_type || title }/details/${c.id}`} className=' relative w-[25vh] mr-[5%] mb-[3%]' key={i}>
              <img  className=' hover:scale-102 rounded  h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={ c.poster_path || c.backdrop_path || c.profile_path ?      `https://image.tmdb.org/t/p/original/${
                  c.poster_path || c.backdrop_path || c.profile_path})`:noimg} alt="" />
              <h1 className='mt-3 text-xl text-zinc-400 font-semibold'>   {c.name || c.title || c.original_name || c.original_title}
            </h1>
           {c.vote_average &&  <div className=' font-semibold absolute right-[-10%] bottom-[35%] flex justify-center items-center text-white w-[5vh] h-[5vh] rounded-full bg-yellow-600'>{(c.vote_average*10).toFixed()}<sup>%</sup></div>
 } 
          </Link>)}
    </div>
  )
}

export default Card

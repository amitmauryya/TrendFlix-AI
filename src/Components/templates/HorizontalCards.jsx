import React from 'react'
import Dropdown from './Dropdown'
const HorizontalCards = ({data }) => {
  return (
          <div className='w-[100%] flex overflow-x-auto overflow-y-hidden mb-5 p-5'>
              {data.map((data, index) => <div key={index} className='min-w-[16%] h-[45vh] bg-zinc-900 mr-5 mb-5 overflow-hidden' >
                  <img className=" hover:scale-105 w-full h-[55%] object-cover" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} alt="" />
                  <div className='text-white p-3 h-[45%]'>
             <h1 className=' text-xl  font-semibold '>
                      {   data.original_title || data.original_name ||
                              data.title || data.name 
                         }    
                         </h1>
                <p className=''>
                {data.overview.slice(0, 35)}...<span className='text-zinc-500'> more</span>
                </p>  
                  </div>
                
                </div>)}
        </div>

  )
}

export default HorizontalCards

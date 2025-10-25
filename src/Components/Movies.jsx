import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../Utils/axios';
import Card from './templates/Card';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
const Movies = () => {
 document.title ="TrendFlix AI || Movies"
 const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [ page, setpage] = useState(1);
    const getMovie = async () => {
        try {
        const { data } = await axios.get(`/movie/${category}?page=${page}`);
        // setmovie(data.results);
        setmovie((prevState) => [...prevState, ...data.results])
         setpage((p)=>p+1);
    } catch (error) {
      console.log("Error : ", error);
    }
    };
     useEffect(() => {
    setmovie([]);
    setpage(1);
        getMovie();
    }, [category]);

  return movie.length  > 0 ? (
      <div className=' w-[100%] h-screen  '>
          <div className=' px-10 py-5 w-[100%] flex items-center'>
              <div onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-2 bg-[#6556CD]'>
                  <i className="ri-arrow-left-line"></i>
               </div>
                <h1 className='text-2xl font-semibold text-zinc-400'>Movies<span className=' ml-2 text-sm text-zinc-500'>({category})</span></h1>
              <Topnav />
              <Dropdown title="Category" options={["popular", "top_rated","upcoming","now_playing"]} func={(e)=>setcategory(e.target.value)} />
               <div className='w-[2%]'></div>
          </div>
          <InfiniteScroll
              dataLength={movie.length}
              next={getMovie}
              hasMore={true}
              loader={<h1>Loading....</h1>
             }
          >
          <Card data={movie} title="movie" />
          </InfiniteScroll>

    </div>
        
  ):<Loader/>
}

export default Movies

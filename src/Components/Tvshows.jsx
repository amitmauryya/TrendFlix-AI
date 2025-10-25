import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../Utils/axios';
import Card from './templates/Card';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {
 document.title ="TrendFlix AI || Tv Shows"
 const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [ page, setpage] = useState(1);
    const getTv = async () => {
        try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
        // settv(data.results);
        settv((prevState) => [...prevState, ...data.results])
         setpage((p)=>p+1);
    } catch (error) {
      console.log("Error : ", error);
    }
    };
     useEffect(() => {
    settv([]);
    setpage(1);
        getTv();
    }, [category]);

  return tv.length  > 0 ? (
      <div className=' w-[100%] h-screen  '>
          <div className=' px-10 py-5 w-[100%] flex items-center'>
              <div onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-2 bg-[#6556CD]'>
                  <i className="ri-arrow-left-line"></i>
               </div>
                <h1 className='text-2xl font-semibold text-zinc-400'>Tv_Shows<span className=' ml-2 text-sm text-zinc-500'>({category})</span></h1>
              <Topnav />
              <Dropdown title="Category" options={["on_the_air", "popular","top_rated","airing_today"]} func={(e)=>setcategory(e.target.value)} />
               <div className='w-[2%]'></div>
          </div>
          <InfiniteScroll
              dataLength={tv.length}
              next={getTv}
              hasMore={true}
              loader={<h1>Loading....</h1>
             }
          >
          <Card data={tv} title="tv" />
          </InfiniteScroll>

    </div>
        
  ):<Loader/>
}

export default Tvshows

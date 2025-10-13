import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../Utils/axios';
import Card from './templates/Card';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
const Trending = () => {
    document.title ="TrendFlix AI || Trending"

    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [ page, setpage] = useState(1);
    const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
        // settrending(data.results);
        settrending((prevState) => [...prevState, ...data.results])
         setpage((p)=>p+1);
    } catch (error) {
      console.log("Error : ", error);
    }
    };

     useEffect(() => {
    settrending([]);
    setpage(1);
        getTrending();
    }, [category, duration]);

  return trending.length  > 0 ? (
      <div className=' w-[100%] h-screen  '>
          <div className=' px-10 py-5 w-[100%] flex items-center'>
              <div onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-2 bg-[#6556CD]'>
                  <i className="ri-arrow-left-line"></i>
               </div>
                <h1 className='text-2xl font-semibold text-zinc-400'>Trending</h1>
              <Topnav />
              <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setcategory(e.target.value)} />
               <div className='w-[2%]'></div>
              <Dropdown title="Duration" options={["week" ,"day"]} func={(e)=>setduration(e.target.value)}  />
        
              
          </div>
          <InfiniteScroll
              dataLength={trending.length}
              next={getTrending}
              hasMore={true}
              loader={<h1>Loading....</h1>
             }
          >
          <Card data={trending} title={category} />
          </InfiniteScroll>

    </div>
        
  ):<Loader/>
}

export default Trending

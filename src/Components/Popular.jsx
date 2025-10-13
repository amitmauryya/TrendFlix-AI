import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../Utils/axios';
import Card from './templates/Card';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
const Popular = () => {
    document.title ="TrendFlix AI || Popular"
 const navigate = useNavigate();
    const [category, setcategory] = useState("tv");
    const [popular, setpopular] = useState([]);
    const [ page, setpage] = useState(1);
    const getPopular = async () => {
        try {
        const { data } = await axios.get(`/${category}/popular?page=${page}`);
        // setpopular(data.results);
        setpopular((prevState) => [...prevState, ...data.results])
         setpage((p)=>p+1);
    } catch (error) {
      console.log("Error : ", error);
    }
    };
     useEffect(() => {
    setpopular([]);
    setpage(1);
        getPopular();
    }, [category]);

  return popular.length  > 0 ? (
      <div className=' w-[100%] h-screen  '>
          <div className=' px-10 py-5 w-[100%] flex items-center'>
              <div onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-2 bg-[#6556CD]'>
                  <i className="ri-arrow-left-line"></i>
               </div>
                <h1 className='text-2xl font-semibold text-zinc-400'>Popular</h1>
              <Topnav />
              <Dropdown title="Category" options={["movie", "tv",]} func={(e)=>setcategory(e.target.value)} />
               <div className='w-[2%]'></div>
          </div>
          <InfiniteScroll
              dataLength={popular.length}
              next={getPopular}
              hasMore={true}
              loader={<h1>Loading....</h1>
             }
          >
          <Card data={popular} title={category} />
          </InfiniteScroll>

    </div>
        
  ):<Loader/>
}

export default Popular

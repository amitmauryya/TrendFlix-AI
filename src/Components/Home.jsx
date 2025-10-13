import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../Utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";
function Home() {
  document.title = " TrendFlix AI || Homepage ";
  const [wallpaper, setwallpaper] =   useState(null);
  const [trending, settrending]   =   useState(null);
  const [category, setcategory]   =   useState("all");
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =  data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomdata);
       
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
       
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper(); 
  }, [category])

  return  wallpaper  && trending? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        < Header data={wallpaper} />
         <div className='p-5 flex justify-between'>
              <h1 className='text-2xl font-semibold text-zinc-400'>Trending</h1>
               <Dropdown title="Filter" options={['tv shows', 'movie' ,'all']} func ={(e)=>setcategory(e.target.value)} />
          </div>
        <HorizontalCards data={trending}  />
      </div>
    </>
  ) : <Loader/>;
}

export default Home;

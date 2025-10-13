import React from "react";
import { Link } from "react-router-dom";
function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-1 border-zinc-400 p-7">
      <h1 className="text-white text-2xl font-bold">
        <i className="text-[#6556CD]  ri-tv-fill text- mr-2"></i>
        <span className="text-2xl">TrendFlix AI</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg">
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg">
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link to="/persons" className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg">
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 mb-1 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-2 duration-300 rounded-lg">
          <i className="ri-information-fill"></i> About App
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-2 duration-300 rounded-lg">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;

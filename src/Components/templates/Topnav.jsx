import React from "react";
import { useEffect } from "react";
import axios from "../../Utils/axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import noimg from "/noimg.jpg";
function Topnav() {
  const [query, setquery] = useState(""); //  it is storing the query which we searched in input box then pass in query to get data from api .
  const [search, setsearch] = useState([]); // it is storing the data of searches.

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    GetSearches();
    // every time it will call the function when there is any change in searches 
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex justify-start pl-[10%] items-center">
      <i className=" text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className=" text-zinc-400 w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything" 
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-3xl  text-zinc-400 ri-close-fill"
        ></i>
      )}
      <div className=" z-[100] absolute bg-zinc-200 w-[50%] max-h-[50vh] top-[100%] left-[17%] overflow-x-auto rounded">
        {search.map((elem, i) => (
          <Link
            key={i}
            className=" hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 flex justify-start items-center w-[100%] p-10 border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded shadow-lg mr-5"
              src={
                elem.backdrop_path || elem.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      elem.backdrop_path || elem.profile_path
                    }`
                  : noimg
              }
              alt=""
            />
            <span>
              {elem.name ||
                elem.title ||
                elem.original_name ||
                elem.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;

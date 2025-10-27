import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "../Utils/axios"; 
import HorizontalCards from "./templates/HorizontalCards";
const Aisearch = () => {
  const navigate = useNavigate();
  const [searchValue, setsearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(searchValue);

  const handleGptSearchClick = async () => {
    try {
      setLoading(true);

      // Gemini API key
      const genAI = new GoogleGenerativeAI("AIzaSyBzMDGgm0BPM7VnFxIs9Q1QDM3m3KgwLTo");
      const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

      // Gemini prompt
      const gptQuery = `
        You are a professional movie recommendation system.
        The user query is: "${searchValue}".
        Respond ONLY with a valid JSON array of movie names.
        Example: ["Inception", "Titanic", "Avatar", "The Dark Knight", "Interstellar"]
      `;

      const result = await model.generateContent(gptQuery);
      const movieString = await result.response.text(); // ai ke output ko plain text(string) me convert kiya

      console.log("Raw Gemini Output:", movieString);

      //  clean array
      const match = movieString.match(/\[.*\]/s);
      if (!match) {
        console.error("No valid array found");
        setLoading(false);
        return;
      }

      const movieNames = JSON.parse(match[0]);
      // console.log("Movie Names:", movieNames);

      // Fetch each movie from TMDB using your axios
      const tmdbResults = [];
      for (const name of movieNames) {
        const { data } = await axios.get(`/search/movie?query=${encodeURIComponent(name)}`);
        if (data.results.length > 0) {
          tmdbResults.push(data.results[0]);
        }
      }
      setMovies(tmdbResults);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://runforthehillslondon.files.wordpress.com/2013/08/film-wallpaper-square-close.jpg)`,
        opacity: 0.9,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100%] flex flex-col p-10"
    >
      <div className="flex justify-between text-2xl font-black text-[#0c0c0d]">
        <Link
          onClick={() => navigate(-1)}
          className="w-[5vh] text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-1 bg-[#0c0c0d]"
        >
          <i className="ri-arrow-left-line"></i>
        </Link>
        <h1 className="text-white">TrendFlix AI 🎬</h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-screen flex justify-center items-center">
          <input
            onChange={(e) => setsearchValue(e.target.value)}
            className="text-zinc-800 w-[50%] mx-10 p-5 text-xl outline-none border-none bg-white rounded-4xl"
            type="text"
            placeholder="Ask AI about movies..."
          />
          <i
            onClick={handleGptSearchClick}
            className={`px-4 py-3 rounded-full bg-gray-50 ri-robot-2-fill cursor-pointer ${
              loading ? "animate-spin opacity-70" : ""
            }`}
          ></i>
        </div>

        {loading ? (
          <p className="text-white mt-10 text-5xl">Loading recommendations...</p>
        ) : (
          movies.length > 0 &&  <div className="mt-20 w-full">
    <HorizontalCards data={movies}  />
        </div>
        )}
      </div>
    </div>
  );
};

export default Aisearch;

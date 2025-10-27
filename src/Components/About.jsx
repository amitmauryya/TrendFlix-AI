import React from "react";
import { Link, useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapers.com/images/featured/movie-poster-background-8ozs7qf3u2m0q5e5.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-10 py-20 bg-black bg-opacity-80"
    >
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-white text-2xl bg-[#6556CD] rounded-md px-3 py-1 hover:scale-110 transition-all"
      >
        <i className="ri-arrow-left-line"></i>
      </Link>
      <h1 className="text-5xl font-extrabold text-white mb-5 tracking-wide">
        🎬 TrendFlix AI
      </h1>
      <p className="text-zinc-300 max-w-3xl text-lg leading-relaxed mb-10">
        Welcome to <span className="text-[#6556CD] font-semibold">TrendFlix AI</span> — 
        your personal movie discovery platform powered by 
        <span className="text-white"> Google Gemini AI</span>.  
        Just ask what kind of movies you love, and our intelligent system will instantly
        recommend the best titles for you!  
        <br /> <br />
        From trending blockbusters to hidden gems, TrendFlix AI brings smart,
        personalized movie suggestions straight to your screen.
        <br /> <br />
        🎥 <span className="text-[#6556CD] font-semibold">TrendFlix AI</span> not only recommends movies — 
        it also shows **trailers, ratings, & complete details** for both 
        <span className="text-white font-semibold"> Movies</span> and 
        <span className="text-white font-semibold"> TV Shows</span>, 
        making your entertainment search seamless and exciting!
      </p>

      <p className="text-xl text-white mt-20 font-semibold">
        ✨ A Premium Experience — Made by 
        <span className="text-[#6556CD] italic"> Amit Maurya </span>
        with <span className="text-red-500">❤️</span>
      </p>

      <p className="text-sm text-zinc-500 mt-5">
        © 2025 TrendFlix AI. All rights reserved.
      </p>
    </div>
  );
};

export default About;

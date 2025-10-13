import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
const App = () => {
  return (
    <div className="flex bg-[#1F1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvshows" element={<Tvshows/>}></Route>
        <Route path="/persons" element={<People/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

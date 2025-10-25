import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Moviedetails from "./Components/templates/Moviedetails";
import Tvdetails from "./Components/templates/Tvdetails";
import Peopledetails from "./Components/templates/Peopledetails";
import Trailer from "./Components/templates/Trailer";
import Notfound from "./Components/Notfound";
const App = () => {
  return (
    <div className="flex bg-[#1F1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movies />}> </Route>
        <Route path="/movie/details/:id" element={<Moviedetails />}>
        <Route path="trailer" element={<Trailer/>}></Route>
        </Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
        <Route path="/tv/details/:id" element={<Tvdetails />}>
        <Route path="trailer" element={<Trailer/>}></Route>
        </Route>
        <Route path="/persons" element={<People />}></Route>
        <Route path="/person/details/:id" element={<Peopledetails />}></Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;

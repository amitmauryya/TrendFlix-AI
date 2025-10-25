import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../../Store/actions/movieAction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
const Moviedetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector(state => state.movie)
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }
  }, [id])
  console.log(info);
  return info ? (
    <div  style={{
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.4)) ,url(https://image.tmdb.org/t/p/original/${
                    info.detail.backdrop_path   })`,
          backgroundPosition: "0 22%",
          backgroundSize:"cover"
        
    }} className='relative w-screen h-screen px-[10%]'>
      
      <nav className=' h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl'>
         <Link onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-1 bg-[#6556CD]'>
                  <i className="ri-arrow-left-line"></i>
        </Link>
         <a target='_blank' href={info.detail.homepage}><i className="hover:text-blue-400 ri-external-link-line"></i></a>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <div className='flex justify-center items-center'>
            {/* <i className=" hover:text-blue-400 ri-earth-fill"></i> */}
            <img className=' w-[7vh] h-[5vh]' src="https://upload.wikimedia.org/wikipedia/commons/6/66/Wikidata-logo-en.svg" alt="" />
           </div>
         </a>
         <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className='hover:text-blue-400 w-[8vh] h-[5vh]'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" alt="" /></a>
      </nav>

  <div className='mt-8 w-full flex '>
     <div className=' w-[18%]leftwala '>
          <img  className=' hover:scale-102 rounded h-[60vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={`https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path || info.detail.backdrop_path })`} alt="" />
      
          {info.watchprovider &&  <div className=' my-10 flex gap-8 justify-center items-center '>
            <h1 className='text-white font-semibold' >Available on platforms</h1>
        {info.watchprovider && info.watchprovider.flatrate && 
          info.watchprovider.flatrate.map((w,i) => (
            <img key={i}
            className='w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${
              w.logo_path}`} />
          ))}
      </div>}
        </div> 
        <div className='w-[82%] ml-[5%] flex flex-col gap-3'>
     <div>        
         <h1 className=' font-black text-6xl text-white'>{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title} <span className=' ml-3 text-zinc-300 text-4xl'>({info.detail.release_date.split("-")[0]})</span>
          </h1>
      </div>
          <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
        {info.detail.vote_average && <div className=' font-semibold  flex justify-center items-center text-white w-[5vh] h-[5vh] rounded-full bg-yellow-600'>{(info.detail.vote_average*10).toFixed()}<sup>%</sup></div>
            } 
            <h1 className='text-xl text-zinc-200 '>User Score</h1>
            </div>
          
            <div className='flex gap-1 items-center text-white'>
           <h1>Release Date</h1>
            ({info.detail.release_date})
            </div>
            <h1 className='text-white'>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1 className='text-white'>{info.detail.runtime}m</h1>
            
          </div> 
          <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
          <h1 className='mt-3 text-2xl text-blue-300'>Overview</h1>
          <p className='text-white'>{info.detail.overview}</p>
          <h1 className='text-blue-300 text-2xl'> Movie Translated</h1>
          <p className='text-white mb-3 w-[90%]'>{info.translations.join(", ")} </p>
          <Link to={`${pathname}/trailer`} className='hover:scale-[1.01] text-center text-white text-xl w-[20vh] bg-[#6556CD] rounded  py-2'> <i className="mr-2 ri-play-fill"></i>Play Trailer</Link>
        </div>
      </div>
      <Outlet/>
       </div>
  ):<Loader/>
}

export default Moviedetails


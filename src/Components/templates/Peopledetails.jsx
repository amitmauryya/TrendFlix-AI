import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadpeople, removepeople } from '../../Store/actions/personAction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards';
const Peopledetails = () => {
  const {pathname} = useLocation()
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector(state => state.people)
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(asyncloadpeople(id));
      return () => {
        dispatch(removepeople());
      }
    }, [id])
  console.log(info);
  return info ? (
    <div className='px-[5%] w-screen mt-2  flex flex-col justify-start overflow-x-hidden  '>
             <nav className=' w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl'>
                <Link onClick={() => navigate(-1)} className=' text-amber-50 rounded font-semibold mr-10 border-0 px-2 py-0.5 bg-[#6556CD]'>
                         <i className="ri-arrow-left-line"></i>
               </Link>
      </nav>
      <div className=' flex'>
  <div className=' w-[25%] mt-3'>
<div className='w-[90%] ' >
         <img  className=' hover:scale-102 rounded h-[45vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover' src={`https://image.tmdb.org/t/p/original/${
          info.detail.profile_path})`} alt="" />
        
        
        <hr className='mt-2 mb-1 border-none h-[2px] bg-zinc-500' />
        <div className='flex justify-start gap-7'>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <div className='flex justify-center items-center'>
            {/* <i className=" hover:text-blue-400 ri-earth-fill"></i> */}
            <img className=' w-[6vh] h-[4vh]' src="https://upload.wikimedia.org/wikipedia/commons/6/66/Wikidata-logo-en.svg" alt="" />
           </div>
          </a>
           <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
          <div className='flex justify-center items-center text-3xl text-blue-500'>
            {/* <i className=" hover:text-blue-400 ri-earth-fill"></i> */}
           <i className="ri-facebook-box-fill"></i>
           </div>
          </a>
           <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
          <div className='flex justify-center items-center text-3xl text-blue-500'>
            {/* <i className=" hover:text-blue-400 ri-earth-fill"></i> */}
           <i className="text-[#FE03B8] ri-instagram-line"></i>
           </div>
          </a>
           <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
          <div className='flex justify-center items-center text-3xl text-blue-500'>
            {/* <i className=" hover:text-blue-400 ri-earth-fill"></i> */}
           <i className="text-[#000000] ri-twitter-x-fill"></i>
           </div>
         </a>
          
        </div>
      </div>
   <h1 className='text-2xl text-zinc-300 font-semibold my-5  '>Personal details</h1>
      <div className='w-[100%] flex'>
        
        <div className=' w-[50%]'>
     <h1 className='text-lg text-zinc-300 font-semibold  '>Known For :</h1>
      <h1 className=' text-zinc-400 font-semibold'>{info.detail.known_for_department}</h1>
      <h1 className=' text-lg  text-zinc-300 font-semibold mt-3'>Gender :</h1>
      <h1 className=' text-zinc-400 font-semibold'>{info.detail.gender === 2 ? "Male" : "Female"}</h1>
       <h1 className=' text-lg  text-zinc-300 font-semibold mt-3'>Birthday :</h1>
      <h1 className=' text-zinc-400 font-semibold'>{info.detail.birthday}</h1>
        </div>

        <div className=' w-[40%]'>
          <h1 className=' text-lg  text-zinc-300 font-semibold mt-3'>Place of Birth</h1>
          <h1 className=' text-zinc-400 font-semibold'>{info.detail.place_of_birth}</h1>
        </div>
        </div>
        

      </div>

      <div className=' w-[80%] right'>
        
            
            <h1 className='text-6xl text-zinc-400 font-black my-5  '>{info.detail.name}</h1>
          <h1 className='text-xl text-zinc-400 font-semibold'>Biography</h1>
          <p className='mt-3 text-zinc-300'>{info.detail.biography}</p>
          <h1 className='text-xl mt-3 text-zinc-400 font-semibold'>Featured In</h1>
          <HorizontalCards data={info.combinedCredits.cast} />
         

      </div>
      
     

      </div>
    

        </div>

  ):<Loader/>
}

export default Peopledetails

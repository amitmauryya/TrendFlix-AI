import React, { useRef, useEffect } from 'react'
import loader from "/loader.gif"
const Loader = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2  // 2x speed
    }
  }, [])

  return (
    <div className='w-full h-full bg-black flex justify-center items-center'>
      <img 
        src={loader}
        className='h-[50%]  object-contain'
      />
    </div>
  )
}

export default Loader

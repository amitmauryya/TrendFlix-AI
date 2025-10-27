import React from 'react'
import Loading from '/loader1.gif'
const Loader = () => {
  return (
    <div className='flex w-screen  justify-center items-center'>
      <img className='invert-[0.1] sepia-[2] saturate-[0.1] w-[50%]' src={Loading} alt="" />
    </div>
  )
}

export default Loader;

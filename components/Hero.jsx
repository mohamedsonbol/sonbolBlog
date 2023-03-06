import React from 'react'

export const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 hero-bg'>
        {/* {Overlay} */}
         <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-1 border'>More info</button>
        </div>
    </div>
  )
}

export default Hero


import React, { useState } from 'react'
import banner1 from '../assets/Illustration.svg'

const Home = () => {

  return (
  //  <div className='bg-neutralSilver font-now'>
  //  <div className='px-4 lg-px-14 max-w-screen mx-auto min-h-screen h-screen'>

      <div className="carousel w-full mx-auto bg-neutralSilver font-now">
                <div id="slide1" className="carousel-item  w-full">
                    <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                      <div>
                        <img src={banner1} alt="" />
                      </div>
                      {/* hero text */}
                      <div className='md:w-1/2 '>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-sung'>from 8 years</span></h1>
                        <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                      </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide4" className="btn btn-circle ">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>
  </div>

  //    </div>
  // </div> 
  )
}

export default Home

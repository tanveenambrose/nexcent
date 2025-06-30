import React, { useState } from 'react'
import banner1 from '../assets/Illustration.svg'

const Home = () => {

  return (
   <div className='bg-neutralSilver font-now'>



    <div className="carousel w-full bg-gray-300">


  <div id="slide1" className="carousel-item relative flex w-full items-center justify-center pt-24">
    <div className='flex items-center flex-col md:flex-row-reverse '>
      <div className='flex-1 flex justify-center'><img className='' src={banner1} alt="" /></div>
      <div className='flex-1 md:w-1/2 pb-10 pt-10'>
        <h1 className='text-neutralDGrey text-5xl font-semibold mb-4 text-center leading-sung'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
        <p className='text-neutralGrey text-base mb-8 text-center'>Where to grow your business as a photographer: site or social media?</p>
        <button className='btn-sexo ml-10'>Register</button>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❮</a>
      <a href="#slide2" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❯</a>
    </div>
  </div>


    <div id="slide2" className="carousel-item relative w-full flex items-center justify-center pt-24">
    <div className='flex items-center flex-col md:flex-row-reverse '>
      <div className='flex-1 flex justify-center'><img className='' src={banner1} alt="" /></div>
      <div className='flex-1 md:w-1/2 pb-10 pt-10'>
        <h1 className='text-neutralDGrey text-5xl font-semibold mb-4 text-center leading-sung'> Learn and Earn Money <span className='text-brandPrimary leading-snug'>in 4 Months</span></h1>
        <p className='text-neutralGrey text-base mb-8 text-center'>Where to grow your business as a photographer: site or social media?</p>
        <button className='btn-sexo ml-10'>Register</button>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❮</a>
      <a href="#slide3" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❯</a>
    </div>
  </div>





  <div id="slide3" className="carousel-item relative w-full flex items-center justify-center pt-24">
    <div className='flex items-center flex-col md:flex-row-reverse '>
      <div className='flex-1 flex justify-center'><img className='' src={banner1} alt="" /></div>
      <div className='flex-1 md:w-1/2 pb-10 pt-10'>
        <h1 className='text-neutralDGrey text-5xl font-semibold mb-4 text-center leading-sung'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
        <p className='text-neutralGrey text-base mb-8 text-center'>Where to grow your business as a photographer: site or social media?</p>
        <button className='btn-sexo ml-10'>Register</button>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❮</a>
      <a href="#slide1" className="btn btn-circle border-0 hover:border-2 bg-transparent text-black">❯</a>
    </div>
  </div>




</div>








   </div>
  )
}

export default Home

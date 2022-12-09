import React from 'react';
import BgImage from '../assets/images/maincar.png'

const Homepage = () => {
  return (
    <section className='relative flex  mt-[80px] sm:mt-0'>
      <div className='container max-w-[1140px] w-screen m-auto flex flex-col-reverse lg:flex-row mt-8 lg:mt-[50px] lg:mt-18  h-[90vh]  '>
        <div className='flex flex-1 flex-col items-center lg:items-start justify-center  mb-[60px] md:max-h-[500px] md:w-[500px]  md:mb-12  lg:mb-0 mt-2'>
          <h1 className='text-3xl text-black/80 mb-3 lg:mb-5 w-full lg:text-4xl font-semibold lg:max-w-md p-2 justify-start  lg:text-left  text-center lg:leading-snug'>Search and find
            premium car rentals and Self-Driving cars with
            affodable prices. </h1>
          <h2 className='text-gray-700 text-xl w-full text-center lg:text-start lg:text-2xl   lg:leading-snug'>
            Attach your Idle car and earn Upto 25000/- Per Month
            we offer best services to satisfy each customer.
          </h2>
          <div className='flex justify-center  flex-wrap gap-6 items-center'>
            <button class="bg-[#002559] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-3 lg:mt-5">
              Book A Car
            </button>
            <button className='text-slate-500 underline mt-3 lg:mt-5  ml-5'>See All Cars</button>
          </div>
        </div>
        <div className='flex  flex-1 flex-col justify-center items-center md:max-h-[500px] md:w-[500px] mb-[30px] md:mb-12  lg:mb-0 mt-2'>
          <img src={BgImage} alt="background" className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full mt-10  object-cover flex-wrap' />
          <div className='flex'>
            <h1 className='text-xl md:2xl  font-light text-gray-600'>Register Your Car</h1>
            <p className='text-xl md:2xl  font-light text-gray-600 underline ml-2 cursor-pointer'>Here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
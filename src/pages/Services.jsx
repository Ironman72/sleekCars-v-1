import React from 'react';
import RentCar from '../assets/images/rentcar.png';
import CarPool from '../assets/images/carpool.jpeg';
import SelfCar from '../assets/images/taxi.png';


const Services = () => {
  return (
    <>
      {/* main div */}
      <div className='max-w-[1140px] w-screen   mt-5 mx-auto overflow-auto  overscroll-auto  border-t-2'>
        {/* title */}
        <h1 className='text-center text-3xl mt-2 text-[#002559] font-bold mb-5'>Services We Offer</h1>
        {/* grid Container */}
        <div className='sm:grid sm:grid-cols-2  justify-center gap-3 overscroll-auto'>

          {/*  */}
          {/* First Image */}
          <div className='h-full w-full '>
            {/* Image container */}
            <img src={RentCar} alt='rentcar' className='rounded-tl-[100px] rounded-br-[100px] h-[300px] justify-center items-center object-cover shadow-2xl shadow-slate-400' />
          </div>
          {/* Text Container */}
          <div className='h-[300px] justify-center items-center'>
            <p className='font-cursive text-3xl mt-2 text-[#002559] text-center '>Rent a car</p>
            <p className='sm:text-2xl max-w-sm text-justify mt-2'>Book a Car with <span className='text-[#002559] font-bold'>Sleek Cars</span> along with a Professional Driver's We Have 100% Professionals Drivers with 5+ Years Experience in Driving</p>
            <p className='sm:text-xl mt-5 text-center sm:w-[50%]'>Book Your Ride <span className='underline text-slate-500'>Here</span></p>
          </div>

          {/*  */}
          {/* Second Image */}
          <div className='h-full w-full sm:order-last'>
            {/* Image container */}
            <img src={SelfCar} alt='selfcar' className='rounded-tl-[100px] rounded-br-[100px] h-[300px] w-full justify-center items-center object-fill shadow-2xl shadow-slate-400' />
          </div>
          {/* Text Container */}
          <div className='h-[300px]'>
            <p className='font-cursive text-3xl mt-2 text-[#002559] text-center sm:text-center'>Book Self Drive</p>
            <p className='sm:text-2xl max-w-sm text-justify  mx-5 mt-2'>Book a Car with <span className='text-[#002559] font-bold '>Sleek Cars</span> along with a Professional Driver's We Have 100% Professionals Drivers with 5+ Years Experience in Driving</p>
            <p className='sm:text-xl mt-5 text-center sm:w-[50%]'>Book Your Ride <span className='underline text-slate-500'>Here</span></p>
          </div>
        </div>

        {/* third row */}
        <div className='md:flex sm:justify-between sm:items-center sm:w-full sm:h-[300px] sm:mt-10 mt-0 mb-10 h-[300px]'>
          <img src={CarPool} alt="pool" className='rounded-tl-[100px] rounded-br-[100px] h-[300px] sm:w-[50%] justify-center items-center object-fill shadow-2xl shadow-slate-400' />
          <div className='flex flex-col  justify-end'>
            <p className='font-cursive text-3xl mt-2 text-[#002559] text-center sm:text-center'>Car Pool</p>
            <p className='sm:text-2xl max-w-sm sm:text-start mx-5 mt-2'>If you travel from one place to another place regularly or occasionally, then list your Drive with us, we will find you the ongoing passengers.</p>
            <p className='sm:text-xl mt-5 text-center sm:w-[50%] sm:text-center'>Book Your Ride <span className='underline text-slate-500'>Here</span></p>
          </div>
        </div>
        {/* last div below this comment */}
      </div>

    </>

  )
}

export default Services
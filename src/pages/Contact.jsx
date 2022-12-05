import React from 'react'

const Contact = () => {
  return (
    <div><section className='max-w-[1140px] w-screen h-[90vh] mx-auto'>
      <h1 className='text-center text-4xl mt-2 text-[#002559] font-bold'>Services We Offer</h1>
      {/* First Image */}
      <div className='md:grid md:grid-cols-2 mt-10 p-2 gap-4'>
        {/* image */}


        <div className='md:h-full md:w-full'>
          <img src={RentCar} className='rounded-tl-[100px] rounded-br-[100px]' />
        </div>
        {/* text */}
        <div className='items-center justify-center'>
          <h1 className='text-3xl font-cursive text-[#002559] text-center md:text-start mb-2'>Rent a car</h1>
          <p>Book a Car with <span className='text-[#002559] font-bold'>Sleek Cars</span> along with a Professional Driver's We Have 100% Professionals Drivers with 5+ Years Experience in Driving</p>
        </div>


        <br />
        {/* first image ends here */}
        <div>
        </div>

        {/* second image */}
        <div className='md:h-full md:w-full mt-5'>
          <img src={SelfCar} className='rounded-tl-[100px] rounded-br-[100px]' />
        </div>
        <div className='items-center space-y-reverse mt-5'>
          <h1 className='text-3xl font-cursive text-[#002559] text-center md:text-start mb-2'>Book Self Drive</h1>
          <p>Book a Car with Sleek Cars along with a Professional Driver <span className='text-[#002559] font-bold mr-2'>Cheap</span>We Have 100% Professionals Drivers 5+ Years Experience in Driving</p>
        </div>


        {/* third image */}
        <div className='md:h-w-full md:w-full mt-5'>
          <img src={CarPool} className='rounded-tl-[100px] rounded-br-[100px]' />
        </div>
        {/* text */}
        <div className='items-center mt-5'>
          <h1 className='text-3xl font-cursive text-[#002559] text-center md:text-start mb-2'>Rent a car</h1>
          <p>Book a Car with <span className='text-[#002559] font-bold'>Sleek Cars</span> along with a Professional Driver's We Have 100% Professionals Drivers with 5+ Years Experience in Driving</p>
        </div>

      </div>



    </section></div>
  )
}

export default Contact
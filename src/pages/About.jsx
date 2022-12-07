import React from 'react';

const About = () => {
  return (
    <div className='justify-center max-w-[1140px] h-screen mx-auto mt-10'>
      {/* Main Paragraph */}
      <div className='w-full'>
        <h1 className='text-center text-3xl font-bold text-[#002559]'>About us</h1>
        <div className='flex items-center justify-center p-3 mx-auto'>
          <h1 className='text-center sm:text-2xl text-xl text-gray-700'>
            Sleek Cars  was incorporated in the year 2022 and started it’s full fledged operation in the Telangana India in the year 2022. Sleek Cars is a sister concern of SGF Technologies Karimnagar which is well renowned in the Customer Service, BPO, IT market, Sleek Cars is working as a performance enhancement partner to help Car Owners & Drivers in Telangana to achieve the above while simultaneously containing the associated costs and assisting the Sleek Partners (Car Owners & Drivers)  to identify new revenue streams.
          </h1>
        </div>
      </div>
      {/* Cards */}
      {/* Cards Main Div or container */}
      <div className='sm:flex gap-8 mx-auto  justify-center'>
        {/* card One */}
        <div class="max-w-sm bg-white rounded mt-3 shadow-xl">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl text-[#002559] mb-2 text-center ">Services</div>
            <p class="text-gray-700 text-base leading-relaxed">
              Sleek Cars creates the platform for Passengers or Customers and Car Owners & Drivers.
              Sleek Cars has planned to diversify it’s mode of operation in various fields Car Rentals which include's
            </p>
            <ul className=' list-disc px-5 py-5 text-gray-700'>
              <li>Rent A Car</li>
              <li>Self Drive</li>
              <li>Car Pool</li>
            </ul>
            <div className='flex items-center justify-center'>
              <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div class="max-w-sm bg-white rounded mt-3 shadow-xl">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl text-[#002559] mb-2 text-center">Mission</div>
            <p class="text-gray-700 text-base leading-relaxed">
              To provide excellent customer service and expertise based on experience and delivery mechanisms aligned with assurances as we believe in the value of relationship along with synergetic growth with our Sleek Partners (Car Owners, Drivers)  & Sleek Customers.
            </p>
            <div className='flex items-center justify-center'>
              <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Card Three */}
        <div class="max-w-sm bg-white rounded mt-3 shadow-xl">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl text-[#002559] mb-2 text-center">Vision</div>
            <p class="text-gray-700 text-base leading-relaxed">
              To grow and expand our Car Rental services in whole Telangana along with the Customer base and develop a cost effective service in the Telangana market through motivated workforce and quality disposition.
            </p>

            <div className='flex items-center justify-center'>
              <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default About
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='max-w-[1140px] mx-auto mt-10 h-[100vh] border-t-2 bg-slate-50'>
      {/* title */}
      <h1 className='text-center mt-5 text-3xl text-[#002559] font-semibold mb-5'>Contact us</h1>
      <div className='text-center items-center justify-center'>

        <h1 className='text-xl text-[#022559] font-medium'>BETTER YET, SEE US IN PERSON!</h1>
        <p className='text-gray-700 font-medium leading-relaxed mt-5'>We love our customers, so feel free to visit during normal business hours</p>
        <button class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md inline-flex items-center mt-5 sm:mt-10">
          <RiWhatsappFill size={30} className='text-green-300' />
          <span className='px-2'>Message us on Whatsapp</span>
        </button>
        {/* maps */}
        <div className='relative justify-center items-center mt-10'>
          <div class="w-full">
            <h1>Open Map to Get Location</h1>
            <iframe style={{width:'100%', height:'500px'}} src="https://maps.google.com/maps?q=Paramount%20Hills,%20Tolichowky,%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
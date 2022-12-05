import { React, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  // function for handling navbar functionality
  const handleNavbar = () => {
    setNav(!nav)
  }

  return (
    // main div
    <div className='flex sticky top-0 max-w-[1140px] w-screen mt-5 px-4 p-2 mx-auto justify-between items-center h-[60px] z-10'>
      <h1 className='text-4xl'>Sleek Cars</h1>
      <ul className='hidden md:flex justify-between items-center'>
        <li className='p-4 text-xl cursor-pointer'>Home</li>
        <li className='p-4 text-xl cursor-pointer'>Services</li>
        <li className='p-4 text-xl cursor-pointer'>About Us</li>
        <li className='p-4 text-xl cursor-pointer mr-10'>Contact Us</li>
        <li className='flex items-center p-4 text-xl'><BiPhoneCall size={22} /> <p className='ml-2'>+91 9876543219</p></li>
        <li className='p-4 text-xl cursor-pointer text-blue-500 '>Login</li>
      </ul>

      {/* mobile logic goes here */}
      <div onClick={handleNavbar} className=' block md:hidden'>
        {!nav ? <AiOutlineMenu size={22} /> : <AiOutlineClose size={22} />}
        {/* <AiOutlineMenu size={22} /> */}
      </div>
      {/* mobile nav bar goes here according to device using state */}
      <div className={nav ? 'fixed left-0 top-0 bg-white w-[80%] h-full ease-in-out duration-500 scroll-smooth' : 'fixed  left-[-100%]'}>
      <h1 className='text-4xl mt-10'>Sleek Car Rental's</h1>
        <ul className='pt-[50px] '>
          <li className='p-4 text-xl cursor-pointer'>Home</li>
          <li className='p-4 text-xl cursor-pointer'>Services</li>
          <li className='p-4 text-xl cursor-pointer'>About Us</li>
          <li className='p-4 text-xl cursor-pointer'>Contact Us</li>
          <li className='p-4 text-xl cursor-pointer text-blue-500 uppercase'>Login</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

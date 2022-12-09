import React from 'react';
import LoginBg from '../assets/images/login-bg.jpeg'

const Signup = () => {
    return (
        <div className='max-w-[1140px]  justify-center items-center mx-auto mt-10 border-t-2 grid grid-cols-1 sm:grid-cols-2 overflow-hidden'>
                <div className='bg-gray-100 h-full items-center justify-center'>
                    <h1 className='text-center text-3xl sm:text-4xl font-semibold m-5'>SignUp</h1>
                    
                    {/* container for form */}
                    <div className=''>
                    <div className='h-full mx-auto w-[90%]'>
                    <form action="" className='flex flex-col  p-2'>
                        <label htmlFor="" className='text-xl'>First name</label>
                        <input type="text" placeholder='First Name' className='p-2 mt-2 mb-3 rounded-md border bg-white '/>

                        <label htmlFor="" className='text-xl'>Last Name</label>
                        <input type="text"  placeholder='Last Name' className='p-2 mt-2 mb-3 rounded-md border bg-white'/>

                        <label htmlFor="" className='text-xl'>Phone Number</label>
                        <input type="" placeholder='Phone Number' className='p-2 mt-2 mb-3 rounded-md border bg-white'/>

                        <label htmlFor="" className='text-xl'>Password</label>
                        <input type="text" placeholder='Password' className='p-2 mt-2 mb-3 rounded-md border bg-white'/>
                        
                        <label htmlFor="" className='text-xl'>Confirm Password</label>
                        <input type="text" placeholder='Confirm Password' className='p-2 mt-2 mb-3 rounded-md border bg-white'/>

                        <button className='bg-blue-500 active:bg-blue-700 hover:shadow-lg text-white mt-5 px-2 py-3  rounded-md text-xl'>Signin</button>
                    </form>
                    <p className='text-center'>Already have an account.? <span>Login</span> </p>
                    </div>
                    </div>
                    
                    
                </div>
                <div className='sm:block hidden h-screen'>
                    <img src={LoginBg} alt="bg" className='w-full h-full' />
                </div>
        </div>
    )
}

export default Signup;
import React from 'react';

const Login = () => {
    return (
        <div className='max-w-[1140px] h-screen justify-center items-center mx-auto mt-10 border-t-2 bg-gray-100 '>
            <div className='items-center justify-center'>
                <h1 className='text-center text-3xl sm:text-4xl font-semibold m-5'>Login</h1>

                {/* container for form */}
                <div className=''>
                    <div className='mx-auto sm:w-[50%]'>
                        <form action="" className='flex flex-col  p-2'>
                            <label htmlFor="" className='text-xl'>Username</label>
                            <input type="text" placeholder='Enter phone no' className='p-2 mt-2 mb-3 rounded-md border bg-white ' />

                            <label htmlFor="" className='text-xl'>Password</label>
                            <input type="text" placeholder='Password' className='p-2 mt-2 mb-3 rounded-md border bg-white ' />

                            <div className='flex items-center px-2'>
                                <input type="checkbox" name="check" id="remember me" className='text-xl' />
                                <label htmlFor="" className='p-2'>Remember me</label>
                            </div>
                            <button className='bg-blue-500 focus:bg-blue-700 hover:shadow-lg text-white mt-5 px-2 py-3  rounded-md text-xl'>Login</button>
                        </form>
                        <p className='text-center'>Dont have an account.? <span>Create</span> </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Login;
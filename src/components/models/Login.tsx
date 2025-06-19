import React from 'react';

type LoginProps = object;

const Login:React.FC<LoginProps> = () => {
  
  return <form className='space-y-6 px-4 pb-4'>
      <h3 className='text-x1 font-medium text-white'>Sign Into Leet</h3>
      <div>
          <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
            Your Email
          </label>
          <input type='email' name='email' id="email" className='border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600
                    border-gray-500 placeholder-gray-400 text-white' placeholder='name@gmail.com'/>
      </div>
      <div>
          <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
            Your Password
          </label>
          <input type='password' name='password' id="password" className='border-2 outline-none sm:text-sm rounded=lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600
                    border-gray-500 placeholder-gray-400 text-white' />
      </div>
      <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
          text-small px-5 py-2.5 text-center bg-[rgb(255,161,22)] hover:bg-[rgb(193,122,15)]'>Login</button>
      <button className='flex w-full justify-end'>
          <a href='#' className='text-sm block text-[rgb(255,161,22)] hover:underlined w-full text-right'>Forgot Password</a>
      </button>
      <div className='text-sm font-medium text-gray-500'>
        Not Registered?
        <a href='#' className='text-blue-700 hover:underline'>Create Account</a>
      </div>

  </form>
}
export default Login;
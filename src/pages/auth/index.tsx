import Navbar from '@/components/navbar/navbar';
import React from 'react';

type AuthProps = object;

const Auth:React.FC<AuthProps> = () => {
  
  return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
    <div className='max-w-7xl mx-auto'>
        <Navbar/>
      </div>
    
    </div>
}
export default Auth;
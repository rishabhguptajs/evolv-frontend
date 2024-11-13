import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='bg-black m-4 h-14 flex items-center justify-between px-4'>
      <div className='text-white'>Logo</div>
      <div className='space-x-4'>
        <a href="#" className='text-white'>Home</a>
        <a href="#" className='text-white'>About</a>
        <a href="#" className='text-white'>Services</a>
        <a href="#" className='text-white'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

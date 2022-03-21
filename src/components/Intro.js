import React from 'react';

import { TextLoop } from 'react-text-loop-next';
import Link from 'next/link';

function Intro() {
  return (
    <div className=' relative flex min-h-screen content-center items-center  justify-center'>
      <img
        className=' z-0 absolute h-full w-full object-cover mix-blend-overlay'
        src='https://i.pinimg.com/originals/8a/6f/72/8a6f72839f6bdfa0de3a97afddcc9c0a.jpg'
        alt=''
      />
      <div className='relative z-100'>

      <Link href="/port">
      <div className='font-sourCode'>
        <h1 className='flex flex-row justify-around p-5 font-sourCode text-white	'>
          Welcome to my
          <h2 className=' cursor-pointer px-2 font-sourCode text-gray-300  underline duration-200  ease-in hover:text-gray-500'>
            Portfolio
          </h2>
        </h1>
      </div>
      </Link>
      </div>

    </div>
  );
}

export default Intro;

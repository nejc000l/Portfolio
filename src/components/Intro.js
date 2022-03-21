import React from 'react'

import { TextLoop } from 'react-text-loop-next';
import Link from 'next/link';

function Intro() {

  return (
    <div className=' relative flex min-h-screen content-center items-center  justify-center'>
    <img
      className='absolute h-full w-full object-cover mix-blend-overlay'
      src='https://i.pinimg.com/originals/8a/6f/72/8a6f72839f6bdfa0de3a97afddcc9c0a.jpg'
      alt=''
    />
    <div className="font-sourCode">
      <TextLoop interval={2500}>
        <h1 className='font-sourCode flex flex-row justify-around p-5 text-white	'>
          {' '}
          Welcome to my {' '}
          <Link href='/port'>
            <h1 className=' font-sourCode cursor-pointer px-2 underline  text-gray-300 duration-200  ease-in hover:text-gray-500'>
              {' '}
              Portfolio{' '}
            </h1>
          </Link>{' '}
        </h1>
        <h1 className='font-sourCode text-white'>
          Here are some of the projects I made so far.
        </h1>
      </TextLoop>
    </div>
  </div>  )
}

export default Intro
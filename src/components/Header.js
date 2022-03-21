import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import { AiFillGithub } from '@react-icons/all-files/Ai/AiFillGithub';
import { SiNetlify } from '@react-icons/all-files/Si/SiNetlify';
import Projects from './projects';

function Header() {
  return (
    <main className=' overflow-hidden relative mx-auto flex min-h-screen w-auto  flex-col items-center justify-center'>
      <div className="text-white flex justify-center">
        <div className='flex justify-center p-2	'>
        <a className='z-100' href="https://github.com/nejc000l?tab=repositories">
        <img src="images/gith.png" className='z-0 h-[5rem] cursor-pointer p-2 text-[70px] duration-300  ease-in hover:text-black'>
         
          </img>   </a>
        </div>
        <div className='flex justify-center p-2	'>
          <a href="https://app.netlify.com/teams/nejc000l/sites"><img src="images/netlfiy.png"className='cursor-pointer h-[5rem] p-2 text-[70px] duration-300 ease-in hover:text-black' /></a>
        </div>
      </div>
    <Projects/>
     
    </main>
  );
}

export default Header;

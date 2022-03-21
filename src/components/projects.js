import datas from '../data.json';
import React from 'react';

import Link from 'next/link';
console.log(datas[0]);
function Projects() {
  return (
    <div className='flex md:w-96 content-center items-center justify-center'>
      <div className='mx-[10rem]'>
        <div>
          <div className=' cursor-pointer text-center text-white'>
            <Link className=' cursor-pointer' href='/'>
              <h1 className='font-sourCode'>Projects</h1>
            </Link>
          </div>
          <hr className='my-3 border-solid border-gray-400 drop-shadow-lg	' />
        </div>
        <div className='h-[37rem]  w-max overflow-scroll  scrollbar-default scrollbar-thin scrollbar-thumb-gray-900'>
          {datas.map((data, index) => {
            return (
              <div className='' key={data.id}>
                <a href={data.git}>
                  <h1 className='text-md py-2 text-center font-sourCode text-gray-100 duration-500 ease-in hover:text-gray-400'>
                    {data.title}
                  </h1>
                </a>

                <a className='text-sm	 z-50' href={data.link}>
                  <div className='my-2 flex place-content-center'>
                    <img
                      className='h-auto	w-96 place-content-center duration-300 ease-in hover:w-[28rem]'
                      src={data.image}
                    />
                  </div>

                  <h4 className='text-sm md:px-[0rem]	px-[5rem] w-[30rem] text-center font-sourCode text-[1rem] text-white'>
                    {data.about}
                  </h4>

                  <div className=''>
                    <span className='flex flex-row justify-center space-x-4  '>
                      <img className='h-auto w-10 my-2' src={data.path} />
                    </span>
                    {/*<hr className='my-3 border-solid  border-gray-100 drop-shadow-lg	' />*/}

                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <hr className='my-3 border-solid border-gray-400 drop-shadow-md' />
      </div>
    </div>
  );
}

export default Projects;

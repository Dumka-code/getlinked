'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'

export default function Div7() {
     
    return (
  
        <div className=" flex flex-col justify-center items-center text-white snap-center sectionz">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full ">
        <div className="md:hidden relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

           <section className="grid justify-items-center relative">     
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />
           <Image src='/9486889 1.svg' className='w-80 lg:w-96 h-80 lg:h-96 mx-auto my-auto ' alt='xx' width={0} height={0} />
          </section>

          <section className="md:col-span-1 md:my-12 p-6 relative">
            <div className='md:px-24 text-center md:text-start'>
            <h2 className="text-2xl lg:text-3xl font-clash">Prize and</h2> 
            <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Rewards  </h2>
            <p className='py-4 font-medium'>
            Highlight of the prizes or rewards for winners and for participants.           </p>
            </div>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
            <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />

          <div className="flex flex-row justify-center gap-4 my-24">
  <div className=' relative bg-[#D434FE] w-full h-fit pt-20 lg:pt-28 rounded-md p-2 pb-8 text-base lg:text-3xl font-bold text-center backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D434FE]'>
  <Image src='/silver_medal 1.svg' className='w-24 lg:w-40 h-24 lg:h-40 mx-auto absolute -top-8 md:-top-20 left-0 right-0' alt='xx' width={0} height={0} />
           <h2 className="">2nd</h2>
           <h2 className="text-sm lg:text-2xl">Runner</h2> 
           <h2 className="text-[#D434FE] mt-2">N300,000</h2>
  </div>
  <div className=' relative bg-[#903AFF] w-full h-fit pt-20 lg:pt-28 rounded-md p-1 pb-12 text-base lg:text-3xl font-bold text-center backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#903AFF]'>
  <Image src='/gold_medal 1.svg' className='w-44 lg:w-80 h-44 lg:h-80 mx-auto absolute -top-24 md:-top-44 left-0 right-0' alt='xx' width={0} height={0} />
           <h2 className="">1st</h2>
           <h2 className="text-sm lg:text-2xl">Runner</h2> 
           <h2 className="text-[#903AFF] mt-2">N400,000</h2>
  </div>

  <div className=' relative bg-[#D434FE] w-full h-fit pt-20 lg:pt-28 rounded-md p-2 pb-8 text-base lg:text-3xl font-bold text-center backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D434FE]'>
  <Image src='/bronze_medal 1.svg' className='w-24 lg:w-40 h-24 lg:h-40 mx-auto absolute -top-8 md:-top-20 left-0 right-0' alt='xx' width={0} height={0} />
           <h2 className="">3rd</h2>
           <h2 className="text-sm lg:text-2xl">Runner</h2> 
           <h2 className="text-[#D434FE] mt-2">N150,000</h2>
  </div>
  
</div>
          
        </section>

        </div>

      </div>
  
    )
  }
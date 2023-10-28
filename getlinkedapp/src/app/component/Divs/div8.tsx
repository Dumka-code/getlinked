'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'


  
export default function Div8() {
   
  
    return (
        <div className=" flex flex-col justify-center items-center text-white sectionz snap-center">
        
         
        <div className='relative text-center'> 
           <h2 className="text-2xl lg:text-3xl font-clash">Partners and Sponsors</h2> 
           <p className='font-medium w-96 mt-4'>
           Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors            </p>
           </div>
         
         
 <div className="grid grid-cols-3  border-2 border-[#D434FE] gap-4 justify-items-center    p-12 lg:p-24 my-12 mx-6 ">
 
  <div className=' w-full h-18 lg:h-32 p-2 mx-4'>
  <Image src='/Liberty company logo white colour.svg' className='w-full lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
</div>

  <div className=' w-full h-18 lg:h-32 mx-4 lg:mx-8 p-2 border-x-2 border-[#D434FE]'>
  <Image src='/Liberty company logo white.svg' className='w-16 lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
  </div>

  <div className=' w-full h-18 lg:h-32 mx-4 p-2'>
  <Image src='/Winwise logo White colour 1.svg' className='w-16 lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
  </div>

  <div className='w-16 lg:w-56 h-0.5 bg-[#D434FE] '></div>
  <div className='w-16 lg:w-56 h-0.5 bg-[#D434FE] '></div>
  <div className='w-16 lg:w-56 h-0.5 bg-[#D434FE] '></div>
  
  <div className=' w-full h-18 lg:h-326 mx-4 p-2'>
  <Image src='/wisper logo white.svg' className='w-16 lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
  </div>

  <div className=' w-full h-18 lg:h-32 mx-4 lg:mx-8 p-2 border-x-2 border-[#D434FE]'>
  <Image src='/Paybox.svg' className='w-16 lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
  </div>

  <div className=' w-full h-18 lg:h-32 mx-4 p-2 '>
  <Image src='/Vizual Plus.svg' className='w-16 lg:w-44 h-16 lg:h-28 mx-auto' alt='xx' width={0} height={0} />
  </div>


</div>
         

      </div>
  
    )
  }
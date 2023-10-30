'use client';
import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image'

export default function Div2() {
     
    return (
  
        <div id="div2" className=" flex flex-col justify-center items-center text-white snap-center">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full ">
       
           <section className="skew-y-12">     
           <Image src='/The big idea.svg' className='w-80 lg:w-96 h-80 lg:h-96 mx-auto' alt='xx' width={0} height={0} />
           <Image src='/arrow.svg' className='w-10 lg:w-12 h-10 lg:h-12 absolute buttom-8 right-40 lg:right-30 lg:buttom-70' alt='xx' width={0} height={0} />

          </section> 

          <section className="md:col-span-1 mt-6">

          <div className="mt-12 text-center lg:text-start px-6">     
                     <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash">Introduction to getlinked</h2> 
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">  tech Hackathon 1.0  </h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4' alt='xx' width={0} height={0} />
           </div>

           <p className='py-4 font-medium'>
           Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you re a coding genius, a design maverick, or a concept wizard, youll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, thats what were all about!
           </p>
            </div>
        </section>

        </div>

      </div>
  
    )
  }
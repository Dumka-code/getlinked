'use client';
import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image'

export default function Div3() {
   useEffect(() => {
    
    const relativeEl = document.querySelector('.relative-values') as HTMLElement | null;

    if (relativeEl) {
      relativeEl.style.transform = 'translateX(-100px)';
    }
    

anime({
    loop:true,
  targets: '.relative-values',
  translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 1000
  },
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});

  }, []);
  
    return (
  
        <div className=" flex flex-col justify-center items-center text-white sectionz snap-center">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
       
           <section className="order-last lg:-order-last">     
           <div className="mt-12 text-center lg:text-start px-6 lg:m-16">     
                     <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash">Rules and</h2> 
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Guidelines</h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4' alt='xx' width={0} height={0} />
           </div>
             
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

           <p className='py-4 font-medium'>
           Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!           </p>
            </div>

          </section>

          <section className="md:col-span-1 mt-6 relative">

          <Image src='/74501591.svg' className='css-transforms w-80 lg:w-96 h-80 lg:h-96 mx-auto' alt='xx' width={0} height={0} />
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
          <Image src='/Ellipse.svg' className='-z-50 relative-values w-16 lg:w-18 h-16 lg:h-18 absolute top-8 right-12 lg:right-28' alt='xx' width={0} height={0} />

        </section>

        </div>

      </div>
  
    )
  }
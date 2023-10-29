'use client';
import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image'
import {Unica_One } from 'next/font/google'


const inter_2 = Unica_One({
  weight: ['400'],
  subsets: ['latin'],
 })

export default function Div1() {
   useEffect(() => {
   const textWrapper = document.querySelector('.ml3') as HTMLElement | null;

if (textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
}

      anime({
        targets: '.xc', 
        transformOrigin:"center center",
        rotate: 360,
        loop:true,
        duration: 8000, // Animation duration in milliseconds
        easing: 'easeInOutSine', // Easing function
        direction: 'alternate',
      });

      var roundLogEl = document.querySelector('.round-log');

anime({
  loop:6,
  targets: roundLogEl,
  innerHTML: [300, 0],
  easing: 'linear',
  round: 0.1 // Will round the animated value to 1 decimal
});

      const slideInElement = document.querySelector('.slide-in');
    anime({
      targets: slideInElement,
      translateY: '100%',
      direction: 'alternate',
      delay: anime.stagger(100)
    });

anime.timeline({loop: true, autoplay: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }, []);
  
    return (
  
        <div className=" flex flex-col justify-center items-center text-white  snap-center">
      
         <div className='flex justify-center w-full h-12  lg:justify-end  items-center'>
               <div className='pt-2 text-base  lg:mx-12 lg:text-xl font-semibold italic relative'>Igniting a Revolution in HR Innovation<p className="arch w-32 lg:w-44"></p></div>
               </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-[url('/metrix.svg')] bg-cover w-full lg:px-16">
       
           <section className="slide-in lg:mx-auto">     
           
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
           
           <div>
           <div className="mt-12 text-center lg:text-start">     
           
           <div className=' relative h-fit'>
           <div className="text-4xl lg:text-6xl font-clash">getlinked Te<span className='relative w-fit'>
             c
           <Image src='/Creative.svg' className='w-14 h-14 absolute -top-9 left-2' alt='xx' width={0} height={0} />

            </span>h</div>
           </div>

           <div className='h-16  flex lg:justify-start justify-center items-center'> <div className="text-4xl lg:text-6xl font-clash"> <div className='ml3 inline'>Hackathon</div> <span className='inline text-[#D434FE]'> 1.0</span></div>
           <Image src='/chain-9365116-7621444.svg' className='w-10 h-10 lg:w-14 lg:h-14  inline' alt='xx' width={0} height={0} />
           <Image src='/1f4a5.svg' className='w-10 h-10 lg:w-14 lg:h-14 inline' alt='xx' width={0} height={0} />
            </div>
            </div>
            <p className="mt-4 text-center text-sm px-4 lg:px-0">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize  </p>
            </div>

               <div className='flex justify-center lg:justify-start items-center'>
               <button className="rounded   my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF]">Register</button>
               </div>

               <div className= { `${inter_2.className} text-3xl lg:text-4xl text-center lg:text-start` }>
                <div className='inline'>00<span className='text-sm'>m</span> </div>
                <div className='inline mx-6'>00<span className='text-sm'>m</span> </div>
                <div className='inline'><span className='round-log'></span><span className=''>0</span><span className='text-sm'>s</span> </div>
               </div>
          </section>

          <section className="md:col-span-1  bg-[url('/man.svg')] bg-contain lg:bg-right lg:bg-fill saturate-50 bg-no-repeat mt-4">

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

           <div className=' m-4 overflow-hidden h-96'> <Image src='/Image.svg' className='w-80 lg:w-96 h-96 mx-auto mt-10 saturate-200  xc' alt='xc' width={0} height={0} /> </div>

        </section>

        </div>

      </div>
  
    )
  }
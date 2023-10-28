'use client';
import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image'


export default function Div4() {

  

   useEffect(() => {
   
    anime({
        targets: '.relative-values2',
        keyframes: [
          {translateY: -10},
          {translateX: 100},
          {translateY: 100},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: true
      });

  }, []);
  
    return (
        <div className=" flex flex-col justify-center items-center text-white sectionz snap-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full">
        
           <section className="relative my-auto">    
            
          <Image src='/8046554 1.svg' className='w-80 lg:w-96 h-80 lg:h-96 mx-auto' alt='xx' width={0} height={0} />
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
          <Image src='/Ellipse.svg' className='-z-50 relative-values2 w-16 lg:w-18 h-16 lg:h-18 absolute top-8 left-20 lg:left-48' alt='xx' width={0} height={0} />
          </section>
          

          <section className="md:col-span-1 mt-6 lg:text-sm">
          <div className="mt-12 text-center lg:text-start px-6 lg:m-16">     
          <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash">Judging Criteria</h2> 
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Key attributes</h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4' alt='xx' width={0} height={0} />
           </div>
             
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
           
           <div className='py-4'>
           <p className='font-semibold inline text-[#D434FE]'>Innovation and Creativity: </p>
           <p className='font-medium inline'>Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world problem in a novel 
            way or introduces innovative features.</p>
           </div>
           
           <div className='py-4'>
           <p className='font-semibold inline text-[#D434FE]'>Functionality: </p>
           <p className='font-medium inline'>Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.</p>
           </div>

           <div className='py-4'>
           <p className='font-semibold inline text-[#D434FE]'>Impact and Relevance: </p>
           <p className='font-medium inline'>
           Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.
           </p>
           </div>

           <div className='py-4'>
           <p className='font-semibold inline text-[#D434FE]'>Technical Complexity: </p>
           <p className='font-medium inline'>Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.</p>
           </div>

           <div className='py-4'>
           <p className='font-semibold inline text-[#D434FE]'>Adherence to Hackathon Rules: </p>
           <p className='font-medium inline'>Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.</p>
           </div>

           <div className='flex justify-center lg:justify-start items-center'>
               <button className="rounded   my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF]">Read More</button>
               </div>


           
           
            </div>
        </section>

        </div>
      </div>
  
    )
  }
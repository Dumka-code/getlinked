'use client';
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa';


export default function Div9() {
    const items = ['The Standard License grants you a non-exclusive right to  navigate and register for our event', 'You are licensed to use the item available at any free source sites, for your project developement'];
  
    return (
        <div className=" flex flex-col justify-center items-center text-white sectionz snap-center">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full"> 
        
           <section className="relative">    
           <div className="mt-12 text-center lg:text-start px-6 lg:m-16">     
          <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash">Privacy Policy and</h2> 
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Terms</h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4 -z-50' alt='xx' width={0} height={0} />
           <p className='py-2 font-medium text-slate-500'>  Last updated on September 12, 2023  </p>

           </div>
             
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
           
           <div className='py-4'>
           <p className='font-medium inline'>Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant </p>
           </div>  
           
           <div className='p-12 border-2 border-[#D434FE] mt-12 backdrop-filter backdrop-blur-md bg-opacity-30'>
                <p>At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>

<h1 className='text-[#D434FE] text-2xl font-semibold my-2'>Licensing Policy</h1>
<p className='font-semibold'>Here are terms of our Standard License:</p>

<ul className="list-none pl-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-6 space-y-2">
          <FaCheckCircle className="text-green-500 pt-2 w-12 h-12" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <button className="rounded   my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF]">Read More</button>



            </div>
             </div>

            
          </section>
          

          <section className="md:col-span-1 mt-2 lg:text-sm relative p-12 my-12  bg-[url('/Vector.svg')] bg-contain bg-center bg-no-repeat justify-items-center">
          <Image src='/08 1.svg' className='w-80 lg:w-96 h-80 lg:h-96 mx-auto my-auto ' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />

            
        </section>

        </div>
      </div>
  
    )
  }
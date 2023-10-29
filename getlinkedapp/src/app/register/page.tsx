'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import NavBar from '../component/NavBar'


export default function Register() {
   const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
      }
     
    return (
      <div>
   <NavBar/>
        <div  className=" flex flex-col justify-center items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full py-12">
       
           <section className="grid justify-items-center relative">
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />
           <Image src='/3d-graphic-designer-showing-thumbs-up-png 1.svg' className='w-80 lg:w-full h-80 lg:h-full mx-auto my-auto ' alt='xx' width={0} height={0} />
          </section> 

          <section className="md:col-span-1  text-white">

            <div className='p-8 w-fit bg-slate-900 rounded-lg  backdrop-filter  bg-opacity-40'>

            <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Register</h2>

            <p className='py-4 font-medium'>
            Be part of this movement!  </p>

            <h2 className="text-xl lg:text-2xl">CREATE YOUR ACCOUNT</h2>

            <form className='space-y-8 my-4'>
      
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                Teams Name
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent text-sm px-4 p-2 border-solid border-2 border-white-600 rounded"
          placeholder="Enter The name of your group"
        />
            
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6">
               Phone no.
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent  text-sm px-4 p-2  border-solid border-2 border-white-600 rounded"
          placeholder="Enter your phone number"
        />
            
              </div>
            </div>
            </div>


            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
               Email
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent text-sm px-4 p-2 border-solid border-2 border-white-600 rounded"
          placeholder="Enter your email address"
        />
            
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6">
               Project Topic
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent text-sm px-4 p-2 border-solid border-2 border-white-600 rounded"
          placeholder="Full Name"
        />
            
              </div>
            </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                Category
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent text-sm px-4 p-2 border-solid border-2 border-white-600 rounded"
          placeholder="Select your Category"
        />
            
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6">
               Group Size
              </label>
              <div className="mt-1">
              <input
          type="text"
          className="bg-transparent text-sm px-4 p-2 border-solid border-2 border-white-600 rounded"
          placeholder="Select"
        />
            
              </div>
            </div>
            </div>
      
            <p className='py-1 text-sm text-[#D434FE]'>Please review your registration details before submitting </p>

          <div>  
            <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            <p className='py-2 text-sm inline'> I agreed with the event terms and conditions  and privacy policy</p>
            </div>


<div className='text-center'>
<button className="rounded text-white  w-full my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-transparent">Register Now</button>
</div>
   </form>
   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

            </div>
          
        </section>
      
    
        </div>

      </div>
      </div>
    )
  }
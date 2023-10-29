'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'
import NavBar from '../component/NavBar'

import {AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import {BiLogoLinkedin, BiLogoFacebook} from 'react-icons/bi'


export default function Contact() {
     
    return (
      <div>
   <NavBar/>
        <div  className=" flex flex-col justify-center items-center ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full py-12">
       
           <section className=" hidden sm:block">
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

            <div className="mt-12 text-center lg:text-start px-6">     
                     <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Get in touch  </h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4' alt='xx' width={0} height={0} />
           </div>

           <ul className="list-none my-2 space-y-8 font-semibold">
  <li>Contact  <br/> Information</li>
  <li>27,Alara Street  <br/>    Yaba 100012 <br/>    Lagos State</li>
    <li>Call Us : 08109234359</li>
    <li> we are open from Monday-Friday <br/>08:00am - 05:00pm</li>
  <li className='text-[#D434FE] text-xs  space-x-2'>Share on  <AiOutlineInstagram className='inline' size='28'/> <AiOutlineTwitter className='inline' size='28'/> <BiLogoFacebook className='inline' size='28'/>  <BiLogoLinkedin className='inline' size='28'/>  </li>
  </ul>
            </div>     

          </section> 

          <section className="md:col-span-1 mt-6">

            <div className='p-8 w-fit bg-slate-900 rounded-lg  backdrop-filter  bg-opacity-40'>

            <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Questions or need assistance?</h2>
            <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Let us know about it!</h2>

              

            <form className='space-y-8 my-6'>
            <input
          type="text"
          className="bg-transparent block  p-3 border-solid border-2 border-white-600 rounded"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="bg-transparent block  p-3 border-solid border-2 border-white-600 rounded"
          placeholder="Mail"
        />
        <textarea
           rows={3}          
          className="bg-transparent block w-full md:w-96 p-3 border-solid border-2 border-white-600 rounded"
          placeholder="Message"
          defaultValue={'Message'}
        />
<div className='text-center'>
<button className="rounded text-white   my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-transparent">Submit</button>
</div>
   </form>
   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

            </div>
          
        </section>
      
      <div className='text-center md:hidden'>
      <div className='text-[#D434FE] text-xs  space-x-2'>Share on <br/> <AiOutlineInstagram className='inline' size='28'/> <AiOutlineTwitter className='inline' size='28'/> <BiLogoFacebook className='inline' size='28'/>  <BiLogoLinkedin className='inline' size='28'/>  </div>

      </div>
        </div>

      </div>
      </div>
    )
  }
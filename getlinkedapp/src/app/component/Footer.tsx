'use client';
import Image from 'next/image'
import {AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import {BiLogoLinkedin, BiLogoFacebook, BiPhoneCall, BiLocationPlus} from 'react-icons/bi'


export default function Footer() {
     
    return (
  
        <div className=" flex flex-col justify-center items-center text-white snap-center sectionz p-6">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full ">
        <div className="md:hidden relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>

           <section className="grid justify-items-center relative m-6">     
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />
          <div className='md:px-24 text-sm text-start'>
            <div className="text-2xl lg:text-3xl font-clash">get<span className='text-[#D434FE]'>linked</span> </div> 
            <p className='py-4 font-medium'>
            Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology </p>
          
            <div className='mt-12 '>  <span>Terms of use </span> <span className='text-[#D434FE]'> | </span>  <span>Privacy policy</span> </div>
            </div>

          </section> 

          <section className="md:col-span-1  text-sm p-6 relative">
             <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />
         <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
         
          <div className=''>
          <div className="text-[#D434FE] font-semibold">Useful links </div> 
          <ul className="list-none my-2 space-y-3 font-semibold">
  <li>Overview</li>
  <li>Timeline</li>
  <li>FAQs</li>
  <li>Register</li>
  <li className='text-[#D434FE] text-xs  space-x-2'>Follow Us   <AiOutlineInstagram className='inline'/> <AiOutlineTwitter className='inline'/> <BiLogoFacebook className='inline'/>  <BiLogoLinkedin className='inline'/>  </li>
  </ul>
  </div>
  
  <div className='md:col-span-1 my-8 md:my-0 text-sm space-y-3'>
  <div className="text-[#D434FE] font-semibold">Contact Us </div> 
 <ul className="list-none space-y-3  font-semibold">
  <li className=''> <BiPhoneCall className='inline'/> +234 810 923 4359</li>
  <li> <BiLocationPlus className='inline'/> location:  No. So so so and So ...</li>
  </ul>
  </div>
  </div>

        </section>
        </div>
        <div className='text-center font-semibold'>All right reserved  ©  getlinked Ltd.</div>

      </div>
  
    )
  }
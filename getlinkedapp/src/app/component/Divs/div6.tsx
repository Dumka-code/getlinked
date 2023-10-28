'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'
import anime from 'animejs';

const timelineData = [
    {
      number: 1,
      title: 'Hackathon Announcement',
      date: 'November 18, 2023',
      description: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register.',
    },
    {
      number: 2,
      title: 'Teams Registration begins',
      date: 'November 18, 2023',
      description: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    },
    {
      number: 3,
      title: 'Teams Registration ends',
      date: 'November 18, 2023',
      description: 'Interested Participants are no longer Allowed to register',
    },
    {
      number: 4,
      title: 'Announcement of the accepted teams and ideas',
      date: 'November 18, 2023',
      description: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    },
    {
      number: 5,
      title: 'Getlinked Hackathon 1.0 Offically Begins',
      date: 'November 18, 2023',
      description: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    },
    {
      number: 6,
      title: 'Demo Day',
      date: 'November 18, 2023',
      description: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
    },
    // Add more timeline items as needed
  ];
  

  
export default function Div6() {
   
  
    return (
        <div className=" flex flex-col justify-center items-center text-white   snap-center">
        
         
        <div className='relative text-center'> 
           <h2 className="text-2xl lg:text-3xl font-clash">Frequently Ask</h2> 
           <p className='font-medium w-96 mt-4'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
           </div>
         
         
         
           <div className="space-y-10 my-12 ">
            
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={` relative flex lg:items-center items-end justify-between md:justify-normal before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-[#D434FE]  before:to-transparent ${
            index % 2 === 0 ? '' : 'md:even:flex-row-reverse'
          } group ${index === 0 ? 'is-active' : ''}`}
        >
          {/* Icon */}
          
          <div
            className={`flex  z-10  items-center justify-center w-10 h-10 font-bold rounded-full  bg-gradient-to-r from-[#D434FE] to-[#903AFF] ${
              index === 0 ? 'group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50' : ''
            }  shrink-1 md:order-1 ${
              index % 2 === 0 ? 'md:group-odd:translate-x-[165%]' : 'md:group-even:-translate-x-[165%]'
            }`}
          >
            {item.number}
          </div>

          {/* Card */}
          <div className={`w-[calc(100%-4rem)] md:w-[calc(45%-2.5rem)]    p-2`}>
            <div className={`flex items-center justify-start space-x-2 mb-1 ${index % 2 === 0 ? 'md:justify-end' : ''} `} >
              <div className="font-bold text-[#D434FE]">{item.title}</div>
              {/* Render the date inside the box on small screens */}
              
            </div>
            <div className={`text-slate-500 text-sm ${index % 2 === 0 ? 'md:text-end' : ''} `}>{item.description}</div>
            <time className={`font-caveat font-semibold text-[#D434FE]  md:hidden`}> {item.date}</time>
          
           {/* Render the date on large screens */}
            <time className={`font-caveat  hidden md:block font-semibold text-[#D434FE] text-xl absolute top-[40%] ${
              index % 2 === 0 ? 'md:end-[19%]' : 'md:start-[19%]'
            }`}>
              {item.date}
            </time>
          </div>
         
        </div>
      ))}
    </div>


      </div>
  
    )
  }
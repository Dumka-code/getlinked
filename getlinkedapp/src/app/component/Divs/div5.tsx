'use client';
import React, { useEffect, useRef  } from 'react';
import { BsPlus } from 'react-icons/bs';
import Image from 'next/image'
import anime from 'animejs';



export default function Div5() {
  const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What happens after the hackathon ends",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    
  ];

  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(".faq-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling as HTMLElement;
        answer.classList.toggle("hidden");
      });
    });
   // Function to handle the animation
    const playAnimation = () => {
      anime({
        targets: '.staggering-direction .el',
        translateX: 370,
        direction: 'reverse',
        delay: anime.stagger(100, { direction: 'reverse' }),
      });
    };

    // Intersection Observer configuration
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in the viewport, play the animation
          playAnimation();
          // Stop observing to prevent multiple executions
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the element
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    // Re-observe the element when it exits the viewport
    return () => {
      if (animationRef.current) {
        observer.observe(animationRef.current);
      }
    };
  }, []);
  
    return (
        <div id="div5" className=" flex flex-col justify-center items-center text-white sectionz snap-center">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full"> 
        
           <section className="relative">    
           <div className="mt-12 text-center lg:text-start px-6 lg:m-16">     
          <div className='relative'>
           <h2 className="text-2xl lg:text-3xl font-clash">Frequently Ask</h2> 
           <h2 className="text-2xl lg:text-3xl font-clash text-[#D434FE]">Question</h2>
           <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-1 lg:right-4 -z-50' alt='xx' width={0} height={0} />
           </div>
             
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
           
           <div className='py-4'>
           <p className='font-medium inline'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
           </div>
           <div className="space-y-4 staggering-direction" >
      {faqData.map((item, index) => (
        <div key={index} ref={animationRef} >
          <button className="el relative w-full text-left py-2 font-semibold border-b-2 border-[#D434FE] faq-button" >
            {item.question}
            <BsPlus className="absolute top-1 right-0 text-[#D434FE]"/>
          </button>
          <div className="hidden p-4">{item.answer}</div>
        </div>
      ))}
    </div> 
            </div>
          </section>
          

          <section className="md:col-span-1 mt-2 lg:text-sm relative p-12 my-12">
       
            <Image src='/cwok_casual_21 1.svg' className='my-12 animate-bounce w-80 lg:w-96 h-80 lg:h-96 mx-auto pt-8' alt='xx' width={0} height={0} />
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#903AFF] before:dark:opacity-10 after:dark:from-[#903AFF] after:dark:via-[#903AFF] after:dark:opacity-40 before:lg:h-[660px] z-[-1]"></div>
          <Image src='/_.svg' className='-z-50 w-16 lg:w-18 h-16 lg:h-18 absolute top-4 left-20 lg:left-40' alt='xx' width={0} height={0} />
          <Image src='/_.svg' className='-z-50 w-16 lg:w-18 h-16 lg:h-18 absolute top-0 left-40 lg:left-60 right-0' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-8 right-14 lg:right-14 -z-50' alt='xx' width={0} height={0} />
          <Image src='/star pu.svg' className='w-8 lg:w-8 h-8 lg:h-8 absolute top-20 left-10 lg:left-10 saturate-50 -z-50' alt='xx' width={0} height={0} />

          <Image src='/_.svg' className='-z-50 w-16  lg:w-18 h-16 lg:h-18 absolute top-4 right-20 lg:right-30' alt='xx' width={0} height={0} />
         
        </section>

        </div>
      </div>
  
    )
  }
'use client';
import NavBar from './component/NavBar'
import Div1 from './component/Divs/div1'
import Div2 from './component/Divs/div2'
import Div3 from './component/Divs/div3'
import Div4 from './component/Divs/div4'
import Div5 from './component/Divs/div5'
import Div6 from './component/Divs/div6'
import Div7 from './component/Divs/div7'
import Div8 from './component/Divs/div8'
import Div9 from './component/Divs/div9'
import Footer from './component/Footer';


import gsap from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger if you haven't already

export default function LandingPage() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const listones = gsap.utils.toArray<HTMLElement>('.sectionz');

    listones.forEach((listone,index) => {
      gsap.from(listone, {
        autoAlpha: 0,
    y: 30,
    duration: 0.6,
    scrollTrigger: {
      trigger: listone,
      start: 'top center', // Adjust the starting position
      toggleActions: 'play none none reverse', // Play on enter, reverse on leave
      markers: false,
        },
      });

      gsap.to(listone, {
        delay: 0.1 * index, // Adjust the delay between elements
        y: 0,
        ease: 'power2.out',
        duration: 0.6,
        scrollTrigger: {
          trigger: listone,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      });
    

    
  });
  }, []);
  return (
    <main className="">
     
      <NavBar/>
      <Div1/>
      <Div2/>
      <Div3/>
      <Div4/>
      <Div5/>
      <Div6/>
      <Div7/>
      <Div8/>
      <Div9/>
      
      <Footer/>

      

    </main>
  )
}




"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = (): void => {
    setMenuOpen(true);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation(); // Prevent event bubbling to the body element
  };

  const handleBodyClick = (): void => {
    closeMenu();
  }; 

  //The Navbar and logo component
  return (
    <header className='relative h-24'>
    <div className='px-4 sm:px-6 md:px-8'>  
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
           
        <div className='font-clash text-xl w-48'>
        <h1 className='inline'>get</h1><h1 className='inline text-[#D434FE]'>linked</h1> 
     </div>
         
   
            <div className='flex items-center'> 
           <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex items-center gap-x-8 font-bold">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400" href="">Timeline</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400" href="">Overview</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400" href="">FAQs</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 ">Contact</a></li>
                <li><a className=""> <button className="rounded-md px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF]">Register</button> </a></li>
                </ul>
                </nav>
           </div></div>

           <div className="md:hidden">
           <button onClick={openMenu}><Image src="/m_bar.svg" alt="My Image" width={25} height={10} priority/></button>

           {isMenuOpen && (
        <div>
                   
          {/* Menu content */}
<div className='fixed top-0 right-0 z-50'  onClick={handleMenuClick}>
  <div className='relative w-72 h-54  bg-slate-800 m-5 p-6 rounded-lg  backdrop-filter backdrop-blur-md bg-opacity-50'>
    
  <button className='absolute top-4 right-4 hover:bg-slate-700 rounded-lg' onClick={closeMenu}> 
  <Image src="/exit.svg" alt="My Image" width={50} height={50} priority/> 
  </button> 
  <ul className="flex flex-col gap-y-5">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400" href="">Document</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400" href="">Blogs</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400" href="">About</a></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400">Login</a></li>
                </ul>
  </div>
</div>

{/* Lower layer blur background*/}
<div className="fixed inset-0 backdrop-filter backdrop-blur-lg bg-opacity-30" onClick={handleBodyClick}>
      </div>
        </div>
      )}

      </div>
      
           </div> </div> </header>
 
  );
}

export default NavBar;
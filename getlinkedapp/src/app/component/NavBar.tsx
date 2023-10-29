"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import  {Link} from 'react-scroll';
import { CiMenuFries } from 'react-icons/ci';
import {AiOutlineClose} from 'react-icons/ai'




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
    <header className={`h-22 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-10`}>
    <div className='px-4 sm:px-6 md:px-8'>  
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
           
        <div className='font-clash text-xl w-48'>
       <a href='/'> <h1 className='inline'>get</h1><h1 className='inline text-[#D434FE]'>linked</h1> </a>
     </div>
         
   
            <div className='flex items-center'> 
           <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex items-center gap-x-8 font-bold">
                <li><Link to="div6" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400">Timeline</Link> </li>
                <li><Link to="div2" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400">Overview</Link></li>
                <li><Link to="div5" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400">FAQs</Link></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400" href='/contact'>Contact</a></li>
                <li><a className="" href='/register'> <button className="rounded-md px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF]">Register</button> </a></li>
                </ul>
                </nav>
           </div></div>

           <div className="md:hidden">
           <button onClick={openMenu}><CiMenuFries size='26'/></button>

           {isMenuOpen && (
        <div> 
                   
          {/* Menu content */}
<div className='fixed top-0 right-0 z-40'  onClick={handleMenuClick}>
  <div className='relative w-72 h-54  bg-slate-800 m-5 p-6 rounded-lg  backdrop-filter backdrop-blur-md bg-opacity-50'>
    
  <button className='absolute top-4 right-4 hover:bg-slate-700 rounded-lg' onClick={closeMenu}> 
  <AiOutlineClose/>
  </button> 
  <ul className="flex flex-col gap-y-5">
                <li><Link to="div6" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400">Timeline</Link></li>
                <li><Link to="div2" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400">Overview</Link></li>
                <li><Link to="div5" smooth={true} duration={500} className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400">FAQs</Link></li>
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400 text-base font-bold text-slate-400" href='/contact'>Contact</a></li>
                <li> <a className="" href='/register'> <button className="rounded   my-6 px-8 h-9 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-transparent">Register</button> </a></li>
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
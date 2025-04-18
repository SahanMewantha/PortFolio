"use client";
import Link from 'next/link'
import React from 'react' 
import { GlitchText } from 'glitch-text';
import Socials from './Socials';


const Header = () => {
  
  return (

    <header className='absolute z-30 w-full flex items-center px-14 xl:px-0 xl:h-[90px]'> 
      <div className='container mx-auto font-space-grotesk'>
        
        <div className='flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-6 py-2'>
          <Link href='/'>
          <div  className="text-2xl sm:text-3xl md:text-4xl">
            <GlitchText theme='red' text={'Sahan Mewantha'} />          
          </div>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
    
  )
}

export default Header
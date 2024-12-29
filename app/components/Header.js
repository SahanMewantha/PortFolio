"use client";
import Link from 'next/link'
import React from 'react' 
import { GlitchText } from 'glitch-text';
import Socials from './Socials';


const Header = () => {
  
  return (

    <header className='absolute z-30 w-full flex items-center px-14 xl:px-0 xl:h-[90px]'> 
      <div className='container mx-auto font-space-grotesk'>
        <div  style={{ fontSize: '30px' }}>
          <Link href='/'>
          <GlitchText theme='red' text={'Sahan Mewantha'} />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
    
  )
}

export default Header
import Image from 'next/image'
import React from 'react'

const Circle = () => {
  return (
    <div 
      className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse z-10' 
      aria-label="Decorative circle design element"
    >
      <Image 
        src='/circles.png' 
        width={300} 
        height={300} 
        className='w-full h-full object-cover' 
        alt="Colorful decorative circle" 
        layout='intrinsic' 
        priority
      />
    </div>
  )
}

export default Circle

import Image from 'next/image'
import React from 'react'

const Circle = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
        <Image src={'/circles.png'} 
        width={260}
        height={200}
        className='w-full h-full'
        alt="Sahan's profile picture as a developer and designer"
         />
    </div>
  )
}

export default Circle
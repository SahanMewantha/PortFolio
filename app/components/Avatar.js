import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
        src="/avatar.png" 
        alt="Sahan's profile picture as a developer and designer" 
        width={737} 
        height={678} 
        className="w-full h-full object-cover" 
        layout="intrinsic"
        priority
      />
    </div>
  )
}

export default Avatar

import Link from 'next/link'
import React from 'react'

import { RiInstagramLine , RiFacebookLine, RiLinkedinLine , RiGithubLine , RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className=' hover:text-[#9d0c2e] transition-all duration-300'>
        <RiLinkedinLine/>
      </Link>
      <Link href={''} className=' hover:text-[#9d0c2e] transition-all duration-300'>
        <RiInstagramLine/>
      </Link>
      <Link href={''} className=' hover:text-[#9d0c2e] transition-all duration-300'>
        <RiFacebookLine/>
      </Link>
      <Link href={''} className=' hover:text-[#9d0c2e] transition-all duration-300'>
        <RiGithubLine/>
      </Link>
      <Link href={''} className=' hover:text-[#9d0c2e] transition-all duration-300'>
        <RiTwitterLine/>
      </Link>
    </div>
  )
}

export default Socials
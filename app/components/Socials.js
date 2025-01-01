import Link from 'next/link'
import React from 'react'

import { RiInstagramLine , RiFacebookLine, RiLinkedinLine , RiGithubLine , RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/sahan-mewantha-012ab4248/'} className=' hover:text-[#9d0c2e] transition-all duration-300' target='_blank'>
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://www.instagram.com/sahan__mewantha/?hl=af'} className=' hover:text-[#9d0c2e] transition-all duration-300'target='_blank'>
        <RiInstagramLine/>
      </Link>
      <Link href={'https://web.facebook.com/SahanM2000'} className=' hover:text-[#9d0c2e] transition-all duration-300' target='_blank'>
        <RiFacebookLine/>
      </Link>
      <Link href={'https://github.com/SahanMewantha'} className=' hover:text-[#9d0c2e] transition-all duration-300' target='_blank'>
        <RiGithubLine/>
      </Link>
      <Link href={'https://x.com/SMewantha37213'} className=' hover:text-[#9d0c2e] transition-all duration-300' target='_blank'>
        <RiTwitterLine/>
      </Link>
    </div>
  )
}

export default Socials
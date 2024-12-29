"use client"
import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaFigma, FaNodeJs  } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiSpringboo, SiAdobephotoshop } from 'react-icons/si'
import Circle from '../components/Circle'


const page = () => {
  const [index, setIndex] = useState(0)
  return (
    <div>
      <Circle/>
    </div>
  )
}

export default page
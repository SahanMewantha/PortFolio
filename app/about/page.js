"use client"
import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiSpring, SiAdobephotoshop, SiCplusplus, SiMysql, SiMongodb, SiOracle, SiPhp } from 'react-icons/si'
import { TbBrandCSharp, TbBrandKotlin } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import Circle from '../components/Circle'


export const aboutData = [
  {tittle:'Web', info:[
    {tittle:'Web Development',icon:[
      {icon:<FaHtml5/>},
      {icon:<FaCss3/>},
      {icon:<FaJs/>},
      {icon:<FaReact/>},
      {icon:<SiFramer/>},
      {icon:<SiNextdotjs/>},
      
    ]},
    {tittle:'UI/UX Design',icon:[
    {icon:<FaFigma/>},
    {icon:<SiAdobephotoshop/>},
    ]
    },
    {tittle:'Other Languages',icon:[
    {icon:<FaJava/>},
    {icon:<TbBrandCSharp />},
    {icon:<SiCplusplus />},
    {icon:<TbBrandKotlin />},
    {icon:<IoLogoFirebase />}
    ]
    },
  
  ] },

  {tittle:'Backend',info:[
    {tittle:'Database', icon:[
      {icon:<SiMysql />},
      {icon:<SiMongodb />},
      {icon:<SiOracle />}

    ]
    },
    {tittle:'languages', icon:[
      {icon:<FaNodeJs/>},
      {icon:<SiSpring />},
      {icon:<TbBrandCSharp />},
      {icon:<SiPhp />},

    ]
    },
  ]},

  {tittle:'Credentials',info:[
    {tittle:'Web Development',stage:'NIBM-2022'},
    {tittle:'Diploma in Computer Science',stage:'NIBM-2024'},
    {tittle:'Higher Diploma in Computer Science',stage:'NIBM-2025'},
  ] }, 

];


const page = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return (
    <div className='bg-secondary/30 h-full py-32 text-center xl:text-left'>
      <Circle/>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>

        <div className='flex-1 flex flex-col justify-center'>
          <h2 className='xl:h2 text-2xl'>Captivating <span className='text-[#9d0c2e]'>stories</span> birth magnificent designs.</h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>The Firebase Realtime Database is a cloud-hosted database. 
            Data is stored as JSON and synchronized in realtime to every connected client.
            When you</p>
        </div>

        <div className='flex flex-col w-full xl:max-w-[48%] h-[380px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item,itemIndex) => {
              return(
                <div
                key={itemIndex}
                className={`${
                  index=== itemIndex && 'text-[#9d0c2e] after:w-[100%] after:bg-[#9d0c2e] after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)} 
                >
                {item.tittle}
                </div>
              )
            })}

          </div>
          <div className='py-2 xl-py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
               return(
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'> 
                  <div>{item.tittle}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icon?.map((icon, iconIndex) => {
                      return (
                        <div className='text-2xl' key={iconIndex}>{icon.icon}</div>
                      );
                    })}
                  </div>
                </div>
               ) 
            })}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default page
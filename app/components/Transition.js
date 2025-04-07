import { motion } from 'framer-motion'
import React from 'react'


const transitionVariants = {
  initial: {
    transform: 'translateX(100%)',
    width: '100%',
  },
  animate: {
    transform: 'translateX(0%)',
    width: '0%',
  },
  exit: {
    transform: ['translateX(0%)', 'translateX(100%)'],
    width: ['0%', '100%'],
  },
};


const Transition = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen z-30 bg-[#020113]'
    variants={transitionVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{delay:0.2,duration:0.6, ease:'easeInOut'}}
    > </motion.div>

<motion.div className='fixed top-0 bottom-0 right-full w-screen z-20 bg-[#be655b]'
    variants={transitionVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{delay:0.4,duration:0.6, ease:'easeInOut'}}
    > </motion.div>

<motion.div className='fixed top-0 bottom-0 right-full w-screen z-10 bg-[#9d0c2e]'
    variants={transitionVariants}
    initial='initial'
    animate='animate'
    exit='exit'
    transition={{delay:0.6,duration:0.6, ease:'easeInOut'}}
    > </motion.div>
    </>
  )
}

export default Transition
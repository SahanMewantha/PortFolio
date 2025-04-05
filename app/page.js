"use client";
import { Typewriter } from "react-simple-typewriter";
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from "framer-motion";
import Avatar from "./components/Avatar";
import ParticlesContainer from "./components/ParticlesContainer";
import Head from "next/head";


const fadeIn = (direction = "up", delay = 0.4) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};



export default function Home() {
  return (
    <>
    <Head>
              {/* Primary Meta Tags */}
        <title>Sahan - Developer, Designer, Creator</title>
        <meta name="description" content="Step into my world of creativity—learn my story, dive into my work, and let’s connect to craft something extraordinary together." />
        <meta name="keywords" content="developer, designer, creator, portfolio, sahan" />
        <meta name="author" content="Sahan" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Sahan - Developer, Designer, Creator" />
        <meta property="og:description" content="Step into my world of creativity—learn my story, dive into my work, and let’s connect to craft something extraordinary together." />
        <meta property="og:image" content="https://www.sahanmewantha.me/og-image.jpg" />
        <meta property="og:url" content="https://www.sahanmewantha.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sahan - Developer, Designer, Creator" />
        <meta name="twitter:description" content="Step into my world of creativity—learn my story, dive into my work, and let’s connect to craft something extraordinary together." />
        <meta name="twitter:image" content="https://www.sahanmewantha.me/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-secondary/60 h-full font-Ubuntu">
      <div className="w-full h-full bg-gradient-to-r from-secondary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto">
          <h1 className="h1">Hi, It'S {' '}
          <span className="text-[#9d0c2e]">Sahan</span><br/>
          I'm a {' '}
          <span className="text-[#9d0c2e]">
          <Typewriter
                    words={['developer', 'designer', 'creator']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
          </span><br/>
          </h1>
            <motion.p
            variants={fadeIn('down',0.3)}
            initial='hidden'
            animate='show'
            className="!xl:text-left xl:max-w-[500px] "
            >
            Step into my world of creativity—learn my story,
            dive into my work,
            and let’s connect to craft something extraordinary together.
            </motion.p>

          {/* not work */}
          <div className="flex justify-center xl:hidden z-10">
              <ProjectsBtn/> 
          </div>

          
          <motion.div
            variants={fadeIn('down',0.6)}
            initial='hidden'
            animate='show'
            className="hidden xl:flex"
            >
              <ProjectsBtn/>
          </motion.div>

         
        </div>
        

        <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full
        h-full absolute mix-blend-color-dodge translate-z-0 ml-12"></div>

        <div>
          <ParticlesContainer/>
        </div>

        <motion.div 
        variants={fadeIn('up',0.5)}
        initial='hidden'
        animate='show'
        
        transition={{duration:1, ease:'easeInOut'}}
        className="w-full h-full max-w-[450px] xl:max-h-[678px] absolute -bottom-52 lg-bottom-0 lg:right-[9%]">
          <Avatar/>
        </motion.div>
      </div>
      </div>
      
    </div>
    
    </>
  );
}

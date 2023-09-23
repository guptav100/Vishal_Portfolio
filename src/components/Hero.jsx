import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm
            <span className='text-[#915eff]'> Vishal
             </span></h1>
             <p className={`${styles.heroSubText} mt-2 text-white-100 flex flex-col`}>
              Frontend Developer
             </p>
             <br/>
             <p className={`${styles.heroSubText} mt-0.05 text-white-60 flex flex-col`}>I love to build applications, adding functionalities making things awesome.</p>
             
             <div className='absolute xs:bottom-10 bottom-32
             w-full flex justify-center items-center'> 
              <a href="#about">
                
              </a>
             </div>
          </div>
          </div>
          <img
             src='src\assets\avatar image.jpg' 
             className='w-25 h-25 mt-20 ml-10 flex flex-center rounded-full flex-item-center'
             />
        
    </section>
  )
}

export default Hero
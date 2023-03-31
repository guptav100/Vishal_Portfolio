import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles'
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full  ml-20'>
      <motion.div
        variants={fadeIn('right','spring', 0.5 * index,0.75)}
        className='w-full green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card'
      >
      <div option={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary rounded-[20px] min-h-[280px]
      py-5 px-12 flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}
        className="w-16 h-16 object-contain"/>
        <h3 className='text-white text-[20px]
        font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
  }
const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className='ml-10  text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]' >
            Introduction
        </p>
        <h2 className='ml-10 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]' >Overview</h2>
      </motion.dev>

      <motion.p variants={fadeIn("","",0.1,1)}
      className='ml-10 mr-10 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a skilled Software Developer with experience in Java and Javascript
        With expertise in frameworks like React, React Native and Node.js . 
        I am a quick learner and willing to collabrate with Team's and Clients.
        Willing to create fast , Efficient , Scalable and User-Friendly Applications.
        Let's connect to know me better😉.  
      </motion.p>

      <div className='mt-20 mr-10 pr-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About;
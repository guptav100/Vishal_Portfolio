import React from "react";

import { BallCanvas } from "./canvas";
import { motion } from "framer-motion"; 
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap mt-10 gap-10'>
    <motion.div variants={textVariant()}>
    <h2 className="ml-10 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills I have🤞</h2>
  </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className=' w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tech
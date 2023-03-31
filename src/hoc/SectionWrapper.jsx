import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (component, idName) => {
  function HOC(About){
    return(
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileView='show'
        viewport={{once:true, amount:0.25}}
        className={`${styles.padding} max-w-7xl 
        mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
            &nbsp
            </span>
            <component />
        </motion.section>
    )
  }
}

export default SectionWrapper;

//should delete it after
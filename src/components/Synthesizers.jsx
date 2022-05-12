import React from 'react'
import melissa from '../images/melissa.jpeg'
import { motion } from "framer-motion";

const Synthesizers = () => {

      const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// const pageStyle = {
//   position: "absolute"
// };


  return (
    <div className='wrapper'>
    <motion.div
      // style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <p> Melissa Reese .</p>
      <img src={melissa} alt="melissa"/>
    </motion.div>
    </div>

  )
}

export default Synthesizers
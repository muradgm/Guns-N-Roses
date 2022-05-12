import React from 'react'
import { motion } from "framer-motion";

import slash from '../images/slash.jpg'
import richard from '../images/richard.jpg'

const Guitar = () => {

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
    <div>
     <motion.div
      // style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <span className='wrapper'>
          <p>Slash .</p>
          <img src={slash} alt="Slash"/>
        </span>
        <span className='wrapper'>
          <p>Richard Fortus .</p>
          <img src={richard} alt="Richard"/>
        </span>
      </div>
    </motion.div>
    </div>
  )
}

export default Guitar
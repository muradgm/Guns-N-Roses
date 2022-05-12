import React from 'react'
import dizzy from '../images/dizzy.jpeg'
import { motion } from "framer-motion";


const Keyboard = () => {

    const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
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
    scale: 0.8
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};
  
  return (
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
    <div className='wrapper'>
      <p>Dizzy Reed .</p>
      <img src={dizzy} alt="Dizzy Reed" />
    </div>
      </motion.div>
  )
}

export default Keyboard
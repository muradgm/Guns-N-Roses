import React from 'react'
import image from '../images/frank.jpg'
import { motion } from "framer-motion";


const Drums = () => {

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
    <div className='wrapper'>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <p>Frank Ferrer .</p>
      <img src={image} alt="Axl Rose"/>
    </motion.div>
      </div>
  )
}

export default Drums
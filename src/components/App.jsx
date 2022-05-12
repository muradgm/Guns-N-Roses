import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import './App.scss'
import logo from '../images/logo.png'
import Vocals from './Vocals';
import Drums from './Drums';
import Guitar from './Guitar';
import Bass from './Bass';
import Keyboard from './Keyboard';
import Synthesizers from './Synthesizers';

export default function App() {
  const location = useLocation()

  const variant = {
    initial: {
      opacity: 0,
      y: '100%',
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      }
    }
  };

  const gnrLogo = {
    initial: {
      opacity: 0,
      y: '100%',
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        // delay: 0.
      }
    }
  };

  const container = {
  type: "tween",
  ease: "easeIn",
  duration: 0.8
  }

  return (
    <motion.main className='App'
      initial="initial"
      animate="in"
      exit="out"
      variants={container}>
      
      <motion.div style={{overflow: 'hidden'}}>
        <motion.img className='logo' src={logo} alt="Guns n Roses Logo" variants={gnrLogo}/>
      </motion.div>
      <motion.nav className='navbar' variants={variant} >
        <motion.span className='wrapper' style={{overflow: 'hidden'}}>
          <NavLink to='vocals'>Vocals</NavLink> | {' '}
          <NavLink to='bass'>Bass</NavLink> | {' '}
          <NavLink to='guitar'>Guitar</NavLink> | {' '}
          <NavLink to='keyboard'>Keyboard</NavLink> | {' '}
          <NavLink to='drums'>Drums</NavLink> | {' '}
          <NavLink to='synthesizers'>Synthesizers</NavLink>
        </motion.span>
      </motion.nav>

      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='vocals' element={<Vocals />} />
        <Route path='bass' element={<Bass  />} />
        <Route path='guitar' element={<Guitar />} />
        <Route path='keyboard' element={<Keyboard  />} />
        <Route path='drums' element={<Drums  />} />
        <Route path='synthesizers' element={<Synthesizers  />} />
      </Routes>
      </AnimatePresence>
    </motion.main>
  );
};


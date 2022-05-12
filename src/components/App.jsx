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


  return (
    <main className='App'>
      <div>
        <img className='logo' src={logo} alt="Guns n Roses Logo" />
      </div>
      <nav className='navbar'>
        <NavLink to='vocals'>Vocals</NavLink> | {' '}
        <NavLink to='bass'>Bass</NavLink> | {' '}
        <NavLink to='guitar'>Guitar</NavLink> | {' '}
        <NavLink to='keyboard'>Keyboard</NavLink> | {' '}
        <NavLink to='drums'>Drums</NavLink> | {' '}
        <NavLink to='synthesizers'>Synthesizers</NavLink> 
      </nav>

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
    </main>
  );
};


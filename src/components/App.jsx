import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";
import Navbar from "./NavSection/Navbar";

import {
  Home,
  Vocals,
  Drums,
  Keyboard,
  Guitar,
  Bass,
  Synthesizers,
} from "./pages/index.js";

export default function App() {
  const location = useLocation();

  return (
    <main className="App">
      <Navbar />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/Guns-N-Roses" element={<Home />} />
          <Route path="vocals" element={<Vocals />} />
          <Route path="bass" element={<Bass />} />
          <Route path="guitar" element={<Guitar />} />
          <Route path="keyboard" element={<Keyboard />} />
          <Route path="drums" element={<Drums />} />
          <Route path="synthesizers" element={<Synthesizers />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

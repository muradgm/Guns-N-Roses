import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../images/logo.png";

import "./navbar.scss";

const Navbar = () => {
  const variant = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const gnrLogo = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        // delay: 0.
      },
    },
  };
  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={transition}
      className="nav-section"
    >
      <motion.div style={{ overflow: "hidden" }}>
        <NavLink to="/GunsN-Roses">
          <motion.img
            className="logo"
            src={logo}
            alt="Guns n Roses Logo"
            variants={gnrLogo}
          />
        </NavLink>
      </motion.div>
      <motion.nav className="navbar" variants={variant}>
        <motion.span className="nav-wrapper" style={{ overflow: "hidden" }}>
          <NavLink to="vocals">Vocals</NavLink> |{" "}
          <NavLink to="bass">Bass</NavLink> |{" "}
          <NavLink to="guitar">Guitar</NavLink> |{" "}
          <NavLink to="keyboard">Keyboard</NavLink> |{" "}
          <NavLink to="drums">Drums</NavLink> |{" "}
          <NavLink to="synthesizers">Synthesizers</NavLink>
        </motion.span>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;

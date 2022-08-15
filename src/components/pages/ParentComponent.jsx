import { motion } from "framer-motion";
import { pageVariants, textAnimation, transition } from "./animations";

const ParentComponent = ({ name, image }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
      className="wrapper"
    >
      <div style={{ overflow: "hidden" }}>
        <motion.p
          initial="init"
          animate="enter"
          exit="exit"
          variants={textAnimation}
          transition={transition}
        >
          {" "}
          {name}
        </motion.p>
      </div>
      <img src={image} alt="melissa" />
    </motion.div>
  );
};

export default ParentComponent;

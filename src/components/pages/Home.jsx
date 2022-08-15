import { motion } from "framer-motion";

const Home = () => {
  const textVariant = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
    out: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={textVariant}
      initial="initial"
      animate="in"
      exit="out"
      className="home"
    >
      <div style={{ overflow: "hidden" }}>
        <motion.h1 variants={textVariant} className="title">
          Welcome to the world of Guns n Roses
        </motion.h1>
      </div>
      <div style={{ overflow: "hidden" }}>
        <motion.p variants={textVariant}>
          This is a website that will help you learn about the music of Guns n
          Roses. You can learn about the different instruments and their
          respective songs. You can also learn about the history of Guns n
          Roses.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Home;
